export const AD_ATTRIBUTION_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "fbclid",
  "gclid",
  "fbc",
] as const;

export type AdAttributionKey = (typeof AD_ATTRIBUTION_KEYS)[number];

export type AdAttribution = Partial<Record<AdAttributionKey, string>>;

export function getAdAttribution(): AdAttribution {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  const attribution: AdAttribution = {};
  for (const key of AD_ATTRIBUTION_KEYS) {
    const value = params.get(key);
    if (value) attribution[key] = value;
  }
  return attribution;
}
