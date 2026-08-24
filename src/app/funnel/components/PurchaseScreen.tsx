"use client";

import { useState } from "react";
import { Logo } from "@/components/Logo";
import { plan, testimonials } from "../data";
import { track } from "@/lib/analytics";
import { getAdAttribution } from "@/lib/attribution";
import type { FunnelPricing } from "@/lib/funnelPricing";
import type { Answers } from "../FunnelClient";

function formatAmount(amount: number): string {
  return Number.isInteger(amount) ? String(amount) : amount.toFixed(2);
}

export function PurchaseScreen({
  answers,
  pricing,
}: {
  answers: Answers;
  pricing: FunnelPricing | null;
}) {
  const originalPrice = pricing ? formatAmount(pricing.originalAmount) : String(plan.compareAtPrice);
  const discountedPrice = pricing ? formatAmount(pricing.discountedAmount) : String(plan.price);
  const interval = pricing?.interval ?? plan.interval;
  const discountLabel = pricing?.discountLabel ?? "50% OFF";
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handlePurchase = async () => {
    setStatus("loading");
    setErrorMessage(null);
    track("Funnel Checkout Started", {
      "Plan Name": plan.name,
      Price: Number(discountedPrice),
    });
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "funnel",
          answers,
          attribution: getAdAttribution(),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        const message =
          data.error ?? "Checkout isn't available yet — please check back soon.";
        setStatus("error");
        setErrorMessage(message);
        track("Funnel Checkout Error", { "Error Message": message });
        return;
      }
      track("Funnel Checkout Redirected");
      window.location.href = data.url;
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
      track("Funnel Checkout Error", { "Error Message": "network_error" });
    }
  };

  return (
    <div className="mx-auto flex min-h-[100dvh] max-w-lg flex-col items-center px-6 py-16 text-center">
      <Logo className="mb-8" />
      <h2 className="font-[var(--font-nohemi)] text-3xl font-extrabold leading-tight text-[#222]">
        Start Your WeGlow Journey
      </h2>
      <p className="mt-3 text-[#444]">
        Lock in your discounted annual plan today.
      </p>

      <div className="mt-8 w-full rounded-3xl border-2 border-[#db4927] bg-white p-7 text-left shadow-lg">
        <div className="flex items-center justify-between">
          <span className="font-[var(--font-nohemi)] text-lg font-bold text-[#222]">
            {plan.name}
          </span>
          <span className="rounded-full bg-[#db4927]/10 px-3 py-1 text-xs font-bold text-[#db4927]">
            {discountLabel}
          </span>
        </div>

        <div className="mt-4 flex items-end gap-2">
          <span className="text-lg text-[#444] line-through">
            ${originalPrice}
          </span>
          <span className="font-[var(--font-nohemi)] text-4xl font-extrabold text-[#222]">
            ${discountedPrice}
          </span>
          <span className="pb-1 text-[#444]">/ {interval}</span>
        </div>
        {pricing?.couponName ? (
          <p className="mt-1 text-xs text-[#444]">
            Coupon applied: {pricing.couponName}
          </p>
        ) : null}

        <ul className="mt-6 space-y-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-[#222]">
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

        <button
          type="button"
          onClick={handlePurchase}
          disabled={status === "loading"}
          className="mt-7 w-full rounded-full bg-[#db4927] px-8 py-4 font-[var(--font-nohemi)] text-lg font-bold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
        >
          {status === "loading" ? "Redirecting..." : "Get My Plan"}
        </button>

        {status === "error" ? (
          <p className="mt-3 text-sm text-[#db4927]">{errorMessage}</p>
        ) : null}

        <p className="mt-3 text-center text-xs text-[#444]">
          Cancel anytime. 100% money-back guarantee within 14 days.
        </p>
      </div>

      <div className="mt-8 w-full space-y-3 text-left">
        {testimonials.slice(1, 3).map((t) => (
          <div key={t.quote} className="rounded-xl bg-white p-4 shadow-sm">
            <p className="text-sm text-[#222]">&ldquo;{t.quote}&rdquo;</p>
            <p className="mt-1 text-xs text-[#444]">— {t.source}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
