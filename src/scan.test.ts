import { describe, expect, it } from "vitest";
import { demoScan } from "./scan";

describe("demoScan", () => {
  it("does not verify", () => {
    expect(demoScan()).toEqual({
      demo: true,
      verified: false,
      reason: "no camera and no AtomicAssets row",
    });
  });
});
