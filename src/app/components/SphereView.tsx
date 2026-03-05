"use client";

import { type FC } from "react";
import Image from "next/image";

interface SphereViewProps {}

interface Sphere {
  name: string;
  color: string;
  image: string;
  position: React.CSSProperties;
}

const SPHERES: Sphere[] = [
  {
    name: "Religion",
    color: "#4CAF50",
    image: "/images/sphere-religion.svg",
    position: { top: 0, left: "50%", transform: "translate(-50%, -15%)" },
  },
  {
    name: "Family",
    color: "#F44336",
    image: "/images/sphere-family.svg",
    position: { top: "12%", right: "5%", transform: "translate(10%, 0)" },
  },
  {
    name: "Government",
    color: "#FFC107",
    image: "/images/sphere-government.svg",
    position: { top: "45%", right: "-8%" },
  },
  {
    name: "Media",
    color: "#7C4DFF",
    image: "/images/sphere-media.svg",
    position: { bottom: "8%", right: "10%", transform: "translate(0, 10%)" },
  },
  {
    name: "Education",
    color: "#00BCD4",
    image: "/images/sphere-education.svg",
    position: { bottom: "8%", left: "10%", transform: "translate(0, 10%)" },
  },
  {
    name: "Economy",
    color: "#FF9800",
    image: "/images/sphere-economy.svg",
    position: { top: "45%", left: "-8%" },
  },
  {
    name: "Arts",
    color: "#E91E63",
    image: "/images/sphere-arts.svg",
    position: { top: "12%", left: "5%", transform: "translate(-10%, 0)" },
  },
];

const SphereView: FC<SphereViewProps> = () => {
  return (
    <section className="text-center" style={{ padding: "7rem 2.5rem" }}>
      <p className="s-label">SphereView</p>
      <h2 className="s-head">Seven Spheres of Influence</h2>
      <p className="s-desc mx-auto" style={{ textAlign: "center" }}>
        416 key passages reveal God&rsquo;s design for every area of society.
      </p>

      {/* Orbital ring container */}
      <div
        className="relative mx-auto mt-14 w-[260px] h-[260px] md:w-[300px] md:h-[300px] lg:w-[380px] lg:h-[380px]"
      >
        {/* Center hub */}
        <div
          className="absolute top-1/2 left-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 w-[65px] h-[65px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] rounded-full overflow-hidden"
          style={{
            backgroundColor: "#2D3436",
            border: "3px solid #444",
            boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
          }}
        >
          <Image
            src="/images/sphere-center.png"
            alt="Center sphere"
            fill
            className="object-cover rounded-full"
          />
        </div>

        {/* Orbiting spheres */}
        {SPHERES.map((sphere) => (
          <div
            key={sphere.name}
            className="absolute flex flex-col items-center cursor-pointer w-[48px] h-[48px] md:w-[56px] md:h-[56px] lg:w-[68px] lg:h-[68px] rounded-full hover:scale-[1.2] hover:z-30"
            style={{
              ...sphere.position,
              backgroundColor: sphere.color,
              border: "2px solid rgba(255,255,255,0.3)",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
            }}
          >
            <div className="relative w-6 h-6 md:w-7 md:h-7 lg:w-9 lg:h-9">
              <Image
                src={sphere.image}
                alt={sphere.name}
                fill
                className="object-contain"
                style={{ filter: "brightness(0) invert(1)", opacity: 0.9 }}
              />
            </div>

            <span
              className="absolute whitespace-nowrap"
              style={{
                bottom: -20,
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
        ))}
      </div>
    </section>
  );
};

export default SphereView;
