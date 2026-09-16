import type { PlanPricing } from "@/lib/planPricing";
import { plan } from "@/lib/brand";
import { CheckoutButton } from "./CheckoutButton";

function formatAmount(amount: number): string {
  return Number.isInteger(amount) ? String(amount) : amount.toFixed(2);
}

export function FinalCTA({
  pricing,
  promoCode,
}: {
  pricing: PlanPricing | null;
  promoCode: string | null;
}) {
  const discountedPrice = pricing ? formatAmount(pricing.discountedAmount) : String(plan.price);
  const interval = pricing?.interval ?? plan.interval;
  const discountLabel = pricing?.discountLabel ?? "50% OFF";

  return (
    <section className="relative overflow-hidden bg-[#fde8e5] py-16 md:py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center px-6 text-center">
        <h2 className="font-[var(--font-nohemi)] text-3xl font-extrabold leading-tight text-[#222] sm:text-4xl">
          Don&apos;t let today become &ldquo;next Monday.&rdquo;
        </h2>
        <p className="mt-4 max-w-md text-lg text-[#444]">
          Your {discountLabel} price is reserved right now, for {discountedPrice}
          /{interval}. Start today, and let future-you thank you for it.
        </p>
        <CheckoutButton
          placement="final_cta"
          promoCode={promoCode}
          className="mt-8 inline-block rounded-full bg-[#db4927] px-8 py-4 font-[var(--font-nohemi)] text-lg font-bold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Claim my spot →
        </CheckoutButton>
        <p className="mt-4 text-xs text-[#444]">
          Cancel anytime · 30-day money-back guarantee
        </p>
      </div>
    </section>
  );
}
