import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="border-t border-[#222]/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <Logo />
        <p className="text-sm text-[#444]">
          © {new Date().getFullYear()} WEGLOW. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
