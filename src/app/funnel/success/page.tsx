import Link from "next/link";
import { Logo } from "../components/Logo";
import { PurchaseCompletedTracker } from "./PurchaseCompletedTracker";

export default function FunnelSuccessPage() {
  return (
    <div className="mx-auto flex min-h-[100dvh] max-w-lg flex-col items-center justify-center px-6 py-16 text-center">
      <PurchaseCompletedTracker />
      <Logo className="mb-8" />
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#db4927]/10">
        <svg width="32" height="32" viewBox="0 0 14 14" fill="none" className="text-[#db4927]">
          <path
            d="M2.5 7L5.5 10L11.5 3.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h1 className="mt-6 font-[var(--font-nohemi)] text-3xl font-extrabold text-[#222]">
        You&apos;re in!
      </h1>
      <p className="mt-3 max-w-sm text-[#444]">
        Welcome to WeGlow. Check your email for your personalized plan and
        instructions to download the app.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-[#db4927] px-8 py-4 font-[var(--font-nohemi)] font-bold text-white shadow-lg shadow-[#db4927]/30"
      >
        Back to WeGlow
      </Link>
    </div>
  );
}
