"use client";

import { useEffect, useState } from "react";

const OFFER_WINDOW_MS = 6 * 60 * 60 * 1000; // 6 hours
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

export function formatCountdown(ms: number): string {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return [hours, minutes, seconds].map((n) => String(n).padStart(2, "0")).join(":");
}

/** Session-scoped countdown for the /start-today offer: the deadline is set
 * once per browser session (persisted in sessionStorage) rather than reset on
 * every render, so it reflects a real "this visit" window instead of an
 * infinitely-resetting fake timer. */
export function useOfferCountdown() {
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const deadline = readDeadline();
    const tick = () => setRemaining(deadline - Date.now());
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return { remaining, active: remaining !== null && remaining > 0 };
}
