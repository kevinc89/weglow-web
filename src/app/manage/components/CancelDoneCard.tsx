"use client";

import { PanelCard } from "./PanelCard";

export function CancelDoneCard({
  renews,
  onKeepSubscription,
  onDone,
}: {
  renews: string;
  onKeepSubscription: () => void;
  onDone: () => void;
}) {
  return (
    <PanelCard>
      <div className="p-8">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-100 text-lg text-amber-600">
          !
        </div>
        <h2 className="mt-4 font-[var(--font-nohemi)] text-2xl font-extrabold leading-tight text-[#222]">
          Okay. We&apos;ve set your plan to cancel.
        </h2>
        <p className="mt-3 text-sm text-[#444]">
          You&apos;ll keep full access until{" "}
          <strong className="text-[#222]">{renews}</strong>, and you
          won&apos;t be charged again. Thank you for spending this time with
          us.
        </p>

        <div className="mt-5 divide-y divide-[#222]/10 rounded-2xl bg-[#f8f8f8] text-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-[#444]">Access until</span>
            <span className="font-medium text-[#222]">{renews}</span>
          </div>
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-[#444]">Status</span>
            <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-700">
              Cancels soon
            </span>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border-2 border-[#db4927]/30 bg-[#db4927]/5 p-5">
          <p className="font-[var(--font-nohemi)] font-bold text-[#222]">
            The door stays open
          </p>
          <p className="mt-1 text-sm text-[#444]">
            Change your mind any time before {renews} and you&apos;ll pick up
            right where you left off. Nothing is lost — your streaks,
            workouts and progress are all still here.
          </p>
          <button
            type="button"
            onClick={onKeepSubscription}
            className="mt-4 w-full rounded-full bg-[#db4927] px-6 py-3 font-[var(--font-nohemi)] text-base font-bold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.01] active:scale-[0.98]"
          >
            Keep my membership
          </button>
        </div>

        <button
          type="button"
          onClick={onDone}
          className="mt-4 w-full text-center text-sm text-[#444] hover:text-[#222]"
        >
          Done
        </button>
      </div>
    </PanelCard>
  );
}
