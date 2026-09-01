"use client";

import { useEffect } from "react";
import { captureAdAttribution } from "@/lib/attribution";

export function CaptureAttribution() {
  useEffect(() => {
    captureAdAttribution();
  }, []);

  return null;
}
