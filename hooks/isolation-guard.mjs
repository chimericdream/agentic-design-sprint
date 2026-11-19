// PreToolUse guard for design-sprint designers.
//
// A designer subagent may touch only its own directory inside the repo:
//   <repo>/<anything>-project/design/<designer-dir>/
// The guard learns which directory is "its own" from the first path it touches there (the PM tells
// the designer its directory, and the designer starts by reading its own inputs/). After that it
// denies repo paths outside that directory, including other designers' directories.
//
// Paths outside the repo (design skill caches, font downloads, browser binaries) are allowed.
// This is a seatbelt, not a sandbox: shell commands are only checked for explicit paths.
// It fails open on anything unexpected, and does nothing for other agents or the main session.
// Set DESIGN_SPRINT_GUARD=off to disable it.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";

const DESIGN_DIR = /(.*-project\/design)\/([^/]+)(?:\/|$)/;

function norm(p) {
  let s = String(p).replace(/\\/g, "/");
  s = s.replace(/^\/([a-zA-Z])\//, "$1:/"); // /c/Users -> c:/Users
  if (/^[a-zA-Z]:/.test(s)) s = s[0].toLowerCase() + s.slice(1); // drive letter case
  return s.replace(/\/+/g, "/").replace(/\/$/, "");
}

function findRepoRoot(start) {
  let dir = resolve(start);
  for (;;) {
    if (existsSync(join(dir, ".git"))) return norm(dir);
    const up = dirname(dir);
    if (up === dir) return null;
    dir = up;
  }
}

function deny(reason) {
  process.stdout.write(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: "PreToolUse",
        permissionDecision: "deny",
        permissionDecisionReason: reason,
      },
    }),
  );
  process.exit(0);
}

function allow() {
  process.exit(0);
}

function stateFile(input) {
  const base = process.env.CLAUDE_PLUGIN_DATA || join(tmpdir(), "design-sprint-guard");
  mkdirSync(base, { recursive: true });
  return join(base, String(input.agent_id).replace(/[^\w.-]/g, "_"));
}

function main() {
  if (process.env.DESIGN_SPRINT_GUARD === "off") return allow();
  const input = JSON.parse(readFileSync(0, "utf8"));
  if (!/(^|:)designer$/.test(String(input.agent_type || ""))) return allow();
  if (!input.agent_id) return allow();

  const cwd = input.cwd || process.cwd();
  const root = findRepoRoot(cwd);
  if (!root) return allow();

  const file = stateFile(input);
  let bound = existsSync(file) ? readFileSync(file, "utf8").trim() : "";

  const t = input.tool_name;
  const ti = input.tool_input || {};
  const isShell = t === "Bash" || t === "PowerShell";

  // Collect the paths this call touches.
  const raw = [];
  if (!isShell) {
    if (ti.file_path) raw.push(ti.file_path);
    if (ti.notebook_path) raw.push(ti.notebook_path);
    if (t === "Glob" || t === "Grep") raw.push(ti.path || cwd);
  }

  const check = (p) => {
    const abs = norm(resolve(cwd, String(p).replace(/^\/([a-zA-Z])\//, "$1:/")));
    if (!(abs === root || abs.startsWith(root + "/"))) return; // outside the repo: allowed
    const m = abs.match(DESIGN_DIR);
    if (!m) {
      deny(
        `Design sprint isolation: ${p} is inside the repository but not in your designer directory. ` +
          `Work only in your own directory. If you need something, end your turn with a QUESTIONS FOR PM block.`,
      );
    }
    const dir = `${m[1]}/${m[2]}`;
    if (!bound) {
      bound = dir;
      writeFileSync(file, bound);
    } else if (bound !== dir) {
      deny(
        `Design sprint isolation: ${p} belongs to another directory. Your directory is ${bound}. ` +
          `Another designer's work must stay unseen.`,
      );
    }
  };

  for (const p of raw) check(p);

  if (isShell) {
    const cmd = norm(ti.command || "");
    const dirs = new Set();
    for (const m of cmd.matchAll(/[\w./:-]*-project\/design\/([^/\s"'`)]+)/g)) {
      dirs.add(m[0].replace(/\/$/, ""));
    }
    for (const d of dirs) {
      const name = d.match(DESIGN_DIR)?.[2];
      if (!name) continue;
      const full = norm(resolve(cwd, d));
      const owner = full.match(DESIGN_DIR);
      if (!owner) continue;
      const dir = `${owner[1]}/${owner[2]}`;
      if (!bound) {
        bound = dir;
        writeFileSync(file, bound);
      } else if (bound !== dir) {
        deny(
          `Design sprint isolation: this command touches ${d}, which is not your directory (${bound}).`,
        );
      }
    }
  }
  return allow();
}

try {
  main();
} catch {
  process.exit(0); // fail open
}
