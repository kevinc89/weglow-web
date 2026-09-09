import { PanelCard } from "./PanelCard";
import { formatPrice } from "../format";
import type { PlanTier } from "../data";
import type { SubscriptionStatus } from "../ManageApp";

const STATUS_LABEL: Record<SubscriptionStatus, string> = {
  active: "Active",
  paused: "Paused",
  canceling: "Cancels soon",
};

const STATUS_CLASS: Record<SubscriptionStatus, string> = {
  active: "bg-emerald-100 text-emerald-700",
  paused: "bg-blue-100 text-blue-700",
  canceling: "bg-amber-100 text-amber-700",
};

export function DashboardCard({
  name,
  email,
  plan,
  planPriceLabel,
  nextPaymentAmount,
  status,
  started,
  renews,
  paymentBrand,
  paymentLast4,
  paymentExpiry,
  onChangePlan,
  onPauseOrResume,
  onCancelOrReactivate,
  onUpdatePayment,
  onEditDetails,
}: {
  name: string;
  email: string;
  plan: PlanTier;
  planPriceLabel?: string;
  nextPaymentAmount: number;
  status: SubscriptionStatus;
  started: string;
  renews: string;
  paymentBrand: string;
  paymentLast4: string;
  paymentExpiry: string;
  onChangePlan: () => void;
  onPauseOrResume: () => void;
  onCancelOrReactivate: () => void;
  onUpdatePayment: () => void;
  onEditDetails: () => void;
}) {
  return (
    <PanelCard>
      <div className="p-8">
        <p className="text-xs font-semibold tracking-wide text-[#444] uppercase">
          Current plan
        </p>
        <div className="mt-2 flex items-center gap-2">
          <h2 className="font-[var(--font-nohemi)] text-xl font-extrabold text-[#222]">
            WEGLOW {plan.label} Plan
          </h2>
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${STATUS_CLASS[status]}`}
          >
            {STATUS_LABEL[status]}
          </span>
        </div>
        <p className="mt-1 font-[var(--font-nohemi)] text-2xl font-extrabold text-[#222]">
          {planPriceLabel ?? formatPrice(plan.price, plan.interval)}
        </p>

        <div className="mt-5 divide-y divide-[#222]/10 rounded-2xl bg-[#f8f8f8]">
          <Row label="Started" value={started} />
          <Row
            label={status === "canceling" ? "Access until" : "Renews"}
            value={renews}
          />
          {status === "active" ? (
            <Row label="Next payment" value={`$${nextPaymentAmount.toFixed(2)}`} />
          ) : null}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-xs font-semibold tracking-wide text-[#444] uppercase">
            Payment method
          </p>
          <button
            type="button"
            onClick={onUpdatePayment}
            className="text-sm font-semibold text-[#db4927] hover:underline"
          >
            Update
          </button>
        </div>
        <div className="mt-2 flex items-center justify-between rounded-2xl bg-[#f8f8f8] px-4 py-3">
          <span className="flex items-center gap-2 text-sm text-[#222]">
            <span className="rounded bg-[#1a1f71] px-2 py-0.5 text-xs font-bold tracking-wide text-white">
              {paymentBrand.toUpperCase()}
            </span>
            •••• {paymentLast4}
          </span>
          <span className="text-sm text-[#444]">Expires {paymentExpiry}</span>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-xs font-semibold tracking-wide text-[#444] uppercase">
            Your details
          </p>
          <button
            type="button"
            onClick={onEditDetails}
            className="text-sm font-semibold text-[#db4927] hover:underline"
          >
            Edit
          </button>
        </div>
        <div className="mt-2 divide-y divide-[#222]/10 rounded-2xl bg-[#f8f8f8]">
          <Row label="Name" value={name} />
          <Row label="Email" value={email} />
        </div>

        <div className="mt-8 space-y-3">
          {status !== "canceling" ? (
            <button
              type="button"
              onClick={onChangePlan}
              className="w-full rounded-full bg-[#db4927] px-6 py-3.5 font-[var(--font-nohemi)] text-base font-bold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.01] active:scale-[0.98]"
            >
              Change plan
            </button>
          ) : null}

          {status === "canceling" ? (
            <button
              type="button"
              onClick={onCancelOrReactivate}
              className="w-full rounded-full bg-[#db4927] px-6 py-3.5 font-[var(--font-nohemi)] text-base font-bold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.01] active:scale-[0.98]"
            >
              Reactivate my membership
            </button>
          ) : (
            <button
              type="button"
              onClick={onPauseOrResume}
              className="w-full rounded-full border-2 border-[#222]/15 px-6 py-3.5 font-[var(--font-nohemi)] text-base font-bold text-[#222] transition-colors hover:border-[#222]/30"
            >
              {status === "paused" ? "Resume membership" : "Pause subscription"}
            </button>
          )}

          {status === "active" ? (
            <button
              type="button"
              onClick={onCancelOrReactivate}
              className="w-full text-center text-sm text-[#444] hover:text-[#222] hover:underline"
            >
              Cancel subscription
            </button>
          ) : null}
        </div>
      </div>
    </PanelCard>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 text-sm">
      <span className="text-[#444]">{label}</span>
      <span className="font-medium text-[#222]">{value}</span>
    </div>
  );
}
