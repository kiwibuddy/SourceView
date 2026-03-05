"use client";

import { useEffect, useRef, useState, type FC } from "react";

interface Feature {
  title: string;
  description: string;
  highlights?: string[];
}

interface FeatureGridProps {
  features: Feature[];
}

function renderWithHighlights(text: string, highlights?: string[]) {
  if (!highlights || highlights.length === 0) return text;

  const regex = new RegExp(`(${highlights.map(h => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, i) => {
    const isHighlight = highlights.some(h => h.toLowerCase() === part.toLowerCase());
    if (isHighlight) {
      return (
        <span
          key={i}
          className="feature-keyword"
          style={{ fontWeight: 500 }}
        >
          {part}
        </span>
      );
    }
    return part;
  });
}

const FeatureCard: FC<{ feature: Feature; index: number }> = ({ feature, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="feature-card rounded-[var(--radius-sm)]"
      style={{
        padding: "1.4rem",
        backgroundColor: "var(--bg2)",
        border: "1px solid rgba(0,0,0,0.04)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.6s cubic-bezier(0.23, 1, 0.32, 1) ${index * 0.1}s`,
      }}
    >
      <h4
        className="feature-card-title"
        style={{
          fontSize: "0.82rem",
          fontWeight: 600,
          marginBottom: "0.35rem",
          color: "var(--ink)",
          letterSpacing: "-0.01em",
        }}
      >
        {feature.title}
      </h4>
      <p
        style={{
          fontSize: "0.76rem",
          color: "var(--ink3)",
          lineHeight: 1.6,
        }}
      >
        {renderWithHighlights(feature.description, feature.highlights)}
      </p>
    </div>
  );
};

const FeatureGrid: FC<FeatureGridProps> = ({ features }) => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      style={{ margin: "1.5rem 0" }}
    >
      {features.map((feature, i) => (
        <FeatureCard key={i} feature={feature} index={i} />
      ))}
    </div>
  );
};

export default FeatureGrid;
