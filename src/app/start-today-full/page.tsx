import { FullOffer } from "./components/FullOffer";
import { getPlanPricing } from "@/lib/planPricing";

const MAX_PROMO_CODE_LENGTH = 40;

// Mirrors join.weglow.app's ?code=<promo> entry point — read the code off the
// URL so the ribbon can show the exact code that was applied.
function getPromoCode(raw: string | string[] | undefined): string | null {
  const value = Array.isArray(raw) ? raw[0] : raw;
  if (!value) return null;
  const trimmed = value.trim().slice(0, MAX_PROMO_CODE_LENGTH);
  return trimmed || null;
}

export default async function StartTodayFullPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const promoCode = getPromoCode(params.code);
  const pricing = await getPlanPricing();

  return <FullOffer pricing={pricing} promoCode={promoCode} />;
}
