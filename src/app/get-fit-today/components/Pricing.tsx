import { plan } from "../data";
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
    <section className="bg-[#2E1B12] py-16 text-white md:py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-[var(--font-fraunces)] text-3xl italic sm:text-4xl">
          Start your story today
        </h2>
        <p className="mt-3 text-lg text-white/70">
          One price. Every chapter included.
        </p>

        <div className="mt-10 rounded-[2.5rem] bg-white p-8 text-left text-[#2E1B12] shadow-2xl">
          <div className="flex items-center justify-between">
            <span className="font-[var(--font-fraunces)] text-lg font-semibold">
              {plan.name.toUpperCase()}
            </span>
            <span className="rounded-full bg-[#db4927]/10 px-3 py-1 text-xs font-bold text-[#db4927]">
              {discountLabel}
            </span>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <span className="text-lg text-[#5b4a3f] line-through">
              ${originalPrice}
            </span>
            <span className="font-[var(--font-fraunces)] text-4xl font-semibold">
              ${discountedPrice}
            </span>
            <span className="pb-1 text-[#5b4a3f]">/ {interval}</span>
          </div>
          {pricing?.couponName ? (
            <p className="mt-1 text-xs text-[#5b4a3f]">
              Coupon applied: {pricing.couponName}
            </p>
          ) : null}
          <CheckoutButton className="mt-7 block w-full rounded-full bg-[#db4927] px-8 py-4 text-center font-[var(--font-fraunces)] text-lg font-semibold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.02] active:scale-[0.98]">
            Get started
          </CheckoutButton>
          <p className="mt-3 text-center text-xs text-[#5b4a3f]">
            Cancel anytime. 100% money-back guarantee within 30 days.
          </p>
        </div>
      </div>
    </section>
  );
}
