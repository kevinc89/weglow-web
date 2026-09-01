import { brand, stat } from "@/lib/brand";
import { ScreenshotFrame } from "./ScreenshotFrame";
import { CheckoutButton } from "./CheckoutButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fde8e5]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h1 className="font-[var(--font-nohemi)] text-4xl font-extrabold leading-[1.05] tracking-tight text-[#222] sm:text-5xl md:text-6xl">
            {brand.tagline}
          </h1>
          <p className="mt-6 max-w-md text-lg leading-8 text-[#444]">
            {brand.subtagline} Personalized workouts, nutrition, and coaching
            that adapt to you.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CheckoutButton className="rounded-full bg-[#db4927] px-8 py-4 text-center font-[var(--font-nohemi)] text-lg font-bold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.02] active:scale-[0.98]">
              Get Started
            </CheckoutButton>
            <span className="text-sm text-[#444]">Cancel anytime.</span>
          </div>

          <div className="mt-10 flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-sm w-fit">
            <span className="font-[var(--font-nohemi)] text-2xl font-extrabold text-[#db4927]">
              {stat.headline}
            </span>
            <span className="max-w-[10rem] text-left text-sm text-[#444]">
              {stat.body}
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs">
          <div className="absolute -inset-8 -z-10 rounded-full bg-white/60 blur-3xl" />
          <ScreenshotFrame
            src="/try-now/screenshots/home.png"
            alt="WEGLOW home screen showing today's workout"
            priority
          />
        </div>
      </div>
    </section>
  );
}
