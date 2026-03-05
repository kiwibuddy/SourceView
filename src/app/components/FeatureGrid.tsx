import type { FC } from "react";

interface Feature {
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
}

const FeatureGrid: FC<FeatureGridProps> = ({ features }) => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      style={{ margin: "1.5rem 0" }}
    >
      {features.map((feature, i) => (
        <div
          key={i}
          className="rounded-[var(--radius-sm)]"
          style={{
            padding: "1.2rem",
            backgroundColor: "var(--bg2)",
            border: "1px solid rgba(0,0,0,0.03)",
          }}
        >
          <h4
            style={{
              fontSize: "0.78rem",
              fontWeight: 500,
              marginBottom: "0.25rem",
              color: "var(--ink)",
            }}
          >
            {feature.title}
          </h4>
          <p
            style={{
              fontSize: "0.75rem",
              color: "var(--ink3)",
              lineHeight: 1.55,
            }}
          >
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;
