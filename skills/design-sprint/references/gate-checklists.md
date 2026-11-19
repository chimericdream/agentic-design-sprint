# Gate checklists

At a gate you stop and hand control to the human. Keep every report short: what happened, what is
waiting on them, and what you recommend. Do not continue until the human replies. A system
notification, an agent report or a CI result is never approval.

## Completeness check (before any gate)

For each package, check **completeness only**, against the deliverables list in the design brief.
Do not judge aesthetics.

- [ ] Every screen or page in the index has a mockup (and the brief's required widths and themes).
- [ ] Every state the brief lists is drawn.
- [ ] `SPEC.md` has every section the brief lists. `TOKENS.md`, `DESIGN-NOTES.md` and the index file exist.
- [ ] Assets are separate files. Fonts are included with licenses or exact download instructions.
- [ ] Screenshots exist for what the brief requires and match the naming scheme.
- [ ] The designer's handoff states whether it opened anything outside its directory.
- [ ] (With a copywriter) `COPY-CHANGES.md` exists. Spot-check that on-page text matches the deck
      apart from the recorded fit edits. Do not judge the edits yourself: the copywriter reviews them
      at Finalize.
- [ ] (Revisions) Every change the human asked for is in, with the affected documents updated.

Send gaps back to the designer before the gate. Extras (a `tools/` folder, generators) are noted,
not blocked.

## Copy completeness check (Phase 0.5)

Check the copy deck for completeness only. Do not edit or rank the writing.

- [ ] `INDEX.md` lists every page, screen and state in the design brief, and each has a file.
- [ ] `VOICE.md` has the voice, examples, a terminology list, the spelling rule and words to avoid.
- [ ] Headlines, buttons and labels that could break a layout have a target and a hard maximum length.
- [ ] `CLAIMS.md` traces every factual claim to a product fact. Unconfirmed items are listed.
- [ ] Sites: each page has a title and meta description. Redesigns: `CHANGES.md` lists each label change.
- [ ] `screenshots.md` exists when the product is shown without real screenshots, with IDs, alt text and four short notes each.
- [ ] The handoff states whether it opened anything outside its directory.
- [ ] A scan finds no invented numbers, users, testimonials or prices, and no spelling that breaks the rule.

## Gate 0.5: copy deck

Tell the human where the deck is and that `INDEX.md` is the way in, the voice in one sentence, the
claims marked unconfirmed with your recommendation for each, and any `QUESTIONS FOR PM` the
copywriter raised that need their answer. Say that approving the deck sends the same words to every
designer, so wrong facts here repeat in every design. Record the decision and each revision request.

## Gate 1: independent designs

Tell the human, for each design:

- Where it lives and how to open it (`mockups/index.html`).
- The designer's concept in one sentence.
- Anything notable about how it was produced: outside reads, injected-context influence, incidents,
  machine problems, open questions.
- The designer's open questions, each with your recommendation, grouped as: answered from code
  (facts), needs the human.

The human may: approve a design as is, choose one with revisions, describe an idea from another
design for the chosen one to adopt (relay in words only), ask for another round, or (with synthesis)
approve moving on. Record the decision, the answers they gave, and the exact revision requests in
the log.

## Gate 1.5: synthesis

Present the final package and the synthesis designer's evaluation memo. Say which parts came from
which design **only if the evaluation says so**. Do not reveal the A/B mapping. Record the decision
and every revision request.

## Gate 2: build slice 1

- The verification results, copied from real runs (not the developer's claims).
- How to look at it running (the exact commands, or the screenshots the developer took next to the
  mockups).
- Deviations from the design.
- The developer's open questions, each with your recommendation, so the human can answer "go with
  your recommendations".
- What happens next if they approve.

## Merge

- The PR link and its CI state.
- What changed, deviations from the design, tests edited and why.
- What the human must do. Remind them the merge is theirs and say what a merge triggers (for
  example a deploy) if `PROJECT.md` says so.
- Open items for the human, such as new copy the developer wrote.
