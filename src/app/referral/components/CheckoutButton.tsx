"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";
import { getAdAttribution } from "@/lib/attribution";
import { trackPixel } from "@/lib/metaPixel";

export function CheckoutButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  const handleClick = async () => {
    setStatus("loading");
    track("Referral Checkout Started");
    trackPixel("InitiateCheckout");
    try {
      const res = await fetch("/api/referral-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "referral",
          attribution: getAdAttribution(),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        setStatus("error");
        track("Referral Checkout Error", { "Error Message": data.error });
        return;
      }
      track("Referral Checkout Redirected");
      window.location.href = data.url;
    } catch {
      setStatus("error");
      track("Referral Checkout Error", { "Error Message": "network_error" });
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
