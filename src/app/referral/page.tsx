import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { FeatureGrid } from "./components/FeatureGrid";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { StickyCTA } from "./components/StickyCTA";

export default function ReferralPage() {
  return (
    <>
      <Nav />
      <Hero />
      <FeatureGrid />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </>
  );
}
