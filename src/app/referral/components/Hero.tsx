import Image from "next/image";
import { stat } from "@/lib/brand";
import { REFERRAL_PLAN } from "../pricing";
import { CheckoutButton } from "./CheckoutButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fde8e5]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#db4927] shadow-sm">
            🎁 You&apos;ve been invited to WEGLOW
          </span>

          <h1 className="mt-5 font-[var(--font-nohemi)] text-4xl font-extrabold leading-[1.05] tracking-tight text-[#222] sm:text-5xl md:text-6xl">
            Your friend thinks{" "}
            <span className="font-[var(--font-fraunces)] italic text-[#db4927]">
              you&apos;ll love
            </span>{" "}
            WEGLOW.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-8 text-[#444]">
            Start your {REFERRAL_PLAN.trialDays}-day free trial, then get the
            Annual Plan for just ${REFERRAL_PLAN.price} instead of $
            {REFERRAL_PLAN.compareAtPrice} — a discount reserved for friends
            of WEGLOW members.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <CheckoutButton className="rounded-full bg-[#db4927] px-8 py-4 text-center font-[var(--font-nohemi)] text-lg font-bold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.02] active:scale-[0.98]">
              Start your free trial
            </CheckoutButton>
            <span className="text-sm text-[#444]">Cancel anytime.</span>
          </div>

          <div className="mt-10 flex w-fit items-center gap-3 rounded-full bg-white px-5 py-3 shadow-sm">
            <span className="font-[var(--font-nohemi)] text-2xl font-extrabold text-[#db4927]">
              {stat.headline}
            </span>
            <span className="max-w-[10rem] text-left text-sm text-[#444]">
              {stat.body}
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-8 -z-10 rounded-full bg-[#db4927]/10 blur-3xl" />
          <div className="overflow-hidden rounded-[2.5rem] shadow-2xl shadow-[#222]/20">
            <Image
              src="/manage/photos/guided-workout.jpg"
              alt="A WEGLOW member following a guided workout on her mat"
              width={1334}
              height={2000}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
