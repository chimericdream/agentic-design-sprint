<!--
TEMPLATE NOTES (the init skill removes every HTML comment before saving the brief):
- {{TOKENS}} are filled from the interview. Never leave one in the saved file.
- Blocks wrapped in <!-- if: redesign --> ... <!-- /if --> are kept only in that mode. Same for
  "new", "app", "site", "motif", "privacy", "brand-family". Delete the block otherwise.
- Renumber the Deliverables list after removing blocks, and make sure no sentence is left dangling.
- The standing rules every designer follows (isolation, QUESTIONS FOR PM, machine safety, the
  handoff statement) live in the designer agent definition, not here. This brief only adds what is
  specific to the project.
-->

# Design brief: {{PRODUCT_NAME}}

Sent to {{WHO_RECEIVES}}{{ADDENDUM_NOTE}}.

## Your role

You are a senior {{DESIGNER_TITLE}} creating {{DELIVERABLE_SENTENCE}}. Make every visual and
structural decision yourself. If a design skill is available to you, use it, including its
look-and-fix loop on screenshots{{APP_SCREEN_NOTE}}.

**Where you work.** You work only in the directory the project manager gave you.
<!-- if: redesign -->
It contains an `inputs/` folder with everything you need: {{INPUTS_SUMMARY}}.
<!-- /if -->
<!-- if: new -->
Everything you need is in this brief. {{NO_REFERENCE_NOTE}}
<!-- /if -->
That directory sits inside a code repository, and you are expected **not to browse it**. Do not open
source code, configuration, documentation, {{OFF_LIMITS_EXTRA}} or any directory other than your
own. Another designer's work, in particular, must stay unseen. If you need something you don't
have, end your turn with a `QUESTIONS FOR PM` block. You cannot talk to anyone else. When you
finish, say whether you opened anything outside your directory, and what.

**What you will see anyway.** The tool you run in injects the repository's `CLAUDE.md` and
`AGENTS.md` into your context. {{INJECTED_CONTEXT_NOTE}} Mention in your handoff anything from them
that influenced you.

## What {{PRODUCT_NAME}} is

{{PRODUCT_DESCRIPTION}}

**Audience and contexts of use**

{{AUDIENCE}}

<!-- if: redesign -->
## The problem to solve

{{PROBLEM}}

Start by diagnosing this yourself. Open the inputs and write a short, honest critique (section 1 of
`DESIGN-NOTES.md`): what is weak, what is worth keeping, and what the redesign needs to achieve.
Then design.

The goal is a {{KIND}} that:

{{GOALS}}
<!-- /if -->
<!-- if: new -->
## The goal

{{GOAL}}
<!-- /if -->

<!-- if: brand-family -->
## Brand family: {{FAMILY_NAME}}

{{BRAND_FAMILY}}

Take its identity as your starting point and decide what carries over, what must adapt, and what
does not belong here. You may extend the palette and type scale and deviate where the product needs
it. Say where and why in `DESIGN-NOTES.md`. Do not copy its page layouts.
<!-- /if -->

<!-- if: redesign -->
## What is in `inputs/`

{{INPUTS_DESCRIPTION}}
<!-- /if -->

## Product facts

Everything you may rely on. Do not invent facts beyond this list.

{{PRODUCT_FACTS}}

**Not in the product, so not in your design:** {{NOT_IN_PRODUCT}}

<!-- if: app -->
**States the inputs can't show. Design all of them.**

{{STATES_TO_DESIGN}}
<!-- /if -->

<!-- if: site -->
## Pages to design

{{PAGES}}
<!-- /if -->

## Design brief

- **Your direction.** Make bold, specific decisions about layout, density, typography, colour,
  shape, iconography and motion. {{REDESIGN_FREEDOM}}
- **Tone.** {{TONE}}
<!-- if: motif -->
- **{{MOTIF_NAME}} is part of the theme.** Weave it into the identity as a **system** with clear
  rules for where it appears and where it doesn't ({{MOTIF_PLACES}}). It must never hurt legibility.
  Data-dense areas and body text stay plain. {{MOTIF_PROMPT}}
<!-- /if -->
- **No third-party trade dress.** {{TRADE_DRESS}}
- **{{RESPONSIVE_LABEL}}.** {{RESPONSIVE}}
- **Light and dark** themes that both look intentional, following the system setting with a manual
  choice{{THEME_EXTRA}}.
- **Accessible.** WCAG AA contrast, visible focus states, correct heading order and landmarks,
  nothing conveyed by colour alone, a calm option for any animation (`prefers-reduced-motion`). No
  text under {{MIN_TEXT_PX}} px.
- **Buildable.** {{STACK_FACTS}} Design what you want, but it must be achievable with standard web
  technology and the component library named above, styled through its theme and CSS. Avoid effects
  that need a server, third-party widgets, video or WebGL. Choose **fonts that are free to
  self-host** (open licences such as OFL). Nothing may load from a third party at runtime.
  Decorative art is SVG or CSS. {{ICON_RULE}}
<!-- if: redesign -->
- **No new features.** Every field, number and action in your mockups must exist in the product
  today. If you have an idea that needs something new, put it in `PROPOSALS.md` with the reasoning.
  Do not design it into the main flow.
- **Keep what works.** Keep the product's vocabulary, and keep control labels (button text, field
  labels) unless you have a reason to change them, because {{LABEL_REASON}}. List every label or
  copy change you make.
<!-- /if -->
<!-- if: privacy -->
- **Privacy is part of the design.** {{PRIVACY_RULES}} Don't design any element that would leak
  these.
<!-- /if -->
<!-- if: no-runtime-third-party -->
- **No third-party anything at runtime.** No analytics, no trackers, no external embeds.
<!-- /if -->

<!-- if: new -->
## Screenshots: placeholders only

There are no screenshots of the real product yet. Wherever it would be shown, draw a **designed
placeholder** in the {{PRODUCT_NAME}} style, with a fixed aspect ratio so layouts won't shift when
real images arrive.

**The capture notes live inside the placeholder box, not under it.** They are instructions for
whoever takes the screenshot later, not page content, so they must not take up layout space or
change the height of the page. The box keeps the same size whether it holds one line of notes or
four, and the notes never push surrounding content. Put them inside the box (for example in a
corner panel or over the faux screen), set them small and legible, and make sure they fit at every
width you mock, including the phone. If they can't fit, shorten them and keep the full text in
`PLACEHOLDERS.md`. Once a real image replaces the placeholder, the notes disappear with it.

The notes say:

1. **Screen:** which view (for example, "Set detail page").
2. **State:** what data and condition to capture.
3. **Viewport and theme:** phone or desktop, light or dark.
4. **Focus:** what the viewer should notice, and what to crop to.

Also write alt text for each. Keep a single list of every placeholder, with an ID, file name and the
full capture notes, in `PLACEHOLDERS.md`.
<!-- /if -->

## Writing

Write real copy for everything you mock up. Plain, specific, warm and human. No filler or hype. Use
{{SPELLING}} spelling. Avoid "it's not X, it's Y" reveals, strings of three adjectives, and stock
words like "seamlessly" and "unlock". Do not make claims beyond the product facts, and do not
invent testimonials, user counts or prices. Make the voice clear, because a developer will extend it.

## Deliverables

All inside your working directory{{OUTSIDE_INPUTS}}:

1. **Mockups:** hand-authored static HTML and CSS (no build step, no frameworks, openable by
   double-clicking), in `mockups/`, with shared CSS, assets and fonts. Include `mockups/index.html`
   linking every mockup. Then PNG screenshots of each, in `screenshots/`, named
   `<screen>-<width>-<theme>.png`. Cover:
{{MOCKUP_COVERAGE}}
   Mockups should be interactive only where CSS alone can do it (a menu or toggle opening, a tab
   switching). Keep scripts minimal.
2. **`DESIGN-NOTES.md`:** {{CRITIQUE_CLAUSE}}the concept and why it fits, the type and colour
   reasoning, density and responsive behavior, {{MOTIF_NOTES_CLAUSE}}and what you chose not to do.
3. **`TOKENS.md`:** colours (light and dark, with contrast ratios for text pairs), type scale,
   spacing, radii, shadows, breakpoints, and motion.
4. **`SPEC.md`:** the developer handoff, described below.
<!-- if: redesign -->
5. **`PROPOSALS.md`:** ideas that need new features or change what the product does, kept out of
   the main design.
6. **`MOCKUP-INDEX.md`:** each mockup HTML file and each PNG, and which current screen or state it
   replaces.
<!-- /if -->
<!-- if: new -->
5. **`PLACEHOLDERS.md`:** as above.
<!-- /if -->
7. **Assets** as separate SVG files, and the font files with their licences (or exact download
   instructions).

### What `SPEC.md` must contain

The developer cannot ask you anything directly. They'll have only your package and whatever the
project manager relays, so be precise.

- A map of the package and how to open it. State that the stylesheet is the source of truth where it
  and the document disagree.
- **Tokens:** exact values for both themes, type scale, spacing scale, radii, shadows, breakpoints,
  motion, and the font files with licences.
<!-- if: motif -->
- **The {{MOTIF_NAME}} system:** each element, where it appears, where it must not, and how it
  behaves at each breakpoint.
<!-- /if -->
<!-- if: app -->
- **The app shell:** navigation at each breakpoint, page heads and page width rules, scroll
  behavior, and how dialogs behave on phones (modal or bottom sheet).
<!-- /if -->
<!-- if: site -->
- **The page frame:** header, footer, navigation (including docs navigation and "on this page"
  navigation if there are docs), content width rules, and the mobile menu.
<!-- /if -->
- **A component inventory** with every state, spacing and responsive behavior. Name the library
  component each maps to where it's obvious.
- **Screen-by-screen (or page-by-page) rules:** layout, content order, and what changes at each
  breakpoint{{ROLE_CLAUSE}}.
- **Empty, loading, error and edge states.**
- **Accessibility notes** and reduced-motion behavior.
<!-- if: redesign -->
- **A copy-change table** (screen, old text, new text, reason) so the developer and the test suite
  can follow.
<!-- /if -->
- **A voice and tone guide** with examples.
- **A list of what is deliberately flexible,** so the developer knows what they may adapt.

When you finish, end with a short summary, a statement of whether you opened anything outside your
directory, and any `QUESTIONS FOR PM`.
