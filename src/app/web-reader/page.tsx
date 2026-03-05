import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductPageHero from "../components/ProductPageHero";
import FeatureGrid from "../components/FeatureGrid";
import ProductCta from "../components/ProductCta";
import PhoneMockup from "../components/PhoneMockup";

export const metadata: Metadata = {
  title: "SourceView Web Reader — The Full Experience in Your Browser",
  description:
    "Access the complete SourceView Bible from any browser with powerful study tools built in.",
};

const SCREENSHOTS = [
  { src: "/images/SourceView_reader/SourceView_reader_1.PNG", alt: "SourceView Web Reader in browser", delay: "0s", rotate: "-3deg" },
  { src: "/images/SourceView_reader/SourceView_reader_2.PNG", alt: "Four-color dramatic text and study tools", delay: "1s", rotate: "2deg" },
  { src: "/images/SourceView_reader/SourceView_reader_3.PNG", alt: "GAP Study Method and passage view", delay: "0.5s", rotate: "-1deg" },
  { src: "/images/SourceView_reader/SourceView_reader_4.PNG", alt: "Source profiles and quotation links", delay: "1.5s", rotate: "3deg" },
  { src: "/images/SourceView_reader/SourceView_reader-5.PNG", alt: "Seven Spheres in the Web Reader", delay: "2s", rotate: "-2deg" },
];

export default function WebReaderPage() {
  const features = [
    {
      title: "GAP Study Method",
      description:
        "Make your own observations (Go), interpretations (Apply), and applications (Practice) of Scripture with guided study tools. The Web Reader empowers you to gain a deeper understanding of each book of the Bible.",
      highlights: ["Go", "Apply", "Practice", "guided study tools"],
    },
    {
      title: "Quotation Links & Allusions",
      description:
        "Visualize how passages connect across books. See quotation links, allusions, and cross-references in context — never before available in one place.",
      highlights: ["quotation links", "allusions", "cross-references"],
    },
    {
      title: "Dramatic Group Reading",
      description:
        "Gather 4 people to read the speaking parts of Scripture in the conversational format. Black for narrator, red for God, green for lead characters, blue for supporting cast. Read as if auditioning for a play.",
      highlights: ["4 people", "Black", "red", "green", "blue"],
    },
    {
      title: "Seven Spheres Society",
      description:
        "Join the small group Bible study with passages and questions designed to help you serve God through your work in every sphere of life. One year of vocation-focused study built in.",
      highlights: ["Seven Spheres Society", "one year", "vocation-focused"],
    },
    {
      title: "365 Daily Segments & Seamless Reading",
      description:
        "The full biblical text in 365 segments, one for every day of the year. Each segment averages 15 minutes. Hide chapter and verse numbers to fully immerse yourself in the narrative.",
      highlights: ["365 segments", "15 minutes", "Hide chapter and verse numbers"],
    },
    {
      title: "Source Profiles & Data Discovery",
      description:
        "Tap any speaker to see everything they said, who they spoke to, and which books they appear in. Explore source data and see the Bible through who is speaking.",
      highlights: ["Tap any speaker", "who they spoke to", "source data"],
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
            Access the complete SourceView Bible from any browser — desktop,
            tablet, or phone. The Web Reader brings the four-color dramatic
            reading experience online with powerful study tools built in. With
            40,000 hours of research behind it, SourceView lets you engage with
            the biblical text like never before.
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
            Conversations and actions come alive when you can see all of a
            speaker&rsquo;s dialogues across books. Start your journey today —
            discover God and your role in His story from any device.
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
            Four-color text, GAP study tools, source profiles, and Seven Spheres
            — all in your browser.
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
            Bible study leaders who need a powerful web-based tool. Students and
            researchers wanting to explore quotation links. Anyone who prefers
            reading on a larger screen. Groups who want the dramatic reading
            experience without an app.
          </p>
          <ProductCta webUrl="https://sourceviewreader.web.app/" />
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
