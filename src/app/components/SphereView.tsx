"use client";

import { type FC } from "react";
import Image from "next/image";

interface Sphere {
  name: string;
  color: string;
  image: string;
}

const SPHERES: Sphere[] = [
  { name: "Religion", color: "#4CAF50", image: "/images/sphere-religion.svg" },
  { name: "Family", color: "#F44336", image: "/images/sphere-family.svg" },
  { name: "Government", color: "#FFC107", image: "/images/sphere-government.svg" },
  { name: "Communications", color: "#7C4DFF", image: "/images/sphere-communications.svg" },
  { name: "Education", color: "#00BCD4", image: "/images/sphere-education.svg" },
  { name: "Economy", color: "#FF9800", image: "/images/sphere-economy.svg" },
  { name: "Celebration", color: "#E91E63", image: "/images/sphere-celebration.svg" },
];

const DONUT_COLORS = [
  "#F44336", "#FF9800", "#FFC107", "#4CAF50",
  "#00BCD4", "#7C4DFF", "#E91E63",
];

function getSpherePosition(index: number, total: number) {
  const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
  const radius = 42;
  return {
    left: `${50 + radius * Math.cos(angle)}%`,
    top: `${50 + radius * Math.sin(angle)}%`,
  };
}

const AnimatedDonut: FC = () => {
  const segments = DONUT_COLORS.length;
  const segAngle = 360 / segments;

  const stops = DONUT_COLORS.map(
    (c, i) => `${c} ${i * segAngle}deg ${(i + 1) * segAngle}deg`
  ).join(", ");

  return (
    <div
      className="absolute top-1/2 left-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        width: "28%",
        height: "28%",
        background: "#2D3436",
        boxShadow: "0 6px 24px rgba(0,0,0,0.18)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="rounded-full"
        style={{
          width: "78%",
          height: "78%",
          background: `conic-gradient(${stops})`,
          animation: "sphereSpin 30s linear infinite",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="rounded-full"
          style={{
            width: "80%",
            height: "80%",
            background: "#2D3436",
          }}
        />
      </div>
    </div>
  );
};

const SphereView: FC = () => {
  return (
    <section className="text-center" style={{ padding: "7rem 2.5rem" }}>
      <p className="s-label">SphereView</p>
      <h2 className="s-head">Seven Spheres of Influence</h2>
      <p className="s-desc mx-auto" style={{ textAlign: "center" }}>
        416 key passages reveal God&rsquo;s design for every area of society.
      </p>

      <div className="relative mx-auto mt-14 w-[280px] h-[280px] md:w-[340px] md:h-[340px] lg:w-[420px] lg:h-[420px]">
        <AnimatedDonut />

        {SPHERES.map((sphere, i) => {
          const pos = getSpherePosition(i, SPHERES.length);
          return (
            <div
              key={sphere.name}
              className="absolute flex flex-col items-center"
              style={{
                left: pos.left,
                top: pos.top,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                className="rounded-full cursor-pointer hover:scale-[1.15] hover:z-30 flex items-center justify-center w-[52px] h-[52px] md:w-[62px] md:h-[62px] lg:w-[74px] lg:h-[74px]"
                style={{
                  backgroundColor: sphere.color,
                  border: "2.5px solid rgba(255,255,255,0.35)",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.12)",
                  transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                }}
              >
                <div className="relative w-8 h-8 md:w-9 md:h-9 lg:w-11 lg:h-11">
                  <Image
                    src={sphere.image}
                    alt={sphere.name}
                    fill
                    className="object-contain"
                    style={{ filter: "brightness(0) invert(1)", opacity: 0.9 }}
                  />
                </div>
              </div>
              <span
                className="whitespace-nowrap mt-2"
                style={{
                  fontSize: "0.52rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--ink3)",
                  fontWeight: 500,
                }}
              >
                {sphere.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SphereView;
