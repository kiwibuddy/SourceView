import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductPageHero from "../components/ProductPageHero";
import FeatureGrid from "../components/FeatureGrid";
import ProductCta from "../components/ProductCta";

export const metadata: Metadata = {
  title: "SourceView Together — Scripture as a Shared Experience",
  description:
    "SourceView Together changes Bible reading by making it a shared, interactive experience with 365 natural story segments.",
};

export default function SourceViewTogetherPage() {
  const features = [
    {
      title: "Group Reading Sessions",
      description:
        "Connect with up to 4 friends via QR codes. Each person reads different parts of the story with color-coded speech bubbles.",
    },
    {
      title: "Interactive Reactions",
      description:
        "Mark verses with meaningful emoji reactions: heart when it touches you, thumbs up for agreement, thinking face for reflection, prayer hands when moved to pray.",
    },
    {
      title: "365 Story Segments",
      description:
        "The complete Bible broken into natural story breaks, perfect for daily reading. Follow the \"Bible in 1 Year\" plan or take focused challenges.",
    },
    {
      title: "Progress & Streaks",
      description:
        "Track your reading journey with detailed statistics, achievements, daily streaks, and reading challenges like \"The Gospels\" or \"New Testament Journey.\"",
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <ProductPageHero
          logoSrc="/images/sv-together-logo.jpg"
          logoAlt="SourceView Together"
          title="SourceView Together"
          tagline="Scripture as a shared, interactive experience"
          accentColor="var(--lead)"
        />
        <div className="max-w-[900px] mx-auto pb-20" style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>
          <p
            style={{
              fontSize: "0.88rem",
              color: "var(--ink2)",
              lineHeight: 1.7,
              marginBottom: "0.75rem",
              fontWeight: 300,
            }}
          >
            SourceView Together changes Bible reading by making it a shared,
            interactive experience. The complete Bible is broken into 365
            natural story segments designed to be read together with friends in
            real-time.
          </p>
          <FeatureGrid features={features} />
          <h3
            className="font-serif mt-8 mb-2"
            style={{
              fontSize: "1.15rem",
              fontWeight: 500,
            }}
          >
            Perfect For
          </h3>
          <p
            style={{
              fontSize: "0.88rem",
              color: "var(--ink2)",
              lineHeight: 1.7,
              marginBottom: "0.75rem",
              fontWeight: 300,
            }}
          >
            Youth groups wanting engaging Bible study. Families reading together.
            Small groups exploring Scripture in community. New believers looking
            for an accessible, social way to start reading.
          </p>
          <ProductCta
            appStoreUrl="https://apps.apple.com/us/app/sourceview-together-bible/id6748708102"
            playStoreUrl="https://play.google.com/store/apps/details?id=com.sourceview.together"
            accentColor="var(--lead)"
          />
          <div
            className="mt-4 rounded"
            style={{
              height: "3px",
              background:
                "linear-gradient(90deg, var(--god), var(--lead), var(--support), var(--narrator))",
            }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
