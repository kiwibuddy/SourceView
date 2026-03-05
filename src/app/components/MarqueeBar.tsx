import type { FC } from "react";

interface MarqueeBarProps {}

const stats = [
  { number: "40,000", label: "Hours of Research" },
  { number: "1,400+", label: "Biblical Sources" },
  { number: "66", label: "Books Covered" },
  { number: "365", label: "Story Segments" },
  { number: "7", label: "Spheres of Influence" },
  { number: "416", label: "Key Passages" },
];

const StatItem: FC<{ number: string; label: string }> = ({ number, label }) => (
  <span className="flex items-center gap-[0.5rem]">
    <span
      className="font-serif font-medium"
      style={{ fontSize: "1.6rem", color: "var(--ruby)" }}
    >
      {number}
    </span>
    <span
      className="uppercase"
      style={{
        fontSize: "0.6rem",
        letterSpacing: "0.1em",
        color: "var(--ink4)",
      }}
    >
      {label}
    </span>
  </span>
);

const Dot: FC = () => (
  <span style={{ fontSize: "0.4rem", color: "var(--ink4)" }}>·</span>
);

const MarqueeBar: FC<MarqueeBarProps> = () => {
  const items = stats.flatMap((stat, i) => {
    const elements = [<StatItem key={`stat-${i}`} {...stat} />];
    if (i < stats.length - 1) {
      elements.push(<Dot key={`dot-${i}`} />);
    }
    return elements;
  });

  return (
    <div
      className="overflow-hidden"
      style={{
        padding: "1.4rem 0",
        borderTop: "1px solid rgba(0,0,0,0.04)",
        borderBottom: "1px solid rgba(0,0,0,0.04)",
      }}
    >
      <div
        className="flex w-max"
        style={{
          gap: "3.5rem",
          animation: "marquee 28s linear infinite",
        }}
      >
        {items}
        <Dot key="dot-bridge" />
        {items}
      </div>
    </div>
  );
};

export default MarqueeBar;
