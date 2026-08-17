import Link from "next/link";
import { Logo } from "@/components/Logo";

export function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#222]/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />
        <Link
          href="/funnel"
          className="rounded-full bg-[#db4927] px-5 py-2.5 font-[var(--font-nohemi)] text-sm font-bold text-white transition-transform hover:scale-[1.03]"
        >
          Try Now Free
        </Link>
      </div>
    </header>
  );
}
