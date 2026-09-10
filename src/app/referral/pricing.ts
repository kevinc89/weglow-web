// Canonical numbers for the referral offer. Imported by both the checkout
// route (what Stripe actually charges) and the page (what we display), so
// the two can never drift apart.
export const REFERRAL_PLAN = {
  name: "WEGLOW Annual Plan",
  compareAtPrice: 99,
  price: 69.99,
  interval: "year" as const,
  trialDays: 3,
  currency: "usd",
};

export const REFERRAL_SAVINGS = Math.round(
  REFERRAL_PLAN.compareAtPrice - REFERRAL_PLAN.price,
);

export const REFERRAL_SAVINGS_PERCENT = Math.round(
  (REFERRAL_SAVINGS / REFERRAL_PLAN.compareAtPrice) * 100,
);
