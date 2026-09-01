import Image from "next/image";
import { trainers } from "../data";

export function Trainers() {
  return (
    <section className="bg-[#fde8e5] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="font-[var(--font-nohemi)] text-3xl font-extrabold text-[#222] sm:text-4xl">
            Meet your trainers
          </h2>
          <p className="mt-3 text-lg text-[#444]">
            Six specialized coaches. Every style of training.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {trainers.map((trainer) => (
            <div key={trainer.name} className="text-center">
              <div className="mx-auto aspect-[3/4] w-full max-w-[220px] overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src={trainer.image}
                  alt={`${trainer.name}, WEGLOW trainer`}
                  width={600}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-4 font-[var(--font-nohemi)] text-lg font-bold text-[#222]">
                {trainer.name}
              </p>
              <p className="text-sm text-[#444]">{trainer.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
