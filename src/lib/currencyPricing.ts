// Currency-specific Stripe Price IDs for the "Yearly" product (prod_KHNAByM5rIerpf).
// Only ACTIVE prices belong here — when a price is archived or a new currency is
// added in Stripe, update this file (and nothing else) to match.
export const CURRENCY_PRICE_IDS = {
  usd: "price_1OXlStH2dDlVzL9w3Y6w7Cui",
  eur: "price_1Sg3ZRH2dDlVzL9wKvlQgPib",
  gbp: "price_1OUGPCH2dDlVzL9wE2QvebSz",
  aud: "price_1Sg3ZzH2dDlVzL9wYpMdobER",
  cad: "price_1Sg3ZhH2dDlVzL9wxDLXyrov",
  aed: "price_1Sg3adH2dDlVzL9wTTEIACsf",
  sar: "price_1Sg3aKH2dDlVzL9wKnW4HPJ1",
} as const;

type SupportedCurrency = keyof typeof CURRENCY_PRICE_IDS;

const FALLBACK_CURRENCY: SupportedCurrency = "usd";

// ISO 3166-1 alpha-2 country codes for the EU's EUR-using members.
const EU_EUR_COUNTRIES: readonly string[] = [
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR",
  "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK",
  "SI", "ES", "SE",
];

const COUNTRY_TO_CURRENCY: Record<string, SupportedCurrency> = {
  AE: "aed",
  SA: "sar",
  AU: "aud",
  CA: "cad",
  GB: "gbp",
  ...Object.fromEntries(EU_EUR_COUNTRIES.map((country) => [country, "eur"])),
};

// Looks up the Stripe Price ID for a detected country, falling back to USD
// when the country is missing, undetected, or not in the mapping above.
export function getPriceIdForCountry(countryCode?: string | null): string {
  const currency = countryCode
    ? COUNTRY_TO_CURRENCY[countryCode.toUpperCase()]
    : undefined;
  return CURRENCY_PRICE_IDS[currency ?? FALLBACK_CURRENCY];
}
