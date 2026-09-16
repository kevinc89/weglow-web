export type ValueItem = {
  emoji: string;
  title: string;
  body: string;
};

// The "everything unlocked today" checklist shown on the offer card. Kept in
// sync in spirit with `plan.features` in `@/lib/brand`, but written punchier
// for a page whose whole job is to close the sale in one scroll.
export const valueItems: ValueItem[] = [
  {
    emoji: "🏋️‍♀️",
    title: "Personalized training, from day one",
    body: "Strength, pilates, yoga, barre, cardio & meditation — programmed around your goals and level.",
  },
  {
    emoji: "🌙",
    title: "Trained with your cycle, not against it",
    body: "Workouts that adapt to your hormonal phase, pregnancy, postpartum, or perimenopause.",
  },
  {
    emoji: "🥗",
    title: "Nutrition that fits your actual life",
    body: "Dietician-approved recipes and meal plans — nothing off limits, everything flexible.",
  },
  {
    emoji: "💛",
    title: "A community that keeps you going",
    body: "Monthly challenges, progress tracking, and thousands of women in it with you.",
  },
];

export const faqs = [
  {
    question: "Is the discount really applied automatically?",
    answer:
      "Yes. Your offer is already locked in for this visit — the discounted price you see on this page is exactly what you'll be charged at checkout, no code to re-enter.",
  },
  {
    question: "What happens after the timer runs out?",
    answer:
      "This price is reserved for your current visit. It's still one of our best offers, but we can't guarantee the same rate if you come back later — so it's worth locking in now.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes — cancel anytime in a couple of taps, no phone calls required. You're also covered by a 30-day money-back guarantee.",
  },
  {
    question: "Do I need any equipment?",
    answer:
      "No. Most programs work with minimal or no equipment, and every workout comes with step-by-step video demos.",
  },
  {
    question: "Is this a one-time payment or a subscription?",
    answer:
      "It's an annual subscription billed once today at the discounted price shown above. You keep full access to workouts, nutrition, and community for the full year.",
  },
];
