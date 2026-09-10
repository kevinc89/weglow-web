"use client";

import { useState } from "react";
import { faqs } from "../data";
import { Reveal } from "./Reveal";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <Reveal>
        <h2 className="text-center font-[var(--font-nohemi)] text-3xl font-extrabold text-[#222] sm:text-4xl">
          Questions? Answered.
        </h2>
      </Reveal>

      <Reveal delay={150}>
        <div className="mt-10 divide-y divide-[#222]/10 rounded-2xl border border-[#222]/10">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-[#f8f8f8]"
                >
                  <span className="font-[var(--font-nohemi)] font-bold text-[#222]">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 text-2xl leading-none text-[#db4927] transition-transform duration-300 ${open ? "rotate-45" : ""}`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[#444]">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
