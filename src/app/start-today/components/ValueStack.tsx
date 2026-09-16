import type { PlanPricing } from "@/lib/planPricing";
import { plan } from "@/lib/brand";
import { valueItems } from "../data";
import { CheckoutButton } from "./CheckoutButton";

function formatAmount(amount: number): string {
  return Number.isInteger(amount) ? String(amount) : amount.toFixed(2);
}

export function ValueStack({
  pricing,
  promoCode,
}: {
  pricing: PlanPricing | null;
  promoCode: string | null;
}) {
  const originalPrice = pricing ? formatAmount(pricing.originalAmount) : String(plan.compareAtPrice);
  const discountedPrice = pricing ? formatAmount(pricing.discountedAmount) : String(plan.price);
  const interval = pricing?.interval ?? plan.interval;
  const discountLabel = pricing?.discountLabel ?? "50% OFF";

  return (
    <section className="bg-[#222] py-16 text-white md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="font-[var(--font-nohemi)] text-3xl font-extrabold sm:text-4xl">
            Everything unlocks the moment you join
          </h2>
          <p className="mt-3 text-lg text-white/70">
            One plan. One price. Nothing held back.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
          <ul className="space-y-6">
            {valueItems.map((item) => (
              <li key={item.title} className="flex items-start gap-4">
                <span className="text-2xl">{item.emoji}</span>
                <div>
                  <p className="font-[var(--font-nohemi)] font-bold">
                    {item.title}
                  </p>
                  <p className="mt-1 text-white/70">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="rounded-3xl bg-white p-8 text-left text-[#222] shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="font-[var(--font-nohemi)] text-lg font-bold">
                {plan.name.toUpperCase()}
              </span>
              <span className="animate-pop-in rounded-full bg-[#db4927]/10 px-3 py-1 text-xs font-bold text-[#db4927]">
                {discountLabel}
              </span>
            </div>
            <div className="mt-4 flex items-end gap-2">
              <span className="text-lg text-[#444] line-through">
                ${originalPrice}
              </span>
              <span className="font-[var(--font-nohemi)] text-4xl font-extrabold">
                ${discountedPrice}
              </span>
              <span className="pb-1 text-[#444]">/ {interval}</span>
            </div>
            {pricing?.couponName ? (
              <p className="mt-1 text-xs text-[#444]">
                Offer applied: {pricing.couponName}
              </p>
            ) : null}
            <CheckoutButton
              placement="value_stack"
              promoCode={promoCode}
              className="mt-7 block w-full rounded-full bg-[#db4927] px-8 py-4 text-center font-[var(--font-nohemi)] text-lg font-bold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Start today →
            </CheckoutButton>
            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-[#444]">
              <span>🔒 Secure checkout</span>
              <span>↩️ 30-day guarantee</span>
              <span>❌ Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
