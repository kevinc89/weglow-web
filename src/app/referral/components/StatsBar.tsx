import { stat, resultsStat } from "@/lib/brand";
import { REFERRAL_SAVINGS } from "../pricing";
import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";

const STATS = [
  {
    end: parseInt(stat.headline, 10),
    suffix: "%",
    label: stat.body,
  },
  {
    end: 300,
    suffix: "k+",
    label: resultsStat.body,
  },
  {
    end: REFERRAL_SAVINGS,
    prefix: "$",
    label: "off your first year, only through this link",
  },
];

export function StatsBar() {
  return (
    <div className="relative z-10 mx-auto -mt-10 max-w-5xl px-6 sm:-mt-14">
      <Reveal>
        <div className="grid grid-cols-1 gap-8 rounded-[2rem] bg-white p-8 shadow-2xl shadow-[#222]/10 sm:grid-cols-3 sm:gap-4 sm:p-10">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`relative text-center ${
                i > 0 ? "sm:border-l sm:border-dashed sm:border-[#222]/15" : ""
              }`}
            >
              <div className="absolute top-0 left-1/2 -z-10 h-14 w-14 -translate-x-1/2 rounded-full bg-[#db4927]/10 sm:h-16 sm:w-16" />
              <p className="font-[var(--font-nohemi)] text-4xl font-extrabold text-[#222] sm:text-5xl">
                <CountUp end={s.end} prefix={s.prefix ?? ""} suffix={s.suffix ?? ""} />
              </p>
              <p className="mt-2 text-sm text-[#444]">{s.label}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
