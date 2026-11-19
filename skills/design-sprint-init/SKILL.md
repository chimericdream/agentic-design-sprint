---
name: design-sprint-init
description: Set up a design sprint in the current repo. Interviews the human, then scaffolds docs/<name>-project/ with PROJECT.md, the filled-in design, addendum and developer briefs, and a LOG.md. Use before the first /design-sprint run, or when the user asks to start, plan or scaffold a design sprint.
argument-hint: "[project name]"
disable-model-invocation: true
---

# Design sprint: init

You turn the plugin's generic templates into one project's briefs. Nothing is sent to any agent
here. The result is a set of files the human reviews and a PM session later runs with
`/design-sprint:design-sprint`.

The plugin holds the process. The project holds its own briefs, inputs and log in
`docs/<name>-project/`. **Never copy product specifics back into the plugin.**

## 1. Look before you ask

Read what the repo already says, so the interview is short:

- `README.md`, `AGENTS.md`, `CLAUDE.md`, `package.json` scripts, `mise.toml` or similar, CI config.
- Any `docs/` that describes the product, its users, its scope and its architecture rules.
- Whether a screenshot command exists (a script that writes screens to a folder with an index).
- The git branch, the main branch name, and whether a `docs/*-project/` already exists. If one
  does, stop and ask whether to extend or replace it. Never overwrite without being told to.

Draft answers from these. Ask the human only to confirm, correct and fill gaps.

## 2. Interview

Use `AskUserQuestion` for choices and plain questions for facts. Ask in small rounds. Recommend an
option each time, because the human prefers simpler setups.

**Round 1: shape of the sprint**

1. **Name** (short, kebab-case, used in `docs/<name>-project/`) and **product name**.
2. **Kind:** app (screens people work in) or site (pages people read).
3. **Mode:** *redesign* (a working product exists, designers get screenshots of it) or *new*
   (nothing exists, designers work from a content pack in the brief).
4. **Designers:** how many (default 2), and the model for each. Whether to run them in parallel or
   one at a time (recommend one at a time if the machine has locked up under parallel browsers
   before).
5. **Synthesis designer:** yes or no. Recommend *no* when the human just wants to pick one design;
   recommend *yes* when they want the best of several.
6. **Developer:** yes or no (a design-only sprint stops after the final package). Model.
7. **Copywriter:** yes or no, and the model. Recommend *yes* for sites with marketing, docs or
   tutorial pages, where real words shape the layout. Recommend *no* for app redesigns, where the
   copy is mostly existing labels and microcopy that live with the design. If yes, ask whether the
   human wants to review the copy deck before the designers start (recommend yes).
8. **The PM** runs in the main session, so no model choice here.

**Round 2: the product** (draft from the repo, then confirm)

- What it is, who uses it and in what situations (device, setting, roles).
- The product facts: the core ideas, vocabulary, roles and visibility rules, scope limits, what is
  deliberately **not** in the product. This becomes the content pack. It is the designers' only
  knowledge of the product, so it must be accurate. Do not pad it.
- Redesign mode: what is wrong with it today (the human's own words), what must be kept, the states
  that screenshots can't show, and how screenshots are produced and what gets staged as inputs.
- New mode: the pages or screens to design and the placeholder policy for screenshots.
- A brand family to extend (an existing site or design system), if any. If so, the files that become
  an input.

**Round 3: design direction and constraints**

- Tone in a sentence (and anything to avoid).
- A visual motif to build into the identity as a system, if any, with where it may and may not appear.
- Trade-dress or branding limits (third-party marks to avoid).
- Stack facts and forbidden dependencies, icon library, minimum text size, spelling (US or UK).
- Privacy or visibility rules the design must not leak.
- Redesign only: scope limits (for example "UI only, no schema changes"), and why control labels
  matter (for example tests that find controls by name).

**Round 4: build and git** (skip if no developer)

- Feature branch name and the main branch. Who merges (always the human) and what a merge triggers.
- The verification commands (lint, format, typecheck, tests, build, e2e), taken from the repo.
- The slices. Default: 1 foundation (theme, tokens, fonts, shell, the two most important screens),
  with a hard human stop; 2 everything else; 3 polish, tests, docs and the PR. State what slice 1
  contains for this product.
- Where the approved design lives afterwards and which docs the developer must update.
- Whether `docs/<name>-project/design/` is kept out of git (recommend yes if screenshots are large).

## 3. Write the files

Create `docs/<name>-project/` with:

- `PROJECT.md` from `${CLAUDE_PLUGIN_ROOT}/templates/PROJECT.md`.
- `prompts/00-copy-brief.md` from `templates/copy-brief.md`, only with a copywriter.
- `prompts/01-design-brief.md` from `templates/design-brief.md`.
- `prompts/02-designers-addendum.md` from `templates/designers-addendum.md`.
- `prompts/03-synthesis-designer-brief.md` from `templates/synthesis-designer-brief.md`, only with
  a synthesis designer.
- `prompts/04-developer-brief.md` from `templates/developer-brief.md`, only with a developer.
- `LOG.md` from `templates/LOG.md`.

How to fill a template:

1. Replace every `{{TOKEN}}` with real text from the interview. No token may survive. Where a token
   has no answer, delete its sentence, don't leave it blank.
2. Keep an `<!-- if: x -->` block only when `x` applies (`redesign`, `new`, `app`, `site`,
   `motif`, `brand-family`, `privacy`, `no-runtime-third-party`, `synthesis`, `no-synthesis`,
   `copywriter`, `no-copywriter`, `screenshots`). Use `screenshots` in the copy brief when the
   product is shown but no real screenshots exist.
   Delete the others entirely.
3. Remove every HTML comment, including the template notes at the top.
4. Renumber lists, fix any dangling sentence, and reread each file as the agent will.
5. Write the product facts as plain, specific statements. Do not invent facts, features, numbers or
   users. If you are unsure, ask the human or leave it out.
6. Keep the generic rules as written. Isolation, machine safety and `QUESTIONS FOR PM` are in the
   agent definitions, not the briefs.
7. Never put project secrets or tokens in a brief. Briefs are sent to subagents and may be committed.

If the project keeps `design/` out of git, add `docs/<name>-project/design/` to `.gitignore`.

## 4. Review and hand over

1. Show the human a short summary: the team, the phases that apply, the gates, the slices, and the
   files written. Offer to open any brief. Ask for corrections and apply them.
2. Run a scan: no `{{`, no `<!--`, no leftover `if:` markers in `docs/<name>-project/`.
3. Commit with small conventional commits on the feature branch (`docs: add <name> sprint
   configuration`, `docs: add <name> sprint briefs`). Never push to the main branch.
4. Tell the human how to start: `/design-sprint:design-sprint <name>` in a fresh session. In redesign
   mode, mention any input that still has to be produced first (for example the screenshots).
