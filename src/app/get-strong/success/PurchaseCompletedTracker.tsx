"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";
import { trackPixel } from "@/lib/metaPixel";

export function PurchaseCompletedTracker({
  value,
  currency,
}: {
  value: number | null;
  currency: string | null;
}) {
  useEffect(() => {
    track("Funnel Purchase Completed", {
      ...(value != null ? { Value: value } : {}),
      ...(currency ? { Currency: currency.toUpperCase() } : {}),
    });
    trackPixel("Purchase", {
      ...(value != null ? { value } : {}),
      currency: currency ? currency.toUpperCase() : "USD",
    });
  }, [value, currency]);

  return null;
}
