import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { FeatureGrid } from "./components/FeatureGrid";
import { DeepDive } from "./components/DeepDive";
import { Trainers } from "./components/Trainers";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { deepDives } from "./data";
import { getPlanPricing } from "@/lib/planPricing";

export default async function TryNowPage() {
  const pricing = await getPlanPricing();

  return (
    <>
      <Nav />
      <Hero />
      <FeatureGrid />
      {deepDives.map((deepDive) => (
        <DeepDive key={deepDive.title} {...deepDive} />
      ))}
      <Trainers />
      <Testimonials />
      <Pricing pricing={pricing} />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
