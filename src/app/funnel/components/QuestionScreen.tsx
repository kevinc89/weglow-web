import { ChoiceCard } from "./ChoiceCard";
import { ProgressBar } from "./ProgressBar";
import type { Question } from "../data";

export function QuestionScreen({
  question,
  progress,
  selected,
  onSelectSingle,
  onToggleMulti,
  onBack,
  onContinue,
  showContinue,
}: {
  question: Question;
  progress: number;
  selected: string[];
  onSelectSingle: (choiceId: string) => void;
  onToggleMulti: (choiceId: string) => void;
  onBack: () => void;
  onContinue: () => void;
  showContinue: boolean;
}) {
  return (
    <div className="mx-auto flex min-h-[100dvh] max-w-lg flex-col px-6 py-8">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onBack}
          aria-label="Back"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#222] shadow-sm"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M11 4L5 9L11 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <ProgressBar progress={progress} />
      </div>

      <div className="flex flex-1 flex-col justify-center py-10">
        <h2 className="font-[var(--font-nohemi)] text-2xl font-extrabold leading-tight text-[#222] sm:text-3xl">
          {question.title}
        </h2>
        {question.subtitle ? (
          <p className="mt-2 text-[#444]">{question.subtitle}</p>
        ) : null}

        <div className="mt-8 space-y-3">
          {question.choices.map((choice) => (
            <ChoiceCard
              key={choice.id}
              label={choice.label}
              sublabel={choice.sublabel}
              emoji={choice.emoji}
              selected={selected.includes(choice.id)}
              onClick={() =>
                question.kind === "single"
                  ? onSelectSingle(choice.id)
                  : onToggleMulti(choice.id)
              }
            />
          ))}
        </div>

        {question.kind === "multi" && showContinue ? (
          <button
            type="button"
            onClick={onContinue}
            className="mt-8 w-full rounded-full bg-[#db4927] px-8 py-4 font-[var(--font-nohemi)] text-lg font-bold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Continue
          </button>
        ) : null}
      </div>
    </div>
  );
}
