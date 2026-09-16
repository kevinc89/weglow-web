"use client";

import { useEffect, useState } from "react";
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

export function OfferBar({
  discountLabel,
  promoCode,
}: {
  discountLabel: string;
  promoCode?: string | null;
}) {
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const deadline = readDeadline();
    const tick = () => setRemaining(deadline - Date.now());
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const expired = remaining !== null && remaining <= 0;

  return (
    <div className="sticky top-0 z-40 bg-[#222] text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2 text-center text-sm sm:justify-between sm:text-left">
        <p className="font-[var(--font-nohemi)] font-bold">
          🔥 {discountLabel} reserved
          {promoCode ? (
            <span className="ml-1 font-normal text-white/70">
              · code {promoCode.toUpperCase()} applied
            </span>
          ) : null}
          {!expired && remaining !== null ? (
            <span className="ml-2 rounded-full bg-white/10 px-2.5 py-0.5 font-mono text-xs font-bold tabular-nums text-[#ffb199]">
              {formatRemaining(remaining)}
            </span>
          ) : null}
        </p>
        <CheckoutButton
          placement="offer_bar"
          promoCode={promoCode}
          className="shrink-0 rounded-full bg-[#db4927] px-4 py-1.5 font-[var(--font-nohemi)] text-xs font-bold text-white transition-transform hover:scale-[1.03]"
        >
          Claim it →
        </CheckoutButton>
      </div>
    </div>
  );
}
