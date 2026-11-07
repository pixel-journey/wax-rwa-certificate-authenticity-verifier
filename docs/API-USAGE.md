# API usage for a certificate check

The camera stays on the device. Upload the photo nowhere. The check is: a value you read off the tag matches a value already in `immutable_data`, or it does not.

## One asset

You need an id or a narrow filter before you call. Do not list the collection to find a tag.

```http
GET https://wax.api.atomicassets.io/atomicassets/v1/assets?collection_name=COLLECTION&page=1&limit=20
```

Docs: [AtomicAssets](https://docs.wax.io/apis/atomic-api.htm).

On 2026-10-26 a one-row `pixeljourney` page returned `immutable_data`, `template_mint`, and burn fields. Compare the tag to the field the schema documents. A missing field is "not on this asset", not "fake" and not "authentic".

`wax-advanced-rwa-provenance-and-authenticity` only checks that the latest name matches. It does not walk history. A mint trail, if you add one, is Hyperion `get_actions` with `limit`, not a second copy of the photo. `wax-rwa-provenance-genealogy-tree` counts hops. It does not scan a camera.
## Shared rules

This file does not send the requests. The page calls `demoScan()` and does not verify. The 2026-10-26 GET was not repeated on 2026-11-07.

- One family, one list, at most five https origins. Walk in order. Stop at the first success. A custom origin is allowed. `http` is only for localhost.
- Trust a chain or history host only after `chain_id` is `1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4`.
- On 2026-10-25 a host with a healthy `/v2/health` still 404'd `get_actions`. Keep a history list separate from the chain list.
- If `more` is true, continue with `lower_bound` set to `next_key`. Do not drop `limit`.
- Cache an ABI. Do not poll during a frame, a slider drag, or a camera preview. Alcor HTTP 429 means wait.
- Producer health is [EOS Nation](https://validate.eosnation.io/wax/producers/), [Validationcore](https://wax.validationcore.io/reports/nodes/api), and [status.wax.io](https://status.wax.io/).

Figures below are a check on 2026-10-26, not a promise the hosts stay up.
