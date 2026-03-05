import type { FC } from "react";

interface ResearchSectionProps {}

const ResearchSection: FC<ResearchSectionProps> = () => (
  <section
    className="relative overflow-hidden text-center mx-4 sm:mx-10 px-6 py-12 sm:px-12 sm:py-20"
    style={{
      borderRadius: "var(--radius)",
      background: "var(--bg2)",
      border: "1px solid rgba(0,0,0,0.04)",
    }}
  >
    <span
      className="absolute pointer-events-none select-none font-serif"
      aria-hidden="true"
      style={{
        fontSize: "clamp(5rem, 12vw, 10rem)",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "var(--ruby)",
        opacity: 0.03,
        whiteSpace: "nowrap",
        fontWeight: 700,
        letterSpacing: "-0.04em",
      }}
    >
      40,000
    </span>

    <h2
      className="relative font-serif"
      style={{
        fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
        fontWeight: 500,
        marginBottom: "0.75rem",
      }}
    >
      40,000 Hours of Original Research
    </h2>

    <p
      className="relative mx-auto max-w-[520px]"
      style={{
        color: "var(--ink3)",
        fontSize: "0.92rem",
        lineHeight: 1.7,
        fontWeight: 300,
      }}
    >
      A global team catalogued every speaker, source, and sphere reference
      across the entire Bible — a dataset that never existed before.
    </p>
  </section>
);

export default ResearchSection;
