"use client";

import * as amplitude from "@amplitude/analytics-browser";

let initialized = false;

function ensureInit() {
  if (initialized) return;
  const apiKey = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;
  if (!apiKey) return;

  amplitude.init(apiKey, {
    defaultTracking: {
      pageViews: false,
      sessions: true,
      formInteractions: false,
      fileDownloads: false,
    },
  });
  initialized = true;
}

export function initAnalytics() {
  ensureInit();
}

export function track(eventName: string, properties?: Record<string, unknown>) {
  ensureInit();
  if (!initialized) return;
  amplitude.track(eventName, properties);
}
