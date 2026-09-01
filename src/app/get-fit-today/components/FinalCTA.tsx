import Image from "next/image";
import { CheckoutButton } from "./CheckoutButton";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#F5DECF] py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <div className="order-2 flex flex-col items-center text-center md:order-1 md:items-start md:text-left">
          <h2 className="font-[var(--font-fraunces)] text-3xl leading-tight text-[#2E1B12] italic sm:text-4xl">
            Every glow-up starts with page one.
          </h2>
          <p className="mt-4 max-w-md text-lg text-[#5b4a3f]">
            Get a personalized WEGLOW plan built around your goals, your
            body, and your life.
          </p>
          <CheckoutButton className="mt-8 inline-block rounded-full bg-[#db4927] px-8 py-4 font-[var(--font-fraunces)] text-lg font-semibold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.02] active:scale-[0.98]">
            Get started →
          </CheckoutButton>
        </div>
        <div className="order-1 mx-auto w-full max-w-xs overflow-hidden rounded-[2.5rem] shadow-2xl shadow-[#2E1B12]/20 md:order-2">
          <Image
            src="/get-fit-today/photos/kitchen.jpg"
            alt="Woman smiling in her kitchen after a workout"
            width={800}
            height={1000}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
