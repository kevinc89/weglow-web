"use client";

import { useEffect } from "react";
import { track } from "../analytics";

export function PurchaseCompletedTracker() {
  useEffect(() => {
    track("Funnel Purchase Completed");
  }, []);

  return null;
}
