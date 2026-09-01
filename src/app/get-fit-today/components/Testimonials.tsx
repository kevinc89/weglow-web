import { testimonials, purchaseStat } from "../data";

export function Testimonials() {
  return (
    <section className="bg-[#E4E9E6] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="font-[var(--font-fraunces)] text-3xl text-[#2E1B12] italic sm:text-4xl">
            Women love their story
          </h2>
          <p className="mt-3 text-lg text-[#5b4a3f]">
            {purchaseStat.headline} {purchaseStat.body}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.quote}
              className={`rounded-[2.5rem] bg-white p-8 text-center shadow-lg sm:text-left ${t.rotate}`}
            >
              <div
                className="flex justify-center gap-1 text-[#db4927] sm:justify-start"
                aria-hidden
              >
                {"★★★★★"}
              </div>
              <p className="mt-3 font-[var(--font-fraunces)] text-lg text-[#2E1B12] italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-3 text-sm text-[#5b4a3f]">— {t.source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
