"use client";

import { useState } from "react";
import Image from "next/image";
import { BackLink, PanelCard } from "./PanelCard";
import { featureOptions, type FeatureOption } from "../data";

export function CancelFeatureListCard({
  onBack,
  onShowMe,
  onContinueToCancel,
}: {
  onBack: () => void;
  onShowMe: (featureId: FeatureOption["id"]) => void;
  onContinueToCancel: () => void;
}) {
  const [selected, setSelected] = useState<FeatureOption["id"] | null>(null);

  return (
    <PanelCard>
      <BackLink onClick={onBack} />

      <div className="p-8 pt-4">
        <p className="text-xs font-semibold tracking-wide text-[#444] uppercase">
          Good news
        </p>
        <h2 className="mt-1 font-[var(--font-nohemi)] text-2xl font-extrabold leading-tight text-[#222]">
          Which feature were you looking for?
        </h2>
        <p className="mt-2 text-sm text-[#444]">
          A few of these might already be here. Pick one and we&apos;ll walk
          you through it.
        </p>

        <div className="mt-5 space-y-2.5">
          {featureOptions.map((feature) => (
            <button
              key={feature.id}
              type="button"
              onClick={() => setSelected(feature.id)}
              className={`flex w-full items-center gap-3 rounded-xl border-2 px-4 py-3 text-left text-sm transition-colors ${
                selected === feature.id
                  ? "border-[#db4927] bg-[#db4927]/5"
                  : "border-[#222]/10 bg-white hover:border-[#db4927]/30"
              }`}
            >
              <span
                className={`flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full border-2 ${
                  selected === feature.id
                    ? "border-[#db4927]"
                    : "border-[#222]/25"
                }`}
              >
                {selected === feature.id ? (
                  <span className="h-2 w-2 rounded-full bg-[#db4927]" />
                ) : null}
              </span>
              {feature.photo ? (
                <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={feature.photo.src}
                    alt=""
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </span>
              ) : (
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#db4927]/10 text-lg">
                  {feature.icon}
                </span>
              )}
              <span className="text-[#222]">{feature.label}</span>
            </button>
          ))}
        </div>

        <button
          type="button"
          disabled={!selected}
          onClick={() => selected && onShowMe(selected)}
          className="mt-5 w-full rounded-full bg-[#db4927] px-6 py-3.5 font-[var(--font-nohemi)] text-base font-bold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.01] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none disabled:hover:scale-100"
        >
          Show me how
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
