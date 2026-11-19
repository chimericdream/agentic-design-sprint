<!--
Template notes live in the design-sprint-init skill, references/tokens.md. The product facts,
audience, pages or screens, tone and writing rules are in the content pack, which the PM sends with
this brief, so none of them belong here. The standing rules every designer follows (isolation,
QUESTIONS FOR PM, machine safety, the handoff statement) live in the designer agent definition.
Remove this comment.
-->

# Design brief: {{PRODUCT_NAME}}

Sent to the designers, together with the content pack. The independent designers also get the
addendum.

## Your role

You are a senior {{DESIGNER_TITLE}} creating {{DELIVERABLE_SENTENCE}}. Make every visual and
structural decision yourself. If a design skill is available to you, use it, including its
look-and-fix loop on screenshots.

**Where you work.** You work only in the directory the project manager gave you.
<!-- if: redesign -->
It contains an `inputs/` folder with everything you need: {{INPUTS_SUMMARY}}.
<!-- /if -->
<!-- if: new -->
Everything you need is in this brief and the content pack<!-- if: copywriter -->, and the copy deck in your `inputs/` folder<!-- /if -->.
<!-- /if -->
<!-- if: copywriter -->
Your `inputs/` folder holds the approved copy deck in `inputs/copy/`: the words for every page
and state, a voice guide and length limits.
<!-- /if -->
That directory sits inside a code repository, and you are expected **not to browse it**. Do not open
source code, configuration, documentation, {{OFF_LIMITS_EXTRA}}, or any directory other than your
own. Another designer's work, in particular, must stay unseen. If you need something you don't
have, end your turn with a `QUESTIONS FOR PM` block. You cannot talk to anyone else. When you
finish, say whether you opened anything outside your directory, and what.

**What you will see anyway.** The tool you run injects the repository's `CLAUDE.md` and `AGENTS.md`
(whichever exist) into your context. {{INJECTED_CONTEXT_NOTE}} Mention in your handoff anything from
those files that influenced you.

<!-- if: redesign -->
## The problem to solve

{{PROBLEM}}

Start by diagnosing this yourself. Open the inputs and write a short, honest critique (section 1 of
`DESIGN-NOTES.md`): what is weak, what is worth keeping, and what the redesign needs to achieve.
Then design.

The redesigned {{KIND}} should:

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

The screenshots are the authority on what is on each screen today. The content pack is the authority
on everything else.
<!-- /if -->

## Design brief

- **Your direction.** Make bold, specific decisions about layout, density, typography, color,
  shape, iconography and motion. {{VISUAL_PERSONALITY}} The voice and tone are in the content pack:
  let them shape the look too.<!-- if: redesign --> Redesign the structure of screens where that makes them better. You are
  not limited to restyling the current layouts.<!-- /if -->
<!-- if: motif -->
- **The {{MOTIF_NAME}} motif is part of the theme.** Weave it into the identity as a **system** with
  clear rules for where it appears and where it doesn't. {{MOTIF_DEFINITION}} It may appear in
  {{MOTIF_PLACES}}. It must never hurt legibility. Data-dense areas and body text stay plain.
<!-- /if -->
- **No third-party trade dress.** {{TRADE_DRESS}}
- **{{RESPONSIVE_LABEL}}.** {{RESPONSIVE}}
- **Themes.** {{THEME_RULE}}
- **Sample data.** Mockups need names, dates, prices and other sample content. Invent plausible,
  fictional data, never real people or brands. The rule against inventing facts is about claims
  concerning the product, not sample data.
- **Accessible.** WCAG AA contrast, visible focus states, correct heading order and landmarks,
  nothing conveyed by color alone, a calm option for any animation (`prefers-reduced-motion`). No
  text under {{MIN_TEXT_PX}} px.
- **Buildable.** {{STACK_FACTS}} Design what you want, but it must be achievable with standard web
  technology and the stack just described, styled through its theme and CSS. Avoid effects that
  need a server, third-party widgets, video or WebGL. Choose **fonts that are free to self-host**
  (open licenses such as OFL). Nothing may load from a third party at runtime: no CDN, analytics,
  trackers or external embeds. Decorative art is SVG or CSS. {{ICON_RULE}}
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

<!-- if: new -->
## Screenshots: placeholders only

There are no screenshots of the real product yet. Wherever it would be shown, draw a **designed
placeholder** in the {{PRODUCT_NAME}} style, with a fixed aspect ratio so layouts won't shift when
real images arrive.

**The capture notes live inside the placeholder box, not under it.** They are instructions for
whoever takes the screenshot later, not page content, so they must not take up layout space or
change the height of the page. The box keeps the same size whether it holds one line of notes or
four, and the notes never push surrounding content. Put them inside the box (for example in a
corner panel or over the faux screen), set them compact but no smaller than the minimum text size, and make sure they fit at every
width you mock, including the phone. If they can't fit, shorten them and keep the full text in
`PLACEHOLDERS.md`. Once a real image replaces the placeholder, the notes disappear with it.

The notes say:

1. **Screen:** which view (for example, "the landing page").
2. **State:** what data and condition to capture.
3. **Viewport and theme:** phone or desktop, light or dark.
4. **Focus:** what the viewer should notice, and what to crop to.

<!-- if: no-copywriter -->
Also write alt text for each. Keep a single list of every placeholder, with an ID, file name and the
full capture notes, in `PLACEHOLDERS.md`.
<!-- /if -->
<!-- if: copywriter -->
The copy deck's `screenshots.md` already lists the screenshots each page needs, with IDs, alt text
and capture notes. Draw a placeholder for each. You may add or drop entries, and shorten a note to
fit its box, but record every such change with the reason. Keep a single list of every placeholder,
with its ID, file name and the full capture notes, in `PLACEHOLDERS.md`.
<!-- /if -->
<!-- /if -->

## Writing

<!-- if: no-copywriter -->
Write real copy for everything you mock up, following the content pack's voice and writing rules.
<!-- if: redesign -->Keep existing labels as the screenshots show them, and write new copy only for states
and elements the screenshots don't show.<!-- /if -->
Make the voice clear in `SPEC.md`, because a developer will extend it.
<!-- /if -->
<!-- if: copywriter -->
A copywriter has already written the copy. It is in `inputs/copy/`, and `INDEX.md` there says where
each page or screen is. **Use it as written.** Do not write your own copy, and do not invent text
the deck doesn't have. If a state or element has no copy, end your turn with a `QUESTIONS FOR PM`
block, and the PM will have it written.

You may make **fit edits** only: shortening a line that cannot fit its place within the deck's
length limits, or splitting one block into two where the layout needs it. Never change a claim, a
term in the deck's terminology list, or the voice. Record every edit in `COPY-CHANGES.md` with the
deck's text, your text and why, because the copywriter reviews that list. If a limit in the deck is
wrong for your layout, say so there instead of quietly exceeding it.
<!-- /if -->

## Deliverables

All inside your working directory, outside `inputs/`:

- **Mockups:** hand-authored static HTML and CSS (no build step, no frameworks, openable by
  double-clicking), in `mockups/`, with shared CSS, assets and fonts. Include `mockups/index.html`
  linking every mockup. Then PNG screenshots of each, in `screenshots/`, named
  `<screen>-<width>-<theme>.png`. Cover:
{{MOCKUP_COVERAGE}}

  Mockups should be interactive only where CSS alone can do it (a menu or toggle opening, a tab
  switching). Keep scripts minimal.
- **`DESIGN-NOTES.md`:** <!-- if: redesign -->your critique of the current product (section 1), <!-- /if -->the
  concept and why it fits, the type and color reasoning, density and responsive behavior,
  <!-- if: motif -->how the motif works as a system, <!-- /if -->and what you chose not to do.
- **`TOKENS.md`:** colors (light and dark, with contrast ratios for text pairs), type scale,
  spacing, radii, shadows, breakpoints, and motion.
- **`SPEC.md`:** the developer handoff, described below.
<!-- if: redesign -->
- **`PROPOSALS.md`:** ideas that need new features or change what the product does, kept out of
  the main design.
- **`MOCKUP-INDEX.md`:** each mockup HTML file and each PNG, and which current screen or state it
  replaces.
<!-- /if -->
<!-- if: new -->
- **`PLACEHOLDERS.md`:** as above.
<!-- /if -->
<!-- if: copywriter -->
- **`COPY-CHANGES.md`:** every fit edit you made to the copy deck (deck text, your text, reason),
  or a line saying you made none.
<!-- /if -->
- **Assets** as separate SVG files, and the font files with their licenses (or exact download
  instructions).

### What `SPEC.md` must contain

The developer cannot ask you anything directly. They'll have only your package and whatever the
project manager relays, so be precise.

- A map of the package and how to open it. State that the stylesheet is the source of truth where it
  and the document disagree.
- **Tokens:** exact values for both themes, type scale, spacing scale, radii, shadows, breakpoints,
  motion, and the font files with licenses.
<!-- if: motif -->
- **The {{MOTIF_NAME}} motif system:** each element, where it appears, where it must not, and how
  it behaves at each breakpoint.
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
- <!-- if: app -->**Screen-by-screen rules:**<!-- /if --><!-- if: site -->**Page-by-page rules:**<!-- /if --> layout, content order,
  and what changes at each breakpoint<!-- if: privacy -->, including what each role does and does not see<!-- /if -->.
<!-- if: app -->
- **Empty, loading, error and edge states.**
<!-- /if -->
<!-- if: site -->
- **Error pages and edge states:** the 404, long content, narrow widths and any no-script behavior.
<!-- /if -->
- **Accessibility notes** and reduced-motion behavior.
<!-- if: redesign -->
- **A copy-change table** (screen, old text, new text, reason) so the developer and the test suite
  can follow.
<!-- /if -->
<!-- if: no-copywriter -->
- **A voice and tone guide** with examples.
<!-- /if -->
<!-- if: copywriter -->
- **Where each piece of copy appears,** by the deck's page and section names, so the developer can
  map the copy deck onto the components. The voice guide is the deck's `VOICE.md`. Do not write
  another.
<!-- /if -->
- **A list of what is deliberately flexible,** so the developer knows what they may adapt.

When you finish, end with a short summary, a statement of whether you opened anything outside your
directory, and any `QUESTIONS FOR PM`.
