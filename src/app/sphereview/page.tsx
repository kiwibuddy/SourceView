import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductPageHero from "../components/ProductPageHero";
import FeatureGrid from "../components/FeatureGrid";
import ProductCta from "../components/ProductCta";

export const metadata: Metadata = {
  title: "SphereView — Seven Spheres of Influence",
  description:
    "416 key passages reveal God's design for every area of society across seven spheres of influence.",
};

export default function SphereViewPage() {
  const features = [
    {
      title: "Seven Cultural Spheres",
      description:
        "Religion, Family, Government, Media, Education, Economy, and Arts & Entertainment — each with dozens of key passages.",
    },
    {
      title: "416 Curated Passages",
      description:
        "Every passage hand-selected by the SourceView research team to illuminate God's design for each sphere of influence.",
    },
    {
      title: "Study Questions",
      description:
        "Guided reflection questions for each passage help you connect Scripture to your daily work and calling in each sphere.",
    },
    {
      title: "Small Group Ready",
      description:
        "Designed for the Seven Spheres Society — a small group Bible study format that explores one sphere at a time.",
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <ProductPageHero
          logoSrc="/images/sphereview-logo.png"
          logoAlt="SphereView"
          title="SphereView"
          tagline="Seven Spheres of Influence"
          accentColor="#F1C40F"
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
            SphereView organizes 416 key Scripture passages across seven spheres
            of cultural influence: Religion, Family, Government, Media,
            Education, Economy, and Arts & Entertainment.
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
            Each sphere contains carefully curated passages that reveal God&rsquo;s
            design and purpose for that area of society, giving you a framework
            to understand how Scripture speaks to every dimension of life.
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
            Business leaders seeking biblical principles for their work. Church
            leaders wanting to equip their congregation for cultural engagement.
            Small groups studying how faith intersects with every area of life.
          </p>
          <ProductCta
            webUrl="https://sourceviewreader.web.app/sphereView"
            accentColor="#F1C40F"
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
