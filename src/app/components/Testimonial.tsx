import type { FC } from "react";

interface TestimonialProps {}

const Testimonial: FC<TestimonialProps> = () => (
  <section
    className="mx-auto max-w-[800px] text-center"
    style={{ padding: "5rem 2.5rem" }}
  >
    <blockquote className="relative" style={{ marginBottom: "1.5rem" }}>
      <span
        className="absolute pointer-events-none select-none"
        aria-hidden="true"
        style={{
          fontFamily: "var(--font-playfair), serif",
          fontSize: "6rem",
          top: "-2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          color: "var(--ruby)",
          opacity: 0.06,
          lineHeight: 1,
          fontStyle: "normal",
        }}
      >
        {"\u201C"}
      </span>
      <p
        className="font-serif italic"
        style={{
          fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)",
          lineHeight: 1.55,
          color: "var(--ink)",
        }}
      >
        For the first time I felt like I was literally involved in the story
        rather than being an outside observer. The characters came alive and
        popped off the page.
      </p>
    </blockquote>

    <p style={{ fontSize: "0.75rem", color: "var(--ink4)" }}>
      —{" "}
      <strong style={{ fontWeight: 600, color: "var(--ruby)" }}>
        Apple Books Review
      </strong>{" "}
      · SourceView Bible
    </p>
  </section>
);

export default Testimonial;
