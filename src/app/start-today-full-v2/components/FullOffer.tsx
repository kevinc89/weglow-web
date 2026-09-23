"use client";

import Image from "next/image";
import { Logo } from "@/components/Logo";
import { plan, purchaseStat, resultsStat, testimonials } from "@/lib/brand";
import type { PlanPricing } from "@/lib/planPricing";
import { useOfferCountdown, formatCountdown } from "@/lib/useOfferCountdown";
import { CheckIcon, ShieldIcon, UsersIcon, StarIcon } from "./icons";
import { CheckoutButton } from "./CheckoutButton";

const featuredTestimonial = testimonials[1]; // Priya

function formatAmount(amount: number): string {
  return amount.toFixed(2);
}

export function FullOffer({
  pricing,
  promoCode,
}: {
  pricing: PlanPricing | null;
  promoCode: string | null;
}) {
  const { remaining, active } = useOfferCountdown();

  const originalAmount = pricing?.originalAmount ?? plan.compareAtPrice;
  const discountedAmount = pricing?.discountedAmount ?? plan.price;
  const interval = pricing?.interval ?? plan.interval;
  const monthlyOriginal = originalAmount / 12;
  const monthlyDiscounted = discountedAmount / 12;
  const monthsFree = Math.max(0, Math.round((originalAmount - discountedAmount) / monthlyOriginal));

  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden">
      <Image
        src="/get-fit-today/photos/hero.jpg"
        alt="A WEGLOW member holding a side plank in a bright studio"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "65% 35%" }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,.6) 0%, rgba(255,255,255,.4) 26%, rgba(255,255,255,.12) 48%, rgba(255,255,255,0) 65%)",
        }}
      />

      <div className="relative z-[2] px-3 pt-3 sm:px-6 sm:pt-5">
        <div className="flex flex-col gap-1.5 rounded-2xl bg-[#db4927] px-4 py-2.5 text-white shadow-lg shadow-[#222]/15 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-4 sm:gap-y-1 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
            <span className="flex items-center gap-2 text-[13px] font-extrabold whitespace-nowrap uppercase sm:text-[13.5px] sm:tracking-wide">
              <span className="h-2 w-2 shrink-0 animate-[soft-pulse_1.6s_ease-in-out_infinite] rounded-full bg-white" />
              Your Glow Up · 50% off<span className="hidden sm:inline"> ends in</span>
            </span>
            <span className="shrink-0 rounded-full bg-[#222] px-2.5 py-0.5 font-mono text-[13px] font-bold tabular-nums tracking-wide">
              {active && remaining !== null ? formatCountdown(remaining) : "00:00:00"}
            </span>
          </div>
          <div className="text-[12.5px] font-bold opacity-95 sm:text-[13px]">
            {resultsStat.headline} women already joined
          </div>
        </div>
      </div>

      <div className="relative z-[2] flex flex-1 flex-wrap items-center gap-x-16 gap-y-8 px-6 py-10 sm:px-10 lg:px-16">
        <div className="flex max-w-[620px] min-w-[320px] flex-1 flex-col gap-4">
          <Logo />

          <h1 className="font-[var(--font-nohemi)] text-[clamp(2.625rem,5.4vw,4.875rem)] leading-[0.95] font-extrabold tracking-tight text-[#222]">
            <span className="text-[#db4927]">50% Off</span>
            <br />
            in Your First Year
          </h1>

          <p className="max-w-[42ch] text-[clamp(1rem,1.2vw,1.15rem)] leading-[1.45] font-medium text-[#222] [text-shadow:0_1px_16px_rgba(255,255,255,0.95),0_1px_3px_rgba(255,255,255,0.9)]">
            1,000+ workouts, 20+ plans, recipes and a planner — built for
            women&apos;s bodies, led by Stef Williams and 6 specialized
            coaches.
          </p>

          <div className="mt-1 flex flex-wrap gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#222]/10 bg-[#f8f8f8] px-3.5 py-2 text-sm font-bold text-[#222]">
              <StarIcon className="text-[#db4927]" />
              {purchaseStat.headline} on the App Store
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#222]/10 bg-[#f8f8f8] px-3.5 py-2 text-sm font-bold text-[#222]">
              <UsersIcon className="text-[#1a7a41]" />
              {resultsStat.headline} members
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#222]/10 bg-[#f8f8f8] px-3.5 py-2 text-sm font-bold text-[#222]">
              <ShieldIcon className="text-[#1a7a41]" />
              30-day money back
            </span>
          </div>

          <div className="mt-2 hidden max-w-[520px] items-center gap-3 rounded-2xl bg-[#fde8e5] p-4 sm:flex">
            <div className="flex shrink-0 gap-0.5 text-[#db4927]" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <div>
              <div className="text-sm leading-snug font-semibold text-[#222]">
                &ldquo;{featuredTestimonial.quote}&rdquo;
              </div>
              <div className="mt-0.5 text-xs font-bold tracking-wide text-[#8c2c14] uppercase">
                {featuredTestimonial.source}
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-[420px] min-w-[300px] flex-none rounded-[1.75rem] bg-white p-6 shadow-xl shadow-[#222]/10 sm:p-7">
          <span className="absolute -top-3.5 left-6 rounded-full bg-[#db4927] px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.1em] text-white uppercase shadow-sm">
            {promoCode ? `${promoCode.toUpperCase()} applied` : "Discount applied"}
          </span>

          <div className="flex items-baseline gap-2.5">
            <span className="font-[var(--font-nohemi)] text-[clamp(2.75rem,4.6vw,3.75rem)] leading-[0.9] font-extrabold text-[#db4927]">
              ${formatAmount(discountedAmount)}
            </span>
            <span className="text-base font-bold text-[#444]">/ {interval}</span>
          </div>
          <div className="mt-1.5 text-[15px] text-[#444]">
            <s className="opacity-60">${formatAmount(originalAmount)}</s> · that&apos;s{" "}
            <strong className="text-[#222]">${formatAmount(monthlyDiscounted)} a month</strong>
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl border border-[#222]/10">
            <div className="flex items-center justify-between bg-[#fff3f0] px-4 py-3">
              <span className="text-sm font-extrabold text-[#222]">Billed today</span>
              <span className="text-[15px] font-extrabold text-[#8c2c14]">
                ${formatAmount(discountedAmount)}
              </span>
            </div>
            <div className="flex items-center justify-between bg-[#f8f8f8] px-4 py-3">
              <span className="text-sm text-[#444]">Monthly equivalent</span>
              <span className="text-[15px] text-[#444]">
                ${formatAmount(monthlyDiscounted)} / mo
              </span>
            </div>
          </div>

          {monthsFree > 0 ? (
            <div className="mt-2.5 text-center text-[13.5px] font-bold text-[#1a7a41]">
              You keep ${formatAmount(originalAmount - discountedAmount)} a year — {monthsFree} month
              {monthsFree === 1 ? "" : "s"} free
            </div>
          ) : null}

          <CheckoutButton
            placement="full_offer"
            promoCode={promoCode}
            value={discountedAmount}
            currency={pricing?.currency}
            className="relative mt-4 block w-full overflow-hidden rounded-full bg-[#db4927] px-6 py-4 text-center font-[var(--font-nohemi)] text-lg font-extrabold text-white shadow-lg shadow-[#db4927]/30 transition-colors hover:bg-[#b93a1c] active:bg-[#8c2c14]"
          >
            <span className="relative z-10">
              Get my year for ${formatAmount(discountedAmount)}
            </span>
            <span
              aria-hidden
              className="absolute inset-y-0 left-0 w-1/3 animate-[button-sheen_3.4s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/35 to-transparent"
            />
          </CheckoutButton>

          <p className="mt-2.5 text-center text-[12.5px] leading-[1.5] text-[#666]">
            <span className="inline-flex items-center gap-1">
              <CheckIcon className="text-[#1a7a41]" /> Cancel anytime
            </span>{" "}
            · Secure checkout
            <br />
            Renews at ${formatAmount(originalAmount)}/{interval} after the first year
          </p>
        </div>
      </div>
    </div>
  );
}
