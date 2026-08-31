import Stripe from "stripe";
import { Logo } from "@/components/Logo";
import { getInboxUrl } from "@/lib/webmail";
import { PurchaseCompletedTracker } from "./PurchaseCompletedTracker";

type CheckoutSessionDetails = {
  email: string | null;
  value: number | null;
  currency: string | null;
};

async function getCheckoutSessionDetails(
  sessionId: string | undefined,
): Promise<CheckoutSessionDetails> {
  const empty: CheckoutSessionDetails = { email: null, value: null, currency: null };
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!sessionId || !secretKey) return empty;

  try {
    const stripe = new Stripe(secretKey);
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    return {
      email: session.customer_details?.email ?? session.customer_email ?? null,
      value: session.amount_total != null ? session.amount_total / 100 : null,
      currency: session.currency,
    };
  } catch (error) {
    console.error("Failed to retrieve checkout session:", error);
    return empty;
  }
}

export default async function FunnelSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { session_id: sessionId } = await searchParams;
  const { email, value, currency } = await getCheckoutSessionDetails(
    typeof sessionId === "string" ? sessionId : undefined,
  );
  const inboxUrl = getInboxUrl(email);
  const isWebLink = inboxUrl.startsWith("http");

  return (
    <div className="mx-auto flex min-h-[100dvh] max-w-lg flex-col items-center justify-center px-6 py-16 text-center">
      <PurchaseCompletedTracker value={value} currency={currency} />
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
        Welcome to WeGlow. We just emailed{email ? ` ${email}` : " you"} a magic
        link — tap it to activate your subscription.
      </p>
      <a
        href={inboxUrl}
        target={isWebLink ? "_blank" : undefined}
        rel={isWebLink ? "noreferrer" : undefined}
        className="mt-8 rounded-full bg-[#db4927] px-8 py-4 font-[var(--font-nohemi)] font-bold text-white shadow-lg shadow-[#db4927]/30"
      >
        Activate Subscription
      </a>
    </div>
  );
}
