import { REFERRAL_PLAN } from "../pricing";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    n: "01",
    emoji: "🔗",
    color: "#db4927",
    title: "A friend shares their link",
    body: "One tap in the WEGLOW app and their invite lands in your inbox.",
  },
  {
    n: "02",
    emoji: "⏱️",
    color: "#2d62ff",
    title: "You start your free trial",
    body: `${REFERRAL_PLAN.trialDays} days, completely free. No commitment, cancel anytime.`,
  },
  {
    n: "03",
    emoji: "🎉",
    color: "#dd23bb",
    title: "You save on your first year",
    body: `Keep the Annual Plan for $${REFERRAL_PLAN.price} instead of $${REFERRAL_PLAN.compareAtPrice}.`,
  },
];

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-[#fdf6f4] py-16 md:py-24">
      <div className="absolute top-1/2 left-1/2 -z-0 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#db4927]/5 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6">
        <Reveal className="text-center">
          <h2 className="font-[var(--font-nohemi)] text-3xl font-extrabold text-[#222] sm:text-4xl">
            How your discount works
          </h2>
          <p className="mt-3 text-lg text-[#444]">
            Three steps. That&apos;s it.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 120}>
              <div className="h-full rounded-3xl bg-white p-6 text-center shadow-lg shadow-[#222]/5 ring-1 ring-[#222]/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:text-left">
                <div className="flex items-center justify-center gap-3 sm:justify-start">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-[var(--font-nohemi)] text-lg font-extrabold text-white"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.n}
                  </span>
                  <span className="text-2xl">{step.emoji}</span>
                </div>
                <p className="mt-4 font-[var(--font-nohemi)] text-lg font-bold text-[#222]">
                  {step.title}
                </p>
                <p className="mt-2 text-sm text-[#444]">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
