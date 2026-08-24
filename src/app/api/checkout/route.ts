import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { plan } from "@/app/funnel/data";
import { AD_ATTRIBUTION_KEYS } from "@/lib/attribution";

const FUNNEL_PRICE_ID = "price_1OXlStH2dDlVzL9w3Y6w7Cui";
const FUNNEL_COUPON_ID = "9D9Kp4OV";

export async function POST(request: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    return NextResponse.json(
      { error: "Checkout isn't live yet — please check back soon." },
      { status: 503 },
    );
  }

  const origin = request.headers.get("origin") ?? new URL(request.url).origin;
  const priceId = process.env.STRIPE_PRICE_ID;
  const body = await request.json().catch(() => ({}));
  const attribution = body?.attribution ?? {};
  const isFunnel = body?.source === "funnel";

  const metadata: Record<string, string> = {};
  for (const key of AD_ATTRIBUTION_KEYS) {
    const value = attribution[key];
    if (typeof value === "string" && value) metadata[key] = value;
  }

  try {
    const stripe = new Stripe(secretKey);

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        isFunnel
          ? { price: FUNNEL_PRICE_ID, quantity: 1 }
          : priceId
            ? { price: priceId, quantity: 1 }
            : {
                quantity: 1,
                price_data: {
                  currency: "usd",
                  unit_amount: Math.round(plan.price * 100),
                  recurring: { interval: plan.interval },
                  product_data: { name: plan.name },
                },
              },
      ],
      ...(isFunnel ? { discounts: [{ coupon: FUNNEL_COUPON_ID }] } : {}),
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
