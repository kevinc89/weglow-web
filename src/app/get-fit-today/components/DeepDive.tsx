import Image from "next/image";
import { ScreenshotFrame } from "./ScreenshotFrame";
import { CheckoutButton } from "./CheckoutButton";
import type { DeepDive as DeepDiveType } from "../data";

export function DeepDive({
  eyebrow,
  title,
  body,
  bullets,
  image,
  imageAlt,
  isScreenshot,
  reverse,
  accent,
  bg,
  cta,
}: DeepDiveType) {
  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: bg }}>
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`grid grid-cols-1 items-center gap-12 md:grid-cols-2 ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="mx-auto w-full max-w-xs">
            {isScreenshot ? (
              <ScreenshotFrame src={image} alt={imageAlt} />
            ) : (
              <div className="overflow-hidden rounded-[2.5rem] shadow-2xl shadow-[#2E1B12]/20">
                <Image
                  src={image}
                  alt={imageAlt}
                  width={800}
                  height={1000}
                  className="h-auto w-full object-cover"
                />
              </div>
            )}
          </div>

          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <span
              className="font-[var(--font-fraunces)] text-sm font-semibold tracking-[0.2em] uppercase"
              style={{ color: accent }}
            >
              {eyebrow}
            </span>
            <h2 className="mt-2 font-[var(--font-fraunces)] text-3xl text-[#2E1B12] italic sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#5b4a3f]">{body}</p>
            <ul className="mt-6 space-y-3">
              {bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start justify-center gap-3 text-[#2E1B12] md:justify-start"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="mt-0.5 shrink-0"
                    style={{ color: accent }}
                  >
                    <path
                      d="M2.5 7L5.5 10L11.5 3.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {bullet}
                </li>
              ))}
            </ul>
            <CheckoutButton
              className="mt-8 rounded-full px-6 py-3 font-[var(--font-fraunces)] text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
              style={{ backgroundColor: accent }}
            >
              {cta} →
            </CheckoutButton>
          </div>
        </div>
      </div>
    </section>
  );
}
