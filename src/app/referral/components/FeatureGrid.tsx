import { featureCards } from "../data";

export function FeatureGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="text-center">
        <h2 className="font-[var(--font-nohemi)] text-3xl font-extrabold text-[#222] sm:text-4xl">
          Everything you need, one membership
        </h2>
        <p className="mt-3 text-lg text-[#444]">
          No add-ons, no upsells — your friend&apos;s discount unlocks all of
          it.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {featureCards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl bg-[#f8f8f8] p-6 text-center"
          >
            <span className="text-3xl">{card.emoji}</span>
            <p className="mt-3 font-[var(--font-nohemi)] text-lg font-bold text-[#222]">
              {card.title}
            </p>
            <p className="mt-2 text-sm text-[#444]">{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
