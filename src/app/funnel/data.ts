export { brand, stat, purchaseStat, pillars, testimonials, plan } from "@/lib/brand";

export type Choice = {
  id: string;
  label: string;
  sublabel?: string;
  emoji?: string;
};

export type Question = {
  id: string;
  kind: "single" | "multi";
  title: string;
  subtitle?: string;
  choices: Choice[];
};

export const questions: Question[] = [
  {
    id: "goal",
    kind: "single",
    title: "If you could achieve one thing, what would it be?",
    subtitle: "We'll tailor your plan around this.",
    choices: [
      { id: "lose-weight", label: "Lose weight & tone up", emoji: "🔥" },
      { id: "build-strength", label: "Build strength & muscle", emoji: "💪" },
      { id: "flexibility", label: "Improve flexibility & mobility", emoji: "🤸‍♀️" },
      { id: "stress", label: "Reduce stress & feel better", emoji: "🧘‍♀️" },
      { id: "event", label: "Prep for a life event", emoji: "✨" },
    ],
  },
  {
    id: "level",
    kind: "single",
    title: "What's your current fitness level?",
    choices: [
      { id: "beginner", label: "Beginner", sublabel: "Just getting started" },
      { id: "intermediate", label: "Intermediate", sublabel: "Work out sometimes" },
      { id: "advanced", label: "Advanced", sublabel: "Train consistently" },
    ],
  },
  {
    id: "life-stage",
    kind: "single",
    title: "Are you Currently Pregnant, Post-Partum or Perimenopause & beyond?",
    subtitle: "WEGLOW adapts your training to your hormonal phase and life stage.",
    choices: [
      { id: "pregnant", label: "Pregnant", emoji: "🤰" },
      { id: "postpartum", label: "Post-Partum", emoji: "🍼" },
      { id: "perimenopause", label: "Perimenopause & beyond", emoji: "🌸" },
      { id: "none", label: "None of the above" },
    ],
  },
  {
    id: "styles",
    kind: "multi",
    title: "What is your Favourite Style of Training?",
    subtitle: "Pick as many as you like.",
    choices: [
      { id: "strength", label: "Strength Training", emoji: "🏋️‍♀️" },
      { id: "pilates", label: "Pilates", emoji: "🩰" },
      { id: "yoga", label: "Yoga", emoji: "🧘‍♀️" },
      { id: "barre", label: "Barre", emoji: "🩱" },
      { id: "cardio", label: "Cardio", emoji: "🏃‍♀️" },
      { id: "hybrid", label: "Hybrid", emoji: "🔀" },
      { id: "meditation", label: "Meditation", emoji: "🕯️" },
    ],
  },
  {
    id: "days",
    kind: "single",
    title: "How many days a week can you commit to?",
    choices: [
      { id: "3", label: "3 days / week" },
      { id: "4", label: "4 days / week" },
      { id: "5", label: "5 days / week" },
      { id: "6", label: "6 days / week" },
    ],
  },
  {
    id: "obstacle",
    kind: "single",
    title: "What's held you back before?",
    choices: [
      { id: "time", label: "Lack of time", emoji: "⏱️" },
      { id: "motivation", label: "Lack of motivation", emoji: "🔋" },
      { id: "where-to-start", label: "Not knowing where to start", emoji: "🧭" },
      { id: "results", label: "Inconsistent results", emoji: "📉" },
      { id: "nutrition", label: "Diet & nutrition", emoji: "🥗" },
    ],
  },
  {
    id: "diet",
    kind: "single",
    title: "Any dietary preference?",
    subtitle: "So we can tailor your nutrition plan.",
    choices: [
      { id: "none", label: "No restrictions" },
      { id: "vegetarian", label: "Vegetarian" },
      { id: "pescatarian", label: "Pescatarian" },
      { id: "vegan", label: "Vegan" },
      { id: "gluten-free", label: "Gluten-free" },
      { id: "dairy-free", label: "Dairy-free" },
    ],
  },
];

export const loadingSteps = [
  "Analyzing your goals",
  "Matching your training style",
  "Syncing with your cycle",
  "Building your nutrition plan",
  "Calculating your success rate",
];

