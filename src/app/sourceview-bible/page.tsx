import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductPageHero from "../components/ProductPageHero";
import FeatureGrid from "../components/FeatureGrid";
import ProductCta from "../components/ProductCta";

export const metadata: Metadata = {
  title: "SourceView Bible — The Original Four-Color Bible Experience",
  description:
    "Built on over 40,000 hours of original research, SourceView introduced the first major formatting innovation of the biblical text since the Reformation.",
};

export default function SourceViewBiblePage() {
  const features = [
    {
      title: "Four-Color Dramatic Text",
      description:
        "Red for God, green for lead characters, blue for supporting sources, black for the narrator. Reads like a movie script.",
    },
    {
      title: "Source Profiles & Metadata",
      description:
        "Tap any speaker's name to see all their conversations across every book. Explore 1,400+ indexed biblical sources.",
    },
    {
      title: "Data Discovery Center",
      description:
        "Create pie charts, bar charts, and word clouds. Ask questions never possible before — who speaks most? What words does God say to women?",
    },
    {
      title: "Seamless Reading",
      description:
        "Scroll through entire books without page breaks. Hide chapter and verse numbers. Calculated read times for every book and chapter.",
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <ProductPageHero
          logoSrc="/images/sourceview-logo.jpg"
          logoAlt="SourceView Bible"
          title="SourceView Bible"
          tagline="The original four-color Bible experience"
          accentColor="var(--god)"
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
            SourceView Bible is not just a digital version of a printed Bible. It
            is a fresh, innovative way to take a deeper look at God&rsquo;s
            story: what&rsquo;s been written, who said what, and how its words
            impact and shape our lives, our work, and our world.
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
            Built on over 40,000 hours of original research, SourceView
            introduced the first major formatting innovation of the biblical
            text since the introduction of verses during the Reformation —
            nearly five hundred years ago.
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
            Small groups reading dramatically with each person taking a color.
            Families wanting to engage children in Scripture. Seminary students
            exploring source data. Individual study sessions focused on
            discovering who speaks.
          </p>
          <ProductCta
            appStoreUrl="https://apps.apple.com/us/app/sourceview-bible/id1114617271"
            playStoreUrl="https://play.google.com/store/apps/details?id=com.sourceviewbible"
            accentColor="var(--god)"
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
