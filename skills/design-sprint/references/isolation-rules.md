# Isolation rules

The PM enforces these. Designers cannot see the PM's conversation because they are subagents, so
most of the isolation is structural. The rest depends on instructions, and the optional hook in
`hooks/` backs those instructions up with a check.

## The rules

1. **Designers see the product only through the inputs you give them.** Each works only in its own
   directory, which includes its `inputs/` folder. The brief tells it not to browse the repository:
   source code, config, docs, old design files, other designers' directories. Give a designer no
   repo path other than its own directory. Do not paste code into a brief.
2. **Designers never see each other's work.** If the human wants an idea from one design in
   another, the human describes it in words and you relay those words. Never forward the other
   designer's files, notes or screenshots.
3. **No agent talks to another directly.** Designers and the developer ask questions by ending their
   turn with a `QUESTIONS FOR PM` block. You answer from the briefs and from facts you can verify in
   the code. If the answer is a product or taste decision, or the briefs don't cover it, ask the
   human and wait. Relay developer design questions to the chosen designer (and only that
   designer), then relay the answer back verbatim. **Never answer a design question yourself.**
4. **You do not write mockups, copy or code.** You may fix typos in briefs, copy and move files
   between directories, run the project's existing commands (screenshots, tests) and read code to
   check a fact. Facts you verified go to agents as facts, labelled as such.
5. **Machine safety.** At most one browser process per agent at a time, no parallel or background
   captures, no screenshot loops that open a browser per shot, temporary profiles removed, no
   desktop apps. The agent definitions already say this. Repeat it in each brief message anyway.
   If the machine becomes unresponsive, stop all agents and tell the human. If the project's
   `PROJECT.md` says designers run one at a time, start the second only after the first is done.

## Known leaks, and what to do about them

These happened in the projects this plugin was built from. They are not breaches by the designer,
but you must record them in the log and mention them at the gate.

- **Injected `CLAUDE.md` and `AGENTS.md`.** The harness puts the repo's guidance files into every
  subagent's context. They describe the current stack, fonts, tokens and design files. Designers
  cannot avoid seeing them. The brief tells them to treat the current look as the thing being
  replaced. Ask each designer to say what it influenced. Record the answer.
- **Git status and recent commit titles** are injected too. Same handling.
- **Shared scratchpad.** Subagents in one session share a scratchpad folder, so one designer can
  see another's file names there. The designer agent is told to keep temp files in its own
  directory. If a designer reports seeing another's scratch files, log it.
- **Environment notes** can show a designer another designer's path when the PM's shell changes
  directory. Keep your shell in the repo root while designers run.
- **Extras left in a package** (generator scripts in `tools/`, skill caches such as
  `.taste-skill/`). Not harmful, but leave them out of the final package unless the human wants
  them, and leave them out of any copy that another designer will see.

## Outside reads

At handoff, every designer states whether it opened anything outside its own directory. Record the
answer in the log. If one admits it did, tell the human straight away, say what it saw, and let
them decide whether the work still counts. Reading a design skill's own files or downloading free
fonts at design time is not an outside read of the repo; note it and move on.

## Synthesis anonymization

When a synthesis designer receives the independent designs:

- Copy each into the synthesis designer's `inputs/design-a/`, `design-b/`, and so on. Assign the
  letters with a random draw, not by designer number. Record the mapping **only** in the PM's
  `LOG.md`. Never reveal it to the synthesis designer.
- Strip anything that reveals authorship or model: designer numbers in titles and CSS headers, model
  names, paths to tool caches, generator scripts, `.taste-skill/` and similar folders. Scan the
  copies for "Designer", model names and tool paths before you send them. Keep the scan result in
  the log.
- If the human asks for a second synthesis designer on another model, give it an identical copy of
  `inputs/` so the A/B mapping is unchanged, and never show the two synthesis designers each other's work.

## The optional hook

`hooks/hooks.json` ships a `PreToolUse` check that denies a designer's file reads and writes
outside its own directory and denies obvious path escapes in shell commands. It needs
`.design-sprint-sandbox` in the designer's directory (the PM creates it in Phase 0, see
`phases.md`). It is a seatbelt, not a sandbox: a shell command can still reach anywhere the
operating system allows. Keep the instructions as the primary control and read the designer's
handoff statement either way.
