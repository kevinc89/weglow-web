import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { StatsBar } from "./components/StatsBar";
import { HowItWorks } from "./components/HowItWorks";
import { FeatureGrid } from "./components/FeatureGrid";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

const MAX_REFERRER_NAME_LENGTH = 40;

// The WEGLOW app appends ?name=<first name> when a member shares their
// referral link, so the hero can greet the specific friend who was invited
// instead of the generic "Your friend" fallback.
function getReferrerName(
  raw: string | string[] | undefined,
): string | null {
  const value = Array.isArray(raw) ? raw[0] : raw;
  if (!value) return null;
  const trimmed = value.trim().slice(0, MAX_REFERRER_NAME_LENGTH);
  return trimmed || null;
}

export default async function ReferralPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const referrerName = getReferrerName(params.name);

  return (
    <>
      <Nav />
      <Hero referrerName={referrerName} />
      <StatsBar />
      <HowItWorks />
      <FeatureGrid />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
