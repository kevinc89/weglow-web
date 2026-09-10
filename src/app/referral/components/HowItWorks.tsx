import { REFERRAL_PLAN } from "../pricing";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "A friend shares their link",
    body: "One tap in the WEGLOW app and their invite lands in your inbox.",
  },
  {
    n: "02",
    title: "You start your free trial",
    body: `${REFERRAL_PLAN.trialDays} days, completely free. No commitment, cancel anytime.`,
  },
  {
    n: "03",
    title: "You save on your first year",
    body: `Keep the Annual Plan for $${REFERRAL_PLAN.price} instead of $${REFERRAL_PLAN.compareAtPrice}.`,
  },
];

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <Reveal className="text-center">
        <h2 className="font-[var(--font-nohemi)] text-3xl font-extrabold text-[#222] sm:text-4xl">
          How your discount works
        </h2>
        <p className="mt-3 text-lg text-[#444]">Three steps. That&apos;s it.</p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
        {STEPS.map((step, i) => (
          <Reveal
            key={step.n}
            delay={i * 120}
            className="text-center sm:text-left"
          >
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#222] font-[var(--font-nohemi)] text-lg font-bold text-white sm:mx-0">
              {step.n}
            </span>
            <p className="mt-4 font-[var(--font-nohemi)] text-lg font-bold text-[#222]">
              {step.title}
            </p>
            <p className="mt-2 text-sm text-[#444]">{step.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
