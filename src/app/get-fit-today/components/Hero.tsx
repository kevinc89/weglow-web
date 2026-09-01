import Image from "next/image";
import { stat } from "../data";
import { CheckoutButton } from "./CheckoutButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FBF1E7]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <span className="font-[var(--font-fraunces)] text-sm font-semibold tracking-[0.2em] text-[#db4927] uppercase">
            WEGLOW
          </span>
          <h1 className="mt-4 font-[var(--font-fraunces)] text-5xl leading-[1.05] tracking-tight text-[#2E1B12] italic sm:text-6xl md:text-7xl">
            Write your
            <br />
            strongest story
          </h1>
          <p className="mt-6 max-w-md text-lg leading-8 text-[#5b4a3f]">
            Personalized workouts, nutrition and coaching that adapt to your
            body — one chapter at a time.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <CheckoutButton className="rounded-full bg-[#db4927] px-8 py-4 text-center font-[var(--font-fraunces)] text-lg font-semibold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.02] active:scale-[0.98]">
              Get started →
            </CheckoutButton>
            <span className="text-sm text-[#5b4a3f]">Cancel anytime.</span>
          </div>

          <div className="mt-10 flex w-fit items-center gap-3 rounded-full bg-white px-5 py-3 shadow-sm">
            <span className="font-[var(--font-fraunces)] text-2xl font-semibold text-[#db4927]">
              {stat.headline}
            </span>
            <span className="max-w-[10rem] text-left text-sm text-[#5b4a3f]">
              {stat.body}
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-8 -z-10 rounded-full bg-[#db4927]/10 blur-3xl" />
          <div className="overflow-hidden rounded-[2.5rem] shadow-2xl shadow-[#2E1B12]/20">
            <Image
              src="/get-fit-today/photos/hero.jpg"
              alt="Woman mid-workout, holding a side plank"
              width={900}
              height={1200}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
