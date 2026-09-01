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

const STORAGE_KEY = "weglow_ad_attribution";

// Facebook subdomain index for weglow.app — see Meta's fbc spec.
const FBC_SUBDOMAIN_INDEX = 1;

function buildFbc(fbclid: string, clickedAt: number): string {
  return `fb.${FBC_SUBDOMAIN_INDEX}.${clickedAt}.${fbclid}`;
}

function readStoredAttribution(): AdAttribution {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as AdAttribution) : {};
  } catch {
    return {};
  }
}

/**
 * Reads ad attribution params off the current URL and persists them for later —
 * must run on the landing page while fbclid/utm params are still in the URL, since
 * fbc's timestamp is meant to be the click time. Building fbc later, at checkout,
 * would backdate it incorrectly and Meta may reject the match. Safe to call on every
 * page view: a view with no ad params leaves any already-stored attribution alone.
 */
export function captureAdAttribution(): void {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const captured: AdAttribution = {};
  for (const key of AD_ATTRIBUTION_KEYS) {
    if (key === "fbc") continue; // derived below, not read directly from the URL
    const value = params.get(key);
    if (value) captured[key] = value;
  }

  if (captured.fbclid) {
    captured.fbc = buildFbc(captured.fbclid, Date.now());
  }

  if (Object.keys(captured).length === 0) return;

  const merged = { ...readStoredAttribution(), ...captured };
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  } catch {
    // sessionStorage unavailable (private browsing, etc.) — nothing to fall back to.
  }
}

/** Returns attribution captured earlier via captureAdAttribution(), for use at checkout time. */
export function getAdAttribution(): AdAttribution {
  return readStoredAttribution();
}
