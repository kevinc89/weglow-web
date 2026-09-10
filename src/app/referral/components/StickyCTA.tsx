"use client";

import { useEffect, useState } from "react";
import { REFERRAL_PLAN } from "../pricing";
import { CheckoutButton } from "./CheckoutButton";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 700);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-[#222]/10 bg-white/95 shadow-[0_-8px_24px_rgba(34,34,34,0.08)] backdrop-blur transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <div className="hidden sm:block">
          <p className="font-[var(--font-nohemi)] text-sm font-bold text-[#222]">
            ${REFERRAL_PLAN.price}/{REFERRAL_PLAN.interval}{" "}
            <span className="text-[#444] line-through">
              ${REFERRAL_PLAN.compareAtPrice}
            </span>
          </p>
          <p className="text-xs text-[#444]">
            {REFERRAL_PLAN.trialDays} days free. Cancel anytime.
          </p>
        </div>
        <CheckoutButton className="ml-auto shrink-0 rounded-full bg-[#db4927] px-6 py-3 font-[var(--font-nohemi)] text-sm font-bold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.03] active:scale-[0.98] sm:ml-0">
          Start free trial
        </CheckoutButton>
      </div>
    </div>
  );
}
