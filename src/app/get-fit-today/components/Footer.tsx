import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="border-t border-[#2E1B12]/10 bg-[#FBF1E7] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <Logo />
        <p className="text-sm text-[#5b4a3f]">
          © {new Date().getFullYear()} WEGLOW. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
