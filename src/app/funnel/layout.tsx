import type { Metadata } from "next";
import { nohemi, creato } from "@/fonts";
import { MetaPixel } from "@/components/MetaPixel";

export const metadata: Metadata = {
  title: "Take the WeGlow Quiz — Get Your Personalized Fitness Plan",
  description:
    "Answer a few questions and get a personalized WeGlow workout & nutrition plan built for women.",
};

export default function FunnelLayout({ children }: LayoutProps<"/funnel">) {
  return (
    <div
      className={`${nohemi.variable} ${creato.variable} min-h-full w-full flex-1 bg-[#fde8e5] font-[var(--font-creato)] text-[#222]`}
    >
      <MetaPixel />
      {children}
    </div>
  );
}
