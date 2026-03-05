import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductPageHero from "../components/ProductPageHero";
import FeatureGrid from "../components/FeatureGrid";
import ProductCta from "../components/ProductCta";

export const metadata: Metadata = {
  title: "SourceView Web Reader — The Full Experience in Your Browser",
  description:
    "Access the complete SourceView Bible from any browser with powerful study tools built in.",
};

export default function WebReaderPage() {
  const features = [
    {
      title: "GAP Study Method",
      description:
        "Make your own observations (Go), interpretations (Apply), and applications (Practice) of Scripture with guided study tools.",
    },
    {
      title: "Quotation Links & Allusions",
      description:
        "Visualize how passages connect across books. See quotation links, allusions, and cross-references in context.",
    },
    {
      title: "Dramatic Group Reading",
      description:
        "Gather 4 people to read the speaking parts of Scripture in the conversational format — powerful for Bible studies and families.",
    },
    {
      title: "Seven Spheres Society",
      description:
        "Join the small group Bible study with passages and questions designed to help you serve God through your work in every sphere of life.",
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <ProductPageHero
          logoSrc="/images/sv-reader-logo.png"
          logoAlt="SourceView Web Reader"
          title="SourceView Web Reader"
          tagline="The full experience in your browser"
          accentColor="var(--support)"
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
            Access the complete SourceView Bible from any browser — desktop,
            tablet, or phone. The Web Reader brings the four-color dramatic
            reading experience online with powerful study tools built in.
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
            Bible study leaders who need a powerful web-based tool. Students and
            researchers wanting to explore quotation links. Anyone who prefers
            reading on a larger screen. Groups who want the dramatic reading
            experience without an app.
          </p>
          <ProductCta
            webUrl="https://sourceviewreader.web.app/"
            accentColor="var(--support)"
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
