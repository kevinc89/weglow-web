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
            <div
              className="group h-full rounded-3xl p-7 text-center shadow-lg shadow-[#222]/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{ backgroundColor: card.bg }}
            >
              <span
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                aria-hidden
              >
                {card.emoji}
              </span>
              <p
                className="mt-4 font-[var(--font-nohemi)] text-xl font-extrabold"
                style={{ color: card.accent }}
              >
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
