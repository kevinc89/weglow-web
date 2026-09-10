import Image from "next/image";
import { REFERRAL_PLAN } from "../pricing";
import { CheckoutButton } from "./CheckoutButton";

export function Hero({ referrerName }: { referrerName: string | null }) {
  const friendLabel = referrerName ?? "Your friend";

  return (
    <section className="relative flex h-[560px] w-full items-end overflow-hidden sm:h-[640px] md:h-[80vh] md:max-h-[760px]">
      <Image
        src="/manage/photos/guided-workout.jpg"
        alt="A WEGLOW member following a guided workout on her mat"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "50% 20%" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-6 pb-14 text-center sm:pb-20">
        <span className="inline-flex animate-pop-in items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#db4927] shadow-sm">
          🎁 You&apos;ve been invited!
        </span>

        <h1 className="mt-5 font-[var(--font-nohemi)] text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
          {friendLabel} called it.{" "}
          <span className="font-[var(--font-fraunces)] italic text-[#ffd9c7]">
            You&apos;re going to love
          </span>{" "}
          WEGLOW.
        </h1>
        <p className="mt-6 max-w-md text-lg leading-8 text-white/85">
          Start your {REFERRAL_PLAN.trialDays}-day free trial today. Then
          keep the Annual Plan for just ${REFERRAL_PLAN.price} instead of $
          {REFERRAL_PLAN.compareAtPrice}. This price is reserved for
          friends of WEGLOW members only.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <CheckoutButton className="rounded-full bg-[#db4927] px-8 py-4 text-center font-[var(--font-nohemi)] text-lg font-bold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.02] active:scale-[0.98]">
            Start your free trial
          </CheckoutButton>
          <span className="text-sm text-white/80">Cancel anytime.</span>
        </div>
      </div>
    </section>
  );
}
