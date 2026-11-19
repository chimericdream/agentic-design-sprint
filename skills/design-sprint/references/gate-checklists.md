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
- [ ] Assets are separate files. Fonts are included with licences or exact download instructions.
- [ ] Screenshots exist for what the brief requires and match the naming scheme.
- [ ] The designer's handoff states whether it opened anything outside its directory.
- [ ] (Revisions) Every change the human asked for is in, with the affected documents updated.

Send gaps back to the designer before the gate. Extras (a `tools/` folder, generators) are noted,
not blocked.

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
