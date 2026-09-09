"use client";

import { BackLink, PanelCard, StepDots } from "./PanelCard";
import { formatAmount } from "../format";
import type { PlanTier } from "../data";

export type OfferKind = "switch" | "discount" | "pause";

export function CancelOfferCard({
  offerKind,
  currentTier,
  switchTier,
  discountedPrice,
  discountPercent,
  onBack,
  onAcceptSwitch,
  onAcceptDiscount,
  onPause,
  onContinueToCancel,
}: {
  offerKind: OfferKind;
  currentTier: PlanTier;
  switchTier: PlanTier;
  discountedPrice: number;
  discountPercent: number;
  onBack: () => void;
  onAcceptSwitch: () => void;
  onAcceptDiscount: () => void;
  onPause: () => void;
  onContinueToCancel: () => void;
}) {
  return (
    <PanelCard>
      <BackLink onClick={onBack} />

      <div className="p-8 pt-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-wide text-[#444] uppercase">
            Step 2 of 2
          </span>
          <StepDots step={2} total={2} />
        </div>

        {offerKind === "switch" ? (
          <>
            <span className="mt-3 inline-block rounded-full bg-[#db4927]/10 px-3 py-1 text-xs font-semibold text-[#db4927]">
              If money&apos;s the thing, we&apos;d like to help
            </span>
            <h2 className="mt-3 font-[var(--font-nohemi)] text-2xl font-extrabold leading-tight text-[#222]">
              Switch to {switchTier.label} and save
            </h2>
            <p className="mt-2 text-sm text-[#444]">
              Same WEGLOW, same workouts and coaching — just a rhythm that
              works better for your budget.
            </p>

            <div className="mt-5 rounded-2xl bg-gradient-to-br from-[#db4927] to-[#b93a1c] p-5 text-white">
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-white/70 line-through">
                  ${formatAmount(currentTier.price)} / {currentTier.interval}
                </span>
                {switchTier.saveLabel ? (
                  <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs font-semibold">
                    {switchTier.saveLabel}
                  </span>
                ) : null}
              </div>
              <p className="mt-1 font-[var(--font-nohemi)] text-3xl font-extrabold">
                ${formatAmount(switchTier.price)}{" "}
                <span className="text-base font-medium text-white/80">
                  / {switchTier.interval}
                </span>
              </p>
              <p className="mt-1 text-sm text-white/80">{switchTier.perWeek}</p>
            </div>

            <div className="mt-5 space-y-2.5">
              <button
                type="button"
                onClick={onAcceptSwitch}
                className="w-full rounded-full bg-[#db4927] px-6 py-3.5 font-[var(--font-nohemi)] text-base font-bold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.01] active:scale-[0.98]"
              >
                Switch &amp; save
              </button>
              <button
                type="button"
                onClick={onPause}
                className="w-full rounded-full border-2 border-[#222]/15 px-6 py-3.5 font-[var(--font-nohemi)] text-base font-bold text-[#222] transition-colors hover:border-[#222]/30"
              >
                Pause for a month instead
              </button>
            </div>
          </>
        ) : null}

        {offerKind === "discount" ? (
          <>
            <span className="mt-3 inline-block rounded-full bg-[#db4927]/10 px-3 py-1 text-xs font-semibold text-[#db4927]">
              If money&apos;s the thing, we&apos;d like to help
            </span>
            <h2 className="mt-3 font-[var(--font-nohemi)] text-2xl font-extrabold leading-tight text-[#222]">
              Stay on {currentTier.label} for {discountPercent}% off
            </h2>
            <p className="mt-2 text-sm text-[#444]">
              You&apos;re already on our best-value plan, so here&apos;s a
              discount instead — same WEGLOW, same everything, just a gentler
              price on your next renewal.
            </p>

            <div className="mt-5 rounded-2xl bg-gradient-to-br from-[#db4927] to-[#b93a1c] p-5 text-white">
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-white/70 line-through">
                  ${formatAmount(currentTier.price)} / {currentTier.interval}
                </span>
                <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs font-semibold">
                  {discountPercent}% OFF
                </span>
              </div>
              <p className="mt-1 font-[var(--font-nohemi)] text-3xl font-extrabold">
                ${formatAmount(discountedPrice)}{" "}
                <span className="text-base font-medium text-white/80">
                  / {currentTier.interval}
                </span>
              </p>
            </div>

            <div className="mt-5 space-y-2.5">
              <button
                type="button"
                onClick={onAcceptDiscount}
                className="w-full rounded-full bg-[#db4927] px-6 py-3.5 font-[var(--font-nohemi)] text-base font-bold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.01] active:scale-[0.98]"
              >
                Apply my discount
              </button>
              <button
                type="button"
                onClick={onPause}
                className="w-full rounded-full border-2 border-[#222]/15 px-6 py-3.5 font-[var(--font-nohemi)] text-base font-bold text-[#222] transition-colors hover:border-[#222]/30"
              >
                Pause for a month instead
              </button>
            </div>
          </>
        ) : null}

        {offerKind === "pause" ? (
          <>
            <span className="mt-3 inline-block rounded-full bg-[#db4927]/10 px-3 py-1 text-xs font-semibold text-[#db4927]">
              Take a break, not a breakup
            </span>
            <h2 className="mt-3 font-[var(--font-nohemi)] text-2xl font-extrabold leading-tight text-[#222]">
              Want to pause instead?
            </h2>
            <p className="mt-2 text-sm text-[#444]">
              Rest your membership for a month, free of charge. Your streaks,
              workouts and progress stay exactly where you left them.
            </p>

            <div className="mt-5 rounded-2xl border-2 border-[#db4927]/30 bg-[#db4927]/5 p-5">
              <div className="flex items-center justify-between">
                <span className="font-[var(--font-nohemi)] font-bold text-[#222]">
                  Pause for one month
                </span>
                <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                  No charge
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onPause}
              className="mt-5 w-full rounded-full bg-[#db4927] px-6 py-3.5 font-[var(--font-nohemi)] text-base font-bold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.01] active:scale-[0.98]"
            >
              Pause for a month
            </button>
          </>
        ) : null}

        <button
          type="button"
          onClick={onContinueToCancel}
          className="mt-3 w-full text-center text-sm text-[#444] hover:text-[#222]"
        >
          Continue to cancel
        </button>
      </div>
    </PanelCard>
  );
}
