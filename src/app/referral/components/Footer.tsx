import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="border-t border-[#222]/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <Logo />
        <p className="max-w-md text-center text-xs text-[#444] sm:text-right">
          Referral discount valid for new WEGLOW members only. Offer applies
          to your first subscription and auto-renews at the discounted price
          unless cancelled.
        </p>
      </div>
      <p className="mt-4 text-center text-sm text-[#444]">
        © {new Date().getFullYear()} WEGLOW. All rights reserved.
      </p>
    </footer>
  );
}
