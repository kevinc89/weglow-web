"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Logo } from "@/components/Logo";
import { resultsStat } from "@/lib/brand";
import { plan } from "@/lib/brand";
import type { PlanPricing } from "@/lib/planPricing";
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

export function Offer({
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

  const originalPrice = pricing ? formatAmount(pricing.originalAmount) : String(plan.compareAtPrice);
  const discountedPrice = pricing ? formatAmount(pricing.discountedAmount) : String(plan.price);
  const interval = pricing?.interval ?? plan.interval;
  const discountLabel = pricing?.discountLabel ?? "50% OFF";
  const showCountdown = remaining !== null && remaining > 0;

  return (
    <section className="relative flex min-h-dvh w-full flex-col overflow-hidden">
      <Image
        src="/try-now/photos/mirror-selfie.jpg"
        alt="A confident WEGLOW member finishing a strength workout"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "50% 15%" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/85" />

      <div className="relative z-10 flex w-full items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
        <Logo className="[&_span]:text-white" />
        {showCountdown ? (
          <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-xs font-bold tabular-nums text-[#ffb199] backdrop-blur-sm">
            ⏱ {formatRemaining(remaining)}
          </span>
        ) : null}
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 py-2 text-center sm:px-8">
        <span className="animate-pop-in rounded-full bg-white px-3.5 py-1.5 text-xs font-bold text-[#db4927] shadow-sm sm:text-sm">
          {promoCode
            ? `✅ Code ${promoCode.toUpperCase()} applied`
            : `🔥 ${discountLabel}, reserved for you`}
        </span>

        <h1 className="mt-4 max-w-md animate-fade-in-up font-[var(--font-nohemi)] text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
          Your strongest year starts <span className="text-[#ffb199]">today</span>.
        </h1>

        <div className="mt-5 flex w-full max-w-[19rem] flex-col items-center gap-3 rounded-3xl bg-white p-5 shadow-2xl">
          <div className="flex items-end gap-2">
            <span className="text-base text-[#444] line-through">
              ${originalPrice}
            </span>
            <span className="font-[var(--font-nohemi)] text-3xl font-extrabold text-[#222]">
              ${discountedPrice}
            </span>
            <span className="pb-0.5 text-xs text-[#444]">/ {interval}</span>
          </div>
          <CheckoutButton
            placement="offer"
            promoCode={promoCode}
            className="block w-full rounded-full bg-[#db4927] px-6 py-3.5 text-center font-[var(--font-nohemi)] text-base font-bold text-white shadow-lg shadow-[#db4927]/40 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Claim my spot →
          </CheckoutButton>
          <p className="text-[11px] text-[#444]">
            Cancel anytime · 30-day money-back guarantee
          </p>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-1 px-5 pb-4 text-center sm:pb-6">
        <p className="text-xs font-semibold text-white/80 sm:text-sm">
          ⭐ 4.8 App Store · {resultsStat.headline} members worldwide
        </p>
        <p className="text-[11px] text-white/50">
          © {new Date().getFullYear()} WEGLOW
        </p>
      </div>
    </section>
  );
}
