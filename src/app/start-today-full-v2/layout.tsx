import type { Metadata } from "next";
import { nohemi, creato } from "@/fonts";
import { MetaPixel } from "@/components/MetaPixel";
import { CaptureAttribution } from "@/components/CaptureAttribution";

export const metadata: Metadata = {
  title: "WEGLOW — Claim Your Offer & Start Today",
  description:
    "Personalized workouts, nutrition, and coaching that adapt to your body. Your discount is reserved — claim it and start today.",
};

export default function StartTodayFullV2Layout({ children }: LayoutProps<"/start-today-full-v2">) {
  return (
    <div
      className={`${nohemi.variable} ${creato.variable} min-h-full w-full flex-1 bg-white font-[var(--font-creato)] text-[#222]`}
    >
      <MetaPixel />
      <CaptureAttribution />
      {children}
    </div>
  );
}
