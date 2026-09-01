import type { Metadata } from "next";
import { fraunces, creato } from "@/fonts";
import { MetaPixel } from "@/components/MetaPixel";
import { CaptureAttribution } from "@/components/CaptureAttribution";

export const metadata: Metadata = {
  title: "WEGLOW — Write Your Strongest Story",
  description:
    "Personalized workouts, nutrition, and coaching that adapt to your body. Get started with WEGLOW today.",
};

export default function GetFitTodayLayout({ children }: LayoutProps<"/get-fit-today">) {
  return (
    <div
      className={`${fraunces.variable} ${creato.variable} min-h-full w-full flex-1 bg-[#FBF1E7] font-[var(--font-creato)] text-[#2E1B12]`}
    >
      <MetaPixel />
      <CaptureAttribution />
      {children}
    </div>
  );
}
