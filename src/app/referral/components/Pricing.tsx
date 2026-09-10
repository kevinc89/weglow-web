import { plan } from "@/lib/brand";
import { REFERRAL_PLAN, REFERRAL_SAVINGS } from "../pricing";
import { CheckoutButton } from "./CheckoutButton";

export function Pricing() {
  return (
    <section className="bg-[#222] py-16 text-white md:py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-[var(--font-nohemi)] text-3xl font-extrabold sm:text-4xl">
          Claim your friend&apos;s discount
        </h2>
        <p className="mt-3 text-lg text-white/70">
          {REFERRAL_PLAN.trialDays} days free, then one price for the year.
        </p>

        <div className="mt-10 rounded-3xl border-2 border-[#db4927] bg-white p-8 text-left text-[#222] shadow-2xl">
          <div className="flex items-center justify-between">
            <span className="font-[var(--font-nohemi)] text-lg font-bold">
              ANNUAL PLAN
            </span>
            <span className="rounded-full bg-[#db4927]/10 px-3 py-1 text-xs font-bold text-[#db4927]">
              Referral Discount
            </span>
          </div>
          <p className="mt-1 text-sm text-[#444]">
            Our most popular plan, discounted for you
          </p>

          <div className="mt-4 flex items-end gap-2">
            <span className="text-lg text-[#444] line-through">
              ${REFERRAL_PLAN.compareAtPrice}
            </span>
            <span className="font-[var(--font-nohemi)] text-4xl font-extrabold">
              ${REFERRAL_PLAN.price}
            </span>
            <span className="pb-1 text-[#444]">/ {REFERRAL_PLAN.interval}</span>
          </div>
          <p className="mt-1 text-xs font-semibold text-[#db4927]">
            Save ${REFERRAL_SAVINGS} + a {REFERRAL_PLAN.trialDays}-day free
            trial
          </p>

          <ul className="mt-6 space-y-3">
            {plan.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-[#222]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="mt-0.5 shrink-0 text-[#db4927]"
                >
                  <path
                    d="M2.5 7L5.5 10L11.5 3.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          <CheckoutButton className="mt-7 block w-full rounded-full bg-[#db4927] px-8 py-4 text-center font-[var(--font-nohemi)] text-lg font-bold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.02] active:scale-[0.98]">
            Start your free trial
          </CheckoutButton>
          <p className="mt-3 text-center text-xs text-[#444]">
            {REFERRAL_PLAN.trialDays} days free, then $
            {REFERRAL_PLAN.price}/{REFERRAL_PLAN.interval}, billed
            automatically. Cancel anytime before your trial ends and you
            won&apos;t be charged.
          </p>
        </div>
      </div>
    </section>
  );
}
