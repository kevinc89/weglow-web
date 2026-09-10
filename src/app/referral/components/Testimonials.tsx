import { testimonials, resultsStat } from "@/lib/brand";
import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <Reveal className="text-center">
        <h2 className="font-[var(--font-nohemi)] text-3xl font-extrabold text-[#222] sm:text-4xl">
          Your friend isn&apos;t the only one glowing
        </h2>
        <p className="mt-3 text-lg text-[#444]">
          <CountUp end={300} suffix="k+" duration={1400} /> {resultsStat.body}
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal key={t.quote} delay={i * 80}>
            <div className="h-full rounded-2xl bg-[#f8f8f8] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg sm:text-left">
              <div
                className="flex justify-center gap-1 text-[#db4927] sm:justify-start"
                aria-hidden
              >
                {"★★★★★"}
              </div>
              <p className="mt-3 text-[#222]">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-2 text-sm text-[#444]">— {t.source}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
