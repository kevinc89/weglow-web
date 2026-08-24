import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { AD_ATTRIBUTION_KEYS } from "@/lib/attribution";
import { PLAN_COUPON_ID, PLAN_PRICE_ID } from "@/lib/planPricing";

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

  const metadata: Record<string, string> = {};
  for (const key of AD_ATTRIBUTION_KEYS) {
    const value = attribution[key];
    if (typeof value === "string" && value) metadata[key] = value;
  }
  if (typeof body?.source === "string" && body.source) {
    metadata.source = body.source;
  }

  try {
    const stripe = new Stripe(secretKey);

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: PLAN_PRICE_ID, quantity: 1 }],
      discounts: [{ coupon: PLAN_COUPON_ID }],
      success_url: `${origin}/funnel/success?utm_source=web&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/funnel?utm_source=web`,
      metadata,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout session creation failed:", error);
    return NextResponse.json(
      { error: "Something went wrong starting checkout. Please try again." },
      { status: 502 },
    );
  }
}
