import { testimonials, resultsStat } from "@/lib/brand";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="text-center">
        <h2 className="font-[var(--font-nohemi)] text-3xl font-extrabold text-[#222] sm:text-4xl">
          Loved by thousands of women
        </h2>
        <p className="mt-3 text-lg text-[#444]">
          {resultsStat.headline} {resultsStat.body}
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {testimonials.map((t) => (
          <div key={t.quote} className="rounded-2xl bg-[#f8f8f8] p-6">
            <div className="flex gap-1 text-[#db4927]" aria-hidden>
              {"★★★★★"}
            </div>
            <p className="mt-3 text-[#222]">&ldquo;{t.quote}&rdquo;</p>
            <p className="mt-2 text-sm text-[#444]">— {t.source}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
