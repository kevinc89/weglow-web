import { NextRequest, NextResponse } from "next/server";
import { geolocation } from "@vercel/functions";
import Stripe from "stripe";
import { AD_ATTRIBUTION_KEYS } from "@/lib/attribution";
import { PLAN_COUPON_ID } from "@/lib/planPricing";
import { getPriceIdForCountry } from "@/lib/currencyPricing";

// Stripe truncates metadata values at 500 characters anyway — trim ourselves so
// what we log matches what actually lands on the session/subscription.
const MAX_METADATA_VALUE_LENGTH = 500;

// Its own route (same pattern as /api/start-today-checkout, /api/start-today-full-checkout and
// /api/referral-checkout) rather than sharing /api/checkout, so this
// variant's redirects can evolve independently of the other funnels.
const START_TODAY_FULL_V2_CHANNEL = "start_today_full_v2_web_payment";

export async function POST(request: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    return NextResponse.json(
      { error: "Checkout isn't live yet — please check back soon." },
      { status: 503 },
    );
  }

  const origin = request.headers.get("origin") ?? new URL(request.url).origin;
  const body = await request.json().catch(() => ({}));
  const attribution = body?.attribution ?? {};

  // utm_source/medium/campaign, fbclid, gclid, fbc — whichever are present. Empty
  // values are skipped rather than sent as blank strings.
  const attributionMetadata: Record<string, string> = {};
  for (const key of AD_ATTRIBUTION_KEYS) {
    const value = attribution[key];
    if (typeof value === "string" && value) {
      attributionMetadata[key] = value.slice(0, MAX_METADATA_VALUE_LENGTH);
    }
  }
  attributionMetadata.channel = START_TODAY_FULL_V2_CHANNEL;

  // Session metadata: attribution + channel + this funnel's own source label.
  // `promo_code` is recorded for reporting/attribution only — it does not by
  // itself change the price charged.
  const metadata: Record<string, string> = { ...attributionMetadata, source: "start-today-full-v2" };
  const promoCode =
    typeof body?.promoCode === "string" && body.promoCode
      ? body.promoCode.slice(0, MAX_METADATA_VALUE_LENGTH)
      : null;
  if (promoCode) {
    metadata.promo_code = promoCode;
  }

  // Preserve the promo code on cancel so a user who backs out of Stripe lands
  // back on the same offer instead of losing the code param.
  const cancelUrl = new URL("/start-today-full-v2", origin);
  cancelUrl.searchParams.set("utm_source", "web");
  if (promoCode) cancelUrl.searchParams.set("code", promoCode);

  // Stripe doesn't copy checkout session metadata onto the subscription it
  // creates, so mirror attribution + channel onto subscription_data.metadata too —
  // that's what our backend actually reads.
  const subscriptionData: Stripe.Checkout.SessionCreateParams.SubscriptionData = {
    metadata: { ...attributionMetadata },
  };

  try {
    const stripe = new Stripe(secretKey);

    const { country } = geolocation(request);
    const priceId = getPriceIdForCountry(country);

    const sessionParams: Stripe.Checkout.SessionCreateParams = {
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      discounts: [{ coupon: PLAN_COUPON_ID }],
      success_url: `${origin}/get-strong/success?utm_source=web&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl.toString(),
      metadata,
      subscription_data: subscriptionData,
    };

    console.log(
      "Start Today Full V2 checkout session params:",
      JSON.stringify(sessionParams, null, 2),
    );

    const session = await stripe.checkout.sessions.create(sessionParams);

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout session creation failed:", error);
    return NextResponse.json(
      { error: "Something went wrong starting checkout. Please try again." },
      { status: 502 },
    );
  }
}
