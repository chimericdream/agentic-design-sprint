# {{PROJECT_TITLE}}: sprint configuration

Read by the project manager (the main session running the `design-sprint` skill) at the start of
every session. It is the single place where this sprint's choices live. The generic process is in
the plugin; nothing here repeats it. Edit this file when a decision changes, and note the change in
`LOG.md`.

## Product

- **Name:** {{PRODUCT_NAME}}
- **Kind:** {{KIND}} <!-- app | site -->
- **Mode:** {{MODE}} <!-- redesign (a working product exists and designers see screenshots of it) | new (nothing exists yet; designers work from a content pack) -->
- **One line:** {{ONE_LINE}}

## Team

| Role               | Model     | Receives                                                            |
| ------------------ | --------- | ------------------------------------------------------------------- |
{{TEAM_ROWS}}

`Model` is passed as the `model` parameter when the PM spawns the agent. Leave it blank to inherit
the session's model.

- **Copywriter:** {{COPYWRITER}} <!-- yes | no. yes: real copy is written before the designers start (phase 0.5) and handed to them as a copy deck. Recommended for marketing and docs sites, usually no for app redesigns. -->
- **Copy review gate:** {{COPY_GATE}} <!-- yes | no. Whether the human reviews the copy deck before the designers start. Recommended yes for sites. -->
- **Designers:** {{DESIGNER_COUNT}}
- **Designers run:** {{RUN_MODE}} <!-- in parallel | one at a time (choose "one at a time" if the machine has locked up under parallel browsers before) -->
- **Synthesis designer:** {{SYNTHESIS}} <!-- yes | no. yes: a final designer merges the independent designs (phase 1.5). no: the human picks one and that designer revises it. -->
- **Developer:** {{DEVELOPER}} <!-- yes | no (design-only sprint) -->

## Paths

All relative to the repo root.

- **Project directory:** `docs/{{NAME}}-project/`
- **Briefs:** `docs/{{NAME}}-project/prompts/`
- **Copywriter directory** (if used): `docs/{{NAME}}-project/design/copywriter/`, with the deck in
  its `copy/` folder. The approved deck is copied to `design/inputs/copy/`.
- **Designer directories:** `docs/{{NAME}}-project/design/designer-N/` (each with its own `inputs/`)
- **Master inputs:** `docs/{{NAME}}-project/design/inputs/`
- **Final package:** {{FINAL_PATH}} <!-- usually docs/<name>-project/design/final/, or a path inside the app for a site that ships its design reference, e.g. site/design/ -->
- **Log:** `docs/{{NAME}}-project/LOG.md`
- **Git-ignored:** {{GITIGNORED}} <!-- e.g. design/ if screenshots are large; say "nothing" if designs are committed -->

## Inputs for the designers

{{INPUTS}}

<!-- redesign mode: how screenshots are produced (command, where they land, the index file), what to
copy into design/inputs/, and which files must not be copied. new mode: the content pack lives in
the design brief; list any extra reference material here. -->

## Git

- **Branch:** `{{BRANCH}}` <!-- feat/<name> -->
- **Never push to** `{{MAIN_BRANCH}}`.
- **Commit style:** small conventional commits (`docs:`, `feat:`, `fix:`, `test:`, `chore:`).
- **Who merges:** the human. {{MERGE_NOTE}} <!-- e.g. "A push to main deploys." -->

## Verification

The PM runs these when the developer reports a slice or the build done. Replace with the project's
real commands.

{{VERIFY_COMMANDS}}

## Build slices

{{SLICES}}

<!-- Default: 1 foundation (theme, tokens, fonts, shell, the two most important screens) with a hard
human stop; 2 everything else; 3 polish, tests, docs and the PR. State what slice 1 contains for
this product. -->

## Constraints that apply to every agent

{{CONSTRAINTS}}

<!-- Stack facts, forbidden dependencies, trade-dress rules, scope limits (for example "UI only: no
schema changes"), privacy rules, and anything else a violation of which the PM must catch. -->

## Human gates

The gates are fixed by the process (see the playbook). Record here only what is specific to this
sprint, such as a gate the human has pre-approved.

0. **Gate 0.5** (only with a copywriter and the copy review gate on): the human reviews the copy
   deck before the designers start. {{GATE05}}
1. **Gate 1:** the human reviews the independent designs and chooses. {{GATE1}}
2. **Gate 1.5** (only if a synthesis designer is used): the human reviews the merged design. {{GATE15}}
3. **Gate 2:** the human reviews build slice 1 running. {{GATE2}}
4. **Merge:** the human merges the PR.

## Defaults the PM may assume

{{DEFAULTS}}
