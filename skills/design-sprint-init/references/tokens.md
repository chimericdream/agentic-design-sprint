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
| `redesign` / `new` | Mode: designers are shown an existing UI, or there is none to show. |
| `app` / `site` | Kind: screens people work in, or pages people read. |
| `copywriter` / `no-copywriter` | The sprint has a copywriter, or designers write their own copy. |
| `copy-gate` | The human reviews the copy deck before the designers start. |
| `synthesis` / `no-synthesis` | A synthesis designer merges the designs, or the human picks one. |
| `developer` | The sprint includes a build. |
| `motif` | The human wants a visual motif built into the identity as a system. |
| `privacy` | There are visibility or privacy rules the design must not leak. |
| `brand-family` | There is an existing site or design system to extend. |
| `not-in-product` | The human can name things deliberately outside the product. |
| `screenshots` | (Copy brief.) The mockups will show the product but no real screenshots exist. Use it whenever mode is `new` and the product is shown. |
| `code-in-repo` / `no-code-in-repo` | The product's code is in this repository, or elsewhere. |

## Tokens shared by several templates

| Token | Write | Source |
| ----- | ----- | ------ |
| `NAME` | Short kebab-case project name, used in `docs/<name>-project/`. | Round 1. |
| `PRODUCT_NAME` | The product's display name. | Round 1. |
| `KIND` | `app` or `site`. | Round 1. |
| `MODE` | `redesign (designers get screenshots or files of an existing UI)` or `new (there is no UI to show; designers work from the content pack)`. A site for an existing product with no screenshots yet is `new`. | Round 1. |
| `BRANCH`, `MAIN_BRANCH` | The sprint's feature branch and the main branch. | Round 4 and git. |
| `FINAL_PATH` | Where the approved package lands, for example `docs/<name>-project/design/final/`. Write it bare, without backticks. The templates add them. | Round 4. |
| `DESIGNER_COUNT` | The number as a word ("two"). | Round 1. |
| `SLICES` | The build slices as a bullet list (`- **Slice 1: name.** what it contains`), with what slice 1 contains. Bullets, not numbers, and never the words "above" or "below". The same text goes in `PROJECT.md` and the developer brief. In the developer brief it nests under step 3, so indent every line three spaces. | Round 4. |
| `CONSTRAINTS` | A bullet list of the rules the PM must police and the developer must follow: forbidden dependencies, scope limits ("UI only"), privacy and role rules, self-containment (for example "never import from the app's `src/`"), whether lint and format checks cover the design files, no third-party requests. The developer receives no content pack, so every rule must make sense without it. Designers never receive this list: they get their rules from `TRADE_DRESS`, `PRIVACY_RULES`, `MIN_TEXT_PX`, `STACK_FACTS` and `ICON_RULE`. Write each rule once in the narrowest place that carries it, and do not repeat what the developer-brief template already says (the UI-only and test rules). `PROJECT.md` gets this list. The developer brief gets the same list plus any developer-only bullets. | Round 3 and 4. |
| `MERGE_NOTE` | What a merge triggers ("A merge to main deploys.") or delete. | Round 4. |
| `VERIFY_COMMANDS` | One line, comma-separated, each command followed by the directory it runs from in parentheses, taken from the repo. Add "no tests exist" if true. It is used both as a block and inline after a colon, so keep it to one line. | Round 4 and the repo. |
| `SPELLING` | `US` or `UK`. | Round 3. |
| `LABEL_REASON` | Why control labels matter, for example "the product's automated tests find controls by their accessible names". | Round 3 (redesign). |

## Content pack

| Token | Write | Fallback |
| ----- | ----- | -------- |
| `PRODUCT_DESCRIPTION` | What it is, in plain words. | Required. |
| `AUDIENCE` | Who uses it, on what device, in what situation, and each role. For a site, describe the visitors and when they arrive. Describe the product's users only where it matters to the pages. | Required. |
| `PRODUCT_FACTS` | A bullet list: core ideas, vocabulary, roles and what each role can see or do, scope limits. For a site, include link targets (the source repo URL, image name, call-to-action destinations, footer links). Only facts the human confirmed. No padding. | Required. A page or screen with too few facts gets a line saying its facts are limited to the above, so nobody invents more. With a copywriter, it also marks the gap "unconfirmed". |
| `NOT_IN_PRODUCT` | What is deliberately out of scope. | If none is known, turn off the `not-in-product` flag. |
| `SCREENS` | Each screen and what it is for (app), in priority order. | Required for apps. If the human accepts names only, write names only. The designers work from the screenshots. |
| `STATES_TO_COVER` | Empty, error, first-run and extreme-data states the screens don't show on a normal run, each with one line saying what it contains (fields, next actions). | If the human doesn't know a state's contents, write "contents not known" and designers will ask through the PM. Delete the paragraph if there are no states. |
| `PAGES` | Each page and its purpose (site), in priority order. | Required for sites. |
| `TONE` | One or two sentences on the verbal voice only, and anything to avoid. The visual personality goes in `VISUAL_PERSONALITY`. | Required. |

## Design brief

| Token | Write | Fallback |
| ----- | ----- | -------- |
| `DESIGNER_TITLE` | "product designer" (app) or "web designer" (site). | |
| `DELIVERABLE_SENTENCE` | What they are making, for example "a redesign of the web app". | |
| `INPUTS_SUMMARY` | A clause listing what `inputs/` holds. | |
| `INPUTS_DESCRIPTION` | Each input folder and its index file, and what the data shows. | |
| `OFF_LIMITS_EXTRA` | A noun list with no trailing comma, naming what else is off limits ("the existing design files, the screenshots folder"). | "git history". |
| `INJECTED_CONTEXT_NOTE` | The harness injects `AGENTS.md` and `CLAUDE.md` into every designer. Read them and say what they describe that could anchor the designers (the current stack, fonts, tokens, design files) and how to treat it, and name any folder they point at that designers must not open. The template's next sentence refers to "those files", so keep the note about the guidance files. Tell the human in the summary. | "The repository has none, so this does not apply." |
| `PROBLEM` | The human's own words on what is wrong today. | Required (redesign). |
| `GOALS` | A bullet list derived from the problem. List it under "decisions I made" in the summary. | Required (redesign). |
| `GOAL` | One sentence: what the finished thing must achieve. Derived if not given. | Required (new). |
| `FAMILY_NAME`, `BRAND_FAMILY` | The existing site or design system, what it is, and what files are inputs. | Turn off `brand-family`. |
| `MOTIF_NAME` | A singular noun phrase. The templates say "The X motif". | Turn off `motif`. |
| `MOTIF_DEFINITION` | One or two sentences defining the motif and any term designers must interpret, plus limits on where it must not appear. | Delete. |
| `MOTIF_PLACES` | A plain list of where it may appear, such as "section markers, dividers and the 404". | |
| `VISUAL_PERSONALITY` | One sentence on the look the human wants, separate from the verbal tone. | Delete. |
| `THEME_RULE` | One sentence on themes. Default: "Light and dark themes that both look intentional, following the system setting with a manual choice." In a redesign, check whether the product has dark mode and a toggle today. If it does not and the scope is UI only, ask the human whether adding it is allowed. | Round 3. |
| `TRADE_DRESS` | Third-party marks, schemes or likenesses to avoid. | "Do not copy another product's logo, layout or look." |
| `RESPONSIVE_LABEL`, `RESPONSIVE` | Which device comes first and the widths. Default: label "Phone-first", text "Design the phone first, then scale up. The layout must hold at 360, 390, 768, 1024 and 1440 px, and mockups are required at the widths in the Deliverables list. No horizontal page scroll, comfortable tap targets of at least 44 px." | Round 3. |
| `MIN_TEXT_PX` | Smallest allowed text size. | 14 |
| `STACK_FACTS` | One or two sentences naming the framework, the component library and what is forbidden. | Required. |
| `ICON_RULE` | The icon library and when custom SVG is allowed. | "Use one open-license icon set and name each icon you use." |
| `PRIVACY_RULES` | Who must not see what. | Turn off `privacy`. |
| `MOCKUP_COVERAGE` | An indented bullet list of screens or pages x widths x themes, plus states. Default: every page or screen at 390 and 1440 px in light, and dark for the core ones; 768 for the main ones; 360 for the single most important one; every state the content pack lists (apps) or the mobile menu and the 404 (sites). Write it as a bullet list indented two spaces. The developer brief's definition of done assumes 390 and 1440 light and dark. | |

## Copy brief

| Token | Write | Fallback |
| ----- | ----- | -------- |
| `COPY_SCOPE` | A list of the shared pieces beyond the pages and states: navigation labels, theme toggle, skip link, footer, error and 404 text, form hints, and any text the motif carries (such as section marker labels). | |
| `VERIFIER` | Who checks unconfirmed steps later: "a developer" if `code-in-repo`, else "the human". | |

## Developer brief

| Token | Write | Fallback |
| ----- | ----- | -------- |
| `CODE_LOCATION` | Where the code is ("`src/`", "`site/`"). | |
| `COMPONENT_LIBRARY` | The library the design must be buildable with. | |
| `FRAMEWORK_NOTE` | A framework warning from the repo's guidance files, for example "read the Next.js guide in `node_modules` before writing routing code". | Delete the sentence. |
| `REDESIGN_LIMITS` | Extra limits ("No schema changes and no new migrations."). Skip it if `CONSTRAINTS` already says the same. | Delete just that sentence, never the bullet it sits in. |
| `TEST_RULE` | How tests find things and what must still pass. | |
| `TOKEN_CONVENTION` | How tokens are expressed in code ("`--app-*` CSS custom properties in `src/theme.ts`"). Read from the repo and confirm in Round 4. | If the repo has no code or convention, propose one (for example CSS custom properties with a short prefix) and list it under "decisions I made". |
| `ASSET_LOCATION` | Where fonts and assets live. Read from the repo and confirm in Round 4. | If none exists, propose a conventional folder for the framework and list it under "decisions I made". |
| `THEME_RULE` | The same text as in the design brief. | |
| `SCREENSHOT_COMMAND_NOTE` | The command that renders the current screens, or delete. | Delete. |
| `DOCS_TO_UPDATE` | The durable design files that replace the old reference (spec, tokens, notes, index, and the mockups' HTML, CSS, SVG and fonts, never PNGs, `PROPOSALS.md` or `inputs/`), where they go, what repo docs to update, and how to treat missing targets ("create it if it does not exist"). If the final path is the durable location, say nothing needs copying. If it is inside an ignored folder, say the developer copies the durable files to a tracked location. Say whether the repo's lint and format checks cover the design files, and how to handle that. | |
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
