import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

const COLUMNS: FooterColumn[] = [
  {
    heading: "Products",
    links: [
      { label: "SourceView Bible", href: "/sourceview-bible" },
      { label: "SourceView Together", href: "/sourceview-together" },
      { label: "Web Reader", href: "/web-reader" },
      { label: "SphereView", href: "/sphereview" },
      { label: "VerbView", href: "/verbview" },
      { label: "CommandView", href: "/commandview" },
    ],
  },
  {
    heading: "Resources",
    links: [
      {
        label: "Seven Spheres",
        href: "https://sourceviewreader.web.app/sphereView",
        external: true,
      },
      { label: "Reading Plans", href: "#" },
      { label: "Help Center", href: "#" },
    ],
  },
  {
    heading: "Connect",
    links: [
      {
        label: "Facebook",
        href: "https://facebook.com/sourceviewbible",
        external: true,
      },
      {
        label: "Twitter / X",
        href: "https://twitter.com/sourceviewbible",
        external: true,
      },
      { label: "YouTube", href: "#" },
      {
        label: "Contact",
        href: "mailto:hello@sourceview.com",
        external: true,
      },
    ],
  },
];

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <footer
    className="mx-auto max-w-[1200px]"
    style={{
      padding: "3.5rem 2.5rem 1.5rem",
      borderTop: "1px solid rgba(0,0,0,0.04)",
    }}
  >
    {/* Top grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-12">
      {/* Brand column */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Image
            src="/images/sourceview-logo.jpg"
            alt="SourceView"
            width={28}
            height={28}
            className="rounded-[7px]"
          />
          <span
            className="font-serif"
            style={{ fontSize: "1.2rem" }}
          >
            SourceView
          </span>
        </div>
        <p
          className="max-w-[260px]"
          style={{
            color: "var(--ink4)",
            fontSize: "0.78rem",
            fontWeight: 300,
            lineHeight: 1.6,
          }}
        >
          A revolutionary suite of Bible tools built on 40,000 hours of
          research.
        </p>
      </div>

      {/* Link columns */}
      {COLUMNS.map((col) => (
        <div key={col.heading}>
          <h4
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--ruby)",
              fontWeight: 500,
              marginBottom: "0.875rem",
            }}
          >
            {col.heading}
          </h4>

          <ul className="list-none p-0 m-0">
            {col.links.map((link) => (
              <li key={link.label} style={{ marginBottom: "0.5rem" }}>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200 hover:text-[var(--ink)]"
                    style={{
                      display: "block",
                      color: "var(--ink4)",
                      fontSize: "0.78rem",
                      fontWeight: 300,
                    }}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 hover:text-[var(--ink)]"
                    style={{
                      display: "block",
                      color: "var(--ink4)",
                      fontSize: "0.78rem",
                      fontWeight: 300,
                    }}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {/* Bottom bar */}
    <div
      className="flex flex-col sm:flex-row items-center justify-between gap-2"
      style={{
        paddingTop: "1.5rem",
        borderTop: "1px solid rgba(0,0,0,0.03)",
      }}
    >
      <span
        style={{
          fontSize: "0.68rem",
          color: "var(--ink4)",
          fontWeight: 300,
        }}
      >
        © 2026 SourceView Publishing LLC
      </span>
      <span
        className="font-serif italic"
        style={{
          fontSize: "0.72rem",
          color: "var(--ink4)",
        }}
      >
        Experience the Drama of God&rsquo;s Story
      </span>
    </div>
  </footer>
);

export default Footer;
