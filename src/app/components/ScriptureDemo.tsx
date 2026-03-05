import type { FC } from "react";

interface ScriptureDemoProps {}

interface ColorLegendItem {
  label: string;
  color: string;
}

const LEGEND: ColorLegendItem[] = [
  { label: "God speaks", color: "var(--god)" },
  { label: "Lead", color: "var(--lead)" },
  { label: "Supporting", color: "var(--support)" },
  { label: "Narrator", color: "var(--narrator)" },
];

interface ScriptureLine {
  speaker: string;
  color: string;
  text: string;
}

const LINES: ScriptureLine[] = [
  {
    speaker: "Narrator",
    color: "var(--ink3)",
    text: "The Lord gave this message to Jonah son of Amittai:",
  },
  {
    speaker: "God",
    color: "var(--god)",
    text: "\u201CGet up and go to the great city of Nineveh. Announce my judgment against it.\u201D",
  },
  {
    speaker: "Narrator",
    color: "var(--ink3)",
    text: "But Jonah got up and went in the opposite direction to get away from the Lord.",
  },
  {
    speaker: "Sailors",
    color: "var(--support)",
    text: "\u201CWhy has this storm come? Who are you? What do you do?\u201D",
  },
  {
    speaker: "Jonah",
    color: "var(--lead)",
    text: "\u201CI am a Hebrew, and I worship the Lord, the God of heaven.\u201D",
  },
];

const ScriptureDemo: FC<ScriptureDemoProps> = () => {
  return (
    <section
      className="bg-[var(--bg2)]"
      style={{
        borderTop: "1px solid rgba(0,0,0,0.04)",
        borderBottom: "1px solid rgba(0,0,0,0.04)",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-12 md:gap-20 items-center mx-auto max-w-[1200px] px-5 py-16 md:px-10 md:py-28">
        {/* Left column */}
        <div>
          <p className="s-label">How It Works</p>
          <h2 className="s-head">
            Scripture reads like a<br />
            <span style={{ color: "var(--god)" }}>dramatic</span>{" "}
            <span style={{ color: "var(--lead)" }}>living</span>{" "}
            <span style={{ color: "var(--support)" }}>script</span>
          </h2>
          <p className="s-desc">
            Four colors reveal who&rsquo;s speaking. Gather friends, each take a
            color, and read aloud together.
          </p>

          <div
            className="flex flex-wrap"
            style={{ gap: "1.5rem", marginTop: "2rem" }}
          >
            {LEGEND.map((item) => (
              <span
                key={item.label}
                className="flex items-center"
                style={{ gap: "0.4rem" }}
              >
                <span
                  className="shrink-0 rounded-full"
                  style={{
                    width: 8,
                    height: 8,
                    backgroundColor: item.color,
                    boxShadow: `0 0 0 3px color-mix(in srgb, ${item.color} 15%, transparent)`,
                  }}
                />
                <span style={{ fontSize: "0.72rem", color: "var(--ink3)" }}>
                  {item.label}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Right column — scripture card */}
        <div
          className="relative overflow-hidden"
          style={{
            background: "#fff",
            border: "1px solid rgba(0,0,0,0.06)",
            borderRadius: "var(--radius)",
            padding: "2rem",
            boxShadow: "0 20px 60px rgba(0,0,0,0.04)",
          }}
        >
          <div
            className="absolute top-0 left-0 w-full"
            style={{
              height: 3,
              background:
                "linear-gradient(90deg, var(--god), var(--lead), var(--support), var(--narrator))",
            }}
          />

          <div
            className="flex items-center justify-between"
            style={{
              borderBottom: "1px solid rgba(0,0,0,0.06)",
              paddingBottom: "0.8rem",
              marginBottom: "1.5rem",
            }}
          >
            <span
              className="font-mono uppercase"
              style={{
                fontSize: "0.62rem",
                color: "var(--ink4)",
                letterSpacing: "0.12em",
              }}
            >
              JONAH 1 &middot; Story 1 of 365
            </span>

            <span className="flex items-center" style={{ gap: 4 }}>
              {["var(--god)", "var(--lead)", "var(--support)", "var(--narrator)"].map(
                (c) => (
                  <span
                    key={c}
                    className="rounded-full"
                    style={{ width: 7, height: 7, backgroundColor: c }}
                  />
                )
              )}
            </span>
          </div>

          <div>
            {LINES.map((line, i) => (
              <div
                key={i}
                className="rounded-lg transition-all duration-300 hover:bg-black/[0.02] hover:translate-x-1"
                style={{
                  padding: "0.5rem 0.6rem",
                  margin: "0.2rem 0",
                  fontSize: "0.88rem",
                  lineHeight: 1.7,
                  fontWeight: 300,
                  color: line.color,
                }}
              >
                <span
                  className="font-mono uppercase inline-block"
                  style={{
                    fontSize: "0.55rem",
                    letterSpacing: "0.1em",
                    opacity: 0.4,
                    marginRight: "0.6rem",
                    minWidth: 55,
                  }}
                >
                  {line.speaker}
                </span>
                {line.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScriptureDemo;
