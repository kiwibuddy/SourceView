import type { FC } from "react";

interface ProductPageHeroProps {
  logoSrc: string;
  logoAlt: string;
  title: string;
  tagline: string;
  accentColor: string;
}

const ProductPageHero: FC<ProductPageHeroProps> = ({
  logoSrc,
  logoAlt,
  title,
  tagline,
}) => {
  return (
    <section
      className="mx-auto max-w-[900px] flex flex-col sm:flex-row gap-8 items-start"
      style={{ padding: "10rem 2.5rem 5rem" }}
    >
      <div className="flex-shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt={logoAlt}
          width={80}
          height={80}
          className="rounded-[18px] w-20 h-20 object-cover"
          style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
        />
      </div>
      <div>
        <h1
          className="font-serif"
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 500,
            letterSpacing: "-0.03em",
            color: "var(--ink)",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: "0.88rem",
            color: "var(--ink3)",
            fontWeight: 300,
            fontStyle: "italic",
            marginTop: "0.25rem",
          }}
        >
          {tagline}
        </p>
      </div>
    </section>
  );
};

export default ProductPageHero;
