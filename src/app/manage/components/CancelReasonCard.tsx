"use client";

import { useState } from "react";
import { BackLink, PanelCard, StepDots } from "./PanelCard";
import { cancelReasons, type CancelReason } from "../data";

export function CancelReasonCard({
  onBack,
  onStay,
  onContinue,
}: {
  onBack: () => void;
  onStay: () => void;
  onContinue: (reasonId: CancelReason["id"], feedback: string) => void;
}) {
  const [reasonId, setReasonId] = useState<CancelReason["id"] | null>(null);
  const [feedback, setFeedback] = useState("");

  return (
    <PanelCard>
      <BackLink onClick={onBack} />

      <div className="p-8 pt-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-wide text-[#444] uppercase">
            Step 1 of 2
          </span>
          <StepDots step={1} total={2} />
        </div>

        <h2 className="mt-3 font-[var(--font-nohemi)] text-2xl font-extrabold leading-tight text-[#222]">
          We&apos;d hate to see you go. What&apos;s on your mind?
        </h2>
        <p className="mt-2 text-sm text-[#444]">
          There are no wrong answers here — it just helps us take better care
          of you.
        </p>

        <div className="mt-6 space-y-2.5">
          {cancelReasons.map((reason) => (
            <button
              key={reason.id}
              type="button"
              onClick={() => setReasonId(reason.id)}
              className={`flex w-full items-center gap-3 rounded-xl border-2 px-4 py-3 text-left text-sm transition-colors ${
                reasonId === reason.id
                  ? "border-[#db4927] bg-[#db4927]/5"
                  : "border-[#222]/10 bg-white hover:border-[#db4927]/30"
              }`}
            >
              <span
                className={`flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full border-2 ${
                  reasonId === reason.id
                    ? "border-[#db4927]"
                    : "border-[#222]/25"
                }`}
              >
                {reasonId === reason.id ? (
                  <span className="h-2 w-2 rounded-full bg-[#db4927]" />
                ) : null}
              </span>
              <span className="text-[#222]">{reason.label}</span>
            </button>
          ))}
        </div>

        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Anything else you'd like to share? (optional)"
          rows={3}
          className="mt-3 w-full resize-none rounded-xl border border-[#222]/15 bg-white px-4 py-3 text-sm text-[#222] outline-none focus:border-[#db4927]"
        />

        <button
          type="button"
          disabled={!reasonId}
          onClick={() => reasonId && onContinue(reasonId, feedback.trim())}
          className="mt-5 w-full rounded-full bg-[#222] px-6 py-3.5 font-[var(--font-nohemi)] text-base font-bold text-white shadow-lg transition-transform hover:scale-[1.01] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
        >
          Continue
        </button>
        <button
          type="button"
          onClick={onStay}
          className="mt-3 w-full text-center text-sm text-[#444] hover:text-[#222]"
        >
          Actually, I&apos;d like to stay
        </button>
      </div>
    </PanelCard>
  );
}
