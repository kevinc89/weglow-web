import type { Metadata } from "next";
import { nohemi, creato } from "@/fonts";
import { MetaPixel } from "@/components/MetaPixel";

export const metadata: Metadata = {
  title: "WeGlow — The Fitness App Built for Women",
  description:
    "Personalized workouts, nutrition, and coaching that adapt to your body. Try WeGlow free today.",
};

export default function TryNowLayout({ children }: LayoutProps<"/try-now">) {
  return (
    <div
      className={`${nohemi.variable} ${creato.variable} min-h-full w-full flex-1 bg-white font-[var(--font-creato)] text-[#222]`}
    >
      <MetaPixel />
      {children}
    </div>
  );
}
