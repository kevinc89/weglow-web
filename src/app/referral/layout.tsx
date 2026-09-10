import type { Metadata } from "next";
import { nohemi, creato } from "@/fonts";
import { MetaPixel } from "@/components/MetaPixel";
import { CaptureAttribution } from "@/components/CaptureAttribution";

export const metadata: Metadata = {
  title: "Claim Your WEGLOW Referral Discount",
  description:
    "A friend sent you WEGLOW. Start your 3-day free trial, then get the Annual Plan for $69.99/year instead of $99.",
};

export default function ReferralLayout({ children }: LayoutProps<"/referral">) {
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
