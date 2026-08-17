"use client";

import { useState } from "react";
import { ProgressBar } from "./ProgressBar";

export function EmailCaptureScreen({
  progress,
  onBack,
  onSubmit,
}: {
  progress: number;
  onBack: () => void;
  onSubmit: (name: string, email: string) => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const canSubmit = name.trim().length > 0 && /\S+@\S+\.\S+/.test(email);

  return (
    <div className="mx-auto flex min-h-[100dvh] max-w-lg flex-col px-6 py-8">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onBack}
          aria-label="Back"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#222] shadow-sm"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M11 4L5 9L11 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <ProgressBar progress={progress} />
      </div>

      <form
        className="flex flex-1 flex-col justify-center py-10"
        onSubmit={(e) => {
          e.preventDefault();
          if (canSubmit) onSubmit(name.trim(), email.trim());
        }}
      >
        <h2 className="font-[var(--font-nohemi)] text-2xl font-extrabold leading-tight text-[#222] sm:text-3xl">
          Where should we send your custom plan?
        </h2>
        <p className="mt-2 text-[#444]">
          We&apos;ll email your personalized WeGlow plan here.
        </p>

        <div className="mt-8 space-y-3">
          <input
            type="text"
            placeholder="First name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-2xl border-2 border-[#222]/10 bg-white px-5 py-4 text-[#222] outline-none focus:border-[#db4927]"
          />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-2xl border-2 border-[#222]/10 bg-white px-5 py-4 text-[#222] outline-none focus:border-[#db4927]"
          />
        </div>

        <button
          type="submit"
          disabled={!canSubmit}
          className="mt-8 w-full rounded-full bg-[#db4927] px-8 py-4 font-[var(--font-nohemi)] text-lg font-bold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
        >
          Build My Plan
        </button>
      </form>
    </div>
  );
}
