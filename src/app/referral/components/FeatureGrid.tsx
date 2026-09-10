import { featureCards } from "../data";
import { Reveal } from "./Reveal";

export function FeatureGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <Reveal className="text-center">
        <h2 className="font-[var(--font-nohemi)] text-3xl font-extrabold text-[#222] sm:text-4xl">
          One membership. Everything included.
        </h2>
        <p className="mt-3 text-lg text-[#444]">
          No add-ons. No upsells. Just everything, unlocked.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {featureCards.map((card, i) => (
          <Reveal key={card.title} delay={i * 100}>
            <div className="group h-full rounded-2xl bg-[#f8f8f8] p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl">
              <span className="inline-block text-3xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">
                {card.emoji}
              </span>
              <p className="mt-3 font-[var(--font-nohemi)] text-lg font-bold text-[#222]">
                {card.title}
              </p>
              <p className="mt-2 text-sm text-[#444]">{card.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
