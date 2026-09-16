"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { plan, purchaseStat, stat } from "@/lib/brand";
import type { PlanPricing } from "@/lib/planPricing";
import { benefits } from "../data";
import { CheckoutButton } from "./CheckoutButton";

const OFFER_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const STORAGE_KEY = "weglow_start_today_deadline";

function readDeadline(): number {
  if (typeof window === "undefined") return Date.now() + OFFER_WINDOW_MS;
  try {
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    const parsed = stored ? Number(stored) : NaN;
    if (Number.isFinite(parsed) && parsed > Date.now()) return parsed;
  } catch {
    // sessionStorage unavailable — fall through to a fresh deadline.
  }
  const deadline = Date.now() + OFFER_WINDOW_MS;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, String(deadline));
  } catch {
    // Nothing to persist to — the timer just won't survive a refresh.
  }
  return deadline;
}

function formatRemaining(ms: number): string {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function formatAmount(amount: number): string {
  return Number.isInteger(amount) ? String(amount) : amount.toFixed(2);
}

export function OfferPanel({
  pricing,
  promoCode,
}: {
  pricing: PlanPricing | null;
  promoCode: string | null;
}) {
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const deadline = readDeadline();
    const tick = () => setRemaining(deadline - Date.now());
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const originalAmount = pricing?.originalAmount ?? plan.compareAtPrice;
  const discountedAmount = pricing?.discountedAmount ?? plan.price;
  const interval = pricing?.interval ?? plan.interval;
  const discountLabel = pricing?.discountLabel ?? "50% OFF";
  const monthlyEquivalent = interval === "year" ? discountedAmount / 12 : discountedAmount;
  const showCountdown = remaining !== null && remaining > 0;

  return (
    <div className="flex min-h-dvh flex-col justify-center gap-5 px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
      <div className="flex items-center justify-between">
        <Logo />
        {showCountdown ? (
          <span className="rounded-full bg-[#fde8e5] px-3 py-1 font-mono text-xs font-bold tabular-nums text-[#db4927]">
            ⏱ {formatRemaining(remaining)}
          </span>
        ) : null}
      </div>

      <div>
        <p className="font-[var(--font-nohemi)] text-2xl font-extrabold text-[#222] sm:text-3xl">
          Mid-Year Sale:{" "}
          <span className="italic text-[#db4927]">{discountLabel}</span>
        </p>
      </div>

      <ul className="space-y-2.5">
        {benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2.5 text-[#222]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 14 14"
              fill="none"
              className="mt-1 shrink-0 text-[#db4927]"
            >
              <path
                d="M2.5 7L5.5 10L11.5 3.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm sm:text-base">{benefit}</span>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3 rounded-xl bg-[#f0fbf4] px-4 py-3">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#22a559] text-white">
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
            <path
              d="M2.5 7L5.5 10L11.5 3.5"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <div className="text-sm">
          <p className="font-[var(--font-nohemi)] font-bold text-[#222]">
            {promoCode ? promoCode.toUpperCase() : discountLabel}
          </p>
          <p className="text-[#444]">Discount applied</p>
        </div>
      </div>

      <div className="rounded-2xl border-2 border-[#db4927] p-5">
        <div className="mb-2 inline-block rounded-full bg-[#db4927] px-3 py-1 text-xs font-bold text-white">
          BEST VALUE
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-[var(--font-nohemi)] text-lg font-bold text-[#222]">
              Yearly
            </p>
            <p className="text-xs text-[#444]">
              ${originalAmount.toFixed(2)}{" "}
              <span className="text-[#db4927]">${formatAmount(discountedAmount)}</span>{" "}
              billed yearly. Cancel anytime.
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-[#444] line-through">
              ${originalAmount.toFixed(2)}
            </p>
            <p className="font-[var(--font-nohemi)] text-2xl font-extrabold text-[#222]">
              ${formatAmount(monthlyEquivalent)}
              <span className="text-sm font-normal text-[#444]">/mo</span>
            </p>
          </div>
        </div>
        <CheckoutButton
          placement="offer_panel"
          promoCode={promoCode}
          className="mt-4 block w-full rounded-full bg-[#db4927] px-6 py-3.5 text-center font-[var(--font-nohemi)] text-base font-bold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Continue
        </CheckoutButton>
        <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-[#444]">
          <span aria-hidden>🛡️</span> 30-day money-back guarantee — not right
          for you, get a full refund.
        </p>
      </div>

      <p className="text-xs text-[#444]">
        ⭐ {purchaseStat.headline} App Store rating · {stat.headline} {stat.body}
      </p>
    </div>
  );
}
