import Link from "next/link";
import { plan } from "@/lib/brand";

export function Pricing() {
  return (
    <section className="bg-[#222] py-16 text-white md:py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-[var(--font-nohemi)] text-3xl font-extrabold sm:text-4xl">
          Start your plan today
        </h2>
        <p className="mt-3 text-lg text-white/70">
          One simple plan. Everything included.
        </p>

        <div className="mt-10 rounded-3xl bg-white p-8 text-left text-[#222] shadow-2xl">
          <div className="flex items-center justify-between">
            <span className="font-[var(--font-nohemi)] text-lg font-bold">
              {plan.name}
            </span>
            <span className="rounded-full bg-[#db4927]/10 px-3 py-1 text-xs font-bold text-[#db4927]">
              50% OFF
            </span>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <span className="text-lg text-[#444] line-through">
              ${plan.compareAtPrice}
            </span>
            <span className="font-[var(--font-nohemi)] text-4xl font-extrabold">
              ${plan.price}
            </span>
            <span className="pb-1 text-[#444]">/ {plan.interval}</span>
          </div>
          <Link
            href="/funnel"
            className="mt-7 block w-full rounded-full bg-[#db4927] px-8 py-4 text-center font-[var(--font-nohemi)] text-lg font-bold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Try Now — Free Plan
          </Link>
          <p className="mt-3 text-center text-xs text-[#444]">
            Cancel anytime. 100% money-back guarantee within 14 days.
          </p>
        </div>
      </div>
    </section>
  );
}
