import type { Metadata } from "next";
import localFont from "next/font/local";

const nohemi = localFont({
  src: [
    { path: "./fonts/Nohemi-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/Nohemi-ExtraBold.otf", weight: "700", style: "normal" },
    { path: "./fonts/Nohemi-Black.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-nohemi",
  display: "swap",
});

const creato = localFont({
  src: [
    { path: "./fonts/CreatoDisplay-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/CreatoDisplay-Medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/CreatoDisplay-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-creato",
  display: "swap",
});

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
      {children}
    </div>
  );
}
