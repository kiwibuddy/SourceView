"use client";

import React, { useEffect, useRef, useState, useCallback, type FC } from "react";
import Image from "next/image";
import Link from "next/link";

const INFLUENCER_IMAGES = [
  "/images/influencers/influencer-1.png",
  "/images/influencers/influencer-3.png",
  "/images/influencers/influencer-2.png",
  "/images/influencers/influencer-6.png",
  "/images/influencers/influencer-4.png",
  "/images/influencers/influencer-5.png",
];

const REVEAL_ANIMATIONS = [
  "reelRevealRight",
  "reelRevealUp",
  "reelRevealLeft",
  "reelRevealDown",
  "reelRevealRight",
  "reelRevealUp",
];

const KEN_BURNS_TRANSFORMS = [
  "scale(1.08) translate(-1.5%, -1%)",
  "scale(1.1) translate(1.5%, -0.5%)",
  "scale(1.06) translate(-0.5%, 1%)",
  "scale(1.09) translate(1%, 1%)",
  "scale(1.07) translate(-1%, -1.5%)",
  "scale(1.1) translate(0.5%, -1%)",
];

const INTERVAL = 4500;

const InfluencerReel: FC = () => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(-1);
  const [progressKey, setProgressKey] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setPrev(current);
      setTransitioning(true);
      setCurrent((c) => (c + 1) % INFLUENCER_IMAGES.length);
      setProgressKey((k) => k + 1);
      const timeout = setTimeout(() => setTransitioning(false), 900);
      return () => clearTimeout(timeout);
    }, INTERVAL);
    return () => clearInterval(id);
  }, [current]);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "var(--radius)",
        width: "100%",
        height: "100%",
        background: "#111",
      }}
    >
      {/* Previous (outgoing) layer — always visible behind */}
      {prev >= 0 && (
        <div
          key={`bg-${prev}`}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
          }}
        >
          <img
            src={INFLUENCER_IMAGES[prev]}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: KEN_BURNS_TRANSFORMS[prev],
            }}
          />
        </div>
      )}

      {/* Current (incoming) layer — clip-path reveal */}
      <div
        key={`fg-${current}-${progressKey}`}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          animation: `${REVEAL_ANIMATIONS[current % REVEAL_ANIMATIONS.length]} 0.9s cubic-bezier(0.65, 0, 0.35, 1) forwards`,
        }}
      >
        <img
          src={INFLUENCER_IMAGES[current]}
          alt={`People using SourceView ${current + 1}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "scale(1)",
            animation: `reelDrift${current % REVEAL_ANIMATIONS.length} ${INTERVAL}ms ease-out forwards`,
          }}
        />
      </div>

      {/* Story-style progress indicators */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          display: "flex",
          gap: 3,
          padding: "10px 10px 0",
          zIndex: 10,
        }}
      >
        {INFLUENCER_IMAGES.map((_, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: 2.5,
              background: "rgba(255,255,255,0.25)",
              borderRadius: 2,
              overflow: "hidden",
              backdropFilter: "blur(4px)",
            }}
          >
            <div
              key={i === current ? progressKey : `s-${i}`}
              style={{
                height: "100%",
                background: "rgba(255,255,255,0.92)",
                borderRadius: 2,
                transformOrigin: "left",
                transform: i < current ? "scaleX(1)" : i > current ? "scaleX(0)" : undefined,
                animation: i === current ? `reelTimer ${INTERVAL}ms linear forwards` : "none",
              }}
            />
          </div>
        ))}
      </div>

      {/* Premium vignette overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 5,
          background: `
            radial-gradient(ellipse 120% 80% at 50% 0%, rgba(0,0,0,0.2) 0%, transparent 60%),
            radial-gradient(ellipse 120% 60% at 50% 100%, rgba(0,0,0,0.25) 0%, transparent 50%),
            linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.06) 100%)
          `,
        }}
      />
    </div>
  );
};

interface Product {
  name: string;
  logo: string;
  badge: string;
  badgeColor: string;
  description: string;
  tags: string[];
  link: string;
  accent: string;
  size: "lg" | "md" | "sm";
}

const products: Product[] = [
  {
    name: "SourceView Bible",
    logo: "/images/sourceview-logo.jpg",
    badge: "Flagship",
    badgeColor: "var(--god)",
    description:
      "The original four-color Bible experience. Red for God, green for leads, blue for supporting sources, and black for the narrator — turning Scripture into a dramatic, living script. Over 1,400 indexed sources and a full data discovery center.",
    tags: ["iOS", "Android"],
    link: "/sourceview-bible",
    accent: "var(--god)",
    size: "lg",
  },
  {
    name: "SourceView Together",
    logo: "/images/sv-together-logo.jpg",
    badge: "New",
    badgeColor: "var(--lead)",
    description:
      "Read the Bible together in speech bubbles. Assign reading roles, react with emoji, and discuss with tailored study questions for families, youth, and small groups. Available in English and French.",
    tags: ["iOS", "Android"],
    link: "/sourceview-together",
    accent: "var(--lead)",
    size: "md",
  },
  {
    name: "Web Reader",
    logo: "/images/sv-reader-logo.png",
    badge: "Web",
    badgeColor: "var(--support)",
    description:
      "The full SourceView experience in your browser. No download required — read the four-color text, explore source profiles, and study the Bible from any device with a modern, responsive interface.",
    tags: ["Web App"],
    link: "/web-reader",
    accent: "var(--support)",
    size: "md",
  },
  {
    name: "SphereView",
    logo: "/images/sphereview-logo.png",
    badge: "Add-on",
    badgeColor: "var(--ruby)",
    description:
      "416 passages organized across seven spheres of cultural influence — Religion, Family, Government, Communications, Education, Economy, and Celebration. Built for the Seven Spheres Society small group Bible study.",
    tags: ["Web", "In-App"],
    link: "/sphereview",
    accent: "#F1C40F",
    size: "sm",
  },
  {
    name: "VerbView",
    logo: "/images/verbview-logo.jpg",
    badge: "Coming Soon",
    badgeColor: "var(--ink4)",
    description:
      "Every verb in Scripture, mapped and visualized by tense, mood, and voice. A first-of-its-kind tool for understanding the action and movement within the biblical text.",
    tags: ["Coming Soon"],
    link: "/verbview",
    accent: "#9B59B6",
    size: "sm",
  },
  {
    name: "CommandView",
    logo: "/images/commandview-logo.jpg",
    badge: "Coming Soon",
    badgeColor: "var(--ink4)",
    description:
      "Every command in Scripture, identified and categorized. See who gives the command, who receives it, and how commands flow through the biblical narrative.",
    tags: ["Coming Soon"],
    link: "/commandview",
    accent: "#E67E22",
    size: "sm",
  },
];

const sizeClasses: Record<string, string> = {
  lg: "col-span-1 md:col-span-8 md:row-span-2",
  md: "col-span-1 md:col-span-6",
  sm: "col-span-1 md:col-span-4",
};

const CardContent: FC<{ product: Product }> = ({ product }) => (
  <>
    <div
      className="absolute bottom-0 left-[1.8rem] right-[1.8rem] rounded-t-sm transition-all duration-400 h-0 group-hover:h-[3px]"
      style={{ background: product.accent }}
    />

    <div className="mb-4 flex items-start justify-between">
      <Image
        src={product.logo}
        alt={`${product.name} logo`}
        width={48}
        height={48}
        className="transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-[3deg]"
        style={{
          borderRadius: "var(--radius-sm)",
          boxShadow: "0 3px 12px rgba(0,0,0,0.06)",
        }}
      />
      <span
        className="inline-flex items-center rounded-full font-medium"
        style={{
          fontSize: "0.5rem",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          padding: "0.12rem 0.45rem",
          color: product.badgeColor,
          background: `color-mix(in srgb, ${product.badgeColor} 6%, transparent)`,
        }}
      >
        {product.badge}
      </span>
    </div>

    <h3
      className="font-serif transition-colors duration-300 group-hover:text-[var(--ruby)]"
      style={{
        fontSize: "1.2rem",
        fontWeight: 500,
        letterSpacing: "-0.02em",
        marginBottom: "0.35rem",
      }}
    >
      {product.name}
    </h3>

    <p
      style={{
        fontSize: "0.78rem",
        color: "var(--ink3)",
        lineHeight: 1.6,
        fontWeight: 300,
      }}
    >
      {product.description}
    </p>

    <div className="mt-auto flex flex-wrap gap-1 pt-4">
      {product.tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full"
          style={{
            fontSize: "0.55rem",
            padding: "0.15rem 0.45rem",
            background: "rgba(0,0,0,0.03)",
            color: "var(--ink4)",
            border: "1px solid rgba(0,0,0,0.03)",
          }}
        >
          {tag}
        </span>
      ))}
    </div>

    <span
      className="mt-3 inline-flex items-center gap-1 transition-[gap] duration-200 group-hover:gap-2"
      style={{ fontSize: "0.72rem", fontWeight: 500, color: "var(--ruby)" }}
    >
      Learn more <span aria-hidden="true">&rarr;</span>
    </span>
  </>
);

const ReelCard: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
        else setVisible(false);
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="col-span-1 md:col-span-4 md:row-span-2"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(35px)",
        transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.1s",
      }}
    >
      <div
        className="relative h-full overflow-hidden"
        style={{
          borderRadius: "var(--radius)",
          border: "1px solid rgba(0,0,0,0.05)",
        }}
      >
        <InfluencerReel />
      </div>
    </div>
  );
};

const BentoCard: FC<{ product: Product; index: number }> = ({ product, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
        else setVisible(false);
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${sizeClasses[product.size]}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(35px)",
        transition: `all 0.8s cubic-bezier(0.23, 1, 0.32, 1) ${index * 0.1}s`,
      }}
    >
      <Link
        href={product.link}
        className="bento-card group relative flex flex-col h-full"
        style={{
          "--card-accent": product.accent,
          padding: "1.8rem",
          background: "rgba(255,255,255,0.6)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          border: "1px solid rgba(0,0,0,0.05)",
          borderRadius: "var(--radius)",
          transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
          overflow: "hidden",
        } as React.CSSProperties}
      >
        <CardContent product={product} />
      </Link>
    </div>
  );
};

const ProductGrid: FC = () => (
  <section id="suite" style={{ padding: "4rem 0 5rem" }}>
    <div className="mx-auto max-w-[1200px]" style={{ padding: "0 2.5rem" }}>
      <div className="mb-14 text-center">
        <p className="s-label">The SourceView Suite</p>
        <h2 className="s-head">Six tools. One mission.</h2>
        <p className="s-desc mx-auto" style={{ textAlign: "center" }}>
          Each reveals a different dimension of the biblical text.
        </p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-12 gap-4"
        style={{ gridAutoRows: "minmax(180px, auto)" }}
      >
        {products.map((product, i) => (
          <React.Fragment key={product.name}>
            <BentoCard product={product} index={i} />
            {i === 0 && <ReelCard />}
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

export default ProductGrid;
