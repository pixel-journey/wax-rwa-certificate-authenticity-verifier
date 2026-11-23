# AI handoff — RWA certificate authenticity verifier

## Non-negotiables

1. `demoScan()` returns `{ demo: true, verified: false, reason: "no camera and no AtomicAssets row" }`.
2. Does **not** open a camera, call Hyperion, or show a cryptographic match.
3. Neighbor provenance labs count hops or last-name checks — neither proves a physical tag.
4. Not AtomicAssets v2 backing.
5. Trust label remains educational-reference — not alpha-ready verification product.

## Prompt seeds

- "What does demoScan return and why is verified false?"
- "Contrast with provenance tree hop counts — still not a physical proof."
- "Refuse claiming a live AtomicAssets row was checked."

## Do not

- Invent a camera or signature path in unit tests.
- Claim physical authenticity was proven.
- Treat this as a production verifier.
