"use client";

import { useState } from "react";
import { BackLink, PanelCard } from "./PanelCard";
import type { PlanTier } from "../data";

export function CancelConfirmCard({
  plan,
  renews,
  onBack,
  onKeepSubscription,
  onConfirm,
}: {
  plan: PlanTier;
  renews: string;
  onBack: () => void;
  onKeepSubscription: () => void;
  onConfirm: (deleteData: boolean) => void;
}) {
  const [deleteData, setDeleteData] = useState(false);

  return (
    <PanelCard>
      <BackLink onClick={onBack} />

      <div className="p-8 pt-4">
        <h2 className="font-[var(--font-nohemi)] text-2xl font-extrabold leading-tight text-[#222]">
          Okay. Let&apos;s cancel your plan.
        </h2>
        <p className="mt-3 text-sm text-[#444]">
          You&apos;ll keep full access until <strong className="text-[#222]">{renews}</strong>.
          After that WEGLOW won&apos;t renew and you won&apos;t be charged
          again. Your workouts, streaks and progress stay put unless you ask
          us to remove them.
        </p>

        <div className="mt-5 divide-y divide-[#222]/10 rounded-2xl bg-[#f8f8f8] text-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-[#444]">Plan</span>
            <span className="font-medium text-[#222]">
              WEGLOW {plan.label} Plan
            </span>
          </div>
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-[#444]">Access until</span>
            <span className="font-medium text-[#222]">{renews}</span>
          </div>
        </div>

        <label className="mt-4 flex items-start gap-3 rounded-2xl border border-[#222]/10 p-4">
          <input
            type="checkbox"
            checked={deleteData}
            onChange={(e) => setDeleteData(e.target.checked)}
            className="mt-0.5 h-4 w-4 accent-[#db4927]"
          />
          <span>
            <span className="block text-sm font-semibold text-[#222]">
              Also delete my account and data
            </span>
            <span className="block text-xs text-[#444]">
              Permanently erase your workouts, progress and streaks. This
              can&apos;t be undone, and you won&apos;t be able to reactivate.
            </span>
          </span>
        </label>

        <button
          type="button"
          onClick={() => onConfirm(deleteData)}
          className="mt-5 w-full rounded-full bg-[#222] px-6 py-3.5 font-[var(--font-nohemi)] text-base font-bold text-white shadow-lg transition-transform hover:scale-[1.01] active:scale-[0.98]"
        >
          Confirm cancellation
        </button>
        <button
          type="button"
          onClick={onKeepSubscription}
          className="mt-3 w-full rounded-full bg-[#f8f8f8] px-6 py-3.5 text-center text-sm font-semibold text-[#222] hover:bg-[#222]/5"
        >
          Keep my membership
        </button>
      </div>
    </PanelCard>
  );
}
