import Image from "next/image";
import { stat, resultsStat } from "@/lib/brand";
import type { PlanPricing } from "@/lib/planPricing";
import { plan } from "@/lib/brand";
import { CheckoutButton } from "./CheckoutButton";

function formatAmount(amount: number): string {
  return Number.isInteger(amount) ? String(amount) : amount.toFixed(2);
}

export function Hero({
  pricing,
  promoCode,
}: {
  pricing: PlanPricing | null;
  promoCode: string | null;
}) {
  const originalPrice = pricing ? formatAmount(pricing.originalAmount) : String(plan.compareAtPrice);
  const discountedPrice = pricing ? formatAmount(pricing.discountedAmount) : String(plan.price);
  const interval = pricing?.interval ?? plan.interval;

  return (
    <section className="relative flex min-h-[640px] w-full items-end overflow-hidden sm:min-h-[720px] md:min-h-[85vh]">
      <Image
        src="/try-now/photos/mirror-selfie.jpg"
        alt="A confident WEGLOW member finishing a strength workout"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "50% 20%" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-6 pb-12 text-center sm:pb-16">
        <span className="inline-flex animate-pop-in items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#db4927] shadow-sm">
          {promoCode
            ? `✅ Code ${promoCode.toUpperCase()} applied`
            : "⚡ Limited-time offer, unlocked for you"}
        </span>

        <h1 className="mt-5 animate-fade-in-up font-[var(--font-nohemi)] text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
          Your strongest year starts <span className="text-[#ffb199]">today</span>.
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-8 text-white/85">
          Personalized workouts, nutrition, and coaching that adapt to your
          body — built by real trainers, trusted by {resultsStat.headline}{" "}
          women who did exactly what you&apos;re about to do.
        </p>

        <div className="mt-8 flex w-full max-w-xs flex-col items-center gap-3 rounded-3xl bg-white p-5 shadow-2xl sm:max-w-sm">
          <div className="flex items-end gap-2">
            <span className="text-lg text-[#444] line-through">
              ${originalPrice}
            </span>
            <span className="font-[var(--font-nohemi)] text-4xl font-extrabold text-[#222]">
              ${discountedPrice}
            </span>
            <span className="pb-1 text-sm text-[#444]">/ {interval}</span>
          </div>
          <CheckoutButton
            placement="hero"
            promoCode={promoCode}
            className="block w-full animate-pulse rounded-full bg-[#db4927] px-8 py-4 text-center font-[var(--font-nohemi)] text-lg font-bold text-white shadow-lg shadow-[#db4927]/40 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Claim my spot →
          </CheckoutButton>
          <p className="text-xs text-[#444]">
            Cancel anytime · 30-day money-back guarantee
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-white/90">
          <span>⭐ 4.8 App Store rating</span>
          <span>{resultsStat.headline} members worldwide</span>
          <span>
            {stat.headline} {stat.body}
          </span>
        </div>
      </div>
    </section>
  );
}
