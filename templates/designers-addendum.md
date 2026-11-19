<!--
TEMPLATE NOTES (the init skill removes every HTML comment before saving):
Keep exactly one of the two variants below, depending on whether the project uses a synthesis
designer. Fill {{TOKENS}}.
-->

# Addendum for the independent designers

Sent together with `01-design-brief.md`.

<!-- if: no-synthesis -->
You are one of {{DESIGNER_COUNT}} designers working independently on the same brief. You will not
see the others' work, and you must not look for it. Choose a bold, specific direction and commit to
it. Do not hedge toward a safe average, because the human wants genuinely different options to
compare. Briefly state your concept, and why it fits, in your handoff notes.

There is no designer to merge the designs. The human will choose one and may ask its designer for
revisions, so your package must be implementation-ready on its own. Write `SPEC.md` as if a
developer will start from it tomorrow.
<!-- /if -->
<!-- if: synthesis -->
You are one of {{DESIGNER_COUNT}} designers working independently on the same brief. You will not
see the others' work, and you must not look for it. Choose a bold, specific direction and commit to
it. Do not hedge toward a safe average, because a later designer will merge the best of the
designs, and that only works if each one is distinct. Briefly state your concept, and why it fits,
in your handoff notes.
<!-- /if -->
