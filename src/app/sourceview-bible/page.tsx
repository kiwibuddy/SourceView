import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductPageHero from "../components/ProductPageHero";
import FeatureGrid from "../components/FeatureGrid";
import ProductCta from "../components/ProductCta";
import PhoneMockup from "../components/PhoneMockup";

export const metadata: Metadata = {
  title: "SourceView Bible — The Original Four-Color Bible Experience",
  description:
    "Built on over 40,000 hours of original research, SourceView introduced the first major formatting innovation of the biblical text since the Reformation.",
};

const SCREENSHOTS = [
  { src: "/images/Sourceview-bible/HomeScreen.PNG", alt: "SourceView Bible home screen", delay: "0s", rotate: "-3deg" },
  { src: "/images/Sourceview-bible/SourceView-text.PNG", alt: "Four-color dramatic Scripture text", delay: "1s", rotate: "2deg" },
  { src: "/images/Sourceview-bible/Book-card.PNG", alt: "Book card with read time and source data", delay: "2s", rotate: "-1deg" },
  { src: "/images/Sourceview-bible/Source-Card.PNG", alt: "Source profile card showing speaker data", delay: "0.5s", rotate: "3deg" },
  { src: "/images/Sourceview-bible/family-Sphere.PNG", alt: "Family sphere passages view", delay: "1.5s", rotate: "-2deg" },
];

export default function SourceViewBiblePage() {
  const features = [
    {
      title: "Four-Color Dramatic Text",
      description:
        "Red for God, green for lead characters, blue for supporting sources, black for the narrator. In groups, each person picks a color and reads aloud — like taking a part in a dramatic script.",
      highlights: ["Red for God", "green for lead characters", "blue for supporting sources", "black for the narrator"],
    },
    {
      title: "1,400+ Source Profiles",
      description:
        "Tap any speaker to see everything they said, who they spoke to, their background, profession, era, and which books they appear in. Step through every conversation.",
      highlights: ["1,400+", "every conversation"],
    },
    {
      title: "Data Discovery Center",
      description:
        "Create pie charts, bar charts, and word clouds from data never available before. Who speaks most in the Bible? What words does God say to women? What professions spoke in Genesis?",
      highlights: ["pie charts", "bar charts", "word clouds"],
    },
    {
      title: "Seamless Reading",
      description:
        "Scroll through entire books without page breaks or chapter disruptions. Hide chapter and verse numbers to fully immerse yourself in the narrative. Calculated read times for every book and chapter.",
      highlights: ["without page breaks", "Hide chapter and verse numbers", "read times"],
    },
    {
      title: "Smart Navigation",
      description:
        "Jump to any passage with reference searches like J3:16 or John Jesus 18 (the 18th time Jesus spoke in John). Step backward and forward through your reading history.",
      highlights: ["J3:16", "John Jesus 18"],
    },
    {
      title: "Seven Spheres of Influence",
      description:
        "See how Scripture addresses seven spheres of society — Religion, Family, Government, Communications, Education, Economy, and Celebration. Read key passages for each sphere with highlights turned on.",
      highlights: ["seven spheres", "Religion", "Family", "Government", "Communications", "Education", "Economy", "Celebration"],
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
        <div
          className="max-w-[900px] mx-auto"
          style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
        >
          {/* Intro */}
          <p
            style={{
              fontSize: "0.88rem",
              color: "var(--ink2)",
              lineHeight: 1.7,
              marginBottom: "0.75rem",
              fontWeight: 300,
            }}
          >
            The SourceView Bible app is not just a digital version of a printed
            Bible. It is a fresh, innovative way to take a deeper look at
            God&rsquo;s story: what&rsquo;s been written, who said what, and how
            its words impact and shape our lives, our work, and our world.
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
            introduced the first major formatting innovation of the biblical text
            since the introduction of verses during the Reformation — nearly five
            hundred years ago. Available in the New Living Translation.
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
            Explore the four-color dramatic text, source profiles, data
            visualizations, and more.
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

          {/* Navigate section */}
          <h3
            className="font-serif mt-8 mb-3"
            style={{ fontSize: "1.15rem", fontWeight: 500 }}
          >
            Navigate the Bible Like Never Before
          </h3>
          <ul
            style={{
              fontSize: "0.85rem",
              color: "var(--ink2)",
              lineHeight: 1.8,
              fontWeight: 300,
              paddingLeft: "1.2rem",
              marginBottom: "2rem",
            }}
          >
            <li>Quickly jump to a passage by entering a variety of reference searches, e.g. J3:16 (verse) or John Jesus 18 (occurrence).</li>
            <li>Step backward or forward through screens you have already seen — great for jumping around during a sermon or Bible lesson.</li>
            <li>View a history of the screens you have seen, direct links to key areas in the app, and any personally bookmarked location in Scripture.</li>
            <li>All visual discoveries point you right back to the Scripture that corresponds to your charts.</li>
          </ul>

          {/* Perfect for */}
          <h3
            className="font-serif mb-2"
            style={{ fontSize: "1.15rem", fontWeight: 500 }}
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
            exploring source data. Pastors preparing sermons with speaker context.
            Individual study sessions focused on discovering who speaks.
          </p>

          <ProductCta
            appStoreUrl="https://apps.apple.com/us/app/sourceview-bible/id1114617271"
            playStoreUrl="https://play.google.com/store/apps/details?id=com.sourceviewbible"
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
