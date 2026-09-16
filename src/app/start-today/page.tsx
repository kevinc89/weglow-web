import { OfferBar } from "./components/OfferBar";
import { Hero } from "./components/Hero";
import { ValueStack } from "./components/ValueStack";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { getPlanPricing } from "@/lib/planPricing";

const MAX_PROMO_CODE_LENGTH = 40;

// Mirrors join.weglow.app's ?code=<promo> entry point — read the code off the
// URL so the offer bar and price card can visibly confirm it's applied.
function getPromoCode(raw: string | string[] | undefined): string | null {
  const value = Array.isArray(raw) ? raw[0] : raw;
  if (!value) return null;
  const trimmed = value.trim().slice(0, MAX_PROMO_CODE_LENGTH);
  return trimmed || null;
}

export default async function StartTodayPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const promoCode = getPromoCode(params.code);
  const pricing = await getPlanPricing();
  const discountLabel = pricing?.discountLabel ?? "50% OFF";

  return (
    <>
      <OfferBar discountLabel={discountLabel} promoCode={promoCode} />
      <Hero pricing={pricing} promoCode={promoCode} />
      <ValueStack pricing={pricing} promoCode={promoCode} />
      <Testimonials />
      <FAQ />
      <FinalCTA pricing={pricing} promoCode={promoCode} />
      <Footer />
    </>
  );
}
