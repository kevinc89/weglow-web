import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { AD_ATTRIBUTION_KEYS } from "@/lib/attribution";
import { PLAN_COUPON_ID, PLAN_PRICE_ID } from "@/lib/planPricing";

// Stripe truncates metadata values at 500 characters anyway — trim ourselves so
// what we log matches what actually lands on the session/subscription.
const MAX_METADATA_VALUE_LENGTH = 500;

// Marks purchases that came through one of the quiz/landing funnels, as opposed
// to the main site's join flow (which sends "direct_web_payment").
const FUNNEL_CHANNEL = "funnel_web_payment";

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
  attributionMetadata.channel = FUNNEL_CHANNEL;

  // Session metadata: attribution + channel, plus the funnel's own source label.
  const metadata: Record<string, string> = { ...attributionMetadata };
  if (typeof body?.source === "string" && body.source) {
    metadata.source = body.source;
  }

  // Stripe doesn't copy checkout session metadata onto the subscription it
  // creates, so mirror attribution + channel onto subscription_data.metadata too —
  // that's what our backend actually reads. Any other subscription_data fields
  // (e.g. trial_period_days) should be added into this same object, not a
  // separate subscription_data block, so this metadata isn't clobbered.
  const subscriptionData: Stripe.Checkout.SessionCreateParams.SubscriptionData = {
    metadata: { ...attributionMetadata },
  };

  try {
    const stripe = new Stripe(secretKey);

    const sessionParams: Stripe.Checkout.SessionCreateParams = {
      mode: "subscription",
      line_items: [{ price: PLAN_PRICE_ID, quantity: 1 }],
      discounts: [{ coupon: PLAN_COUPON_ID }],
      success_url: `${origin}/get-strong/success?utm_source=web&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/get-strong?utm_source=web`,
      metadata,
      subscription_data: subscriptionData,
    };

    console.log(
      "Stripe checkout session params:",
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
