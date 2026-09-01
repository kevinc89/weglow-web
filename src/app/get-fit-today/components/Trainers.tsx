import Image from "next/image";
import { trainers } from "../data";

export function Trainers() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="font-[var(--font-fraunces)] text-sm font-semibold tracking-[0.2em] text-[#db4927] uppercase">
            Your coaches
          </span>
          <h2 className="mx-auto mt-3 max-w-xl font-[var(--font-fraunces)] text-3xl text-[#2E1B12] italic sm:text-4xl">
            Meet the women behind your story
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {trainers.map((trainer) => (
            <div key={trainer.name} className="text-center">
              <div
                className="mx-auto aspect-[3/4] w-full overflow-hidden rounded-[2rem] p-3 shadow-lg"
                style={{ backgroundColor: trainer.bg }}
              >
                <div className="h-full w-full overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={trainer.image}
                    alt={`${trainer.name}, WEGLOW trainer`}
                    width={600}
                    height={800}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <p className="mt-4 font-[var(--font-fraunces)] text-lg text-[#2E1B12]">
                {trainer.name}
              </p>
              <p className="text-sm text-[#5b4a3f]">{trainer.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
