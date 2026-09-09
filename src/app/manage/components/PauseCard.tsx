"use client";

import { BackLink, PanelCard } from "./PanelCard";

export function PauseCard({
  resumeDate,
  onBack,
  onConfirmPause,
}: {
  resumeDate: string;
  onBack: () => void;
  onConfirmPause: () => void;
}) {
  return (
    <PanelCard>
      <BackLink onClick={onBack} />

      <div className="p-8 pt-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#db4927]/10 text-lg text-[#db4927]">
          ⏸
        </div>
        <h2 className="mt-4 font-[var(--font-nohemi)] text-2xl font-extrabold leading-tight text-[#222]">
          Life gets busy. We understand.
        </h2>
        <p className="mt-3 text-sm text-[#444]">
          If now isn&apos;t the right time, rest your membership for a month
          instead of leaving. You won&apos;t be charged while it&apos;s
          paused, your streaks and progress stay exactly where they are, and
          WEGLOW will be here when you&apos;re ready to pick things back up.
        </p>

        <div className="mt-6 rounded-2xl border-2 border-[#db4927]/30 bg-[#db4927]/5 p-5">
          <div className="flex items-center justify-between">
            <span className="font-[var(--font-nohemi)] font-bold text-[#222]">
              Pause for one month
            </span>
            <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
              No charge
            </span>
          </div>
          <div className="mt-3 divide-y divide-[#222]/10 text-sm">
            <div className="flex items-center justify-between py-2">
              <span className="text-[#444]">Billing pauses</span>
              <span className="font-medium text-[#222]">Today</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-[#444]">Picks back up</span>
              <span className="font-medium text-[#222]">{resumeDate}</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onConfirmPause}
          className="mt-6 w-full rounded-full bg-[#db4927] px-6 py-3.5 font-[var(--font-nohemi)] text-base font-bold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.01] active:scale-[0.98]"
        >
          Pause for a month
        </button>
      </div>
    </PanelCard>
  );
}
