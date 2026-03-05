import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  name: string;
  logo: string;
  badge: string;
  badgeColor: string;
  description: string;
  tags: string[];
  link: string;
  accent: string;
}

const products: Product[] = [
  {
    name: "SourceView Bible",
    logo: "/images/sourceview-logo.jpg",
    badge: "Flagship",
    badgeColor: "var(--god)",
    description: "The original four-color Bible experience",
    tags: ["iOS", "Android"],
    link: "/sourceview-bible",
    accent: "var(--god)",
  },
  {
    name: "SourceView Together",
    logo: "/images/sv-together-logo.jpg",
    badge: "New",
    badgeColor: "var(--lead)",
    description: "Scripture as a shared, interactive experience",
    tags: ["iOS", "Android"],
    link: "/sourceview-together",
    accent: "var(--lead)",
  },
  {
    name: "Web Reader",
    logo: "/images/sv-reader-logo.png",
    badge: "Web",
    badgeColor: "var(--support)",
    description: "The full experience in your browser",
    tags: ["Web App"],
    link: "/web-reader",
    accent: "var(--support)",
  },
  {
    name: "SphereView",
    logo: "/images/sphereview-logo.png",
    badge: "Add-on",
    badgeColor: "var(--ruby)",
    description: "Seven Spheres of Influence",
    tags: ["Web", "In-App"],
    link: "/sphereview",
    accent: "#F1C40F",
  },
  {
    name: "VerbView",
    logo: "/images/verbview-logo.jpg",
    badge: "Coming Soon",
    badgeColor: "var(--ink4)",
    description: "Every verb. Every tense. Visualized.",
    tags: ["Coming Soon"],
    link: "/verbview",
    accent: "#9B59B6",
  },
  {
    name: "CommandView",
    logo: "/images/commandview-logo.jpg",
    badge: "Coming Soon",
    badgeColor: "var(--ink4)",
    description: "Every command in Scripture, mapped",
    tags: ["Coming Soon"],
    link: "/commandview",
    accent: "#E67E22",
  },
];

interface ProductGridProps {}

const ProductGrid: FC<ProductGridProps> = () => (
  <section style={{ padding: "7rem 0" }}>
    <div className="mx-auto max-w-[1200px]" style={{ padding: "0 2.5rem" }}>
      <div className="mb-12 text-center">
        <p className="s-label">The Suite</p>
        <h2 className="s-head">Everything you need to experience Scripture</h2>
        <p className="s-desc mx-auto" />
      </div>

      <div
        className="grid grid-cols-3 overflow-hidden"
        style={{
          gap: "1px",
          background: "rgba(0,0,0,0.04)",
          borderRadius: "var(--radius)",
        }}
      >
        {products.map((product) => (
          <Link
            key={product.name}
            href={product.link}
            className="group relative flex flex-col bg-white transition-colors hover:bg-[var(--bg2)]"
            style={{ padding: "2.2rem 1.8rem" }}
          >
            <div
              className="absolute bottom-0 left-0 w-full scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
              style={{ height: "2px", background: product.accent }}
            />

            <div className="mb-4 flex items-start justify-between">
              <Image
                src={product.logo}
                alt={`${product.name} logo`}
                width={48}
                height={48}
                className="transition-transform duration-300 group-hover:scale-[1.08] group-hover:-rotate-2"
                style={{
                  borderRadius: "var(--radius-sm)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                }}
              />
              <span
                className="inline-flex items-center rounded-full font-medium"
                style={{
                  fontSize: "0.58rem",
                  padding: "0.2rem 0.6rem",
                  color: product.badgeColor,
                  background: `color-mix(in srgb, ${product.badgeColor} 8%, transparent)`,
                  border: `1px solid color-mix(in srgb, ${product.badgeColor} 15%, transparent)`,
                }}
              >
                {product.badge}
              </span>
            </div>

            <h3
              className="font-serif transition-colors group-hover:text-[var(--ruby)]"
              style={{ fontSize: "1.25rem", fontWeight: 500 }}
            >
              {product.name}
            </h3>

            <p
              className="mt-1"
              style={{
                fontSize: "0.78rem",
                color: "var(--ink3)",
                fontWeight: 300,
              }}
            >
              {product.description}
            </p>

            <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full"
                  style={{
                    fontSize: "0.58rem",
                    padding: "0.15rem 0.5rem",
                    background: "var(--bg2)",
                    color: "var(--ink4)",
                    border: "1px solid rgba(0,0,0,0.04)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <span
              className="mt-4 inline-flex items-center gap-1 transition-[gap] duration-200 group-hover:gap-2"
              style={{
                fontSize: "0.72rem",
                fontWeight: 500,
                color: "var(--ruby)",
              }}
            >
              Learn more <span aria-hidden="true">→</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ProductGrid;
