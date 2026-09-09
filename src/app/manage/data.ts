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

// Support inbox used on the "technical issues" retention screen.
export const SUPPORT_EMAIL = "Support@weglow.app";

// Quick-tap tags on the "not using it enough" feedback screen.
export const engagementTags = [
  "Forget to open the app",
  "Don't know what to do",
  "Workouts take too long",
  "Need more variety",
];

export type FeatureOption = {
  id: string;
  label: string;
  title: string;
  icon: string;
  photo?: { src: string; alt: string };
  body: string;
  steps: string[];
  ctaLabel: string;
};

// Options + explainers for the "missing a workout or feature" retention
// screen, each mapped to a real WEGLOW capability (see brand.ts `plan.features`)
// so the walkthrough always points at something that actually exists.
export const featureOptions: FeatureOption[] = [
  {
    id: "guidance",
    label: "More guidance on what to do",
    title: "Guides & Challenges",
    icon: "🧭",
    photo: {
      src: "/manage/photos/guided-workout.jpg",
      alt: "A member following a guided resistance-band routine on her mat",
    },
    body: "WEGLOW's Guides walk you through exactly what to do and when — no guesswork, no decision fatigue.",
    steps: [
      "Open the WEGLOW app and tap Guides from the home tab.",
      "Pick a guide that matches your goal — strength, cardio, or a full challenge.",
      "Follow the daily plan. We'll tell you exactly what's next.",
    ],
    ctaLabel: "Open Guides in WEGLOW",
  },
  {
    id: "cycle",
    label: "Cycle-synced workouts",
    title: "Cycle-Synced Training",
    icon: "🌙",
    photo: {
      src: "/manage/photos/recovery-stretch.jpg",
      alt: "A member foam rolling during a gentler, recovery-phase workout",
    },
    body: "WEGLOW adapts your workouts to your menstrual cycle and hormones, so you train with your body instead of against it.",
    steps: [
      "Add your cycle info in Settings → Health.",
      "Your weekly plan automatically adjusts intensity to your phase.",
      "Swap any workout anytime — we'll re-balance the week for you.",
    ],
    ctaLabel: "Set up cycle tracking",
  },
  {
    id: "nutrition",
    label: "Nutrition & meal plans",
    title: "Meal Plans & Recipes",
    icon: "🥗",
    photo: {
      src: "/manage/photos/kitchen-app.jpg",
      alt: "A member checking her WEGLOW meal plan while prepping a smoothie",
    },
    body: "Dietician-approved recipes and a meal plan built around your goals and calorie target — right in the Nutrition tab.",
    steps: [
      "Open the Nutrition tab in the WEGLOW app.",
      "Set your goal and we'll build your weekly meal plan.",
      "Swap any recipe you don't love — we'll keep your macros on track.",
    ],
    ctaLabel: "Open Nutrition in WEGLOW",
  },
  {
    id: "classes",
    label: "Live or on-demand classes",
    title: "On-Demand Classes",
    icon: "🎥",
    photo: {
      src: "/manage/photos/gym-strength.jpg",
      alt: "A member mid-class on the strength rack",
    },
    body: "Train with 6 specialized trainers across strength, pilates, cardio, yoga, barre & more — any time, on your schedule.",
    steps: [
      "Open the Workouts tab and browse Classes.",
      "Pick a trainer and a class length that fits your day.",
      "Press play — no scheduling, no sign-ups.",
    ],
    ctaLabel: "Browse classes in WEGLOW",
  },
  {
    id: "progress",
    label: "Progress tracking & badges",
    title: "Progress, Streaks & Badges",
    icon: "🏅",
    photo: {
      src: "/manage/photos/strength-rings.jpg",
      alt: "A member hitting a strength milestone on the gymnastic rings",
    },
    body: "Every workout logs your stats automatically, and badges celebrate your streaks and milestones along the way.",
    steps: [
      "Finish any workout — your stats save automatically.",
      "Check your Progress tab for weekly trends and streaks.",
      "Unlock badges as you hit milestones.",
    ],
    ctaLabel: "View your progress in WEGLOW",
  },
  {
    id: "other",
    label: "Something else",
    title: "Tell us what you need",
    icon: "💬",
    body: "We couldn't find an exact match. Tell our team what you're looking for and we'll let you know if it's on the way.",
    steps: [],
    ctaLabel: `Email ${SUPPORT_EMAIL}`,
  },
];
