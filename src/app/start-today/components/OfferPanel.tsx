"use client";

import Image from "next/image";
import { Logo } from "@/components/Logo";
import { plan, purchaseStat, resultsStat } from "@/lib/brand";
import type { PlanPricing } from "@/lib/planPricing";
import { trustChips } from "../data";
import { useOfferCountdown, formatCountdown } from "@/lib/useOfferCountdown";
import { CheckIcon, ShieldIcon, RefreshIcon, LockIcon } from "./icons";
import { CheckoutButton } from "./CheckoutButton";

// Real WEGLOW trainers (Colby, Mara, Anna — see `trainers` in try-now/data.ts)
// plus one member photo, standing in for the avatar stack instead of flat
// placeholder circles.
const AVATARS = [
  { src: "/start-today/photos/avatars/colby.jpg", alt: "Colby, WEGLOW trainer" },
  { src: "/start-today/photos/avatars/mara.jpg", alt: "Mara, WEGLOW trainer" },
  { src: "/start-today/photos/avatars/anna.jpg", alt: "Anna, WEGLOW trainer" },
  { src: "/start-today/photos/avatars/member.jpg", alt: "A WEGLOW member" },
];

function formatAmount(amount: number): string {
  return amount.toFixed(2);
}

// "50% OFF" -> "50%". Falls back to the raw label if it isn't shaped that way.
function toSavePercent(discountLabel: string): string {
  const match = discountLabel.match(/(\d+%)/);
  return match ? match[1] : discountLabel;
}

export function OfferPanel({
  pricing,
  promoCode,
}: {
  pricing: PlanPricing | null;
  promoCode: string | null;
}) {
  const { remaining, active } = useOfferCountdown();

  const originalAmount = pricing?.originalAmount ?? plan.compareAtPrice;
  const discountedAmount = pricing?.discountedAmount ?? plan.price;
  const discountLabel = pricing?.discountLabel ?? "50% OFF";
  const savePercent = toSavePercent(discountLabel);
  const monthlyOriginal = originalAmount / 12;
  const monthlyDiscounted = discountedAmount / 12;
  const monthsFree = Math.max(0, Math.round((originalAmount - discountedAmount) / monthlyOriginal));

  return (
    <div className="flex min-h-dvh flex-col justify-center gap-6 px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Logo />
        <div className="flex items-center gap-2 rounded-full bg-[#222] py-2 pr-4 pl-3.5 text-white shadow-sm">
          <span className="h-2 w-2 animate-[soft-pulse_1.6s_ease-in-out_infinite] rounded-full bg-[#ffb199]" />
          <span className="text-[11px] font-bold tracking-[0.09em] text-white/80 uppercase">
            Offer ends in
          </span>
          <span className="font-mono text-sm font-extrabold tabular-nums tracking-wide">
            {active && remaining !== null ? formatCountdown(remaining) : "00:00:00"}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#f0fbf4] px-3.5 py-1.5 text-xs font-extrabold tracking-wide text-[#1a7a41] uppercase">
          <CheckIcon />
          {promoCode ? `${promoCode.toUpperCase()} applied` : "Discount applied"}
        </span>

        <h1 className="font-[var(--font-nohemi)] text-[clamp(2.25rem,4.5vw,4.25rem)] leading-[0.98] font-extrabold tracking-tight text-[#222] text-balance">
          Summer Sale:
          <br />
          <span className="text-[#db4927]">Save {savePercent}</span>
        </h1>

        <p className="max-w-[46ch] text-[clamp(1rem,1.2vw,1.15rem)] leading-[1.45] text-[#444]">
          Personalized workouts, nutrition, and coaching built for your
          body — for less than a coffee a month. Your discounted price is
          reserved for this visit.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {trustChips.map((chip) => (
          <span
            key={chip}
            className="inline-flex items-center gap-1.5 rounded-full border border-[#222]/10 bg-[#f8f8f8] px-3.5 py-1.5 text-sm font-semibold text-[#222]"
          >
            <CheckIcon className="text-[#db4927]" />
            {chip}
          </span>
        ))}
      </div>

      <div className="relative rounded-[1.75rem] border-2 border-[#db4927] bg-[#f8f8f8] p-6 shadow-lg shadow-[#222]/10">
        <span className="absolute -top-3.5 left-6 rounded-full bg-[#db4927] px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.1em] text-white uppercase shadow-sm">
          Best value · {savePercent} off
        </span>

        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <div className="font-[var(--font-nohemi)] text-[clamp(1.5rem,2vw,2rem)] leading-none font-extrabold text-[#222]">
              Yearly
            </div>
            <div className="text-sm text-[#444]">
              <s className="opacity-60">${formatAmount(originalAmount)}</s>{" "}
              <strong className="text-[#222]">
                ${formatAmount(discountedAmount)} billed yearly
              </strong>
            </div>
            {monthsFree > 0 ? (
              <div className="text-[13.5px] font-bold text-[#1a7a41]">
                You keep ${formatAmount(originalAmount - discountedAmount)} — that&apos;s{" "}
                {monthsFree} month{monthsFree === 1 ? "" : "s"} free
              </div>
            ) : null}
          </div>
          <div className="text-right leading-none">
            <div className="text-sm text-[#444]">
              <s>${formatAmount(monthlyOriginal)}</s> monthly
            </div>
            <div className="mt-1 flex items-baseline justify-end gap-1">
              <span className="font-[var(--font-nohemi)] text-[clamp(2.375rem,4vw,3.25rem)] leading-[0.9] font-extrabold text-[#db4927]">
                ${formatAmount(monthlyDiscounted)}
              </span>
              <span className="text-sm font-bold text-[#444]">/mo</span>
            </div>
          </div>
        </div>

        <CheckoutButton
          placement="offer_panel"
          promoCode={promoCode}
          value={discountedAmount}
          currency={pricing?.currency}
          className="relative mt-6 block w-full overflow-hidden rounded-full bg-[#db4927] px-6 py-4 text-center font-[var(--font-nohemi)] text-lg font-extrabold text-white shadow-lg shadow-[#db4927]/30 transition-colors hover:bg-[#b93a1c] active:bg-[#8c2c14]"
        >
          <span className="relative z-10">
            Claim {savePercent} off — ${formatAmount(discountedAmount)}/yr
          </span>
          <span
            aria-hidden
            className="absolute inset-y-0 left-0 w-1/3 animate-[button-sheen_3.4s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/35 to-transparent"
          />
        </CheckoutButton>

        <div className="mt-3 flex flex-wrap justify-center gap-4 text-[13px] text-[#444]">
          <span className="inline-flex items-center gap-1.5">
            <ShieldIcon className="text-[#1a7a41]" /> 30-day money back
          </span>
          <span className="inline-flex items-center gap-1.5">
            <RefreshIcon className="text-[#1a7a41]" /> Cancel anytime
          </span>
          <span className="inline-flex items-center gap-1.5">
            <LockIcon className="text-[#1a7a41]" /> Secure checkout
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center">
          {AVATARS.map(({ src, alt }, index) => (
            <span
              key={src}
              style={{ marginLeft: index === 0 ? 0 : -11 }}
              className="relative h-9 w-9 overflow-hidden rounded-full shadow-[0_0_0_3px_#fff]"
            >
              <Image src={src} alt={alt} fill sizes="36px" className="object-cover" />
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-1.5 text-sm font-bold text-[#222]">
            <span className="h-1.5 w-1.5 animate-[soft-pulse_1.8s_ease-in-out_infinite] rounded-full bg-[#db4927]" />
            Loved by women worldwide
          </div>
          <div className="text-[13px] text-[#444]">
            {resultsStat.headline} {resultsStat.body} · {purchaseStat.headline}{" "}
            on the App Store
          </div>
        </div>
      </div>
    </div>
  );
}
