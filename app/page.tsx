'use client';

import React, { useState } from 'react';

export default function RWACertificateVerifier() {
  const [scanResult, setScanResult] = useState<any>(null);
  const [isScanning, setIsScanning] = useState(false);

  const simulateScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setScanResult({
        verified: true,
        assetId: '1099511627776',
        collection: 'PixelJourney Phygitals',
        mintDate: '2026-03-15',
        currentOwner: 'pxjourney',
        proof: 'Cryptographic match successful — physical tag matches on-chain mint trail',
      });
      setIsScanning(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6">
      <div className="max-w-2xl mx-auto">
        <div className="font-press-start text-2xl tracking-widest text-emerald-400 mb-2">RWA CERTIFICATE VERIFIER</div>
        <div className="text-xs opacity-60 mb-8">Pixel Journey • Mobile-First Phygital Authenticity • Camera + On-Chain Proof</div>

        <div className="glassmorphic-crt pixel-border p-6 rounded-2xl mb-6 text-center">
          {!scanResult ? (
            <>
              <div className="text-sm mb-4 opacity-80">Point your camera at the physical security tag</div>
              <button
                onClick={simulateScan}
                disabled={isScanning}
                className="px-8 py-4 bg-emerald-600 rounded-2xl font-medium disabled:opacity-50"
              >
                {isScanning ? 'Scanning...' : 'Start Camera Scan (Demo)'}
              </button>
            </>
          ) : (
            <div className="text-left">
              <div className="text-emerald-400 font-medium mb-2">✅ VERIFIED — AUTHENTIC</div>
              <div className="space-y-1 text-sm">
                <div><span className="opacity-60">Asset ID:</span> {scanResult.assetId}</div>
                <div><span className="opacity-60">Collection:</span> {scanResult.collection}</div>
                <div><span className="opacity-60">Minted:</span> {scanResult.mintDate}</div>
                <div><span className="opacity-60">Current Owner:</span> {scanResult.currentOwner}</div>
              </div>
              <div className="mt-4 p-3 bg-black/40 rounded text-xs">{scanResult.proof}</div>
            </div>
          )}
        </div>

        <div className="text-xs opacity-70">
          In production, this uses the device camera + Hyperion to fetch AtomicAssets mint history and performs cryptographic matching client-side. No centralized database required.
        </div>
      </div>
    </div>
  );
}
