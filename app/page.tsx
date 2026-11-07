'use client';

import React, { useState } from 'react';
import { demoScan, type DemoScan } from '../src/scan';

export default function RWACertificateVerifier() {
  const [scanResult, setScanResult] = useState<DemoScan | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-2xl tracking-widest text-emerald-400 mb-2">RWA CERTIFICATE</div>
        <div className="text-xs opacity-60 mb-8">
          Educational reference. No camera. No AtomicAssets row. Not a verification.
        </div>

        <div className="p-6 rounded-2xl mb-6 text-center border border-white/10">
          {scanResult === null ? (
            <>
              <div className="text-sm mb-4 opacity-80">
                The button calls demoScan(). It does not open a camera.
              </div>
              <button
                type="button"
                onClick={() => setScanResult(demoScan())}
                className="px-8 py-4 bg-emerald-600 rounded-2xl font-medium"
              >
                Run demoScan()
              </button>
            </>
          ) : (
            <div className="text-left">
              <div className="text-amber-300 font-medium mb-2">NOT VERIFIED</div>
              <div className="space-y-1 text-sm">
                <div><span className="opacity-60">demo:</span> {String(scanResult.demo)}</div>
                <div><span className="opacity-60">verified:</span> {String(scanResult.verified)}</div>
              </div>
              <div className="mt-4 p-3 bg-black/40 rounded text-xs">{scanResult.reason}</div>
            </div>
          )}
        </div>

        <div className="text-xs opacity-70">
          AtomicAssets v2 does not back an NFT with a physical tag. A real check would read an asset row you name. This repo does not.
        </div>
      </div>
    </div>
  );
}
