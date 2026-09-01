import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { ValueProps } from "./components/ValueProps";
import { DeepDive } from "./components/DeepDive";
import { WaveDivider } from "./components/WaveDivider";
import { Trainers } from "./components/Trainers";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { deepDives, palette } from "./data";
import { getPlanPricing } from "@/lib/planPricing";

export default async function GetFitTodayPage() {
  const pricing = await getPlanPricing();

  return (
    <>
      <Nav />
      <Hero />
      <ValueProps />

      <WaveDivider fill={deepDives[0].bg} />
      <DeepDive {...deepDives[0]} />
      <WaveDivider fill={deepDives[1].bg} />
      <DeepDive {...deepDives[1]} />
      <WaveDivider fill={deepDives[2].bg} />
      <DeepDive {...deepDives[2]} />
      <WaveDivider fill={deepDives[3].bg} />
      <DeepDive {...deepDives[3]} />

      <WaveDivider fill="#FFFFFF" />
      <Trainers />

      <WaveDivider fill="#E4E9E6" />
      <Testimonials />

      <WaveDivider fill={palette.ink} />
      <Pricing pricing={pricing} />

      <WaveDivider fill={palette.cream} flip />
      <FAQ />

      <WaveDivider fill={palette.blush} />
      <FinalCTA />

      <WaveDivider fill={palette.cream} flip />
      <Footer />
    </>
  );
}
