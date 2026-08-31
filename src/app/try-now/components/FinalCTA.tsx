import Image from "next/image";
import { CheckoutButton } from "./CheckoutButton";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#fde8e5] py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <h2 className="font-[var(--font-nohemi)] text-3xl font-extrabold leading-tight text-[#222] sm:text-4xl">
            Stop guessing. Start glowing.
          </h2>
          <p className="mt-4 max-w-md text-lg text-[#444]">
            Get a personalized WeGlow plan built around your goals, your
            body, and your life.
          </p>
          <CheckoutButton className="mt-8 inline-block rounded-full bg-[#db4927] px-8 py-4 font-[var(--font-nohemi)] text-lg font-bold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.02] active:scale-[0.98]">
            Get My Plan
          </CheckoutButton>
        </div>
        <div className="order-1 mx-auto w-full max-w-xs overflow-hidden rounded-[2rem] shadow-2xl shadow-[#222]/20 md:order-2">
          <Image
            src="/try-now/photos/smoothie.jpg"
            alt="Woman smiling while preparing a smoothie"
            width={800}
            height={1000}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
