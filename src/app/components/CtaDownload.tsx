import type { FC } from "react";

interface Platform {
  label: string;
  name: string;
  href: string;
  icon: React.ReactNode;
}

const AppleIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const PlayIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.18 23.67c-.37-.2-.68-.58-.68-1.16V1.49c0-.58.31-.96.68-1.16l11.27 11.67L3.18 23.67z" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx={12} cy={12} r={9} />
    <path d="M12 3c2.485 0 4.5 4.03 4.5 9s-2.015 9-4.5 9m0-18c-2.485 0-4.5 4.03-4.5 9s2.015 9 4.5 9M3 12h18" />
  </svg>
);

const PLATFORMS: Platform[] = [
  {
    label: "Download on the",
    name: "App Store",
    href: "https://apps.apple.com/us/app/sourceview-bible/id1114617271",
    icon: <AppleIcon />,
  },
  {
    label: "Get it on",
    name: "Google Play",
    href: "https://play.google.com/store/apps/details?id=com.sourceview.together",
    icon: <PlayIcon />,
  },
  {
    label: "Open in",
    name: "Web Browser",
    href: "https://sourceviewreader.web.app/",
    icon: <GlobeIcon />,
  },
];

interface CtaDownloadProps {}

const CtaDownload: FC<CtaDownloadProps> = () => (
  <section
    id="download"
    className="mx-auto max-w-[750px] text-center"
    style={{ padding: "8rem 2.5rem 5rem" }}
  >
    <h2
      className="font-serif"
      style={{
        fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
        fontWeight: 400,
        letterSpacing: "-0.03em",
        lineHeight: 1.08,
        marginBottom: "1rem",
      }}
    >
      Start seeing Scripture in a
      <br />
      <em
        style={{
          background: "linear-gradient(135deg, var(--ruby), var(--god))",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        whole new way
      </em>
    </h2>

    <p
      style={{
        color: "var(--ink3)",
        fontSize: "0.95rem",
        lineHeight: 1.7,
        marginBottom: "2.5rem",
        fontWeight: 300,
      }}
    >
      Free to download. iOS, Android, and the web.
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center flex-wrap gap-[0.65rem]">
      {PLATFORMS.map((p) => (
        <a
          key={p.name}
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center transition-all duration-200 hover:border-[var(--ruby)] hover:bg-[var(--ruby-soft)] hover:-translate-y-[3px]"
          style={{
            gap: "0.6rem",
            padding: "0.7rem 1.4rem",
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: "var(--radius-sm)",
          }}
        >
          <span style={{ color: "var(--ink)" }}>{p.icon}</span>
          <span className="flex flex-col text-left">
            <span
              style={{
                fontSize: "0.55rem",
                color: "var(--ink3)",
                lineHeight: 1.2,
                fontWeight: 400,
              }}
            >
              {p.label}
            </span>
            <span
              style={{
                fontSize: "0.92rem",
                fontWeight: 500,
                color: "var(--ink)",
                lineHeight: 1.2,
              }}
            >
              {p.name}
            </span>
          </span>
        </a>
      ))}
    </div>
  </section>
);

export default CtaDownload;
