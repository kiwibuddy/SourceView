"use client";

import { useState, useEffect, type FC } from "react";

interface HeroProps {}

const ORBS = [
  {
    size: 500,
    color: "var(--god)",
    top: "10%",
    left: "15%",
    delay: "0s",
  },
  {
    size: 400,
    color: "var(--support)",
    top: "20%",
    right: "10%",
    delay: "-5s",
  },
  {
    size: 350,
    color: "var(--lead)",
    bottom: "15%",
    left: "40%",
    delay: "-10s",
  },
] as const;

const COLOR_BARS = [
  { color: "var(--god)", width: 50 },
  { color: "var(--lead)", width: 35 },
  { color: "var(--support)", width: 25 },
  { color: "var(--narrator)", width: 15 },
] as const;

const Hero: FC<HeroProps> = () => {
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const onScroll = () => setShowHint(window.scrollY < 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="relative flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        minHeight: "100svh",
        padding: "7rem 2rem 3rem",
      }}
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
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 100%)",
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
            animation: `orbFloat 16s ease-in-out infinite`,
            animationDelay: orb.delay,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center max-w-[920px]">
        {/* Tag */}
        <div
          className="flex items-center gap-2 rounded-full mb-8"
          style={{
            background: "var(--bg2)",
            padding: "0.45rem 1.2rem",
            fontSize: "0.68rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: 500,
            color: "var(--ink2)",
            opacity: 0,
            animation: "heroReveal 0.8s ease forwards",
            animationDelay: "0.2s",
          }}
        >
          <span
            className="rounded-full"
            style={{
              width: 6,
              height: 6,
              background: "var(--ruby)",
              animation: "tagPulse 2s ease-in-out infinite",
            }}
          />
          Bible Reimagined
        </div>

        {/* Heading */}
        <h1
          className="font-serif"
          style={{
            fontSize: "clamp(3.2rem, 7.5vw, 7rem)",
            fontWeight: 400,
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
          }}
        >
          <span
            className="block"
            style={{
              opacity: 0,
              transform: "translateY(40px)",
              animation: "lineUp 0.7s cubic-bezier(0.23,1,0.32,1) forwards",
              animationDelay: "0.4s",
            }}
          >
            Experience the{" "}
            <em
              className="not-italic font-serif"
              style={{
                fontStyle: "italic",
                background:
                  "linear-gradient(135deg, var(--ruby), var(--god))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Drama
            </em>
          </span>
          <span
            className="block"
            style={{
              opacity: 0,
              transform: "translateY(40px)",
              animation: "lineUp 0.7s cubic-bezier(0.23,1,0.32,1) forwards",
              animationDelay: "0.55s",
            }}
          >
            of God&rsquo;s Story
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="max-w-[500px] mt-6"
          style={{
            fontSize: "1.1rem",
            color: "var(--ink3)",
            fontWeight: 300,
            lineHeight: 1.7,
            opacity: 0,
            animation: "heroReveal 0.8s ease forwards",
            animationDelay: "0.7s",
          }}
        >
          Four colors reveal who speaks in Scripture. Read solo, with friends,
          or lead a group&nbsp;&mdash; and discover the Bible like never before.
        </p>

        {/* Buttons */}
        <div
          className="flex items-center gap-3 mt-8 flex-wrap justify-center"
          style={{
            opacity: 0,
            animation: "heroReveal 0.8s ease forwards",
            animationDelay: "0.9s",
          }}
        >
          <a
            href="#suite"
            className="group relative inline-flex items-center justify-center rounded-full text-white overflow-hidden transition-colors duration-300"
            style={{
              backgroundColor: "var(--ink)",
              padding: "0.9rem 2.2rem",
              fontSize: "0.88rem",
              fontWeight: 500,
            }}
          >
            <span
              className="absolute inset-0 transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100"
              style={{ background: "var(--ruby)" }}
            />
            <span className="relative z-10">Explore the Suite</span>
          </a>
          <a
            href="#demo"
            className="inline-flex items-center justify-center rounded-full transition-colors duration-300 hover:bg-black/[0.03]"
            style={{
              border: "1px solid var(--ink4)",
              padding: "0.9rem 2.2rem",
              fontSize: "0.88rem",
              fontWeight: 500,
              color: "var(--ink)",
            }}
          >
            Watch Demo
          </a>
        </div>

        {/* Color bar */}
        <div
          className="group flex items-center gap-1 mt-10"
          style={{
            opacity: 0,
            animation: "heroReveal 0.8s ease forwards",
            animationDelay: "1.1s",
          }}
        >
          {COLOR_BARS.map((bar, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-500 group-hover:!w-[60px]"
              style={{
                width: bar.width,
                height: 3,
                background: bar.color,
              }}
            />
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-500"
        style={{
          opacity: showHint ? 1 : 0,
          animation: showHint ? undefined : "none",
        }}
      >
        <div
          className="relative rounded-full"
          style={{
            width: 18,
            height: 28,
            border: "1.5px solid var(--ink4)",
          }}
        >
          <span
            className="absolute rounded-full"
            style={{
              width: 2.5,
              height: 5,
              background: "var(--ink3)",
              left: "50%",
              top: 5,
              animation: "mouseScroll 1.8s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
