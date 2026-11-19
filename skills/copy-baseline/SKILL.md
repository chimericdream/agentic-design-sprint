---
name: copy-baseline
description: Minimum copywriting rules for a design sprint, used by the sprint's copywriter agent when no fuller copywriting skills are installed and always for the sprint's own rules (claims, terminology, length limits, copy deck format). Use when writing product or marketing copy inside a design sprint.
---

# Copy baseline

The floor for sprint copy. A fuller `copywriting` or `humanizer` skill adds craft on top of this.
It does not replace the sprint rules in the last two sections.

## Voice

- Plain, specific, warm and human. Say what the thing is and what it does, in the words the reader
  would use. Prefer concrete nouns and verbs. Cut filler and hype.
- Follow the tone in the brief. Humor, if the brief asks for it, lives in small places: microcopy,
  empty states, captions, error and 404 text. It never replaces information.
- One idea per sentence. Vary sentence length. Lead with what matters to the reader.
- Headlines say what the page or section is. Buttons name the outcome ("Create your household"),
  not the mechanism ("Submit"). Links say where they go.
- Use the product's own vocabulary and keep it consistent. Pick one word per concept and put it in
  the terminology list in `VOICE.md`.
- Use the spelling the brief names (US or UK) everywhere, including the metadata.

## AI tells to avoid

Rewrite any draft that contains these:

- "It's not X, it's Y" and "not just X but Y" reveals.
- "No X, no Y, no Z" lists and strings of three adjectives or three parallel fragments.
- A sentence that trails off into extra comma clauses.
- One-line closers that restate the paragraph, and staged openers ("Imagine a world where...").
- Stock words: seamlessly, unlock, elevate, empower, leverage, effortless, game-changing, robust,
  streamline, supercharge.
- Dashes in place of ordinary punctuation, exclamation marks as enthusiasm, bold labels everywhere.
- Claims of quality with no fact behind them ("powerful", "intuitive", "beautiful").

## Self-edit pass

Before you hand over: read each page aloud in your head, cut a third of every long paragraph that
doesn't lose a fact, check every claim against `CLAIMS.md`, check terminology against the list, and
check lengths against the limits below.

## Sprint rules: claims

- Only facts from the brief. No invented features, numbers, users, testimonials, prices, awards or
  comparisons.
- Each factual claim goes in `CLAIMS.md` with the product fact it comes from. A claim you can't
  trace is cut or becomes a `QUESTIONS FOR PM` item.
- Where the product doesn't do something the brief lists as out of scope, say so plainly if the
  topic comes up.

## Sprint rules: the copy deck

Write a `copy/` folder:

- `INDEX.md`: every page, screen and state covered, with its file.
- `VOICE.md`: the voice in a paragraph, do and don't examples taken from this product, the
  terminology list, the spelling rule, and the words to avoid.
- `pages/<name>.md`, one per page or screen group. In reading order, give each section's heading,
  body, buttons and links, microcopy (empty, error and success states, form labels and hints), and
  for a site the page title and meta description. Mark each item with its role so a designer can
  find it (`H1`, `lede`, `CTA`, `label`, `empty-state`, and so on).
- **Length limits.** Give a target and a hard maximum (in characters) for every headline, button and
  label whose length could break a layout. Designers will make only fit edits, so honest limits
  save a round trip.
- `screenshots.md` (when the product is shown but no real screenshots exist): for each screenshot
  a page needs, an ID, the page it belongs to, the four capture notes (screen, state, viewport and
  theme, focus), and the alt text. Keep each note to one short line so it fits inside a placeholder
  box.
- `CLAIMS.md`: the claims table described above.

Docs, tutorials and FAQ answers are written to be representative. A developer verifies them against
the real product later, so mark any command, default or step you could not confirm from the brief.
