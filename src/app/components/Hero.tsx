"use client";

import { useState, useEffect, useCallback, type FC } from "react";

const MORPH_WORDS = ["Drama", "Story", "Beauty", "Depth"] as const;

const COLOR_BARS = [
  { color: "var(--god)", width: 50 },
  { color: "var(--lead)", width: 35 },
  { color: "var(--support)", width: 25 },
  { color: "var(--narrator)", width: 15 },
] as const;

const ORBS = [
  { size: 500, color: "var(--god)", top: "10%", left: "15%", delay: "0s" },
  { size: 400, color: "var(--support)", top: "20%", right: "10%", delay: "-5s" },
  { size: 350, color: "var(--lead)", bottom: "15%", left: "40%", delay: "-10s" },
] as const;

const Hero: FC = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [morphIndex, setMorphIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMorphIndex((prev) => (prev + 1) % MORPH_WORDS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const closeVideo = useCallback(() => setShowVideo(false), []);

  return (
    <section
      className="relative flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ minHeight: "auto", padding: "8rem 2rem 3rem" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.012) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.012) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Floating orbs */}
      {ORBS.map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: orb.size,
            height: orb.size,
            background: orb.color,
            top: "top" in orb ? orb.top : undefined,
            bottom: "bottom" in orb ? orb.bottom : undefined,
            left: "left" in orb ? orb.left : undefined,
            right: "right" in orb ? orb.right : undefined,
            filter: "blur(80px)",
            opacity: 0.05,
            animation: "orbFloat 16s ease-in-out infinite",
            animationDelay: orb.delay,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center max-w-[880px]">
        {/* Tag */}
        <div
          className="flex items-center gap-2 rounded-full mb-8"
          style={{
            background: "var(--bg2)",
            padding: "0.3rem 0.9rem 0.3rem 0.3rem",
            fontSize: "0.62rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontWeight: 500,
            color: "var(--ink2)",
            border: "1px solid rgba(0,0,0,0.05)",
            opacity: 0,
            animation: "heroReveal 0.9s ease forwards",
            animationDelay: "0.3s",
          }}
        >
          <span
            className="rounded-full flex items-center justify-center"
            style={{
              width: 22,
              height: 22,
              background: "var(--ruby-soft)",
            }}
          >
            <span
              className="rounded-full"
              style={{
                width: 5,
                height: 5,
                background: "var(--ruby)",
                animation: "tagPulse 2s ease-in-out infinite",
              }}
            />
          </span>
          40,000 Hours of Original Research
        </div>

        {/* Heading with kinetic morph */}
        <h1
          className="font-serif"
          style={{
            fontSize: "clamp(3rem, 7vw, 6.5rem)",
            fontWeight: 400,
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            marginBottom: "1.5rem",
          }}
        >
          <span className="block overflow-hidden" style={{ paddingBottom: "0.15em" }}>
            <span
              className="block"
              style={{
                opacity: 0,
                transform: "translateY(110%)",
                animation: "lineUp 1s cubic-bezier(0.23,1,0.32,1) forwards",
                animationDelay: "0.4s",
              }}
            >
              Experience the{" "}
              <span
                className="inline-block relative font-serif"
                style={{
                  color: "var(--ruby)",
                  fontStyle: "italic",
                  minWidth: "3ch",
                }}
              >
                {MORPH_WORDS.map((word, i) => (
                  <span
                    key={word}
                    className={i === morphIndex ? "inline-block relative" : "inline-block absolute left-0 top-0"}
                    style={{
                      transition: "all 0.5s cubic-bezier(0.23,1,0.32,1)",
                      opacity: i === morphIndex ? 1 : 0,
                      transform: i === morphIndex ? "translateY(0)" : "translateY(20px)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {word}
                  </span>
                ))}
              </span>
            </span>
          </span>
          <span className="block overflow-hidden">
            <span
              className="block"
              style={{
                opacity: 0,
                transform: "translateY(110%)",
                animation: "lineUp 1s cubic-bezier(0.23,1,0.32,1) forwards",
                animationDelay: "0.55s",
                color: "var(--ink3)",
              }}
            >
              of God&rsquo;s Word
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="max-w-[480px]"
          style={{
            fontSize: "1.05rem",
            color: "var(--ink3)",
            fontWeight: 300,
            lineHeight: 1.75,
            marginBottom: "2.2rem",
            opacity: 0,
            animation: "heroReveal 1s ease forwards",
            animationDelay: "0.9s",
          }}
        >
          A revolutionary suite of Bible tools that transforms how you read,
          study, and share Scripture&nbsp;&mdash; in four colors, seven spheres,
          and 365 stories.
        </p>

        {/* Buttons */}
        <div
          className="flex items-center gap-[0.6rem] flex-wrap justify-center"
          style={{
            opacity: 0,
            animation: "heroReveal 1s ease forwards",
            animationDelay: "1.1s",
          }}
        >
          <a
            href="#download"
            className="group relative inline-flex items-center justify-center gap-2 rounded-full text-white overflow-hidden transition-all duration-300 hover:-translate-y-[2px]"
            style={{
              backgroundColor: "var(--ink)",
              padding: "0.85rem 2rem",
              fontSize: "0.85rem",
              fontWeight: 500,
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            }}
          >
            <span
              className="absolute inset-0 transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100"
              style={{ background: "var(--ruby)" }}
            />
            <span className="relative z-10">Start Reading Free</span>
            <svg className="relative z-10" width={14} height={14} viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <button
            onClick={() => setShowVideo(true)}
            className="inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 hover:border-[var(--ink)] cursor-pointer"
            style={{
              border: "1px solid rgba(0,0,0,0.08)",
              background: "rgba(255,255,255,0.5)",
              backdropFilter: "blur(10px)",
              padding: "0.85rem 2rem",
              fontSize: "0.85rem",
              fontWeight: 400,
              color: "var(--ink)",
            }}
          >
            <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch Video
          </button>
        </div>

        {/* Animated color bars */}
        <div
          className="flex flex-col gap-[5px] mt-10 w-full max-w-[500px]"
          style={{
            opacity: 0,
            animation: "heroReveal 1s ease forwards",
            animationDelay: "1.3s",
          }}
        >
          {COLOR_BARS.map((bar, i) => (
            <div
              key={i}
              className="rounded-full"
              style={{
                height: 3,
                background: bar.color,
                animation: `inchworm 4s ease-in-out ${i * 0.8}s infinite`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Video modal */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.85)" }}
          onClick={closeVideo}
        >
          <button
            onClick={closeVideo}
            className="absolute top-6 right-6 text-white/70 hover:text-white cursor-pointer"
            style={{ fontSize: "1.5rem", lineHeight: 1 }}
            aria-label="Close video"
          >
            &times;
          </button>
          <div
            className="relative w-full max-w-[900px] mx-4"
            style={{ aspectRatio: "16/9" }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://www.youtube.com/embed/pQ0fp7VnsWk?list=PLoLsubiB2AlW_1GN_myS7NqTtedlH96tF&autoplay=1"
              className="absolute inset-0 w-full h-full rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="SourceView Video"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
