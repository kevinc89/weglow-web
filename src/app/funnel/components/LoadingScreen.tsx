"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { loadingSteps } from "../data";

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (activeIndex >= loadingSteps.length) {
      const timeout = setTimeout(onDone, 600);
      return () => clearTimeout(timeout);
    }
    const timeout = setTimeout(() => setActiveIndex((i) => i + 1), 700);
    return () => clearTimeout(timeout);
  }, [activeIndex, onDone]);

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center px-6 py-16 text-center">
      <Logo className="mb-10" />
      <h2 className="font-[var(--font-nohemi)] text-2xl font-extrabold text-[#222]">
        Building your custom plan...
      </h2>
      <div className="mt-10 w-full max-w-sm space-y-4 text-left">
        {loadingSteps.map((step, i) => {
          const done = i < activeIndex;
          const active = i === activeIndex;
          return (
            <div key={step} className="flex items-center gap-3">
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                  done
                    ? "border-[#db4927] bg-[#db4927]"
                    : active
                      ? "border-[#db4927]"
                      : "border-[#222]/15"
                }`}
              >
                {done ? (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-white">
                    <path
                      d="M2.5 7L5.5 10L11.5 3.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : active ? (
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#db4927]" />
                ) : null}
              </span>
              <span
                className={`text-base ${done || active ? "text-[#222]" : "text-[#222]/40"}`}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
