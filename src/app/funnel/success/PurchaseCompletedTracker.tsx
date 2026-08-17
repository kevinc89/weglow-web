"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

export function PurchaseCompletedTracker() {
  useEffect(() => {
    track("Funnel Purchase Completed");
  }, []);

  return null;
}
