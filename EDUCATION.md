# Education — the scan that does not verify

> **Rung:** `npm test` runs `src/scan.test.ts`.  
> **The test is the rule.** There is no camera and no asset row.

`demoScan()` takes no arguments. It returns one object, every time.

## What you should be able to do

| Level | After this file |
| --- | --- |
| Beginner | Read the only return value |
| Intermediate | See what the page used to claim, and what it calls now |
| Masterclass | Say which neighboring labs also do not prove a physical item |

---

## Beginner — one scene

```ts
demoScan();
// {
//   demo: true,
//   verified: false,
//   reason: "no camera and no AtomicAssets row",
// }
```

`verified` is the literal `false`, not a boolean you can flip. There is no asset id, no collection name, and no proof string in this function.

### Predict, then run

```bash
npm test
```

---

## Intermediate — the page is the same function

| Attack | Naive code | This lab | Test |
| --- | --- | --- | --- |
| Show a green "VERIFIED" after a timer | hardcoded `verified: true`, asset `1099511627776`, "Cryptographic match successful" | `app/page.tsx` calls `demoScan()` and renders `verified: false` | `does not verify` |
| Wait 1200ms and invent a mint date | `setTimeout` | the click returns immediately | no timer in `scan.ts` |
| Treat `docs/API-USAGE.md` as a completed GET | a 2026-10-26 note about `immutable_data` | that GET was not repeated | this course does not claim it |
| Read `spec.yaml` `status: alpha-ready` as a product | old file | status is `educational-reference` | the file is not a test |

The button label is `Run demoScan()`. The subtitle says there is no camera.

---

## Masterclass — a tag is not `backasset`

AtomicAssets v2 rejects native token backing. A physical item is not a `backed_tokens` vector, and this repo does not mint.

Neighbor labs, so you do not invent a stack:

| Lab | What it actually checks |
| --- | --- |
| `wax-rwa-provenance-genealogy-tree` | hops in a name list. Immediate repeat is `{ ok: false }`. Not a transfer history. |
| `wax-advanced-rwa-provenance-and-authenticity` | last name only. Throws on a bad name. |
| `wax-rwa-fractional-floor-index` | integer floor of a share. Not re-opened this pass. Not a certificate. |

`atomicdropsx::claimdrop` is still only a field list in `wax-drops-and-pack-opening-experience` `ACTION-RECIPES.md`. The pinknetworkx drops repo returned 404. That ABI was not verified. Do not teach the recipe as a scan step.

A real check, which this repo does not implement, would name an asset id, read that row from an indexer you name, and compare a value you already trust. It would still not be a cryptographic match unless you verify a signature this codebase does not contain.

### What this course will not teach

- MediaDevices, WebXR, Hyperion, or client-side cryptography
- That `verified: false` means the physical item is fake
- Native NFT backing
