import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductPageHero from "../components/ProductPageHero";
import FeatureGrid from "../components/FeatureGrid";

export const metadata: Metadata = {
  title: "CommandView — Every Command in Scripture, Mapped",
  description:
    "CommandView catalogs every command in the Bible — who gives it, who receives it, and what it reveals about God's design.",
};

export default function CommandViewPage() {
  const features = [
    {
      title: "Complete Command Catalog",
      description:
        "Every command in the Bible identified, categorized, and indexed — from direct divine commands to instructions given by human leaders.",
    },
    {
      title: "Speaker & Audience",
      description:
        "See who issues each command and who receives it. Filter by speaker (God, Moses, Jesus, Paul) or by audience.",
    },
    {
      title: "Thematic Categories",
      description:
        "Commands organized by theme: worship, justice, relationships, work, generosity, and more — revealing the breadth of God's instruction.",
    },
    {
      title: "Timeline View",
      description:
        "See how commands unfold across biblical history, from Genesis to Revelation, revealing the progressive nature of God's revelation.",
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <ProductPageHero
          logoSrc="/images/commandview-logo.jpg"
          logoAlt="CommandView"
          title="CommandView"
          tagline="Every command in Scripture, mapped"
          accentColor="#E67E22"
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
            CommandView will catalog every command found in Scripture — who gives
            it, who receives it, and what it reveals about God&rsquo;s character and
            design for human flourishing.
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
            From the Ten Commandments to the Great Commission, CommandView will
            organize and visualize the imperative voice of Scripture in ways
            never before possible.
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
              CommandView is currently in development.
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
