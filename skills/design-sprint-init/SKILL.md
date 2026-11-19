---
name: design-sprint-init
description: Set up a design sprint in the current repo. Interviews the human, then scaffolds docs/<name>-project/ with PROJECT.md, the content pack, the filled-in briefs, and a LOG.md. Use before the first /design-sprint run, or when the user asks to start, plan or scaffold a design sprint.
argument-hint: "[project name]"
disable-model-invocation: true
---

# Design sprint: init

You turn the plugin's generic templates into one project's briefs. Nothing is sent to any agent
here. The result is a set of files the human reviews and a PM session later runs with
`/design-sprint:design-sprint`.

The plugin holds the process. The project holds its own briefs, inputs and log in
`docs/<name>-project/`. **Never copy product specifics back into the plugin.**

The templates are in `${CLAUDE_PLUGIN_ROOT}/templates/`. Every token, flag and marker rule is in
[references/tokens.md](references/tokens.md). Read it before you write anything.

## 1. Look before you ask

Read what the repo already says, so the interview is short:

- `README.md`, `AGENTS.md`, `CLAUDE.md` (whichever exist), `package.json` scripts, `mise.toml` or
  similar, CI config.
- Any `docs/` that describes the product, its users, its scope and its architecture rules.
- Whether a screenshot command exists (a script that writes screens to a folder with an index).
- Where the product's code lives, and whether it is in this repo. The repo may hold only a site,
  with the app elsewhere.
- Where fonts, assets and design tokens live, and what the token convention is.
- The git branch, the main branch name, and whether a `docs/*-project/` already exists. If one
  does, stop and ask whether to extend or replace it. Never overwrite without being told to. If the
  feature branch already exists, locally or on the remote, ask before reusing it.

`AGENTS.md` and `CLAUDE.md` are injected into every designer's context. Note anything in them that
describes the current stack, fonts, tokens or design files, because it can anchor a designer.

Draft answers from these. Ask the human only to confirm, correct and fill gaps. When the repo
contradicts what the human says (a file or section that does not exist, a command that is missing),
do not pick silently. Ask, or list it under "decisions I made" in step 4.

## 2. Interview

Use `AskUserQuestion` for choices and plain questions for facts. Ask in small rounds. Recommend an
option each time, because the human prefers simpler setups.

**Round 1: shape of the sprint**

1. **Name** (short, kebab-case, used in `docs/<name>-project/`) and **product name**.
2. **Kind:** app (screens people work in) or site (pages people read).
3. **Mode:** *redesign* (an existing UI exists and designers get screenshots or files of it) or
   *new* (there is no UI to show, so designers work from the content pack). A site for an existing
   product with no screenshots yet is *new*.
4. **Designers:** how many (default two), and the model for each. Whether to run them in parallel or
   one at a time (recommend one at a time if the machine has locked up under parallel browsers
   before).
5. **Synthesis designer:** yes or no. Recommend *no* when the human just wants to pick one design;
   recommend *yes* when they want the best of several.
6. **Developer:** yes or no (a design-only sprint stops after the final package). Model.
7. **Copywriter:** yes or no, and the model. Recommend *yes* for sites with marketing, docs or
   tutorial pages, where real words shape the layout. Recommend *no* for app redesigns, where the
   copy is mostly existing labels and microcopy that live with the design. If yes, ask whether the
   human wants to review the copy deck before the designers start (recommend yes).
8. The PM runs in the main session, so there is no model choice for it.

**Round 2: the product** (draft from the repo, then confirm)

- What it is, who uses it and in what situations (device, setting).
- **Roles, and what each can see or do** on the screens where it differs.
- The product facts: the core ideas, vocabulary, scope limits, and what is deliberately **not** in
  the product (it is fine to have none). This becomes the content pack, which is the agents' only
  knowledge of the product, so it must be accurate. Do not pad it. For a site, also the link
  targets: the source repo URL, the image name, where each call to action points, the footer links.
- **Enough facts per page or screen?** For each page or screen, say whether the facts cover it. If
  not, either get more from the human or record the gap: a copywriter marks it "unconfirmed", and
  without one the pack says that page's facts are limited to what it lists.
- The pages or screens to cover, **in priority order** (this decides slice 1 and what a synthesis
  designer weighs), and the states that a normal run doesn't show, with **one line per state on what
  it contains** (fields, next actions). If the human doesn't know, the pack says so.
- Which screens and actions each role can reach, where roles differ.
- A site: the header navigation items and what the mobile menu holds.
- Redesign: what is wrong today (the human's own words), what must be kept, how screenshots are
  produced (and whether to run the command now), and what gets staged as inputs.
- A brand family to extend (an existing site or design system), if any, and which files become an input.

**Round 3: design direction and constraints**

- Tone in a sentence (the verbal voice, and anything to avoid), and separately the visual
  personality in a sentence.
- A visual motif to build into the identity as a system, if any, where it may and may not appear,
  and a one-line definition of any term designers must interpret.
- Trade-dress or branding limits (third-party marks to avoid).
- Stack facts and forbidden dependencies, icon library, minimum text size, spelling (US or UK).
- Which device comes first and the widths to design for (default: phone-first, 360, 390, 768, 1024
  and 1440).
- Redesign: does the product have dark mode and a theme toggle today? If not and the scope is UI
  only, is adding them allowed?
- Privacy or visibility rules the design must not leak.
- Redesign only: scope limits (for example "UI only, no schema changes"), and why control labels
  matter (for example tests that find controls by name).

**Round 4: build and git** (skip if no developer)

- Feature branch name and the main branch. Who merges (always the human) and what a merge triggers.
- Whether CI exists, what its jobs are called, and what a PR must show.
- Whether the verification commands run today (the tools are installed). If not, say so in
  `PROJECT.md`. Whether the developer may add dependencies (icon or font packages), and what hosting
  configuration the developer prepares (build command, publish directory) versus what the human does.
- The verification commands (lint, format, typecheck, tests, build, e2e), taken from the repo, and
  the directory each runs from. Whether the lint and format checks cover the design files that will
  be committed (recommend excluding hand-authored mockups from them).
- Confirm the token convention and where fonts and assets live, as read from the repo. If the repo
  has no code yet, propose one.
- The slices. Default: 1 foundation (theme, tokens, fonts, shell, the two most important screens),
  with a hard human stop; 2 everything else; 3 polish, tests, docs and the PR. State what slice 1
  contains for this product, and which listed states belong to which slice.
- Where the durable design files live in the repo after the build (spec, tokens, notes, mockups),
  and whether large PNGs may be committed. Recommend: durable files tracked, PNGs not.
- Whether `docs/<name>-project/design/` is kept out of git (recommend yes if screenshots are large).
- Whether any step is pre-approved, for example starting the build as soon as the final package is
  saved (recommend no).

## 3. Write the files

Create `docs/<name>-project/` with:

- `PROJECT.md` from `templates/PROJECT.md`.
- `prompts/00-content-pack.md` from `templates/content-pack.md`.
- `prompts/01-design-brief.md` from `templates/design-brief.md`.
- `prompts/02-designers-addendum.md` from `templates/designers-addendum.md`.
- `prompts/03-synthesis-designer-brief.md` from `templates/synthesis-designer-brief.md`, only with
  a synthesis designer.
- `prompts/04-developer-brief.md` from `templates/developer-brief.md`, only with a developer.
- `prompts/05-copy-brief.md` from `templates/copy-brief.md`, only with a copywriter.
- `LOG.md` from `templates/LOG.md`.

Files that don't apply are not written, so gaps in the numbering are expected. Do not create
`design/` or `inputs/`. The PM does that in Phase 0.

How to fill a template:

1. Follow the marker and token rules in `references/tokens.md`. No token and no comment may survive.
2. Write the product facts as plain, specific statements. Do not invent facts, features, numbers or
   users. If you are unsure, ask the human or leave it out. Where a token's value is derived rather
   than given (the goals, a mockup list, the responsive text), write it, then list it under
   "decisions I made" in step 4.
3. Keep the generic rules as written. Isolation, machine safety and `QUESTIONS FOR PM` are in the
   agent definitions, not the briefs. If a generic sentence is wrong for this project (the repo has
   no CLAUDE.md, no CI), change it deliberately and say so in the summary.
4. Reread each file as the receiving agent will: the right role, no sentence addressed to the wrong
   reader, no leftover instruction to the person filling the template.
5. Never put project secrets or tokens in a brief. Briefs are sent to subagents and may be committed.

If the project keeps `design/` out of git, add `docs/<name>-project/design/` to `.gitignore`
(create the file if it does not exist). If PNGs are not committed and any tracked location would receive
them (the final package, or the durable design files), add an ignore rule for them there too (for
example `<path>/**/*.png`).

## 4. Review, scan, commit, hand over

1. Show the human a short summary: the team, the phases that apply, the gates, the slices and the
   files written. Include a **"decisions I made"** list: every value you derived or chose without an
   answer, every place the repo contradicted the human, and what the injected `AGENTS.md` and
   `CLAUDE.md` could do to the designers. Offer to open any file. Ask for corrections and apply them.
2. Reread every file once as its receiver, with this checklist: no sentence addressed to the wrong
   reader (the copywriter or developer never sees the design brief), no reference to a file the
   receiver doesn't get (the developer has no content pack), no "above" or "below" pointing at
   removed text, no app-only wording in a site's briefs or the reverse, and no hedge left for a flag
   that is decided. Then scan after the corrections: `grep -rnE '\{\{|<!--|-->' docs/<name>-project/` must find nothing.
3. Commit on the feature branch with small conventional commits, never on the main branch:
   `docs: add <name> sprint configuration` for `PROJECT.md`, `LOG.md` and any `.gitignore` change,
   then `docs: add <name> sprint briefs` for `prompts/`.
4. Tell the human how to start: `/design-sprint:design-sprint <name>` in a fresh session. In redesign
   mode, mention any input that still has to be produced first (for example the screenshots).
