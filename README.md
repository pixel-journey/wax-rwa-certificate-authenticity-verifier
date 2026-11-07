# The scan that does not verify

**Trust label:** `educational-reference`  
**Catalog:** [wax-ecosystem-blueprint-catalog](https://github.com/pixel-journey/wax-ecosystem-blueprint-catalog)

`demoScan()` returns `{ demo: true, verified: false, reason: "no camera and no AtomicAssets row" }`. The page calls that function. It does not open a camera, does not call Hyperion, and does not show a cryptographic match.

The course is [EDUCATION.md](./EDUCATION.md).

## What is actually in the repo

| Piece | Role |
| --- | --- |
| `src/scan.ts` | The only rule |
| `src/scan.test.ts` | The claim |
| `app/page.tsx` | Renders that return value |
| `docs/API-USAGE.md` | Notes for a GET this pass did not repeat |
| `spec.yaml` | `educational-reference`. Not alpha-ready |

```bash
npm test
```

`npm run dev` opens the page. The earlier README said the camera and an on-chain mint trail were in this tree. They are not.

Neighbor labs: `wax-rwa-provenance-genealogy-tree` counts hops in a list you pass. `wax-advanced-rwa-provenance-and-authenticity` checks the last name and throws on a bad one. Neither proves a physical tag. Neither is AtomicAssets v2 backing.
