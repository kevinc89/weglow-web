import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { plan } from "@/app/funnel/data";

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

  try {
    const stripe = new Stripe(secretKey);

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        priceId
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
      success_url: `${origin}/funnel/success`,
      cancel_url: `${origin}/funnel`,
    });

    return NextResponse.json({ url: session.url });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong starting checkout. Please try again." },
      { status: 502 },
    );
  }
}
