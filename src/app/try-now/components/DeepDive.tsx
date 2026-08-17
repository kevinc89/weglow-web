import Image from "next/image";
import { ScreenshotFrame } from "./ScreenshotFrame";
import type { DeepDive as DeepDiveType } from "../data";

export function DeepDive({ eyebrow, title, body, bullets, image, imageAlt, reverse }: DeepDiveType) {
  const isScreenshot = image.includes("/screenshots/");

  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <div
        className={`grid grid-cols-1 items-center gap-12 md:grid-cols-2 ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="mx-auto w-full max-w-xs">
          {isScreenshot ? (
            <ScreenshotFrame src={image} alt={imageAlt} />
          ) : (
            <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-[#222]/20">
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

        <div>
          <span className="font-[var(--font-nohemi)] text-sm font-bold uppercase tracking-wide text-[#db4927]">
            {eyebrow}
          </span>
          <h2 className="mt-2 font-[var(--font-nohemi)] text-3xl font-extrabold leading-tight text-[#222] sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#444]">{body}</p>
          <ul className="mt-6 space-y-3">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-[#222]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="mt-0.5 shrink-0 text-[#db4927]"
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
        </div>
      </div>
    </section>
  );
}
