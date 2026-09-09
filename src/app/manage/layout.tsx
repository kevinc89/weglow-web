import type { Metadata } from "next";
import { nohemi, creato, fraunces } from "@/fonts";

export const metadata: Metadata = {
  title: "Manage Your Membership — WEGLOW",
  description:
    "Sign in to manage your WEGLOW membership — switch plans, pause, update billing, or cancel anytime.",
  robots: { index: false, follow: false },
};

export default function ManageLayout({ children }: LayoutProps<"/manage">) {
  return (
    <div
      className={`${nohemi.variable} ${creato.variable} ${fraunces.variable} min-h-full w-full flex-1 font-[var(--font-creato)] text-[#222]`}
    >
      {children}
    </div>
  );
}
