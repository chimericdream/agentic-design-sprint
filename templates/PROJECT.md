<!--
Template notes live in the design-sprint-init skill, references/tokens.md. Everything outside
comments is read by the PM, so write it as facts about this sprint, never as instructions to
whoever fills the template. Remove every comment.
-->

# {{PRODUCT_NAME}}: sprint configuration

Read by the project manager (the main session running the `design-sprint` skill) at the start of
every session. It is the single place where this sprint's choices live. The generic process is in
the plugin; nothing here repeats it. Edit this file when a decision changes, and note the change in
`LOG.md`.

## Product

- **Name:** {{PRODUCT_NAME}}
- **Kind:** {{KIND}}
- **Mode:** {{MODE}}
- **One line:** {{ONE_LINE}}
- **Product code:** {{CODE_FACTS}}
<!-- KIND: app | site. MODE: "redesign (a working product exists and designers see screenshots of it)" or "new (nothing exists yet; designers work from the content pack)". CODE_FACTS: where the product's code lives, and whether it is in this repo. -->

## Team

| Role | Model | Receives |
| ---- | ----- | -------- |
{{TEAM_ROWS}}
<!-- One row per role: copywriter (if any), Designer 1..N, synthesis designer (if any), developer. Model is a model alias or blank. "Receives" lists the brief files and inputs it gets. Example row: | Designer 1 | opus | 01-design-brief + 00-content-pack + 02-designers-addendum + its inputs/ | -->

A blank model means the agent inherits the session's model. The PM passes the model as the `model`
parameter when it spawns the agent.

- **Copywriter:** {{COPYWRITER}}
- **Copy review gate:** {{COPY_GATE}}
- **Designers:** {{DESIGNER_COUNT}}
- **Designers run:** {{RUN_MODE}}
- **Synthesis designer:** {{SYNTHESIS}}
- **Developer:** {{DEVELOPER}}
<!-- COPYWRITER and COPY_GATE and SYNTHESIS and DEVELOPER: yes or no. If there is no copywriter, write "no" for both copy lines. DESIGNER_COUNT: the word, such as "two". RUN_MODE: "in parallel" or "one at a time". -->

## Paths

All relative to the repo root.

- **Project directory:** `docs/{{NAME}}-project/`
- **Briefs:** `docs/{{NAME}}-project/prompts/`
- **Master inputs:** `docs/{{NAME}}-project/design/inputs/`
<!-- if: copywriter -->
- **Copywriter directory:** `docs/{{NAME}}-project/design/copywriter/`, with the deck in its `copy/`
  folder. The approved deck is copied to `design/inputs/copy/`.
<!-- /if -->
- **Designer directories:** `docs/{{NAME}}-project/design/designer-N/`, each with its own `inputs/`.
<!-- if: synthesis -->
- **Synthesis designer directory:** `docs/{{NAME}}-project/design/synthesis/`. Its `inputs/` holds
  anonymized copies of the designs as `design-a/`, `design-b/` and so on.
<!-- /if -->
- **Final package:** `{{FINAL_PATH}}`
- **Log:** `docs/{{NAME}}-project/LOG.md`
- **Git-ignored:** {{GITIGNORED}}

## Inputs for the designers

{{INPUTS}}
<!-- Redesign: how screenshots are produced (command, where they land, the index file), what to copy into design/inputs/ and which files must not be copied. New: any reference material beyond the content pack, or "None beyond the content pack." -->

## Git

- **Branch:** `{{BRANCH}}`
- **Never push to** `{{MAIN_BRANCH}}`.
- **Commit style:** small conventional commits (`docs:`, `feat:`, `fix:`, `test:`, `chore:`).
- **Who merges:** the human. {{MERGE_NOTE}}
- **CI:** {{CI_FACTS}}

<!-- if: developer -->
## Verification

The PM runs these when the developer reports a slice or the build done.

{{VERIFY_COMMANDS}}

## Build slices

{{SLICES}}
<!-- /if -->

## Constraints the PM enforces

These are also in the developer brief. Designers receive their own rules through their briefs.

{{CONSTRAINTS}}

## Human gates

<!-- if: copy-gate -->
- **Gate 0.5:** the human reviews the copy deck before the designers start.
<!-- /if -->
- **Gate 1:** the human reviews the independent designs and chooses.
<!-- if: synthesis -->
- **Gate 1.5:** the human reviews the merged design.
<!-- /if -->
<!-- if: developer -->
- **Gate 2:** the human reviews build slice 1 running.
<!-- /if -->
- **Merge:** the human merges the PR.

**Pre-approved:** {{PRE_APPROVALS}}
<!-- PRE_APPROVALS: any gate or step the human has already approved in advance (for example starting the build as soon as the final package is saved), or "Nothing." -->
