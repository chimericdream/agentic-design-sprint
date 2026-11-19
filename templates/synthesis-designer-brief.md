<!--
Template notes live in the design-sprint-init skill, references/tokens.md. Only used when the
project has a synthesis designer. Remove this comment.
-->

# Brief for the synthesis designer

Sent together with the design brief and the content pack.

You've been given the same brief as the designers before you. They worked independently. Copies of
their output are in your working directory, in `inputs/design-a/`, `inputs/design-b/` and so on,
one folder per design. You work only in your own directory and, as the brief says, you should not
browse anywhere else in the repository.

The design brief was written for the independent designers. Where it says another designer's work
must stay unseen, or describes what `inputs/` holds, that does not apply to you. For you, `inputs/`
holds the anonymized copies of their designs, prepared by the PM, and you are meant to read them.
Everything else in the brief applies, including the stack, the constraints and the deliverables.

<!-- if: copywriter -->
The copy is the same in every design: a copywriter wrote it, and it is in `inputs/copy/`. Use it as
the design brief's Writing section says, with fit edits only, recorded in `COPY-CHANGES.md`. Do not
judge the designs on their copy. Do judge how well each one laid it out.
<!-- /if -->

Your task has three steps.

1. **Evaluate every design honestly.** Look at each design's own screenshots and its HTML at all supported
   widths. Judge each against the brief, not against your own taste, on:
   - first impression and personality
   - whether the visual identity (and the motif, if the brief names one) is a system or a decoration
   - legibility and accessibility
   - mobile quality
   - how well it serves the goal the design brief states
   - dark mode
   - how buildable it is with the stack the design brief names
   - how the copy is laid out and how far the design had to bend it (when a copywriter wrote it),
     otherwise copy quality and tone

   Write down what works and what fails in each design, specifically.
2. **Make one new design that takes the best of them.** It should feel like one coherent design from
   one hand, not a collage. **If one design is clearly better in every way that matters, you may
   discard the others** and refine the stronger one. If you do, say so and explain why. Do not
   combine things merely to be fair.
3. **Produce the final, implementation-ready package.** The developer cannot ask you anything
   directly. They'll have only your package and whatever the project manager relays, so be precise.

Deliverables, in your own directory (outside `inputs/`):

- **`EVALUATION.md`:** your assessment of every design, what you kept and what you discarded, and why.
- **Everything the design brief's Deliverables list asks for** (mockups and screenshots for every
  page and state at the widths and themes it lists, `DESIGN-NOTES.md`, `TOKENS.md`, `SPEC.md`,
  assets and fonts, and the other files it names), as one final package.

You may be asked follow-up questions from the developer through the PM later. Keep your reasoning
documented so you can answer them. End with a short summary, a statement of whether you opened
anything outside your directory, and any `QUESTIONS FOR PM`.
