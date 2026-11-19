# Phases

Every project-specific value (names, models, paths, commands, slices) comes from the project's
`PROJECT.md`. Paths below are relative to the repo root and use `<dir>` for the project directory
(`docs/<name>-project/`).

How to send a brief: spawn the agent with the Agent tool, `subagent_type` `design-sprint:copywriter`,
`design-sprint:designer` or `design-sprint:developer`, the `model` from `PROJECT.md` (omit it to inherit), and a prompt made of
the **contents** of its brief files, its directory path and the machine-safety reminder. Never send
a path into `<dir>/prompts/`. Never forward your own context or another agent's reasoning. Write
each agent's ID and role in the log so you can reach it again with SendMessage.

If the session was restarted and an agent can no longer be reached, spawn a fresh one with the same
brief plus: "A package already exists in your directory. Read it, then continue from there.
Revision requests follow." Log that you did.

## Phase 0: setup and inputs

1. Confirm you are on the project's feature branch (create it from the main branch if not). Commit
   any pending project files (the briefs, `PROJECT.md`) as small `docs:` commits. Never push to the
   main branch.
2. Run the project's checks if `PROJECT.md` lists any for committed files (lint, format). If they
   fail on files you didn't write, report it to the human rather than fixing code yourself.
3. **Redesign mode:** produce or refresh the screenshots with the project's command only if the
   index is missing or the app source changed after it was written. Read its "skipped" section and
   tell the human which states are missing. Don't block on it unless more than a handful are missing.
4. Create `<dir>/design/inputs/` with the material `PROJECT.md` lists, nothing else. Copy only the
   files an index lists, never stale extras. Add a short `inputs/README.md`: one line per folder,
   what it is and nothing about how to use it.
5. Create `<dir>/design/designer-N/` for each designer, copy `inputs/` into `inputs/` inside it, and
   create `<dir>/LOG.md` from the template if it does not exist.
6. If the project keeps `design/` out of git (large screenshots), make sure the ignore line is
   committed before designers start producing files.

## Phase 0.5: copy (only if `PROJECT.md` says there is a copywriter)

1. Create `<dir>/design/copywriter/` and send the copywriter its brief (the copy brief + the design
   brief), its directory path and the machine-safety reminder. It receives no designs, because none
   exist yet.
2. Answer `QUESTIONS FOR PM` as the isolation rules describe. Product facts and tone questions go
   to the human.
3. When it finishes, check the deck for completeness only (see `gate-checklists.md`) and send gaps
   back. Do not edit the copy yourself.
4. Record in the log: the voice in one sentence, the pages and states covered, claims marked
   unconfirmed, the outside-reads statement, and any incident.
5. **Gate 0.5**, if `PROJECT.md` turns the copy review gate on. Stop and see `gate-checklists.md`.
   Route the human's revisions to the copywriter and repeat.
6. When the deck is approved, copy its `copy/` folder to `<dir>/design/inputs/copy/` and into each
   designer's `inputs/copy/` before any designer starts. Add a line for it to `inputs/README.md`.

## Phase 1: independent designs

1. Send each designer its brief (design brief + addendum), its directory path and the machine-safety
   reminder. They receive no other path. Run in parallel unless `PROJECT.md` says one at a time.
2. Answer `QUESTIONS FOR PM` as the isolation rules describe. Facts you verify in the code go back
   as facts. Hold taste and product questions for the human, and collect them for the gate. With a
   copywriter, a designer who finds missing copy gets it from the copywriter through you: send the
   copywriter the request in words, update the deck and every designer's `inputs/copy/` the same
   way, and tell each designer the file changed.
3. When a designer finishes, check its package against the brief's deliverables checklist for
   **completeness only**: missing screens, states, viewports, `SPEC.md` sections, assets or fonts.
   Send gaps back to that designer. **Do not judge or rank aesthetics.**
4. Record in the log, for each designer: its concept in one sentence, counts of mockups and
   screenshots, the outside-reads statement, injected-context influence, and any incident.
5. Commit each design if the project commits designs (`docs:`). Otherwise leave it on disk.
6. **Gate 1.** Stop. See `gate-checklists.md`. Do not start the next phase until the human decides.

## Phase 1.5: synthesis (only if `PROJECT.md` says so)

1. Prepare the synthesis designer's directory as `isolation-rules.md` describes (random A/B
   mapping, authorship stripped, scan logged). Send its brief, the design brief, its directory path,
   the machine-safety reminder, and any answers the human gave at Gate 1. With a copywriter, also
   copy the approved deck into its `inputs/copy/`.
2. Answer questions as before. When it finishes, check completeness against its deliverables and
   record the outcome.
3. **Gate 1.5.** Stop. Present the package and its evaluation. Revisions go back to the synthesis
   designer. Do not start the build until the human approves.

## Phase 1.5 (no synthesis): choose and revise

After Gate 1 the human may choose one design as is, choose one and ask for revisions, or choose one
and describe an idea from another for it to adopt. Route revisions to the chosen designer only, in
words. If the human's feedback is screenshots, copy them into a `feedback/` folder in that
designer's directory. The other designers are finished. Repeat until the human approves.

## Finalize

1. Check the approved package for completeness once more: every screen or page in the index has a
   mockup, `SPEC.md` has every section the brief lists, and every revision the human asked for is in.
   Record the outcome in the log.
1a. **Copy reconciliation** (only with a copywriter). Send the copywriter the chosen designer's
   `COPY-CHANGES.md` as text, with no design material. It accepts each edit or proposes a
   replacement. Relay any replacement to the designer, who applies it or says why it doesn't fit.
   When the two agree, have the copywriter update its deck to match what the mockups say, and
   re-check that every string in the package's `SPEC.md` and mockups matches the deck apart from
   recorded edits. Record the outcome in the log.
2. Copy the package to the final path in `PROJECT.md`, and with a copywriter copy the final
   `copy/` folder in beside it, leaving out `inputs/`, `feedback/`, generator
   scripts (`tools/`), skill caches and anything else not meant to ship, unless the human wants them.
3. Leave out of the final copy any file the brief calls non-durable (for example a proposals list
   stays with the human).
4. Commit if the final path is tracked.
5. If the human pre-approved starting the build once the final package is saved, say so in the log
   and continue. Otherwise stop and ask.

## Phase 2: build

Skip this phase if `PROJECT.md` says the sprint is design-only.

1. Send the developer its brief, the machine-safety reminder, the final path and any facts or
   answers the human gave. It works on the existing feature branch.
2. The developer builds in the slices `PROJECT.md` lists and stops after each one. **After slice 1,
   verify and hold a human checkpoint** (below). Later slices need a human stop only when the
   developer raises a question.
3. **Verify a slice report yourself.** Run the verification commands from `PROJECT.md`. Read the CI
   result if there is a PR. Check that nothing changed in paths the brief says are off-limits
   (`git diff --stat <base>..HEAD -- <paths>`). Treat a failure as real until you have shown
   otherwise: a failing test that passes in isolation and fails under load may be a pre-existing
   flake, but say how you know (re-runs, no related code touched) and tell the human.
4. **Human checkpoint after slice 1.** Tell the human how to look at it running, report the
   verification results and the developer's open questions with your recommendations, and stop. Do
   not let slice 2 start until the human approves. Route revisions to the developer and design
   questions to the chosen designer.
5. Relay developer questions about the design to the chosen designer (and only that designer) and
   the answers back verbatim. Relay questions about missing or unworkable copy to the copywriter the
   same way, then update the deck in the final package. Factual corrections the developer reports
   go to the copywriter so the deck matches the build. If the developer reports that a design decision isn't buildable in the
   stack or conflicts with a constraint, ask the designer for a revision and relay it. If something
   needs a product decision, a new data field, a schema change or a behavior change, ask the human.
6. When the developer reports done, verify its definition of done once more and run the full check
   set yourself. Then report: the PR link, what changed, deviations from the design, tests that were
   edited and why, and what the human must do. **The human merges.** Do not merge it yourself.

## Resuming a sprint

At the start of a session, read `PROJECT.md` and `LOG.md`, find the last completed step, state it to
the human in two lines, and continue from there. Never assume a gate was approved unless the log
says the human approved it.
