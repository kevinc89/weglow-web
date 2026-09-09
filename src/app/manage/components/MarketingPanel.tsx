import { CheckIcon } from "./PanelCard";

export type MarketingGroup = "login" | "steady" | "retention";

const CONTENT: Record<
  MarketingGroup,
  { pre: string; italic: string; post: string; body: string; bullets: string[] }
> = {
  login: {
    pre: "Hey, welcome",
    italic: "back",
    post: ".",
    body: "Sign in with your WEGLOW account to manage your membership — switch plans, pause, or update billing in a couple of taps.",
    bullets: [
      "Switch your plan anytime",
      "Pause without losing your progress",
      "Cancel with ease — no phone calls",
    ],
  },
  steady: {
    pre: "Your WEGLOW, your",
    italic: "rules",
    post: ".",
    body: "Update billing, switch plans, or take a break — all in one place, whenever you need it.",
    bullets: [
      "Switch your plan anytime",
      "Update payment details in seconds",
      "Your streaks & progress stay saved",
    ],
  },
  retention: {
    pre: "Before you",
    italic: "decide",
    post: ", hear us out.",
    body: "Whatever's going on, there's probably a way to make WEGLOW fit. We'd love for you to stay.",
    bullets: [
      "Switch your plan",
      "Pause instead of cancelling",
      "Keep your progress & streaks",
    ],
  },
};

export function MarketingPanel({ group }: { group: MarketingGroup }) {
  const content = CONTENT[group];

  return (
    <div className="max-w-lg animate-fade-in-up py-4">
      <h1 className="font-[var(--font-nohemi)] text-4xl font-extrabold leading-tight tracking-tight text-[#222] sm:text-5xl">
        {content.pre}{" "}
        <span className="font-[var(--font-fraunces)] italic text-[#db4927]">
          {content.italic}
        </span>
        {content.post}
      </h1>
      <p className="mt-5 max-w-md text-lg text-[#444]">{content.body}</p>

      <ul className="mt-8 space-y-3">
        {content.bullets.map((bullet) => (
          <li key={bullet} className="flex items-center gap-3 text-[#222]">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#db4927]/10 text-[#db4927]">
              <CheckIcon />
            </span>
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
