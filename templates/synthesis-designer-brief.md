<!--
TEMPLATE NOTES (the init skill removes every HTML comment before saving):
Only used when the project has a synthesis designer. Sent together with the design brief.
-->

# Brief for the synthesis designer

Sent together with `01-design-brief.md`.

You've been given the same brief as the designers before you. They worked independently. Copies of
their output are in your working directory, in `inputs/design-a/` and `inputs/design-b/`{{MORE_DESIGNS}}.
You work only in your own directory and, as the brief says, you should not browse anywhere else in
the repository.

<!-- if: copywriter -->
The copy is the same in every design: a copywriter wrote it, and it is in `inputs/copy/`. Use it as
the design brief's Writing section says, with fit edits only, recorded in `COPY-CHANGES.md`. Do not
judge the designs on their copy. Do judge how well each one laid it out.
<!-- /if -->

Your task has three steps.

1. **Evaluate every design honestly.** Look at the real screenshots and the HTML at all supported
   widths. Judge each against the brief, not against your own taste, on:
   - first impression and personality
   - whether the {{MOTIF_OR_IDENTITY}} is a system or a decoration
   - legibility and accessibility
   - mobile quality
   - {{PRODUCT_SPECIFIC_CRITERIA}}
   - dark mode
   - how buildable it is with {{STACK_SHORT}}
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
- **Final mockups** (static HTML and CSS plus PNGs) covering **every page and state** in the design
  brief, at the widths and themes the brief lists, including hover, focus, active and current
  states.
- **`SPEC.md`**, the developer handoff, with the contents the design brief lists.
- **All assets** as SVG, one file each, plus font files or exact download instructions.
{{EXTRA_DELIVERABLES}}

You may be asked follow-up questions from the developer through the PM later. Keep your reasoning
documented so you can answer them. End with a short summary, a statement of whether you opened
anything outside your directory, and any `QUESTIONS FOR PM`.
