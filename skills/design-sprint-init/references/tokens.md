# Template tokens and markers

The single reference for filling the plugin's templates. Templates are in
`${CLAUDE_PLUGIN_ROOT}/templates/`. Each starts with a comment that points here.

## Markers

- A **comment** is anything from `<!--` to the first `-->`. Delete every comment from the saved
  file. Some comments hold author guidance, and the guidance is also in this file.
- An **if-block** is a pair of comments: `<!-- if: flag -->` and `<!-- /if -->`. Keep the content
  between them when the flag applies, and delete the content when it does not. Delete the marker
  comments either way. If-blocks can sit mid-sentence and can nest. Check that the sentence still
  reads correctly after you remove a block.
- A **token** is `{{NAME}}`. Replace it with real text. No token and no comment may survive. If a
  token has no answer and its fallback below says "delete", delete its whole sentence or bullet,
  never leave an empty label.
- The templates are written in US spelling. If the project's `SPELLING` is UK, respell the generic
  words in the files you write.
- Do not carry product specifics back into the plugin templates.

## Flags

| Flag | Applies when |
| ---- | ------------ |
| `redesign` / `new` | Mode: a working product exists and designers see it, or nothing exists yet. |
| `app` / `site` | Kind: screens people work in, or pages people read. |
| `copywriter` / `no-copywriter` | The sprint has a copywriter, or designers write their own copy. |
| `copy-gate` | The human reviews the copy deck before the designers start. |
| `synthesis` / `no-synthesis` | A synthesis designer merges the designs, or the human picks one. |
| `developer` | The sprint includes a build. |
| `motif` | The human wants a visual motif built into the identity as a system. |
| `privacy` | There are visibility or privacy rules the design must not leak. |
| `brand-family` | There is an existing site or design system to extend. |
| `not-in-product` | The human can name things deliberately outside the product. |
| `screenshots` | (Copy brief.) The product is shown but no real screenshots exist. Same as `new`. |
| `code-in-repo` / `no-code-in-repo` | The product's code is in this repository, or elsewhere. |

## Tokens shared by several templates

| Token | Write | Source |
| ----- | ----- | ------ |
| `NAME` | Short kebab-case project name, used in `docs/<name>-project/`. | Round 1. |
| `PRODUCT_NAME` | The product's display name. | Round 1. |
| `KIND` | `app` or `site`. | Round 1. |
| `MODE` | `redesign (a working product exists and designers see screenshots of it)` or `new (nothing exists yet; designers work from the content pack)`. | Round 1. |
| `BRANCH`, `MAIN_BRANCH` | The sprint's feature branch and the main branch. | Round 4 and git. |
| `FINAL_PATH` | Where the approved package lands, for example `docs/<name>-project/design/final/`. | Round 4. |
| `DESIGNER_COUNT` | The number as a word ("two"). | Round 1. |
| `SLICES` | The build slices as a list, with what slice 1 contains. The same text goes in `PROJECT.md` and the developer brief. In the developer brief it nests under step 3, so indent every line three spaces. | Round 4. |
| `CONSTRAINTS` | A bullet list of rules a violation of which the PM must catch: stack and forbidden dependencies, trade-dress limits, scope limits ("UI only"), privacy rules, self-containment (for example "never import from the app's `src/`"), no third-party requests. `PROJECT.md` gets the list for every agent. The developer brief gets the same list plus developer-only rules. | Round 3 and 4. |
| `MERGE_NOTE` | What a merge triggers ("A merge to main deploys.") or delete. | Round 4. |
| `VERIFY_COMMANDS` | Each command with the directory it runs from, taken from the repo. Say "no tests exist" if true. | Round 4 and the repo. |
| `SPELLING` | `US` or `UK`. | Round 3. |
| `LABEL_REASON` | Why control labels matter, for example "the product's automated tests find controls by their accessible names". | Round 3 (redesign). |

## Content pack

| Token | Write | Fallback |
| ----- | ----- | -------- |
| `PRODUCT_DESCRIPTION` | What it is, in plain words. | Required. |
| `AUDIENCE` | Who uses it, on what device, in what situation, and each role. | Required. |
| `PRODUCT_FACTS` | A bullet list: core ideas, vocabulary, roles and what each role can see or do, scope limits. Only facts the human confirmed. No padding. | Required. A page or screen with too few facts gets a note saying so, which the copywriter marks "unconfirmed". |
| `NOT_IN_PRODUCT` | What is deliberately out of scope. | If none is known, turn off the `not-in-product` flag. |
| `SCREENS` | Each screen and what it is for (app). | Required for apps. |
| `STATES_TO_COVER` | Empty, error, first-run and extreme-data states the screens don't show on a normal run. | Delete the paragraph if none. |
| `PAGES` | Each page and its purpose (site). | Required for sites. |
| `TONE` | One or two sentences covering the verbal voice and the visual personality, and anything to avoid. | Required. |

## Design brief

| Token | Write | Fallback |
| ----- | ----- | -------- |
| `DESIGNER_TITLE` | "product designer" (app) or "web designer" (site). | |
| `DELIVERABLE_SENTENCE` | What they are making, for example "a redesign of the web app". | |
| `INPUTS_SUMMARY` | A clause listing what `inputs/` holds. | |
| `INPUTS_DESCRIPTION` | Each input folder and its index file, and what the data shows. | |
| `OFF_LIMITS_EXTRA` | A noun list with no trailing comma, naming what else is off limits ("the existing design files, the screenshots folder"). | "git history". |
| `INJECTED_CONTEXT_NOTE` | The harness injects `AGENTS.md` and `CLAUDE.md` into every designer. Read them and say what they describe that could anchor the designers (the current stack, fonts, tokens, design files) and how to treat it. Tell the human in the summary. | "The repository has none, so this does not apply." |
| `PROBLEM` | The human's own words on what is wrong today. | Required (redesign). |
| `GOALS` | A bullet list derived from the problem. List it under "decisions I made" in the summary. | Required (redesign). |
| `GOAL` | One sentence: what the finished thing must achieve. Derived if not given. | Required (new). |
| `FAMILY_NAME`, `BRAND_FAMILY` | The existing site or design system, what it is, and what files are inputs. | Turn off `brand-family`. |
| `MOTIF_NAME` | A singular noun phrase. The templates say "The X motif". One-line definitions of any term designers must interpret go in `MOTIF_PLACES` or `PRODUCT_FACTS`. | Turn off `motif`. |
| `MOTIF_PLACES` | Where it may appear (and say where it may not). | |
| `TRADE_DRESS` | Third-party marks, schemes or likenesses to avoid. | "Do not copy another product's logo, layout or look." |
| `RESPONSIVE_LABEL`, `RESPONSIVE` | Which device comes first and the widths. Default: label "Phone-first", text "Design the phone first, then scale up. Cover 360, 390, 768, 1024 and 1440 px. No horizontal page scroll, comfortable tap targets of at least 44 px." | Round 3. |
| `MIN_TEXT_PX` | Smallest allowed text size. | 14 |
| `STACK_FACTS` | One or two sentences naming the framework, the component library and what is forbidden. | Required. |
| `ICON_RULE` | The icon library and when custom SVG is allowed. | "Use one open-license icon set and name each icon you use." |
| `PRIVACY_RULES` | Who must not see what. | Turn off `privacy`. |
| `MOCKUP_COVERAGE` | An indented bullet list of screens or pages x widths x themes, plus states. Default: every page or screen at 390 and 1440 px in light, and dark for the core ones; 768 for the main ones; every state in the content pack. The developer brief's definition of done assumes 390 and 1440 light and dark. | |

## Copy brief

| Token | Write | Fallback |
| ----- | ----- | -------- |
| `COPY_SCOPE` | A list of the shared pieces beyond the pages and states: navigation labels, theme toggle, skip link, footer, error and 404 text, form hints. | |
| `VERIFIER` | Who checks unconfirmed steps later: "a developer" if `code-in-repo`, else "the human". | |

## Developer brief

| Token | Write | Fallback |
| ----- | ----- | -------- |
| `CODE_LOCATION` | Where the code is ("`src/`", "`site/`"). | |
| `COMPONENT_LIBRARY` | The library the design must be buildable with. | |
| `FRAMEWORK_NOTE` | A framework warning from the repo's guidance files, for example "read the Next.js guide in `node_modules` before writing routing code". | Delete the sentence. |
| `REDESIGN_LIMITS` | Extra limits ("No schema changes and no new migrations."). | Delete. |
| `TEST_RULE` | How tests find things and what must still pass. | |
| `TOKEN_CONVENTION` | How tokens are expressed in code ("`--app-*` CSS custom properties in `src/theme.ts`"). Read from the repo and confirm. | |
| `ASSET_LOCATION` | Where fonts and assets live. Read from the repo and confirm. | |
| `SCREENSHOT_COMMAND_NOTE` | The command that renders the current screens, or delete. | Delete. |
| `DOCS_TO_UPDATE` | The durable design files that replace the old reference (spec, tokens, notes, index, and the mockups' HTML, CSS, SVG and fonts, never PNGs, `PROPOSALS.md` or `inputs/`), where they go, what repo docs to update, and how to treat missing targets ("create it if it does not exist"). If the project's `design/` folder is git-ignored, say the developer copies the durable files to a tracked location. | |
| `CI_NOTES` | With CI: "Watch CI until it is green and keep the existing job names." Without: "There is no CI, so paste the output of the verification commands in the PR description." | Ask in Round 4. |

## `PROJECT.md`

| Token | Write |
| ----- | ----- |
| `ONE_LINE` | One sentence about the product. |
| `CODE_FACTS` | Where the product's code lives and whether it is in this repo. |
| `TEAM_ROWS` | One table row per role: copywriter (if any), Designer 1..N, synthesis designer (if any), developer. Columns: role, model alias or blank, what it receives. Designers are "Designer 1", "Designer 2". |
| `COPYWRITER`, `COPY_GATE`, `SYNTHESIS`, `DEVELOPER` | `yes` or `no`. Write `no` for both copy lines if there is no copywriter. |
| `RUN_MODE` | "in parallel" or "one at a time". |
| `GITIGNORED` | Paths kept out of git, or "nothing". |
| `INPUTS` | Redesign: how screenshots are produced (command, landing folder, index file), what to copy into `design/inputs/`, and what not to copy. New: reference material beyond the content pack, or "None beyond the content pack." |
| `CI_FACTS` | Whether CI exists and what its jobs are called. |
| `PRE_APPROVALS` | Steps the human approved in advance, or "Nothing." |

## `LOG.md`

`DATE` is today's date as `YYYY-MM-DD`.

## Prompt file names

`00-content-pack.md`, `01-design-brief.md`, `02-designers-addendum.md`,
`03-synthesis-designer-brief.md`, `04-developer-brief.md`, `05-copy-brief.md`. Files that do not
apply are not written, so gaps in the numbering are expected.
