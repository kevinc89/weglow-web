import { ProgressBar } from "./ProgressBar";
import type { SocialProofSlide } from "../data";

export function SocialProofScreen({
  slide,
  progress,
  onBack,
  onContinue,
}: {
  slide: SocialProofSlide;
  progress: number;
  onBack: () => void;
  onContinue: () => void;
}) {
  return (
    <div className="mx-auto flex min-h-[100dvh] max-w-lg flex-col px-6 py-8 animate-fade-in-up">
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

      <div className="flex flex-1 flex-col items-center justify-center py-10 text-center">
        <div className="flex h-16 w-16 animate-pop-in items-center justify-center rounded-full bg-gradient-to-br from-[#db4927] to-[#dd23bb] text-3xl shadow-lg shadow-[#db4927]/30">
          {slide.emoji}
        </div>
        <h2 className="mt-6 max-w-sm font-[var(--font-nohemi)] text-2xl font-extrabold leading-tight text-[#222] sm:text-3xl">
          {slide.headline}
        </h2>
        <p className="mt-3 max-w-sm text-[#444]">{slide.body}</p>

        {slide.stat ? (
          <div className="mt-6 flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-sm">
            <span className="font-[var(--font-nohemi)] text-2xl font-extrabold text-[#db4927]">
              {slide.stat.headline}
            </span>
            <span className="max-w-[10rem] text-left text-sm text-[#444]">
              {slide.stat.body}
            </span>
          </div>
        ) : null}

        {slide.testimonial ? (
          <div className="mt-6 w-full rounded-2xl bg-white p-6 text-left shadow-sm">
            <p className="text-sm tracking-wide text-[#db4927]">★★★★★</p>
            <p className="mt-2 text-[#222]">
              &ldquo;{slide.testimonial.quote}&rdquo;
            </p>
            <p className="mt-2 text-sm text-[#444]">
              — {slide.testimonial.source}
            </p>
          </div>
        ) : null}

        <button
          type="button"
          onClick={onContinue}
          className="mt-8 w-full max-w-xs rounded-full bg-[#db4927] px-8 py-4 font-[var(--font-nohemi)] text-lg font-bold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          {slide.cta ?? "Keep going"}
        </button>
      </div>
    </div>
  );
}
