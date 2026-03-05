import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductPageHero from "../components/ProductPageHero";
import FeatureGrid from "../components/FeatureGrid";

export const metadata: Metadata = {
  title: "VerbView — Every Verb. Every Tense. Visualized.",
  description:
    "VerbView maps every verb in Scripture by tense, mood, and voice — revealing patterns never seen before.",
};

export default function VerbViewPage() {
  const features = [
    {
      title: "Verb Mapping",
      description:
        "Every verb in Scripture categorized by tense, mood, and voice with visual indicators that make grammatical patterns immediately apparent.",
    },
    {
      title: "Cross-Language Analysis",
      description:
        "Compare how verbs in the original Hebrew and Greek are translated into English, revealing nuances that traditional translations can miss.",
    },
    {
      title: "Visual Patterns",
      description:
        "Color-coded verb visualizations let you see at a glance how different books and authors use language differently.",
    },
    {
      title: "Research Tools",
      description:
        "Export verb data, create custom filters, and build research queries that would take months to do manually.",
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <ProductPageHero
          logoSrc="/images/verbview-logo.jpg"
          logoAlt="VerbView"
          title="VerbView"
          tagline="Every verb. Every tense. Visualized."
          accentColor="#9B59B6"
        />
        <div
          className="max-w-[900px] mx-auto pb-20"
          style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
        >
          <p
            style={{
              fontSize: "0.88rem",
              color: "var(--ink2)",
              lineHeight: 1.7,
              marginBottom: "0.75rem",
              fontWeight: 300,
            }}
          >
            VerbView is an upcoming addition to the SourceView suite that will
            map every verb in Scripture by tense, mood, and voice — revealing
            grammatical patterns and linguistic insights never seen before.
          </p>
          <p
            style={{
              fontSize: "0.88rem",
              color: "var(--ink2)",
              lineHeight: 1.7,
              marginBottom: "0.75rem",
              fontWeight: 300,
            }}
          >
            By visualizing the verbal structure of biblical text, VerbView will
            give scholars, students, and curious readers a powerful new lens for
            understanding the original languages and their English translations.
          </p>
          <FeatureGrid features={features} />
          <div
            className="mt-8 rounded-[var(--radius)]"
            style={{
              padding: "2rem",
              backgroundColor: "var(--bg2)",
              border: "1px solid rgba(0,0,0,0.04)",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "0.88rem",
                color: "var(--ink3)",
                marginBottom: "0.25rem",
              }}
            >
              VerbView is currently in development.
            </p>
            <p
              style={{
                fontSize: "0.78rem",
                color: "var(--ink4)",
              }}
            >
              Sign up to be notified when it launches.
            </p>
          </div>
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
