import type { FC } from "react";

interface Step {
  number: string;
  heading: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: "1",
    heading: "Read Solo",
    description:
      "Download the app or open the Web Reader. Discover who speaks.",
  },
  {
    number: "2",
    heading: "Read Together",
    description:
      "Share a QR code with friends and read through 365 stories as a group.",
  },
  {
    number: "3",
    heading: "Go Deeper",
    description:
      "Unlock SphereView to explore Scripture across all seven spheres.",
  },
];

interface JourneyStepsProps {}

const JourneySteps: FC<JourneyStepsProps> = () => (
  <section style={{ padding: "5rem 2.5rem" }}>
    <div className="mb-12 text-center">
      <p className="s-label">Get Started</p>
      <h2 className="s-head">Three ways to begin</h2>
      <p className="s-desc mx-auto">
        Whether solo, with friends, or leading a group.
      </p>
    </div>

    <div className="relative grid grid-cols-1 md:grid-cols-3 mx-auto max-w-[900px]">
      {/* Dashed connector line (desktop only) */}
      <div
        className="hidden md:block absolute pointer-events-none"
        style={{
          top: 44,
          left: "16.6%",
          right: "16.6%",
          height: 1,
          backgroundImage:
            "repeating-linear-gradient(90deg, var(--ink4) 0 4px, transparent 4px 12px)",
        }}
      />

      {STEPS.map((step) => (
        <div key={step.number} className="flex flex-col items-center text-center py-4">
          <div
            className="relative z-[1] flex items-center justify-center rounded-full font-serif transition-all duration-300 hover:bg-[var(--ruby)] hover:text-white hover:scale-105 hover:shadow-lg"
            style={{
              width: 88,
              height: 88,
              border: "1px solid rgba(0,0,0,0.08)",
              fontSize: "1.6rem",
              color: "var(--ruby)",
              background: "white",
              marginBottom: "1.2rem",
              cursor: "default",
            }}
          >
            {step.number}
          </div>

          <h3
            className="font-serif"
            style={{
              fontSize: "1.2rem",
              fontWeight: 500,
              marginBottom: "0.25rem",
            }}
          >
            {step.heading}
          </h3>

          <p
            className="mx-auto max-w-[240px]"
            style={{
              fontSize: "0.82rem",
              color: "var(--ink3)",
              lineHeight: 1.6,
              fontWeight: 300,
            }}
          >
            {step.description}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default JourneySteps;
