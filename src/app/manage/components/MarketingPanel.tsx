import Image from "next/image";
import { CheckIcon } from "./PanelCard";

export type MarketingGroup = "login" | "steady" | "retention";

const CONTENT: Record<
  MarketingGroup,
  {
    pre: string;
    italic: string;
    post: string;
    body: string;
    bullets: string[];
    photo: { src: string; alt: string };
  }
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
    photo: {
      src: "/manage/photos/guided-workout.jpg",
      alt: "A WEGLOW member smiling mid-workout on her mat",
    },
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
    photo: {
      src: "/manage/photos/kitchen-app.jpg",
      alt: "A WEGLOW member checking her plan on her phone in the kitchen",
    },
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
    photo: {
      src: "/manage/photos/recovery-stretch.jpg",
      alt: "A WEGLOW member stretching during a recovery day",
    },
  },
};

export function MarketingPanel({ group }: { group: MarketingGroup }) {
  const content = CONTENT[group];

  return (
    <div className="relative h-48 w-full shrink-0 overflow-hidden sm:h-56 lg:h-auto lg:w-1/2">
      <Image
        src={content.photo.src}
        alt={content.photo.alt}
        fill
        priority
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-14">
        <h1 className="font-[var(--font-nohemi)] text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-5xl">
          {content.pre}{" "}
          <span className="font-[var(--font-fraunces)] italic text-[#ffd9c7]">
            {content.italic}
          </span>
          {content.post}
        </h1>
        <p className="mt-4 hidden max-w-md text-lg text-white/85 lg:block">
          {content.body}
        </p>

        <ul className="mt-6 hidden space-y-2.5 lg:block">
          {content.bullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-3 text-white">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                <CheckIcon />
              </span>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
