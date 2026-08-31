import { brand, stat, purchaseStat, resultsStat, pillars, testimonials, plan } from "@/lib/brand";

export { brand, stat, purchaseStat, resultsStat, pillars, testimonials, plan };

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
    id: "focus-areas",
    kind: "multi",
    title: "What areas do you want to focus on?",
    subtitle: "Pick as many as you like.",
    choices: [
      { id: "core", label: "Core", emoji: "🎯" },
      { id: "arms", label: "Arms", emoji: "💪" },
      { id: "glutes", label: "Glutes", emoji: "🍑" },
      { id: "legs", label: "Legs", emoji: "🦵" },
      { id: "full-body", label: "Full body", emoji: "✨" },
    ],
  },
  {
    id: "life-stage",
    kind: "single",
    title: "Are you currently pregnant, post-partum or perimenopause & beyond?",
    subtitle: "WEGLOW adapts your training to your hormonal phase and life stage.",
    choices: [
      { id: "pregnant", label: "Pregnant", emoji: "🤰" },
      { id: "postpartum", label: "Post-partum", emoji: "🍼" },
      { id: "perimenopause", label: "Perimenopause & beyond", emoji: "🌸" },
      { id: "none", label: "None of the above" },
    ],
  },
  {
    id: "equipment",
    kind: "single",
    title: "Where will you be working out?",
    choices: [
      { id: "home", label: "Home", sublabel: "Just a few weights or bands", emoji: "🏠" },
      { id: "gym", label: "Gym", sublabel: "Full access to equipment", emoji: "🏋️" },
      { id: "both", label: "A mix of both", sublabel: "Home and gym", emoji: "🔀" },
      { id: "bodyweight", label: "No equipment", sublabel: "Bodyweight only", emoji: "🤸" },
    ],
  },
  {
    id: "styles",
    kind: "multi",
    title: "What is your favourite style of training?",
    subtitle: "Pick as many as you like.",
    choices: [
      { id: "strength", label: "Strength training", emoji: "🏋️‍♀️" },
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
    id: "event",
    kind: "single",
    title: "Do you have an event you're working towards?",
    subtitle: "Having something to look forward to helps you stay motivated.",
    choices: [
      { id: "wedding", label: "Wedding", emoji: "💍" },
      { id: "holiday", label: "Holiday", emoji: "✈️" },
      { id: "occasion", label: "Special occasion", emoji: "🎉" },
      { id: "self", label: "Just for me", emoji: "🌟" },
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

function choiceLabel(
  questionId: string,
  choiceId: string | string[] | undefined,
): string | undefined {
  if (!choiceId || Array.isArray(choiceId)) return undefined;
  return questions.find((q) => q.id === questionId)?.choices.find((c) => c.id === choiceId)?.label;
}

export type SocialProofSlide = {
  id: string;
  afterQuestionId: string;
  emoji: string;
  headline: string;
  body: string;
  cta?: string;
  stat?: { headline: string; body: string };
  testimonial?: { quote: string; source: string };
  personalize?: (answers: Record<string, string | string[] | undefined>) => string | undefined;
};

export const socialProofSlides: SocialProofSlide[] = [
  {
    id: "proof-goal",
    afterQuestionId: "focus-areas",
    emoji: "🙌",
    headline: "You're already ahead",
    body: "Setting a clear goal puts you ahead of most people who never take this step.",
    stat: { headline: stat.headline, body: stat.body },
    personalize: (answers) => {
      const label = choiceLabel("goal", answers.goal);
      return label
        ? `You picked "${label}" — women with that exact goal are already seeing results with WEGLOW.`
        : undefined;
    },
  },
  {
    id: "proof-testimonial",
    afterQuestionId: "styles",
    emoji: "💬",
    headline: "Real women, real results",
    body: "Thousands of women have built strength, confidence and consistency with WEGLOW.",
    cta: "Keep going",
    testimonial: testimonials[1],
  },
  {
    id: "proof-momentum",
    afterQuestionId: "obstacle",
    emoji: "🔥",
    headline: "You've got this",
    body: "Whatever's held you back before, WEGLOW is built to make this time stick.",
    cta: "Almost there",
    stat: { headline: resultsStat.headline, body: resultsStat.body },
    personalize: (answers) => {
      const label = choiceLabel("obstacle", answers.obstacle);
      return label
        ? `"${label}" stops a lot of women — but not the ones who make it this far. You're already ahead.`
        : undefined;
    },
  },
];

export type FunnelStep =
  | { kind: "question"; question: Question }
  | { kind: "social"; slide: SocialProofSlide };

export const funnelSteps: FunnelStep[] = questions.flatMap((question) => {
  const steps: FunnelStep[] = [{ kind: "question", question }];
  const slide = socialProofSlides.find((s) => s.afterQuestionId === question.id);
  if (slide) steps.push({ kind: "social", slide });
  return steps;
});

export const loadingSteps = [
  "Analyzing your goals",
  "Matching your training style",
  "Syncing with your cycle",
  "Building your nutrition plan",
  "Calculating your success rate",
];
