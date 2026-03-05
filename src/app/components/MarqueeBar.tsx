"use client";

import { type FC } from "react";

const BARS = [
  { color: "var(--god)", delay: "0s" },
  { color: "var(--lead)", delay: "0.8s" },
  { color: "var(--support)", delay: "1.6s" },
  { color: "var(--narrator)", delay: "2.4s" },
] as const;

const MarqueeBar: FC = () => (
  <div
    className="overflow-hidden"
    style={{
      padding: "2rem 0",
      borderTop: "1px solid rgba(0,0,0,0.04)",
      borderBottom: "1px solid rgba(0,0,0,0.04)",
    }}
  >
    <div className="flex flex-col gap-[6px] max-w-[800px] mx-auto px-8">
      {BARS.map((bar) => (
        <div
          key={bar.color}
          className="rounded-full"
          style={{
            height: 3,
            background: bar.color,
            animation: `inchworm 4s ease-in-out ${bar.delay} infinite`,
          }}
        />
      ))}
    </div>
  </div>
);

export default MarqueeBar;
