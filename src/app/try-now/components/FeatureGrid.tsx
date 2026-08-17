import { featureCards } from "../data";

export function FeatureGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {featureCards.map((card) => (
          <div
            key={card.title}
            className="rounded-3xl bg-[#fde8e5] p-8 text-center"
          >
            <span className="text-4xl">{card.emoji}</span>
            <h3 className="mt-4 font-[var(--font-nohemi)] text-xl font-extrabold text-[#222]">
              {card.title}
            </h3>
            <p className="mt-2 text-[#444]">{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
