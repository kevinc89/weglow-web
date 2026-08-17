import { Logo } from "@/components/Logo";
import { stat } from "../data";

export function IntroScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center px-6 py-16 text-center">
      <Logo className="mb-10" />
      <h1 className="max-w-md font-[var(--font-nohemi)] text-4xl font-extrabold leading-tight tracking-tight text-[#222] sm:text-5xl">
        The fitness app built for women
      </h1>
      <p className="mt-4 max-w-sm text-lg text-[#444]">
        Take our 60-second quiz to get a personalized workout &amp; nutrition
        plan — synced to your body, your goals, and your life.
      </p>

      <button
        type="button"
        onClick={onStart}
        className="mt-10 w-full max-w-xs rounded-full bg-[#db4927] px-8 py-4 font-[var(--font-nohemi)] text-lg font-bold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.02] active:scale-[0.98]"
      >
        Start My Plan
      </button>

      <div className="mt-8 flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-sm">
        <span className="font-[var(--font-nohemi)] text-2xl font-extrabold text-[#db4927]">
          {stat.headline}
        </span>
        <span className="max-w-[10rem] text-left text-sm text-[#444]">
          {stat.body}
        </span>
      </div>
    </div>
  );
}
