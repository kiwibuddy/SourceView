import type { FC } from "react";

interface ProductCtaProps {
  appStoreUrl?: string;
  playStoreUrl?: string;
  webUrl?: string;
  accentColor?: string;
}

const AppleIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const PlayIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.18 23.67c-.37-.2-.68-.58-.68-1.16V1.49c0-.58.31-.96.68-1.16l11.27 11.67L3.18 23.67z" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    width={16}
    height={16}
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

const ProductCta: FC<ProductCtaProps> = ({
  appStoreUrl,
  playStoreUrl,
  webUrl,
  accentColor = "var(--lead)",
}) => {
  return (
    <div
      className="flex flex-row gap-[0.6rem] mt-8 flex-wrap"
      style={{ gap: "0.6rem" }}
    >
      {appStoreUrl && (
        <a
          href={appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-[0.4rem] rounded-full transition-all duration-200 hover:-translate-y-px bg-[var(--ink)] hover:!bg-[var(--ruby)] text-white"
          style={{
            padding: "0.75rem 1.8rem",
            fontSize: "0.82rem",
            fontWeight: 500,
          }}
        >
          <AppleIcon />
          App Store
        </a>
      )}
      {playStoreUrl && (
        <a
          href={playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-[0.4rem] rounded-full transition-all duration-200 hover:-translate-y-px"
          style={{
            padding: "0.75rem 1.8rem",
            fontSize: "0.82rem",
            fontWeight: 500,
            backgroundColor: accentColor,
            color: "white",
          }}
        >
          <PlayIcon />
          Google Play
        </a>
      )}
      {webUrl && (
        <a
          href={webUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-[0.4rem] rounded-full transition-all duration-200 hover:border-[var(--ruby)] hover:text-[var(--ruby)]"
          style={{
            padding: "0.75rem 1.8rem",
            fontSize: "0.82rem",
            fontWeight: 500,
            backgroundColor: "var(--bg2)",
            color: "var(--ink)",
            border: "1px solid rgba(0,0,0,0.08)",
          }}
        >
          <GlobeIcon />
          Open Web Reader
        </a>
      )}
    </div>
  );
};

export default ProductCta;
