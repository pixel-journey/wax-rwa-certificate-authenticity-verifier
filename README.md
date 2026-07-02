# wax-rwa-certificate-authenticity-verifier

**RWA Certificate Authenticity Verifier (Mobile-First)**

A mobile-optimized verification experience that uses the device camera to scan physical product security tags (QR, NFC, or visual markers) and cryptographically matches them against on-chain mint trails on WAX.

**Status:** 🔒 Private (In Development) | Target: Public when v1 complete  
**Category:** Phygital (RWA) Redemptions & Supply-Chain Legibility  
**Parent Catalog:** [pixel-journey/wax-ecosystem-blueprint-catalog](https://github.com/pixel-journey/wax-ecosystem-blueprint-catalog)

> Built to the same high standard of educational excellence, production readiness, and WAX best practices as the [gkniftyheads-tracker](https://github.com/henrikpiga/gkniftyheads-tracker).

---

## Quick Start

```bash
git clone https://github.com/pixel-journey/wax-rwa-certificate-authenticity-verifier.git
cd wax-rwa-certificate-authenticity-verifier
npm install
npm run dev
```

Open on a mobile device or desktop. The demo includes sample scans. Grant camera permission to test live verification flow.

---

## Why This Blueprint?

Phygital and real-world asset projects struggle with proving that a physical item is the genuine article tied to its on-chain NFT. This blueprint bridges the physical and digital worlds securely using the device camera + on-chain cryptographic proof.

It builds trust for collectors, secondary markets, and redemption processes without requiring centralized databases.

---

## Architecture & Data Flow

```
Device Camera (WebXR / MediaDevices API)
       ↓ scan QR/NFC/visual marker
Extracted Identifier (serial, hash, or asset reference)
       ↓
Client-Side Lookup
  - AtomicAssets mint history (via Hyperion or public API)
  - Immutable data / schema attributes
       ↓ cryptographic match
Verification Result Screen
  - On-chain proof badge
  - Asset details
  - Ownership / redemption status
```

All verification logic runs client-side for maximum trust and speed.

---

## Complete Repository Structure

Aligned with Pixel Journey blueprint standards.

Key areas:
- `app/` — Main verification flow pages
- `components/` — CameraScanner, VerificationResult, ProofBadge, AssetCard
- `hooks/` — useCameraVerification, useOnChainMatch
- `lib/wax/` — asset-verifier.ts, hyperion-lookup.ts, crypto-match.ts
- `public/mock-data/` — Sample physical tags + matching on-chain assets
- `.github/workflows/` — Quality automation

Strong emphasis on educational comments for the camera + blockchain matching logic.

---

## Key WAX Concepts Explained

- **AtomicAssets Mint Trails**: How every asset has an immutable creation record that can be used for provenance.
- **Hyperion for Fast Lookups**: Efficient querying of asset history by identifier.
- **Client-Side Cryptographic Matching**: Verifying physical tags against on-chain data without a trusted third party.
- **WebXR / Camera Access**: Modern browser APIs for seamless mobile scanning.

This blueprint is **WAX-primary** (leveraging AtomicAssets and Hyperion). The camera + matching pattern is portable to any chain with good asset history APIs.

---

## Design Specifications

- Mobile-first, camera-centric UI
- Clear success/failure states with helpful guidance
- Beautiful proof visualization (on-chain badge + asset preview)
- Accessible (high contrast, screen reader support for results)
- Smooth animations for scan and verification flow

Follows Pixel Journey Design System.

---

## Technical Architecture & Best Practices

- **Stack**: Next.js 15, TypeScript, Tailwind + shadcn/ui, framer-motion, WharfKit (optional for ownership checks)
- **Camera**: MediaDevices API + WebXR where available
- **On-Chain Verification**: Hyperion + AtomicAssets public endpoints with caching
- **Security**: All matching happens client-side. No sensitive data transmitted unnecessarily.
- **Demo Mode**: Full camera simulation + mock verification results

See the catalog REPO-STANDARDS.md for recommended WAX patterns around public endpoints and performance.

---

## Demo & Usage

- Try sample scans (simulated or real QR codes)
- See instant on-chain match results
- Explore the verified asset details and proof trail
- (Optional) Connect wallet to check current ownership

Designed for immediate understanding and extension.

---

## Customization

- Configure target collections and schema fields
- Add support for different tag types (QR, NFC via Web NFC, visual AI matching)
- Customize success messaging and redemption flows
- Brand the verification experience to any project

---

## Roadmap

- v1: Camera scanning + basic on-chain matching + demo
- v1.1: Enhanced proof visualization and shareable verification links
- Future: Deeper integration with encrypted shipping and milestone stepper blueprints

---

## Contributing & Credits

Built with care for trustworthy phygital experiences on WAX.

MIT License.

Following the production-quality, educational standards established by the gkniftyheads-tracker and Pixel Journey guidelines.

---

*Pixel Journey — Making Web3 interfaces pixel-perfect and delightful.*