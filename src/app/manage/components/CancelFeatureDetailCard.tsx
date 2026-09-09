"use client";

import Image from "next/image";
import { BackLink, PanelCard } from "./PanelCard";
import { SUPPORT_EMAIL, type FeatureOption } from "../data";

export function CancelFeatureDetailCard({
  feature,
  onBack,
  onContinueToCancel,
}: {
  feature: FeatureOption;
  onBack: () => void;
  onContinueToCancel: () => void;
}) {
  const isOther = feature.id === "other";

  return (
    <PanelCard>
      <BackLink onClick={onBack} />

      <div className="p-8 pt-6">
        {feature.photo ? (
          <div className="relative h-40 w-full overflow-hidden rounded-2xl">
            <Image
              src={feature.photo.src}
              alt={feature.photo.alt}
              fill
              sizes="400px"
              className="object-cover"
            />
            <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-emerald-700 backdrop-blur-sm">
              Already included
            </span>
          </div>
        ) : (
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#db4927]/10 text-lg">
            {feature.icon}
          </div>
        )}

        <h2 className="mt-4 font-[var(--font-nohemi)] text-2xl font-extrabold leading-tight text-[#222]">
          {feature.title}
        </h2>
        <p className="mt-2 text-sm text-[#444]">{feature.body}</p>

        {feature.steps.length > 0 ? (
          <ol className="mt-5 space-y-3">
            {feature.steps.map((step, i) => (
              <li key={step} className="flex items-start gap-3 text-sm">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#db4927] text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span className="pt-0.5 text-[#222]">{step}</span>
              </li>
            ))}
          </ol>
        ) : null}

        {isOther ? (
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="mt-6 block w-full rounded-full bg-[#db4927] px-6 py-3.5 text-center font-[var(--font-nohemi)] text-base font-bold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.01] active:scale-[0.98]"
          >
            {feature.ctaLabel}
          </a>
        ) : (
          <a
            href="https://www.weglow.app/"
            className="mt-6 block w-full rounded-full bg-[#db4927] px-6 py-3.5 text-center font-[var(--font-nohemi)] text-base font-bold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.01] active:scale-[0.98]"
          >
            {feature.ctaLabel}
          </a>
        )}

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
