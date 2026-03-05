import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductPageHero from "../components/ProductPageHero";
import FeatureGrid from "../components/FeatureGrid";
import ProductCta from "../components/ProductCta";
import PhoneMockup from "../components/PhoneMockup";

export const metadata: Metadata = {
  title: "SourceView Together — Scripture as a Shared Experience",
  description:
    "SourceView Together revolutionizes how you read Scripture with friends, family, and your community through interactive speech bubble Bible reading.",
};

const SCREENSHOTS = [
  { src: "/images/Together/IMG_6230.PNG", alt: "SourceView Together home screen", delay: "0s", rotate: "-3deg" },
  { src: "/images/Together/IMG_6233.PNG", alt: "Speech bubble Bible reading", delay: "1s", rotate: "2deg" },
  { src: "/images/Together/IMG_6234.PNG", alt: "Group reading session", delay: "2s", rotate: "-1deg" },
  { src: "/images/Together/IMG_6235.PNG", alt: "Reading plans and progress", delay: "0.5s", rotate: "3deg" },
  { src: "/images/Together/IMG_6236.PNG", alt: "Study questions for groups", delay: "1.5s", rotate: "-2deg" },
];

export default function SourceViewTogetherPage() {
  const features = [
    {
      title: "Speech Bubble Bible Format",
      description:
        "Read the Bible like a conversation. Our innovative format displays Scripture as dramatic dialogue with up to 4 distinct color-coded reading roles that bring stories to life.",
      highlights: ["conversation", "dramatic dialogue", "4 distinct color-coded reading roles"],
    },
    {
      title: "Group Reading Sessions",
      description:
        "Host or join group reading sessions instantly. Share with QR codes — no accounts needed. Each person takes a role and reads aloud together in real time.",
      highlights: ["QR codes", "no accounts needed", "real time"],
    },
    {
      title: "Personal Notes & Reactions",
      description:
        "Add notes to any Bible verse and attach emoji reactions to capture your feelings. Edit anytime, share with your group, and track your reflections across every reading.",
      highlights: ["emoji reactions", "share with your group"],
    },
    {
      title: "Reading Plans & Progress",
      description:
        "Chronological Bible reading plans, thematic challenges, daily streak tracking, achievement badges, and a complete visual reading history to keep you motivated.",
      highlights: ["daily streak", "achievement badges", "reading history"],
    },
    {
      title: "Study Questions for Every Group",
      description:
        "Hundreds of questions designed specifically for families, youth & schools, and church small groups. Two complete question sets per passage for variety and deeper exploration.",
      highlights: ["families", "youth & schools", "church small groups", "Two complete question sets"],
    },
    {
      title: "English & French",
      description:
        "Complete French language support including Bible text, 400+ study questions, and full user interface. Seamless language switching — perfect for bilingual families and communities.",
      highlights: ["French", "400+ study questions", "bilingual"],
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
            SourceView Together revolutionizes how you read Scripture with
            friends, family, and your community. Our unique speech bubble format
            makes Bible reading engaging, interactive, and memorable for any
            group.
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
            Scripture comes alive when read together, discussed together, and
            applied together. The speech bubble format transforms how you
            experience God&rsquo;s Word — dialogues become real conversations,
            narratives turn into dramatic stories.
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
            Speech bubble reading, group sessions, study questions, and
            reading plans — all in one app.
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

          {/* Perfect for */}
          <h3
            className="font-serif mt-8 mb-2"
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
            Families wanting interactive devotions with roles, emojis, and
            age-appropriate questions. Youth groups keeping teens engaged with
            dramatic reading. Church small groups with progress tracking and deep
            discussion guides. Schools using it for Christian education and Bible
            classes. Even solo reading becomes more dynamic with the speech bubble
            format and tailored study questions.
          </p>

          <ProductCta
            appStoreUrl="https://apps.apple.com/us/app/sourceview-together-bible/id6748708102"
            playStoreUrl="https://play.google.com/store/apps/details?id=com.sourceview.together"
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
