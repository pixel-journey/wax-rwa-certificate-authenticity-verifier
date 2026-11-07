/** There is no camera and no asset row. This cannot verify a tag. */
export type DemoScan = {
  demo: true;
  verified: false;
  reason: "no camera and no AtomicAssets row";
};

export function demoScan(): DemoScan {
  return {
    demo: true,
    verified: false,
    reason: "no camera and no AtomicAssets row",
  };
}
