# design-sprint

A Claude Code plugin that runs a mockup-first design sprint. Independent designers work in isolation
from the same brief, a human picks a design at a review gate, and a developer then builds the
approved design in slices. The main Claude session acts as the project manager, so the human
review gates stay conversational.

It packages the process used for the Brick Bin app redesign and marketing site. The plugin holds
the generic roles, phases, rules and templates. Each project's briefs, inputs and log stay in that
project's own repo under `docs/<name>-project/`.

## How it works

```
you ──► PM (the main session, running /design-sprint)
          ├─ designer 1 ─┐  separate subagents, each in its own directory,
          ├─ designer 2 ─┤  none can see the others or the PM's conversation
          ├─ (synthesis designer, optional)
          └─ developer      builds the approved package in slices
```

1. **Phase 0.** The PM stages the designers' inputs (screenshots of the current product, or a
   content pack) and one working directory per designer.
   **Phase 0.5 (optional).** A copywriter writes the real copy first, from the content pack: a copy
   deck with a voice guide, length limits and a claims table. You can review it at Gate 0.5. Every
   designer then lays out the same words and may make only recorded fit edits. Recommended for
   marketing and docs sites, usually skipped for app redesigns.
2. **Phase 1.** Designers work in parallel, each producing static HTML mockups, screenshots, tokens
   and a developer handoff (`SPEC.md`). The PM checks **completeness only**, never taste.
3. **Gate 1.** You review the designs, choose one, and ask for revisions if you like.
4. **Optional synthesis.** A final designer merges the independent designs from anonymized copies.
   You review that at Gate 1.5.
5. **Phase 2.** The developer builds on a feature branch in slices. You review slice 1 running
   before the rest starts.
6. **You merge.** The PM never merges and never pushes to the main branch.

Agents ask questions by ending their turn with a `QUESTIONS FOR PM` block. The PM answers from the
briefs or from facts it verified in the code, and takes anything about taste or product to you.

## Use it

```text
/design-sprint:design-sprint-init        interview, then scaffold docs/<name>-project/
/design-sprint:design-sprint <name>      start or resume the sprint as the PM
```

Init asks about the product, the team and models, whether to use a synthesis designer, the design
direction, and the build and git details, then writes:

```
docs/<name>-project/
├─ PROJECT.md                     configuration the PM reads every session
├─ LOG.md                         the PM's running log
└─ prompts/
   ├─ 00-copy-brief.md                 (only with a copywriter)
   ├─ 01-design-brief.md
   ├─ 02-designers-addendum.md
   ├─ 03-synthesis-designer-brief.md   (only with a synthesis designer)
   └─ 04-developer-brief.md            (only with a developer)
```

Run the sprint in a fresh session so the PM starts with a clean context. Review the generated
briefs first, because they are the designers' only knowledge of the product.

## What is in the plugin

```
.claude-plugin/plugin.json
skills/design-sprint/            PM playbook, thin
  references/                    phases.md, isolation-rules.md, gate-checklists.md
skills/design-sprint-init/       interviews you, fills the templates
skills/copy-baseline/            minimum copywriting rules and the copy deck format
agents/copywriter.md             standing rules for the copywriter
agents/designer.md               standing rules for designers
agents/developer.md              standing rules for the developer
templates/                       briefs, PROJECT.md and LOG.md with {{TOKENS}}
hooks/                           optional designer isolation guard (needs node)
```

## Isolation

Designers are subagents, so they never see the PM's conversation. The rest depends on
instructions: they are told to work only in their own directory and to say at handoff whether they
opened anything outside it. The hook in `hooks/` backs that up by denying a designer's access to
other paths inside the repo. It is a seatbelt, not a sandbox. Known leaks (the repo's `CLAUDE.md`
and `AGENTS.md` are injected into every subagent, subagents share a scratchpad) and what to do
about them are in `skills/design-sprint/references/isolation-rules.md`.

## Requirements

- Claude Code with plugin support. Agent models come from `PROJECT.md` and need access to the
  models you choose.
- `node` on the path, only if you want the isolation hook.
- Optional: the `copywriting` and `humanizer:humanizer` skills. The copywriter uses them when they
  are installed and works from the bundled `copy-baseline` skill either way.
- A git repository for the project, with a feature branch for the sprint.

## Status

Version 0.1.0. Scaffolded from the two Brick Bin sprints and not yet run on a project. Test it with
`/design-sprint:design-sprint-init` against a scratch repo before a real one.
