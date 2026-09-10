import Image from "next/image";
import { plan } from "@/lib/brand";
import {
  REFERRAL_PLAN,
  REFERRAL_SAVINGS,
  REFERRAL_SAVINGS_PERCENT,
} from "../pricing";
import { CheckoutButton } from "./CheckoutButton";
import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";

export function Pricing() {
  return (
    <section className="bg-[#222] py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <Reveal>
          <h2 className="font-[var(--font-nohemi)] text-3xl font-extrabold text-white sm:text-4xl">
            Claim your friend&apos;s discount
          </h2>
          <p className="mt-3 text-lg text-white/70">
            {REFERRAL_PLAN.trialDays} days free. One price for the year.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-10 overflow-hidden rounded-[2rem] bg-white text-left shadow-2xl">
            <div className="relative h-64 w-full sm:h-72">
              <Image
                src="/manage/photos/stability-ball.jpg"
                alt="A WEGLOW member training in her home gym"
                fill
                sizes="(min-width: 640px) 512px, 100vw"
                className="object-cover"
                style={{ objectPosition: "50% 8%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />

              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#db4927] shadow-sm">
                🎁 Referral discount
              </div>
              <p className="absolute top-5 right-5 text-xs font-semibold tracking-wider text-white/80 uppercase">
                Friends only
              </p>

              <div className="absolute right-5 bottom-4 left-5 flex items-end gap-3">
                <p className="font-[var(--font-nohemi)] text-6xl leading-none font-extrabold text-white sm:text-7xl">
                  <CountUp end={REFERRAL_SAVINGS_PERCENT} suffix="%" />
                </p>
                <p className="pb-1 font-[var(--font-nohemi)] text-2xl font-extrabold text-[#ffb199] sm:text-3xl">
                  off
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <span className="font-[var(--font-nohemi)] text-lg font-bold text-[#222]">
                  ANNUAL PLAN
                </span>
                <p>
                  <span className="text-sm text-[#444] line-through">
                    ${REFERRAL_PLAN.compareAtPrice}
                  </span>{" "}
                  <span className="font-[var(--font-nohemi)] text-2xl font-extrabold text-[#222]">
                    ${REFERRAL_PLAN.price}
                  </span>{" "}
                  <span className="text-sm text-[#444]">
                    /{REFERRAL_PLAN.interval}
                  </span>
                </p>
              </div>
              <p className="mt-1 text-sm text-[#444]">
                Your first year of WEGLOW, at your friend&apos;s price.
              </p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-[#222]"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#db4927]/10 text-[#db4927]">
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M2.5 7L5.5 10L11.5 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-start gap-3 rounded-2xl bg-emerald-50 p-4">
                <span className="text-lg" aria-hidden>
                  ⏰
                </span>
                <p className="text-sm text-emerald-900">
                  This discount only applies to your first subscription.
                  Once it&apos;s gone, it&apos;s gone.
                </p>
              </div>

              <CheckoutButton className="mt-6 block w-full rounded-full bg-[#db4927] px-8 py-4 text-center font-[var(--font-nohemi)] text-lg font-bold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.02] active:scale-[0.98]">
                Get {REFERRAL_SAVINGS_PERCENT}% off: ${REFERRAL_PLAN.price}/
                {REFERRAL_PLAN.interval}
              </CheckoutButton>
              <p className="mt-3 text-center text-xs text-[#444]">
                {REFERRAL_PLAN.trialDays} days free, then $
                {REFERRAL_PLAN.price} billed automatically. Cancel before
                your trial ends and you won&apos;t be charged. Either way,
                you save ${REFERRAL_SAVINGS}.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
