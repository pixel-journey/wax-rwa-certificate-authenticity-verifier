# Security — demo scan that never verifies

## Closed in tests

| Issue | Behavior |
| --- | --- |
| `demoScan()` | `{ demo: true, verified: false, ... }` |
| Camera | not opened |
| Hyperion / AA row | not read |

## Not closed (production)

| Concern | Guidance |
| --- | --- |
| Cryptographic match | Not implemented |
| Alpha-ready verifier | Trust label remains educational-reference |

## Attack angles

1. Marketing `verified: true` without new tests and a real verifier.  
2. Claiming a physical tag was scanned.  
3. Conflating with hop counts or last-name equality as "authenticity".

## Honesty limits

The product is the honest refusal to verify.

[docs.wax.io](https://docs.wax.io/)
