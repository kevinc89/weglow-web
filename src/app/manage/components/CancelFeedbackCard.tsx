"use client";

import { useState } from "react";
import { BackLink, PanelCard } from "./PanelCard";
import { engagementTags } from "../data";

export function CancelFeedbackCard({
  onBack,
  onSend,
  onContinueToCancel,
}: {
  onBack: () => void;
  onSend: (tags: string[], feedback: string) => void;
  onContinueToCancel: () => void;
}) {
  const [tags, setTags] = useState<string[]>([]);
  const [feedback, setFeedback] = useState("");

  function toggleTag(tag: string) {
    setTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  }

  return (
    <PanelCard>
      <BackLink onClick={onBack} />

      <div className="p-8 pt-4">
        <p className="text-xs font-semibold tracking-wide text-[#444] uppercase">
          We&apos;re listening
        </p>
        <h2 className="mt-1 font-[var(--font-nohemi)] text-2xl font-extrabold leading-tight text-[#222]">
          What would make WEGLOW feel more worth it?
        </h2>
        <p className="mt-2 text-sm text-[#444]">
          Tell us what&apos;s been getting in the way. We read every note, and
          it genuinely shapes what we build next.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {engagementTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => toggleTag(tag)}
              className={`rounded-full border-2 px-4 py-2 text-sm transition-colors ${
                tags.includes(tag)
                  ? "border-[#db4927] bg-[#db4927]/10 text-[#222]"
                  : "border-[#222]/15 text-[#444] hover:border-[#db4927]/40"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Tell us more. What would make WEGLOW part of your everyday?"
          rows={3}
          className="mt-4 w-full resize-none rounded-xl border border-[#222]/15 bg-white px-4 py-3 text-sm text-[#222] outline-none focus:border-[#db4927]"
        />

        <button
          type="button"
          onClick={() => onSend(tags, feedback.trim())}
          className="mt-5 w-full rounded-full bg-[#db4927] px-6 py-3.5 font-[var(--font-nohemi)] text-base font-bold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.01] active:scale-[0.98]"
        >
          Send &amp; keep my plan
        </button>
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
