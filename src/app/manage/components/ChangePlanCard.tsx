"use client";

import { useState } from "react";
import { BackLink, CheckIcon, PanelCard } from "./PanelCard";
import { formatAmount } from "../format";
import type { PlanTier } from "../data";

export function ChangePlanCard({
  tiers,
  currentTierId,
  renews,
  onBack,
  onConfirmSwitch,
}: {
  tiers: PlanTier[];
  currentTierId: PlanTier["id"];
  renews: string;
  onBack: () => void;
  onConfirmSwitch: (tierId: PlanTier["id"]) => void;
}) {
  const [pendingTier, setPendingTier] = useState<PlanTier | null>(null);
  const currentTier = tiers.find((t) => t.id === currentTierId)!;

  return (
    <PanelCard className="relative">
      <BackLink onClick={onBack} />

      <div className="p-8 pt-4">
        <h2 className="font-[var(--font-nohemi)] text-2xl font-extrabold text-[#222]">
          Select your WeGlow plan
        </h2>
        <p className="mt-2 text-sm text-[#444]">
          Pick whatever rhythm feels right — you can change again anytime.
        </p>

        <p className="mt-6 text-xs font-semibold tracking-wide text-[#444] uppercase">
          Where you are now
        </p>
        <PlanRow tier={currentTier} current />

        <p className="mt-5 text-xs font-semibold tracking-wide text-[#444] uppercase">
          Switch &amp; save
        </p>
        <div className="mt-2 space-y-3">
          {tiers
            .filter((t) => t.id !== currentTierId)
            .map((tier) => (
              <button
                key={tier.id}
                type="button"
                onClick={() => setPendingTier(tier)}
                className="w-full text-left"
              >
                <PlanRow tier={tier} highlight />
              </button>
            ))}
        </div>

        <p className="mt-5 text-center text-xs text-[#444]">
          Any change starts on your next billing date, {renews}.
        </p>
      </div>

      {pendingTier ? (
        <ConfirmSwitchModal
          current={currentTier}
          next={pendingTier}
          onCancel={() => setPendingTier(null)}
          onConfirm={() => {
            onConfirmSwitch(pendingTier.id);
            setPendingTier(null);
          }}
        />
      ) : null}
    </PanelCard>
  );
}

function PlanRow({
  tier,
  current,
  highlight,
}: {
  tier: PlanTier;
  current?: boolean;
  highlight?: boolean;
}) {
  return (
    <div
      className={`mt-2 flex items-center justify-between rounded-2xl border-2 px-5 py-4 ${
        highlight
          ? "border-[#db4927] bg-[#db4927]/5"
          : "border-[#222]/10 bg-[#f8f8f8]"
      }`}
    >
      <div>
        <div className="flex items-center gap-2">
          <span className="font-[var(--font-nohemi)] font-bold text-[#222]">
            {tier.label}
          </span>
          {current ? (
            <span className="rounded-full bg-[#222]/10 px-2 py-0.5 text-xs font-semibold text-[#444]">
              Current
            </span>
          ) : tier.saveLabel ? (
            <span className="rounded-full bg-[#db4927] px-2 py-0.5 text-xs font-semibold text-white">
              {tier.saveLabel}
            </span>
          ) : null}
        </div>
        <p className="mt-0.5 text-sm text-[#444]">{tier.perWeek}</p>
      </div>
      <div className="text-right">
        <p className="font-[var(--font-nohemi)] text-lg font-extrabold text-[#222]">
          ${formatAmount(tier.price)}
        </p>
        <p className="text-xs text-[#444]">/ {tier.interval}</p>
      </div>
    </div>
  );
}

function ConfirmSwitchModal({
  current,
  next,
  onCancel,
  onConfirm,
}: {
  current: PlanTier;
  next: PlanTier;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  const savePct = Math.round(
    (1 -
      next.price /
        (next.interval === "year" ? current.price * 12 : current.price)) *
      100,
  );

  return (
    <div className="absolute inset-0 z-10 flex items-end justify-center bg-[#222]/40 p-4 sm:items-center">
      <div className="w-full max-w-sm animate-pop-in rounded-2xl bg-white p-6 shadow-2xl">
        <p className="text-xs font-semibold tracking-wide text-[#444] uppercase">
          Confirm your switch
        </p>
        <h3 className="mt-1 font-[var(--font-nohemi)] text-xl font-extrabold text-[#222]">
          Move to {next.label.toLowerCase()} billing?
        </h3>

        <div className="mt-4 divide-y divide-[#222]/10 rounded-xl bg-[#f8f8f8] text-sm">
          <div className="flex items-center justify-between px-4 py-2.5">
            <span className="text-[#444]">Current plan</span>
            <span className="font-medium text-[#222]">
              ${formatAmount(current.price)} / {current.interval}
            </span>
          </div>
          <div className="flex items-center justify-between px-4 py-2.5">
            <span className="text-[#444]">New plan</span>
            <span className="font-medium text-[#222]">
              ${formatAmount(next.price)} / {next.interval}
            </span>
          </div>
          {savePct > 0 ? (
            <div className="flex items-center justify-between px-4 py-2.5">
              <span className="flex items-center gap-1.5 text-[#db4927]">
                <CheckIcon className="text-[#db4927]" /> You save
              </span>
              <span className="font-semibold text-[#db4927]">
                {savePct}% vs {current.label.toLowerCase()}
              </span>
            </div>
          ) : null}
        </div>

        <p className="mt-4 text-xs text-[#444]">
          Your new rate starts on your next billing date, and you can change
          it again anytime.
        </p>

        <button
          type="button"
          onClick={onConfirm}
          className="mt-5 w-full rounded-full bg-[#db4927] px-6 py-3 font-[var(--font-nohemi)] text-base font-bold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.01] active:scale-[0.98]"
        >
          Yes, switch my plan
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="mt-3 w-full text-center text-sm text-[#444] hover:text-[#222]"
        >
          Keep what I have
        </button>
      </div>
    </div>
  );
}
