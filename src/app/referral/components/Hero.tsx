import Image from "next/image";
import { REFERRAL_PLAN } from "../pricing";
import { CheckoutButton } from "./CheckoutButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fde8e5] via-[#fdf1ef] to-[#eef1ff]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 pt-16 pb-20 md:grid-cols-2 md:pt-24 md:pb-28">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <span className="inline-flex animate-pop-in items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#db4927] shadow-sm">
            🎁 You&apos;ve been invited!
          </span>

          <h1 className="mt-5 font-[var(--font-nohemi)] text-4xl font-extrabold leading-[1.05] tracking-tight text-[#222] sm:text-5xl md:text-6xl">
            Your friend called it.{" "}
            <span className="font-[var(--font-fraunces)] italic text-[#db4927]">
              You&apos;re going to love
            </span>{" "}
            WEGLOW.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-8 text-[#444]">
            Start your {REFERRAL_PLAN.trialDays}-day free trial today. Then
            keep the Annual Plan for just ${REFERRAL_PLAN.price} instead of $
            {REFERRAL_PLAN.compareAtPrice}. This price is reserved for
            friends of WEGLOW members only.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <CheckoutButton className="rounded-full bg-[#db4927] px-8 py-4 text-center font-[var(--font-nohemi)] text-lg font-bold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.02] active:scale-[0.98]">
              Start your free trial
            </CheckoutButton>
            <span className="text-sm text-[#444]">Cancel anytime.</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-8 -z-10 rounded-full bg-[#db4927]/10 blur-3xl" />

          <div className="overflow-hidden rounded-[2.5rem] shadow-2xl shadow-[#222]/20 transition-transform duration-500 hover:-rotate-1 hover:scale-[1.02]">
            <Image
              src="/manage/photos/guided-workout.jpg"
              alt="A WEGLOW member following a guided workout on her mat"
              width={1334}
              height={2000}
              priority
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="absolute -top-4 -left-3 z-10 w-36 -rotate-6 rounded-2xl bg-white p-3 shadow-xl transition-transform duration-500 hover:rotate-0 sm:-top-6 sm:-left-8 sm:w-44 sm:p-4">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#db4927]/10 text-sm sm:h-8 sm:w-8">
                💌
              </span>
              <p className="text-[11px] font-bold text-[#222] sm:text-xs">
                Maddie sent you a link
              </p>
            </div>
            <p className="mt-2 rounded-lg bg-[#f8f8f8] p-2 text-[10px] leading-snug text-[#444] sm:text-xs">
              &ldquo;You need this app, trust me.&rdquo;
            </p>
          </div>

          <div className="absolute -right-3 -bottom-4 z-10 rotate-3 rounded-2xl bg-[#222] px-4 py-3 text-white shadow-xl transition-transform duration-500 hover:rotate-0 sm:-right-8 sm:-bottom-6">
            <p className="text-[10px] text-white/60 sm:text-xs">Your price</p>
            <p className="font-[var(--font-nohemi)] text-lg font-extrabold sm:text-xl">
              ${REFERRAL_PLAN.price}
              <span className="text-xs font-normal text-white/60">
                /{REFERRAL_PLAN.interval}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
