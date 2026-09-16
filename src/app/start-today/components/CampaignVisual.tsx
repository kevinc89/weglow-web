import Image from "next/image";

export function CampaignVisual() {
  return (
    <div className="relative hidden min-h-dvh overflow-hidden bg-[#fde8e5] lg:flex lg:flex-col lg:items-center lg:justify-center">
      <div className="relative z-10 flex flex-col items-center px-8 text-center">
        <p className="font-[var(--font-nohemi)] text-sm font-bold uppercase tracking-[0.35em] text-white/90">
          Invest in your body
        </p>
        <h2 className="mt-4 font-[var(--font-nohemi)] text-6xl font-extrabold leading-[0.95] tracking-tight text-white xl:text-7xl">
          MID-YEAR
          <br />
          SALE
        </h2>
      </div>

      <div className="relative z-10 mt-8 w-full max-w-sm overflow-hidden rounded-t-[3rem] shadow-2xl">
        <Image
          src="/try-now/photos/mirror-selfie.jpg"
          alt="A confident WEGLOW member finishing a strength workout"
          width={800}
          height={700}
          className="h-[420px] w-full object-cover"
          style={{ objectPosition: "50% 15%" }}
        />
      </div>

      <p className="relative z-10 mt-6 font-[var(--font-nohemi)] text-sm font-bold uppercase tracking-[0.35em] text-white/80">
        Ends soon
      </p>
    </div>
  );
}
