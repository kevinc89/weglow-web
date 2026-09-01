import { plan } from "@/lib/brand";
import type { PlanPricing } from "@/lib/planPricing";
import { CheckoutButton } from "./CheckoutButton";

function formatAmount(amount: number): string {
  return Number.isInteger(amount) ? String(amount) : amount.toFixed(2);
}

export function Pricing({ pricing }: { pricing: PlanPricing | null }) {
  const originalPrice = pricing ? formatAmount(pricing.originalAmount) : String(plan.compareAtPrice);
  const discountedPrice = pricing ? formatAmount(pricing.discountedAmount) : String(plan.price);
  const interval = pricing?.interval ?? plan.interval;
  const discountLabel = pricing?.discountLabel ?? "50% OFF";

  return (
    <section className="bg-[#222] py-16 text-white md:py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-[var(--font-nohemi)] text-3xl font-extrabold sm:text-4xl">
          Start today
        </h2>
        <p className="mt-3 text-lg text-white/70">
          One price. Everything included.
        </p>

        <div className="mt-10 rounded-3xl bg-white p-8 text-left text-[#222] shadow-2xl">
          <div className="flex items-center justify-between">
            <span className="font-[var(--font-nohemi)] text-lg font-bold">
              {plan.name.toUpperCase()}
            </span>
            <span className="rounded-full bg-[#db4927]/10 px-3 py-1 text-xs font-bold text-[#db4927]">
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
              Coupon applied: {pricing.couponName}
            </p>
          ) : null}
          <CheckoutButton className="mt-7 block w-full rounded-full bg-[#db4927] px-8 py-4 text-center font-[var(--font-nohemi)] text-lg font-bold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.02] active:scale-[0.98]">
            Get Started
          </CheckoutButton>
          <p className="mt-3 text-center text-xs text-[#444]">
            Cancel anytime. 100% money-back guarantee within 30 days.
          </p>
        </div>
      </div>
    </section>
  );
}
