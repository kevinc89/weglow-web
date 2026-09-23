"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";
import { getAdAttribution } from "@/lib/attribution";
import { trackPixel } from "@/lib/metaPixel";

export function CheckoutButton({
  className,
  children,
  promoCode,
  placement,
  value,
  currency,
}: {
  className?: string;
  children: React.ReactNode;
  /** Promo code captured off the URL (e.g. ?code=midyear50), if any. Recorded
   * on the checkout events and passed to Stripe as metadata for attribution —
   * it does not by itself change the price charged. */
  promoCode?: string | null;
  /** Which spot on the page this button lives in, so CTA performance can be
   * compared placement-by-placement in Amplitude. */
  placement: string;
  /** Discounted price shown on the page at click time — passed to Meta's
   * InitiateCheckout for a real value signal. */
  value?: number;
  currency?: string;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  const handleClick = async () => {
    setStatus("loading");
    track("Start Today Full V2 Checkout Started", {
      Placement: placement,
      ...(promoCode ? { "Promo Code": promoCode } : {}),
    });
    trackPixel("InitiateCheckout", {
      ...(value != null ? { value } : {}),
      currency: (currency ?? "usd").toUpperCase(),
    });
    try {
      const res = await fetch("/api/start-today-full-v2-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "start-today-full-v2",
          promoCode,
          attribution: getAdAttribution(),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        setStatus("error");
        track("Start Today Full V2 Checkout Error", {
          Placement: placement,
          "Error Message": data.error,
        });
        return;
      }
      track("Start Today Full V2 Checkout Redirected", { Placement: placement });
      window.location.href = data.url;
    } catch {
      setStatus("error");
      track("Start Today Full V2 Checkout Error", {
        Placement: placement,
        "Error Message": "network_error",
      });
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        disabled={status === "loading"}
        className={className}
      >
        {status === "loading" ? "Redirecting..." : children}
      </button>
      {status === "error" ? (
        <p className="mt-2 text-sm text-[#db4927]">
          Checkout isn&apos;t available yet — please check back soon.
        </p>
      ) : null}
    </>
  );
}
