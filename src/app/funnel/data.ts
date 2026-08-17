export const brand = {
  name: "WeGlow",
  tagline: "The fitness app built for women",
  subtagline: "Invest in your body — build strength, confidence & consistency.",
  colors: {
    primary: "#db4927", // brand-red (CTA)
    primaryDark: "#b93a1c",
    blush: "#fde8e5", // brand-pink (soft background)
    ink: "#222222",
    ink2: "#444444",
    paper: "#f8f8f8",
    blue: "#2d62ff",
    pink: "#dd23bb",
  },
};

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
    title: "What's your main goal right now?",
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
    title: "Which best describes you right now?",
    subtitle: "WeGlow adapts your training to your hormonal phase and life stage.",
    choices: [
      { id: "general", label: "General fitness", emoji: "🌱" },
      { id: "prenatal", label: "Pregnant (prenatal)", emoji: "🤰" },
      { id: "postpartum", label: "Postpartum recovery", emoji: "🍼" },
      { id: "perimenopause", label: "Perimenopause & beyond", emoji: "🌸" },
    ],
  },
  {
    id: "styles",
    kind: "multi",
    title: "Which training styles interest you?",
    subtitle: "Pick as many as you like.",
    choices: [
      { id: "strength", label: "Strength Training", emoji: "🏋️‍♀️" },
      { id: "pilates", label: "Pilates", emoji: "🩰" },
      { id: "yoga", label: "Yoga", emoji: "🧘‍♀️" },
      { id: "barre", label: "Barre", emoji: "🩱" },
      { id: "cardio", label: "Cardio", emoji: "🏃‍♀️" },
      { id: "meditation", label: "Meditation", emoji: "🕯️" },
    ],
  },
  {
    id: "days",
    kind: "single",
    title: "How many days a week can you commit?",
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

export const stat = {
  headline: "98%",
  body: "of women see results within 8 weeks",
};

export const pillars = [
  {
    title: "Education",
    body: "Understand the why behind every workout and meal.",
  },
  {
    title: "Community-Led Innovation",
    body: "Built with real women, for every goal and ability.",
  },
  {
    title: "Positivity",
    body: "Wellness that energizes you — never shames you.",
  },
  {
    title: "Inclusivity & Accessibility",
    body: "Fitness for everyone, anywhere, anytime.",
  },
];

export const testimonials = [
  {
    quote:
      "Finding the right app for women can be hard... Stef is breaking mould.",
    source: "App Store",
  },
  {
    quote:
      "One of the best workout apps for women I've used. It's super user friendly.",
    source: "App Store",
  },
  {
    quote: "The app is one of the best of its kind out there.",
    source: "App Store",
  },
  {
    quote:
      "Subscribed when launched. I love the improvements... Workouts completely work! 🔥",
    source: "App Store",
  },
];

export const plan = {
  name: "WeGlow Annual Plan",
  compareAtPrice: 99,
  price: 49.99,
  interval: "year" as const,
  features: [
    "Personalized workout plans (strength, pilates, cardio, yoga, barre & more)",
    "Cycle-synced training that adapts to your hormonal phase",
    "Dietician-approved recipes & meal planning",
    "On-demand classes from 6 specialized trainers",
    "Progress tracking, badges & weekly stats",
    "Guides, challenges & a supportive community",
  ],
};
