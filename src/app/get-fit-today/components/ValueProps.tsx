import { valueProps } from "../data";

export function ValueProps() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 text-center md:py-24">
      <span className="font-[var(--font-fraunces)] text-sm font-semibold tracking-[0.2em] text-[#db4927] uppercase">
        Get to know WEGLOW
      </span>
      <h2 className="mx-auto mt-3 max-w-xl font-[var(--font-fraunces)] text-3xl text-[#2E1B12] italic sm:text-4xl">
        Everything you need, in one story
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {valueProps.map((card) => (
          <div
            key={card.title}
            className="rounded-[2rem] p-8 text-center"
            style={{ backgroundColor: card.bg }}
          >
            <span className="text-4xl">{card.emoji}</span>
            <h3 className="mt-4 font-[var(--font-fraunces)] text-xl text-[#2E1B12]">
              {card.title}
            </h3>
            <p className="mt-2 text-[#5b4a3f]">{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
