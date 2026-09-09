export const mockAccount = {
  name: "Maddie Carter",
  email: "maddie.carter@gmail.com",
};

export const mockPaymentMethod = {
  brand: "Visa",
  last4: "4242",
  expiry: "08 / 27",
};

export type PlanTier = {
  id: "monthly" | "annual";
  label: string;
  price: number;
  interval: "month" | "year";
  perWeek: string;
  saveLabel?: string;
};

// Fallback tiers used when live Stripe pricing isn't available. The annual
// price mirrors the real WEGLOW_ANNUAL price/coupon from lib/planPricing so
// the page still feels accurate if the Stripe call fails.
export const planTiers: PlanTier[] = [
  {
    id: "monthly",
    label: "Monthly",
    price: 14.99,
    interval: "month",
    perWeek: "about $3.46 a week",
  },
  {
    id: "annual",
    label: "Annual",
    price: 49.99,
    interval: "year",
    perWeek: "about $0.96 a week",
    saveLabel: "Save 72%",
  },
];

// The mock account starts on Monthly so the Change Plan and retention offer
// screens both have somewhere meaningful to upsell toward Annual.
export const currentPlanId: PlanTier["id"] = "monthly";

// Applied to the current plan's price when a member on the top-tier (Annual)
// plan cites cost as their reason for cancelling — there's no cheaper plan
// left to upsell into, so the retention offer discounts the plan they're
// already on instead.
export const RETENTION_DISCOUNT_PERCENT = 40;

export const subscriptionDates = {
  started: "June 14, 2026",
  renews: "October 14, 2026",
};

export type CancelReason = {
  id: "expensive" | "not_using" | "missing_feature" | "technical" | "break";
  label: string;
};

export const cancelReasons: CancelReason[] = [
  { id: "expensive", label: "It's too expensive" },
  { id: "not_using", label: "I'm not using it enough" },
  { id: "missing_feature", label: "Missing a workout or feature I need" },
  { id: "technical", label: "I ran into technical issues" },
  { id: "break", label: "Just need a break" },
];
