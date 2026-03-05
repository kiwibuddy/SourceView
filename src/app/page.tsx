import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import ScriptureDemo from "./components/ScriptureDemo";
import SphereView from "./components/SphereView";
import Testimonial from "./components/Testimonial";
import ResearchSection from "./components/ResearchSection";
import JourneySteps from "./components/JourneySteps";
import CtaDownload from "./components/CtaDownload";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <ScriptureDemo />
        <SphereView />
        <Testimonial />
        <ResearchSection />
        <JourneySteps />
        <CtaDownload />
      </main>
      <Footer />
    </>
  );
}
