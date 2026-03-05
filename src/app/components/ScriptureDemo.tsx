"use client";

import { useEffect, useRef, useState, type FC } from "react";

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

const JONAH_IMAGES = [
  "/images/Jonah/Jonah_1.png",
  "/images/Jonah/Jonah_2.png",
  "/images/Jonah/Jonah_3.png",
  "/images/Jonah/Jonah_4.png",
];

const ScriptureDemo: FC = () => {
  const phoneRef = useRef<HTMLDivElement>(null);
  const [phoneVisible, setPhoneVisible] = useState(false);

  useEffect(() => {
    const el = phoneRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setPhoneVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="demo"
      className="bg-[var(--bg2)]"
      style={{
        borderTop: "1px solid rgba(0,0,0,0.04)",
        borderBottom: "1px solid rgba(0,0,0,0.04)",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-14 items-center mx-auto max-w-[1000px] px-6 md:px-10 py-16 md:py-24">
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

          <p
            className="mt-6"
            style={{
              fontSize: "0.72rem",
              color: "var(--ink4)",
              fontWeight: 300,
              fontStyle: "italic",
            }}
          >
            Scroll through Jonah to see the four-color text in action &rarr;
          </p>
        </div>

        {/* Right column — iPhone 16 Pro mockup */}
        <div
          ref={phoneRef}
          style={{
            opacity: phoneVisible ? 1 : 0,
            animation: phoneVisible
              ? "phoneEntrance 1s cubic-bezier(0.23,1,0.32,1) forwards, phoneFloat 6s ease-in-out 1s infinite"
              : "none",
          }}
        >
          <div
            className="relative mx-auto"
            style={{ width: 272 }}
          >
            {/* Titanium outer frame */}
            <div
              className="absolute inset-0 rounded-[54px]"
              style={{
                background: "linear-gradient(165deg, #c8c8cc 0%, #98989d 20%, #7c7c80 50%, #98989d 80%, #c8c8cc 100%)",
                boxShadow:
                  "0 50px 100px rgba(0,0,0,0.22), 0 20px 40px rgba(0,0,0,0.15), inset 0 0.5px 0 rgba(255,255,255,0.5), inset 0 -0.5px 0 rgba(0,0,0,0.15)",
              }}
            />

            {/* Antenna lines */}
            <div className="absolute top-[80px] left-0 w-full" style={{ height: "0.5px", background: "rgba(0,0,0,0.06)" }} />
            <div className="absolute bottom-[80px] left-0 w-full" style={{ height: "0.5px", background: "rgba(0,0,0,0.06)" }} />

            {/* Power button */}
            <div
              className="absolute"
              style={{
                right: -1.5,
                top: 148,
                width: 2.5,
                height: 56,
                borderRadius: "0 3px 3px 0",
                background: "linear-gradient(to right, #98989d, #b0b0b4, #98989d)",
                boxShadow: "1px 0 2px rgba(0,0,0,0.15)",
              }}
            />
            {/* Volume up */}
            <div
              className="absolute"
              style={{
                left: -1.5,
                top: 120,
                width: 2.5,
                height: 32,
                borderRadius: "3px 0 0 3px",
                background: "linear-gradient(to left, #98989d, #b0b0b4, #98989d)",
                boxShadow: "-1px 0 2px rgba(0,0,0,0.15)",
              }}
            />
            {/* Volume down */}
            <div
              className="absolute"
              style={{
                left: -1.5,
                top: 162,
                width: 2.5,
                height: 32,
                borderRadius: "3px 0 0 3px",
                background: "linear-gradient(to left, #98989d, #b0b0b4, #98989d)",
                boxShadow: "-1px 0 2px rgba(0,0,0,0.15)",
              }}
            />

            {/* Inner body */}
            <div className="relative" style={{ padding: 4 }}>
              {/* Black bezel */}
              <div
                className="relative overflow-hidden"
                style={{
                  borderRadius: 50,
                  background: "#000",
                  padding: 2.5,
                }}
              >
                {/* Dynamic Island */}
                <div
                  className="absolute z-10 left-1/2 -translate-x-1/2"
                  style={{
                    top: 9,
                    width: 90,
                    height: 26,
                    borderRadius: 20,
                    background: "#000",
                  }}
                />

                {/* Screen */}
                <div
                  className="overflow-y-auto overflow-x-hidden scripture-scroll"
                  style={{
                    borderRadius: 47,
                    background: "#fff",
                    height: 560,
                    WebkitOverflowScrolling: "touch",
                  }}
                >
                  {JONAH_IMAGES.map((src, i) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={i}
                      src={src}
                      alt={`Jonah page ${i + 1}`}
                      className="w-full block"
                      style={{ display: "block" }}
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScriptureDemo;
