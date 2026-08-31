import { Logo } from "@/components/Logo";
import { pillars, resultsStat, testimonials, questions, type Choice } from "../data";
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
    <div className="mx-auto flex min-h-[100dvh] max-w-lg flex-col items-center px-6 pt-10 pb-32 text-center">
      <Logo className="mb-6" />

      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#db4927] to-[#dd23bb] text-2xl shadow-lg shadow-[#db4927]/30">
        ✨
      </div>

      <h2 className="mt-5 font-[var(--font-nohemi)] text-3xl font-extrabold leading-tight text-[#222]">
        Your custom <span className="text-[#db4927]">WEGLOW</span> plan is
        ready
      </h2>
      <p className="mt-3 text-[#444]">
        Based on your answers, here&apos;s what we&apos;ve built for you.
      </p>

      <div className="mt-8 w-full divide-y divide-[#222]/5 overflow-hidden rounded-2xl bg-white text-left shadow-sm">
        {goal ? (
          <div className="flex items-center justify-between gap-3 px-6 py-4">
            <span className="flex items-center gap-2 text-[#444]">
              <span className="text-lg">🎯</span> Goal
            </span>
            <span className="rounded-full bg-[#fde8e5] px-3 py-1 text-sm font-bold text-[#db4927]">
              {goal}
            </span>
          </div>
        ) : null}
        {level ? (
          <div className="flex items-center justify-between gap-3 px-6 py-4">
            <span className="flex items-center gap-2 text-[#444]">
              <span className="text-lg">📈</span> Level
            </span>
            <span className="rounded-full bg-[#fde8e5] px-3 py-1 text-sm font-bold text-[#db4927]">
              {level}
            </span>
          </div>
        ) : null}
        {days ? (
          <div className="flex items-center justify-between gap-3 px-6 py-4">
            <span className="flex items-center gap-2 text-[#444]">
              <span className="text-lg">📅</span> Schedule
            </span>
            <span className="rounded-full bg-[#fde8e5] px-3 py-1 text-sm font-bold text-[#db4927]">
              {days}
            </span>
          </div>
        ) : null}
      </div>

      <div className="mt-6 flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-sm">
        <span className="font-[var(--font-nohemi)] text-2xl font-extrabold text-[#db4927]">
          {resultsStat.headline}
        </span>
        <span className="max-w-[10rem] text-left text-sm text-[#444]">
          {resultsStat.body}
        </span>
      </div>

      <div className="mt-8 grid w-full grid-cols-2 gap-3">
        {pillars.map((p) => (
          <div key={p.title} className="rounded-2xl bg-white p-4 text-left shadow-sm">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fde8e5] text-lg">
              {p.emoji}
            </div>
            <p className="mt-3 font-[var(--font-nohemi)] text-sm font-bold text-[#222]">
              {p.title}
            </p>
            <p className="mt-1 text-xs text-[#444]">{p.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 w-full rounded-2xl bg-white p-6 text-left shadow-sm">
        <p className="text-sm tracking-wide text-[#db4927]">★★★★★</p>
        <p className="mt-2 text-[#222]">&ldquo;{testimonial.quote}&rdquo;</p>
        <p className="mt-2 text-sm text-[#444]">— {testimonial.source}</p>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-10 border-t border-[#222]/10 bg-white/95 px-6 py-4 backdrop-blur-sm">
        <div className="mx-auto max-w-lg">
          <button
            type="button"
            onClick={onContinue}
            className="w-full rounded-full bg-[#db4927] px-8 py-4 font-[var(--font-nohemi)] text-lg font-bold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            See my plan & pricing
          </button>
        </div>
      </div>
    </div>
  );
}
