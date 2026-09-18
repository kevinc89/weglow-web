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
        className="object-cover object-[50%_40%] lg:object-[50%_20%]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#222]/45 via-[#222]/10 to-[#222]/60" />

      <div className="absolute right-6 bottom-6 left-6 flex flex-wrap items-end justify-center gap-3 sm:justify-between xl:right-7 xl:bottom-7 xl:left-7">
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
