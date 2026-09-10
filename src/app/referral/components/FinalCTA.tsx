import Image from "next/image";
import { CheckoutButton } from "./CheckoutButton";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#fde8e5] py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <Reveal className="order-2 flex flex-col items-center text-center md:order-1 md:items-start md:text-left">
          <h2 className="font-[var(--font-nohemi)] text-3xl font-extrabold leading-tight text-[#222] sm:text-4xl">
            Your friend already knows. Now it&apos;s your turn.
          </h2>
          <p className="mt-4 max-w-md text-lg text-[#444]">
            Start your free trial today and find out why they couldn&apos;t
            stop talking about WEGLOW.
          </p>
          <CheckoutButton className="mt-8 inline-block rounded-full bg-[#db4927] px-8 py-4 font-[var(--font-nohemi)] text-lg font-bold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.02] active:scale-[0.98]">
            Start your free trial
          </CheckoutButton>
        </Reveal>
        <Reveal
          delay={150}
          className="order-1 mx-auto w-full max-w-xs overflow-hidden rounded-[2rem] shadow-2xl shadow-[#222]/20 transition-transform duration-500 hover:rotate-1 hover:scale-[1.03] md:order-2"
        >
          <Image
            src="/manage/photos/gym-strength.jpg"
            alt="A WEGLOW member training on the strength rack"
            width={1333}
            height={2000}
            className="h-auto w-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
