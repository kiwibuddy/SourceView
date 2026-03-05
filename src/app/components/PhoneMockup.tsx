import type { FC } from "react";

interface PhoneMockupProps {
  src: string;
  alt: string;
  delay?: string;
  rotate?: string;
}

const PhoneMockup: FC<PhoneMockupProps> = ({
  src,
  alt,
  delay = "0s",
  rotate = "0deg",
}) => {
  return (
    <div
      style={{
        animation: "phoneFloat 6s ease-in-out infinite",
        animationDelay: delay,
        transform: `rotate(${rotate})`,
      }}
    >
      <div
        className="relative overflow-hidden"
        style={{
          width: 220,
          borderRadius: 36,
          background: "#1a1a1a",
          padding: 8,
          boxShadow:
            "0 25px 60px rgba(0,0,0,0.15), 0 8px 20px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(255,255,255,0.08)",
        }}
      >
        {/* Dynamic Island */}
        <div
          className="absolute z-10 left-1/2 -translate-x-1/2"
          style={{
            top: 14,
            width: 72,
            height: 22,
            borderRadius: 20,
            background: "#000",
          }}
        />

        {/* Screen */}
        <div
          className="overflow-hidden"
          style={{
            borderRadius: 28,
            background: "#000",
            aspectRatio: "9/19.5",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
