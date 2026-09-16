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
}: {
  className?: string;
  children: React.ReactNode;
  /** Promo code captured off the URL (e.g. ?code=midyear50), if any. Recorded
   * on the checkout events and passed to Stripe as metadata for attribution —
   * it does not by itself change the price charged. */
  promoCode?: string | null;
  /** Which spot on the page this button lives in (hero, offer bar, final CTA,
   * ...) so CTA performance can be compared placement-by-placement in Amplitude. */
  placement: string;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  const handleClick = async () => {
    setStatus("loading");
    track("Start Today Checkout Started", {
      Placement: placement,
      ...(promoCode ? { "Promo Code": promoCode } : {}),
    });
    trackPixel("InitiateCheckout");
    try {
      const res = await fetch("/api/start-today-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "start-today",
          promoCode,
          attribution: getAdAttribution(),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        setStatus("error");
        track("Start Today Checkout Error", {
          Placement: placement,
          "Error Message": data.error,
        });
        return;
      }
      track("Start Today Checkout Redirected", { Placement: placement });
      window.location.href = data.url;
    } catch {
      setStatus("error");
      track("Start Today Checkout Error", {
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
