import { Logo } from "./Logo";
import { pillars, stat, testimonials, questions, type Choice } from "../data";
import type { Answers } from "../FunnelClient";

function findChoiceLabel(questionId: string, choiceId: string | undefined): string | undefined {
  if (!choiceId) return undefined;
  const question = questions.find((q) => q.id === questionId);
  const choice: Choice | undefined = question?.choices.find((c) => c.id === choiceId);
  return choice?.label;
}

export function ResultsScreen({
  answers,
  onContinue,
}: {
  answers: Answers;
  onContinue: () => void;
}) {
  const goal = findChoiceLabel("goal", answers.goal as string | undefined);
  const level = findChoiceLabel("level", answers.level as string | undefined);
  const days = findChoiceLabel("days", answers.days as string | undefined);
  const testimonial = testimonials[0];

  return (
    <div className="mx-auto flex min-h-[100dvh] max-w-lg flex-col items-center px-6 py-16 text-center">
      <Logo className="mb-8" />
      <h2 className="font-[var(--font-nohemi)] text-3xl font-extrabold leading-tight text-[#222]">
        Your Custom WeGlow Plan is Ready
      </h2>
      <p className="mt-3 text-[#444]">
        Based on your answers, here&apos;s what we&apos;ve built for you.
      </p>

      <div className="mt-8 w-full space-y-3 rounded-2xl bg-white p-6 text-left shadow-sm">
        {goal ? (
          <div className="flex justify-between border-b border-[#222]/5 pb-3">
            <span className="text-[#444]">Goal</span>
            <span className="font-medium text-[#222]">{goal}</span>
          </div>
        ) : null}
        {level ? (
          <div className="flex justify-between border-b border-[#222]/5 pb-3">
            <span className="text-[#444]">Level</span>
            <span className="font-medium text-[#222]">{level}</span>
          </div>
        ) : null}
        {days ? (
          <div className="flex justify-between">
            <span className="text-[#444]">Schedule</span>
            <span className="font-medium text-[#222]">{days}</span>
          </div>
        ) : null}
      </div>

      <div className="mt-6 flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-sm">
        <span className="font-[var(--font-nohemi)] text-2xl font-extrabold text-[#db4927]">
          {stat.headline}
        </span>
        <span className="max-w-[10rem] text-left text-sm text-[#444]">
          {stat.body}
        </span>
      </div>

      <div className="mt-8 grid w-full grid-cols-2 gap-3">
        {pillars.map((p) => (
          <div key={p.title} className="rounded-xl bg-white p-4 text-left shadow-sm">
            <p className="font-[var(--font-nohemi)] text-sm font-bold text-[#222]">
              {p.title}
            </p>
            <p className="mt-1 text-xs text-[#444]">{p.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 w-full rounded-2xl bg-white p-6 text-left shadow-sm">
        <p className="text-[#222]">&ldquo;{testimonial.quote}&rdquo;</p>
        <p className="mt-2 text-sm text-[#444]">— {testimonial.source}</p>
      </div>

      <button
        type="button"
        onClick={onContinue}
        className="mt-10 w-full max-w-xs rounded-full bg-[#db4927] px-8 py-4 font-[var(--font-nohemi)] text-lg font-bold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.02] active:scale-[0.98]"
      >
        See My Plan & Pricing
      </button>
    </div>
  );
}
