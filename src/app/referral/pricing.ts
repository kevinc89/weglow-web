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

// The exact discount is 29.3% ($29.01 off $99). Rounded up to the cleaner
// "30% off" for marketing copy rather than the precise-but-odd 29%.
export const REFERRAL_SAVINGS_PERCENT = 30;
