# Handoff: building the design-sprint plugin (Valkyrie → Nebula)

Delete this file once the plugin is scaffolded and the work has moved on.

## Goal

Package the design process used for the Brick Bin app redesign and the Brick Bin
marketing site as a reusable Claude Code **plugin**, to be used on other projects.
This repo (`design-sprint`) is the plugin. It started empty (just a `.gitignore`).

## Why we're moving

The source material is on Nebula, not Valkyrie. The original prompts live in the
brick-bin repo there, and the palace only holds ~600-character fragments of them,
which is not enough to reconstruct the real wording:

- `C:\Users\bill\code\brick-bin\docs\app-redesign-project\prompts\` (`00-project-manager.md`, `01-design-brief.md`, `02-designers-addendum.md`, `03-developer-brief.md`)
- `C:\Users\bill\code\brick-bin\docs\site-project\prompts\` (same shape, 3 designers + developer)
- These may sit on the `feat/app-redesign` / `feat/marketing-site` branches rather than `main`. Check with `git branch -a` and `git log --all -- docs/*-project`.
- Also useful: `AGENTS.md`, `docs/app-redesign-project/LOG.md`, `docs/site-project/LOG.md`, and the `docs/design/brick-bin/` layout the developer step produces.

## Decisions already made

1. **Package as a plugin** with one playbook skill as the spine and roles as subagents. Not a pile of loose skills, not a single `Workflow` script, not a cookiecutter.
2. **Separate process from project.** The plugin holds the generic roles, phases, rules and templates. Each project's filled-in briefs, inputs and `LOG.md` stay in that project's repo under `docs/<name>-project/`.
3. **The PM is the main session, not a subagent** (subagents can't spawn subagents). The playbook skill turns the main session into the PM. Designers and the developer run as subagents, so they don't see the PM's conversation.
4. **Human review gates stay conversational.** The PM ends its turn at each gate and resumes on the human's reply.
5. **Optional `PreToolUse` hook** to enforce designer isolation (block reads outside their directory), instead of relying on prompt rules alone.
6. **Reusable across projects** (game-inventory had a similar mockup-first process). Don't bake Brick Bin specifics (Mantine, Netlify, brand family, etc.) into the plugin.

## Planned layout

```
design-sprint/
├─ .claude-plugin/plugin.json
├─ skills/
│  ├─ design-sprint/SKILL.md        PM playbook (entry point), thin
│  │   └─ references/               isolation-rules.md, phases.md, gate-checklists.md
│  └─ design-sprint-init/SKILL.md   interviews the human, scaffolds docs/<name>-project/
├─ agents/                          designer.md, developer.md (critic.md optional)
├─ templates/                       design-brief, designers-addendum, developer-brief, LOG.md
├─ hooks/                           optional isolation enforcement
└─ README.md
```

## Process shape (from palace fragments; verify against the real files)

- PM (Opus) coordinates, never designs or codes. Protects isolation rules, keeps the human informed.
- Designers 1–3 each get their own empty directory, one-browser-at-a-time rule, no access outside it. They end with a `QUESTIONS FOR PM` block when blocked and cannot talk to anyone else.
- Designers get the design brief plus an independence addendum. The developer gets a separate engineering brief and a designer's approved final package, and implements it faithfully without redesigning.
- PM keeps `LOG.md` (decisions, questions and answers, gate outcomes) on a `feat/*` branch, never pushes to `main`, uses small conventional commits.
- Phase 0: commit pending work, stage the designers' inputs. Phase 1: designers run in parallel, then completeness checks. Stop at the first human review gate. Phase 2 (build) doesn't start until the human approves a design.
- Final developer step replaces the old design reference folder with the new spec, tokens, notes and mockups.

## Next steps on Nebula

1. `git pull` this repo on Nebula, then work in it from Nebula.
2. Make the source prompts readable from here, e.g. copy both `prompts/` dirs (and `LOG.md` files) into `_source/` in this repo, and add `_source/` to `.gitignore` if you don't want them committed.
3. Diff the two projects' prompts to separate the generic process from the project-specific parts.
4. Scaffold the plugin per the layout above, committing to `main` in small conventional commits.
5. Test by running `/design-sprint-init` against a scratch project, then a real one.

## Palace notes

- Agent identity on Nebula: `nebula:claude:design-sprint`.
- Useful wings: `wing_brick_bin` and `wing_app_redesign_project` (the PM session logs), `wing_game_inventory` (earlier mockup-first process).
- File durable decisions with `mempalace_add_drawer` as the plugin takes shape.

## Starter prompt to paste into the Nebula session

> I'm building a reusable Claude Code plugin called design-sprint in this repo, packaging the design process we used for the Brick Bin app redesign and marketing site. Read `HANDOFF.md` first; it has the decisions, planned layout and next steps. The source prompts are in `_source/` (or in the brick-bin repo at `C:\Users\bill\code\brick-bin\docs\`). Diff the two projects' prompts to separate generic process from project-specific parts, then scaffold the plugin and commit in small conventional commits on `main`.
