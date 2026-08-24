import Stripe from "stripe";

export const FUNNEL_PRICE_ID = "price_1OXlStH2dDlVzL9w3Y6w7Cui";
export const FUNNEL_COUPON_ID = "9D9Kp4OV";

export type FunnelPricing = {
  currency: string;
  interval: string;
  originalAmount: number;
  discountedAmount: number;
  discountLabel: string;
  couponName: string | null;
};

export async function getFunnelPricing(): Promise<FunnelPricing | null> {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) return null;

  try {
    const stripe = new Stripe(secretKey);
    const [price, coupon] = await Promise.all([
      stripe.prices.retrieve(FUNNEL_PRICE_ID),
      stripe.coupons.retrieve(FUNNEL_COUPON_ID),
    ]);

    if (!price.unit_amount || !price.recurring) return null;

    const originalAmount = price.unit_amount / 100;
    const discountedAmount = coupon.percent_off
      ? originalAmount * (1 - coupon.percent_off / 100)
      : coupon.amount_off
        ? Math.max(originalAmount - coupon.amount_off / 100, 0)
        : originalAmount;

    const discountLabel = coupon.percent_off
      ? `${coupon.percent_off}% OFF`
      : coupon.amount_off
        ? `$${(coupon.amount_off / 100).toFixed(2)} OFF`
        : "DISCOUNT APPLIED";

    return {
      currency: price.currency,
      interval: price.recurring.interval,
      originalAmount,
      discountedAmount,
      discountLabel,
      couponName: coupon.name ?? null,
    };
  } catch (error) {
    console.error("Failed to load funnel pricing:", error);
    return null;
  }
}
