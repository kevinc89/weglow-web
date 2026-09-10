import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { AD_ATTRIBUTION_KEYS } from "@/lib/attribution";
import {
  REFERRAL_PLAN,
  REFERRAL_PRICE_ID,
  REFERRAL_PROMOTION_CODE_ID,
} from "@/app/referral/pricing";

// Stripe truncates metadata values at 500 characters anyway — trim ourselves so
// what we log matches what actually lands on the session/subscription.
const MAX_METADATA_VALUE_LENGTH = 500;

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

  const attributionMetadata: Record<string, string> = {};
  for (const key of AD_ATTRIBUTION_KEYS) {
    const value = attribution[key];
    if (typeof value === "string" && value) {
      attributionMetadata[key] = value.slice(0, MAX_METADATA_VALUE_LENGTH);
    }
  }
  attributionMetadata.channel = "referral_web_payment";

  const metadata: Record<string, string> = {
    ...attributionMetadata,
    source: "referral",
  };

  try {
    const stripe = new Stripe(secretKey);

    const sessionParams: Stripe.Checkout.SessionCreateParams = {
      mode: "subscription",
      line_items: [{ price: REFERRAL_PRICE_ID, quantity: 1 }],
      discounts: [{ promotion_code: REFERRAL_PROMOTION_CODE_ID }],
      success_url: `${origin}/get-strong/success?utm_source=web&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/referral?utm_source=web`,
      metadata,
      subscription_data: {
        trial_period_days: REFERRAL_PLAN.trialDays,
        metadata: attributionMetadata,
      },
    };

    console.log(
      "Referral checkout session params:",
      JSON.stringify(sessionParams, null, 2),
    );

    const session = await stripe.checkout.sessions.create(sessionParams);

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Referral checkout session creation failed:", error);
    return NextResponse.json(
      { error: "Something went wrong starting checkout. Please try again." },
      { status: 502 },
    );
  }
}
