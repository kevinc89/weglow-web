"use client";

import { BackLink, PanelCard } from "./PanelCard";
import { SUPPORT_EMAIL } from "../data";

export function CancelSupportCard({
  onBack,
  onContinueToCancel,
}: {
  onBack: () => void;
  onContinueToCancel: () => void;
}) {
  return (
    <PanelCard>
      <BackLink onClick={onBack} />

      <div className="p-8 pt-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#db4927]/10 text-lg text-[#db4927]">
          🛠️
        </div>
        <h2 className="mt-4 font-[var(--font-nohemi)] text-2xl font-extrabold leading-tight text-[#222]">
          Let&apos;s fix this together
        </h2>
        <p className="mt-3 text-sm text-[#444]">
          A bug shouldn&apos;t be the reason you leave. Send us a note and a
          real person will help you get back up and running, usually within a
          few hours.
        </p>

        <div className="mt-6 flex items-center gap-3 rounded-2xl bg-[#f8f8f8] px-4 py-3">
          <span className="text-xl">✉️</span>
          <span>
            <span className="block text-sm text-[#444]">Email support</span>
            <span className="block font-semibold text-[#222]">
              {SUPPORT_EMAIL}
            </span>
          </span>
        </div>

        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="mt-6 block w-full rounded-full bg-[#db4927] px-6 py-3.5 text-center font-[var(--font-nohemi)] text-base font-bold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.01] active:scale-[0.98]"
        >
          Email {SUPPORT_EMAIL}
        </a>

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
