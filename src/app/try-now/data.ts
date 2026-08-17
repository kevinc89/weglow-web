export const featureCards = [
  {
    title: "Workouts",
    body: "Strength, pilates, yoga, barre, cardio & meditation — built by real trainers.",
    emoji: "🏋️‍♀️",
  },
  {
    title: "Nutrition",
    body: "Dietician-approved recipes and meal plans that fit your life. Nothing off limits.",
    emoji: "🥗",
  },
  {
    title: "Community",
    body: "Challenges, guides, and a community that keeps you accountable.",
    emoji: "💛",
  },
];

export type DeepDive = {
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
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
    image: "/try-now/screenshots/workout-overview.png",
    imageAlt: "WeGlow workout overview screen showing supersets and exercises",
  },
  {
    eyebrow: "Cycle Sync",
    title: "Trained with your body, not against it",
    body: "WeGlow adjusts your training to your hormonal phase — whether that's a regular cycle, pregnancy, postpartum recovery, or perimenopause. No more guessing why some weeks feel harder.",
    bullets: [
      "Workouts adapt to your cycle phase",
      "Prenatal & postpartum-safe programming",
      "Built with real women, for every life stage",
    ],
    image: "/try-now/photos/kneeling-stretch.jpg",
    imageAlt: "Woman kneeling on a WeGlow yoga mat next to resistance rollers",
    reverse: true,
  },
  {
    eyebrow: "Nutrition",
    title: "Nutrition that fits your life",
    body: "Dietician-approved recipes filtered by what you actually eat — vegetarian, vegan, gluten-free, dairy-free, or no restrictions at all. Track water, macros, and calories in one place.",
    bullets: [
      "1,000+ recipes, swap anytime",
      "Daily macro & water tracking",
      "Smart meal plans that adjust to you",
    ],
    image: "/try-now/screenshots/nutrition.png",
    imageAlt: "WeGlow meal plan screen showing macros and recipe swaps",
  },
  {
    eyebrow: "Community",
    title: "You're never doing this alone",
    body: "Join monthly challenges with thousands of other women, track your progress together, and stay accountable with guides built to keep you consistent.",
    bullets: [
      "Live challenges, every month",
      "Progress tracking, badges & weekly stats",
      "A community that celebrates you",
    ],
    image: "/try-now/screenshots/challenge.png",
    imageAlt: "WeGlow January Challenge enrollment screen",
    reverse: true,
  },
];

export const trainers = [
  {
    name: "Stef",
    focus: "Strength & Hybrid Training",
    image: "/try-now/photos/gym-barbell.jpg",
  },
  {
    name: "Colby",
    focus: "Pilates & Mobility",
    image: "/try-now/photos/exercise-ball.jpg",
  },
  {
    name: "Krsna",
    focus: "Cardio & Conditioning",
    image: "/try-now/photos/side-plank.jpg",
  },
];

export const faqs = [
  {
    question: "Is WeGlow good for beginners?",
    answer:
      "Yes — every program is available at Beginner, Intermediate, and Advanced levels, and workouts include step-by-step video demos for every move.",
  },
  {
    question: "Do I need a gym or equipment?",
    answer:
      "No. Most programs work with minimal or no equipment, and you can filter workouts by what you have at home or at the gym.",
  },
  {
    question: "Does WeGlow work around my cycle, pregnancy, or postpartum recovery?",
    answer:
      "Yes. WeGlow adapts your training to your hormonal phase and life stage, with dedicated prenatal and postpartum-safe programming.",
  },
  {
    question: "What's included in the nutrition plan?",
    answer:
      "Dietician-approved recipes filtered by your dietary preferences, daily meal plans, a smart shopping list, and macro & water tracking.",
  },
  {
    question: "How long are the workouts?",
    answer: "Most sessions run 15–50 minutes, and you choose 3–6 days a week based on your schedule.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, cancel anytime from your account settings — no phone calls, no hassle. We also offer a 14-day money-back guarantee.",
  },
];
