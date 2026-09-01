"use client";

import { useState } from "react";
import { faqs } from "../data";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <h2 className="text-center font-[var(--font-fraunces)] text-3xl text-[#2E1B12] italic sm:text-4xl">
        Still have questions?
      </h2>

      <div className="mt-10 divide-y divide-[#2E1B12]/10 rounded-[2rem] border border-[#2E1B12]/10">
        {faqs.map((faq, index) => {
          const open = openIndex === index;
          return (
            <div key={faq.question}>
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-[var(--font-fraunces)] font-semibold text-[#2E1B12]">
                  {faq.question}
                </span>
                <span
                  className={`shrink-0 text-2xl leading-none text-[#db4927] transition-transform ${open ? "rotate-45" : ""}`}
                  aria-hidden
                >
                  +
                </span>
              </button>
              {open ? (
                <p className="px-6 pb-5 text-[#5b4a3f]">{faq.answer}</p>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
