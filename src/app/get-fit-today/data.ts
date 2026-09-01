import { stat, resultsStat, purchaseStat, plan } from "@/lib/brand";

export { stat, resultsStat, purchaseStat, plan };

export const palette = {
  cream: "#FBF1E7",
  ink: "#2E1B12",
  rust: "#db4927",
  rustDark: "#b93a1c",
  olive: "#6b7a5e",
  gold: "#c98a3b",
  blush: "#F5DECF",
  sageTint: "#E6EADD",
  goldTint: "#F5E6CC",
  skyTint: "#E4E9E6",
};

export const valueProps = [
  {
    title: "Workouts",
    body: "Strength, pilates, yoga, barre, cardio & meditation — written by real trainers.",
    emoji: "🏋️‍♀️",
    bg: palette.blush,
  },
  {
    title: "Nutrition",
    body: "Dietician-approved recipes and meal plans that fit your life. Nothing off limits.",
    emoji: "🥗",
    bg: palette.sageTint,
  },
  {
    title: "Community",
    body: "Challenges, guides, and a community that keeps you turning the page.",
    emoji: "💛",
    bg: palette.goldTint,
  },
];

export type DeepDive = {
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  isScreenshot?: boolean;
  reverse?: boolean;
  accent: string;
  bg: string;
  cta: string;
};

export const deepDives: DeepDive[] = [
  {
    eyebrow: "Workouts",
    title: "A coach in your pocket",
    body: "Hybrid training built around your goals — 3 to 6 days a week, mixing strength, pilates, cardio, yoga, barre and meditation. Every set, every rep, explained.",
    bullets: [
      "Progressive programs from 3–24 weeks",
      "Home or gym, any equipment level",
      "Step-by-step video demos for every move",
    ],
    image: "/get-fit-today/screenshots/workout-overview.png",
    imageAlt: "WEGLOW workout overview screen showing a strength session",
    isScreenshot: true,
    accent: palette.rust,
    bg: "#FFFFFF",
    cta: "See a sample workout",
  },
  {
    eyebrow: "Recovery",
    title: "Rest is part of the story",
    body: "Real progress needs real recovery. WEGLOW builds mobility work, stretching and rest days into every program — so you come back stronger, not sore.",
    bullets: [
      "Guided mobility & stretching sessions",
      "Smart rest days built into every plan",
      "Recovery tips tailored to your training load",
    ],
    image: "/get-fit-today/photos/recovery.jpg",
    imageAlt: "Woman foam rolling after a workout",
    reverse: true,
    accent: palette.ink,
    bg: palette.blush,
    cta: "Explore recovery",
  },
  {
    eyebrow: "Nutrition",
    title: "Nutrition that fits your life",
    body: "Dietician-approved recipes filtered by what you actually eat — vegetarian, vegan, gluten-free, dairy-free, pescatarian or no restrictions at all. Track water, macros, and calories in one place.",
    bullets: [
      "1,000+ recipes, swap anytime",
      "Daily macro & water tracking",
      "Smart meal plans that adjust to you",
    ],
    image: "/get-fit-today/screenshots/meal-plan.png",
    imageAlt: "WEGLOW meal plan screen showing macros and recipe swaps",
    isScreenshot: true,
    accent: palette.olive,
    bg: "#FFFFFF",
    cta: "Browse recipes",
  },
  {
    eyebrow: "Community",
    title: "You're never doing this alone",
    body: "Join monthly challenges with thousands of other women, train alongside your favorite coaches, and stay accountable with a community that celebrates every chapter.",
    bullets: [
      "Live challenges, every month",
      "Progress tracking, badges & weekly stats",
      "A community that celebrates you",
    ],
    image: "/get-fit-today/screenshots/challenge.jpg",
    imageAlt: "WEGLOW January challenge screen with three trainers",
    isScreenshot: true,
    reverse: true,
    accent: palette.gold,
    bg: palette.goldTint,
    cta: "Join a challenge",
  },
];

export const trainers = [
  {
    name: "Stef",
    focus: "Strength & Hybrid Training",
    image: "/try-now/photos/gym-barbell.jpg",
    bg: palette.blush,
  },
  {
    name: "Mara",
    focus: "Yoga & Mobility",
    image: "/try-now/photos/mara-yoga.jpg",
    bg: palette.sageTint,
  },
  {
    name: "Colby",
    focus: "Cardio & Conditioning",
    image: "/try-now/photos/colby-cardio.jpg",
    bg: palette.goldTint,
  },
  {
    name: "Anna",
    focus: "Pre & Post Natal",
    image: "/get-fit-today/photos/anna.jpg",
    bg: palette.skyTint,
  },
];

export const testimonials = [
  {
    quote:
      "I've tried every fitness app out there. This is the first one that actually felt like it was written for me.",
    source: "Jasmine",
    rotate: "-rotate-2",
  },
  {
    quote:
      "The way it adapts to my cycle changed everything. I stopped fighting my body and started working with it.",
    source: "Layla",
    rotate: "rotate-1",
  },
  {
    quote:
      "Three months in and I'm stronger than I've ever been. The recipes alone are worth it.",
    source: "Nora",
    rotate: "rotate-2",
  },
  {
    quote:
      "It's rare to find something this thoughtful. Every workout feels like it was made just for me.",
    source: "Harper",
    rotate: "-rotate-1",
  },
];

export const faqs = [
  {
    question: "Is WEGLOW good for beginners?",
    answer:
      "Yes — every program is available at Beginner, Intermediate, and Advanced levels, and workouts include step-by-step video demos for every move.",
  },
  {
    question: "Do I need a gym or equipment?",
    answer:
      "No. Most programs work with minimal or no equipment, and you can filter workouts by what you have at home or at the gym.",
  },
  {
    question: "Does WEGLOW work around my cycle, pregnancy, or postpartum recovery?",
    answer:
      "Yes. WEGLOW adapts your training to your hormonal phase and life stage, with dedicated prenatal and postpartum-safe programming.",
  },
  {
    question: "What's included in the nutrition plan?",
    answer:
      "Dietician-approved recipes filtered by your dietary preferences, daily meal plans, a smart shopping list, and macro & water tracking.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, cancel anytime from your account settings — no phone calls, no hassle. We also offer a 30-day money-back guarantee.",
  },
];
