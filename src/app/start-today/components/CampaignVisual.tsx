"use client";

import Image from "next/image";
import { testimonials } from "@/lib/brand";
import { useOfferCountdown, formatCountdown } from "@/lib/useOfferCountdown";
import { StarIcon } from "./icons";

const featuredTestimonial = testimonials[3]; // "Workouts completely work! 🔥" — Maria

export function CampaignVisual() {
  const { remaining, active } = useOfferCountdown();

  return (
    <div className="relative order-first h-64 overflow-hidden bg-[#f4876a] sm:h-80 lg:order-none lg:h-auto lg:min-h-dvh">
      <Image
        src="/start-today/photos/hero.jpg"
        alt="A confident WEGLOW member kneeling on a mat between sets"
        fill
        priority
        quality={90}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
        style={{ objectPosition: "50% 20%" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#222]/45 via-[#222]/10 to-[#222]/60" />

      <div className="absolute top-6 right-0 left-0 text-center lg:top-8 xl:top-10">
        <p className="hidden text-[13px] font-extrabold tracking-[0.34em] text-white/95 uppercase sm:block">
          Invest in your body
        </p>
        <h2 className="mt-0 font-[var(--font-nohemi)] text-[clamp(2rem,7vw,2.75rem)] leading-[0.92] font-extrabold text-white [text-shadow:0_6px_24px_rgba(34,34,34,0.35)] sm:mt-2 lg:text-[clamp(2.75rem,5.6vw,5.25rem)]">
          LIMITED
          <br />
          TIME
        </h2>
      </div>

      <div className="absolute right-6 bottom-6 left-6 flex flex-wrap items-end justify-end gap-3 sm:justify-between xl:right-7 xl:bottom-7 xl:left-7">
        <div className="hidden max-w-[21rem] animate-[gentle-float_6s_ease-in-out_infinite] rounded-2xl bg-[#f8f8f8] p-4 shadow-xl sm:block">
          <div className="mb-1.5 flex gap-0.5 text-[#db4927]" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>
          <p className="text-sm leading-snug font-semibold text-[#222]">
            &ldquo;{featuredTestimonial.quote}&rdquo;
          </p>
          <p className="mt-1.5 text-xs font-bold tracking-wide text-[#444] uppercase">
            {featuredTestimonial.source}
          </p>
        </div>
        <div className="rounded-full bg-[#222] px-5 py-3 text-[13.5px] font-bold tracking-wide text-white uppercase shadow-lg">
          Ends soon · {active && remaining !== null ? formatCountdown(remaining) : "00:00:00"}
        </div>
      </div>
    </div>
  );
}
