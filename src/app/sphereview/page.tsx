import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductPageHero from "../components/ProductPageHero";
import FeatureGrid from "../components/FeatureGrid";
import ProductCta from "../components/ProductCta";
import PhoneMockup from "../components/PhoneMockup";

export const metadata: Metadata = {
  title: "SphereView — Seven Spheres of Influence",
  description:
    "416 key passages reveal God's design for every area of society across seven spheres of influence.",
};

const SCREENSHOTS = [
  { src: "/images/Family-Sphere/Family_1.PNG", alt: "SphereView — Family sphere key passages", delay: "0s", rotate: "-3deg" },
  { src: "/images/Family-Sphere/Family_2.PNG", alt: "SphereView — Passage list and study", delay: "1s", rotate: "2deg" },
  { src: "/images/Family-Sphere/Family_3.PNG", alt: "SphereView — Scripture in context", delay: "0.5s", rotate: "-1deg" },
  { src: "/images/Family-Sphere/Family_4.PNG", alt: "SphereView — Seven spheres overview", delay: "1.5s", rotate: "3deg" },
  { src: "/images/Family-Sphere/Family_5.PNG", alt: "SphereView — Family sphere card with video and discussion questions", delay: "2s", rotate: "-2deg" },
];

export default function SphereViewPage() {
  const features = [
    {
      title: "Seven Cultural Spheres",
      description:
        "Religion, Family, Government, Media, Education, Economy, and Arts & Entertainment — each with 52 key passages. Tap any sphere to see how Scripture addresses that dimension of society.",
      highlights: ["Religion", "Family", "Government", "Media", "Education", "Economy", "Arts & Entertainment", "52 key passages"],
    },
    {
      title: "416 Curated Passages",
      description:
        "Every passage hand-selected by the SourceView research team: 364 passages (52 per sphere) plus 52 foundational passages on biblical worldview. All 66 books of the Bible are used.",
      highlights: ["416", "52 per sphere", "52 foundational", "66 books"],
    },
    {
      title: "Sphere Overview Screens",
      description:
        "Tap any of the seven spheres for an overview of how that sphere is addressed in Scripture. Each passage begins with how God reveals himself through that sphere, then beliefs, values, and practices.",
      highlights: ["Tap any sphere", "God reveals himself", "beliefs", "values", "practices"],
    },
    {
      title: "Study Questions",
      description:
        "Guided reflection questions for each passage help you connect Scripture to your daily work and calling in each sphere. Designed for both individual and group study.",
      highlights: ["reflection questions", "daily work", "calling"],
    },
    {
      title: "Cross-Sphere Integration",
      description:
        "The final six key passages in each sphere show a biblical example — positive or negative — where that sphere overlaps with one of the other six. See how Scripture weaves the spheres together.",
      highlights: ["final six passages", "overlaps", "biblical example"],
    },
    {
      title: "Seven Spheres Society",
      description:
        "Small group Bible study format that explores one sphere at a time. A one-of-a-kind list for a one-year journey through how God&rsquo;s Word speaks to every dimension of cultural life.",
      highlights: ["Seven Spheres Society", "one sphere at a time", "one-year journey"],
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
          className="max-w-[900px] mx-auto"
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
            Society is shaped by seven spheres of influence. SphereView organizes
            416 key Scripture passages across Religion, Family, Government,
            Media, Education, Economy, and Arts & Entertainment — each sphere
            with carefully curated passages that reveal God&rsquo;s design and
            purpose for that area of society.
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
            God&rsquo;s heart is to see every dimension of cultural life
            restored through the Gospel. SphereView gives you a framework to
            understand how Scripture speaks to every sphere — so you can work and
            pray &ldquo;your kingdom come, your will be done on earth as it is
            in heaven.&rdquo;
          </p>
        </div>

        {/* Screenshot showcase */}
        <div
          className="my-12 py-12 overflow-hidden"
          style={{ background: "var(--bg2)" }}
        >
          <h3
            className="font-serif text-center mb-2"
            style={{ fontSize: "1.4rem", fontWeight: 500 }}
          >
            See It in Action
          </h3>
          <p
            className="text-center mx-auto mb-10"
            style={{
              fontSize: "0.85rem",
              color: "var(--ink3)",
              fontWeight: 300,
              maxWidth: 400,
            }}
          >
            Explore key passages by sphere — tap an icon, read Scripture in
            context, and discover God&rsquo;s design for each area of life.
          </p>
          <div
            className="flex items-center justify-center gap-6 md:gap-10 px-8"
            style={{ overflowX: "auto", paddingBottom: "1rem" }}
          >
            {SCREENSHOTS.map((shot) => (
              <div key={shot.src} className="flex-shrink-0">
                <PhoneMockup
                  src={shot.src}
                  alt={shot.alt}
                  delay={shot.delay}
                  rotate={shot.rotate}
                />
              </div>
            ))}
          </div>
        </div>

        <div
          className="max-w-[900px] mx-auto pb-20"
          style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
        >
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
          <ProductCta webUrl="https://sourceviewreader.web.app/sphereView" />
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
