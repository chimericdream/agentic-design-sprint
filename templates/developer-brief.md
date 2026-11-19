<!--
Template notes live in the design-sprint-init skill, references/tokens.md. The standing rules every
developer follows (QUESTIONS FOR PM, machine safety, no redesigning) live in the developer agent
definition. This brief adds what is specific to the project. Remove this comment.
-->

# Developer brief: build {{PRODUCT_NAME}}

Sent to the Developer, with the path `{{FINAL_PATH}}`.

## Your role

You are the developer for {{PRODUCT_NAME}}, in {{CODE_LOCATION}} of this repository. An approved
design package is in `{{FINAL_PATH}}`. **Implement that design faithfully.** Do not redesign it. If
something in it is wrong, unbuildable with {{COMPONENT_LIBRARY}}, or conflicts with a constraint
here, do not decide alone. End your turn with a `QUESTIONS FOR PM` block. The PM will relay design
questions to the designer and bring back the answer, and will ask the human about product
decisions. You can't talk to anyone else.

Read the repository's guidance files (`AGENTS.md` and `CLAUDE.md`, whichever exist) first and follow
them. {{FRAMEWORK_NOTE}}

## What is in the package

Start with `SPEC.md`. It is the developer handoff: tokens, the component inventory, the
screen-by-screen (or page-by-page) rules, states, accessibility notes, a voice guide and a list of
what is flexible. `TOKENS.md` and `DESIGN-NOTES.md` explain the choices. `mockups/` holds static
HTML and CSS you can open by double-clicking, and `screenshots/` holds PNGs. Where the spec and the
mockup stylesheet disagree, the stylesheet wins.
<!-- if: redesign -->
`PROPOSALS.md` lists ideas that need new features. **Do not build anything in it.**
<!-- /if -->
<!-- if: copywriter -->

The package also holds the **copy deck** in `copy/`: the approved words for every page and state, a
voice guide (`VOICE.md`), length limits and a claims table. It is the source of truth for text.
Use it as written. If you need copy that isn't in it, or a line that doesn't work in the build, do
not write or change it yourself: end your turn with a `QUESTIONS FOR PM` block and the PM will have
the copywriter handle it. The designer's `COPY-CHANGES.md` records fit edits already made. One
exception: when checking text against the product shows it is factually wrong (a command, a default,
a step), fix it in the build and list every such fix in your report, so the PM can have the deck
updated to match.
<!-- /if -->

## Constraints

{{CONSTRAINTS}}
<!-- if: redesign -->
- **This is a UI redesign.** Do not change data models, server logic, routes or URLs, permissions
  or visibility rules. {{REDESIGN_LIMITS}} If the design needs data the screens don't load today,
  stop and ask.
- **Existing tests must keep passing.** {{TEST_RULE}} Where the design's copy-change table changes a
  label, update the affected test **deliberately**, and list every test you touch and why in the PR.
  Never weaken an assertion to make it pass.
<!-- /if -->
<!-- if: new -->
- **Screenshot placeholders.** Build one reusable placeholder component that follows the design:
  fixed aspect ratio, alt text, and the capture notes rendered **inside** the placeholder box so they
  never change the layout. Swapping in a real image must be a matter of dropping a file at a
  documented path, and the notes go away with the placeholder. Keep `PLACEHOLDERS.md` in step with
  what is actually on the pages.
- **Content.** Only make claims the product supports. No invented testimonials, user counts or
  prices.
<!-- /if -->
<!-- if: code-in-repo -->
- **Accuracy.** You are responsible for making any docs or tutorial text accurate. Verify every
  step, command, default and claim against the code and config in this repository, prefer what
  they actually do over older plans, and report differences to the PM.
<!-- /if -->
<!-- if: no-code-in-repo -->
- **Accuracy.** The product's code is not in this repository, so you cannot verify docs or tutorial
  text against it. Build the text as written, keep a list of every command, default and step the
  copy or design marks as unconfirmed, and put that list in your final report for the human to check.
<!-- /if -->
- **Tokens.** Express the design's tokens as {{TOKEN_CONVENTION}}, light and dark, and mirror them
  in the component library's theme. Don't hard-code colors in component styles. Delete tokens
  nothing uses.
- **Fonts and assets are self-hosted** in {{ASSET_LOCATION}}, with each font's license file. Remove
  fonts the new design no longer uses. Never load anything from a CDN or any third party at runtime.
- **Light and dark** themes follow the system setting with a manual choice, with no flash of the
  wrong theme on load.
- **Keep it simple.** If something in the design would be much more complicated to build than a
  close alternative (a custom component where a library one nearly fits, an animation library, a
  CSS trick that needs a hack), say so, and propose the simpler option with tradeoffs and a
  recommendation.

## Process and git

1. Read the package, the repo guidance files and the current code, and confirm you understand them.
   Raise anything unclear to the PM before you build.
2. Work on the existing branch `{{BRANCH}}`, with small conventional commits. **Never push to
   `{{MAIN_BRANCH}}`.**
3. **Build in slices and stop after each one with a short report.** The PM tells the human, and the
   human approves slice 1 before the next starts. For later slices, end your turn when the slice is
   done and report, then continue when told.
   {{SLICES}}
<!-- if: redesign -->
4. Compare each screen you build with the mockups' PNGs side by side, using the same data the
   designers saw. {{SCREENSHOT_COMMAND_NOTE}} Also check in a real browser at roughly 360, 390, 768,
   1024 and 1440 px, in both themes, and fix what doesn't match.
<!-- /if -->
<!-- if: new -->
4. Compare each page with the mockups side by side and fix what doesn't match. Check in a real
   browser at roughly 360, 390, 768, 1024 and 1440 px, in both themes, and verify every internal
   link.
<!-- /if -->
5. Run an accessibility pass: contrast in both themes, visible focus, heading order, landmarks,
   keyboard-only use of every dialog and menu, tap targets, reduced motion, and no horizontal scroll
   at 320 px.

## Documentation to update

{{DOCS_TO_UPDATE}}

## Git, PR and CI

Open a PR against `{{MAIN_BRANCH}}`. {{CI_NOTES}} **Do not merge.** The human merges.
{{MERGE_NOTE}}

## Definition of done

- Every screen, page and state in the design's index exists, matches the mockup at 390 and 1440 px
  in light and dark where the design shows them, and works at 360, 768 and 1024 px.
- These pass locally, with the output pasted in the PR: {{VERIFY_COMMANDS}}
- No third-party runtime requests. Fonts and assets are self-hosted with licenses. Nothing in the
  build breaks the trade-dress and privacy rules above.
- The accessibility pass is done.
- The docs above are updated.
- The PR is open with a clear summary: what changed, every deviation from the design with its
  reason, anything in the design you could not build, and anything the human should look at first.
