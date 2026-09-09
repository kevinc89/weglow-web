"use client";

import { useEffect, useRef, useState } from "react";
import { track } from "@/lib/analytics";
import type { PlanPricing } from "@/lib/planPricing";
import { BackgroundGlow } from "./components/BackgroundGlow";
import { Header } from "./components/Header";
import { MarketingPanel, type MarketingGroup } from "./components/MarketingPanel";
import { Toast } from "./components/Toast";
import { LoginCard } from "./components/LoginCard";
import { DashboardCard } from "./components/DashboardCard";
import { ChangePlanCard } from "./components/ChangePlanCard";
import { PauseCard } from "./components/PauseCard";
import { CancelReasonCard } from "./components/CancelReasonCard";
import { CancelOfferCard, type OfferKind } from "./components/CancelOfferCard";
import { CancelConfirmCard } from "./components/CancelConfirmCard";
import { CancelDoneCard } from "./components/CancelDoneCard";
import { UpdatePaymentCard } from "./components/UpdatePaymentCard";
import { EditDetailsCard } from "./components/EditDetailsCard";
import {
  currentPlanId,
  mockAccount,
  mockPaymentMethod,
  planTiers,
  RETENTION_DISCOUNT_PERCENT,
  subscriptionDates,
  type CancelReason,
  type PlanTier,
} from "./data";
import { formatAmount } from "./format";

export type SubscriptionStatus = "active" | "paused" | "canceling";

type View =
  | "login"
  | "dashboard"
  | "change-plan"
  | "pause"
  | "cancel-reason"
  | "cancel-offer"
  | "cancel-confirm"
  | "cancel-done"
  | "update-payment"
  | "edit-details";

const MARKETING_GROUP: Record<View, MarketingGroup> = {
  login: "login",
  dashboard: "steady",
  "change-plan": "steady",
  "update-payment": "steady",
  "edit-details": "steady",
  pause: "retention",
  "cancel-reason": "retention",
  "cancel-offer": "retention",
  "cancel-confirm": "retention",
  "cancel-done": "retention",
};

export function ManageApp({ pricing }: { pricing: PlanPricing | null }) {
  const [authed, setAuthed] = useState(false);
  const [view, setView] = useState<View>("login");

  const [name, setName] = useState(mockAccount.name);
  const [email, setEmail] = useState(mockAccount.email);
  const [payment, setPayment] = useState(mockPaymentMethod);
  const [planId, setPlanId] = useState<PlanTier["id"]>(currentPlanId);
  const [priceOverride, setPriceOverride] = useState<number | null>(null);
  const [status, setStatus] = useState<SubscriptionStatus>("active");
  const [cancelReasonId, setCancelReasonId] = useState<
    CancelReason["id"] | null
  >(null);

  const [toast, setToast] = useState<string | null>(null);
  const toastTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    track("Manage Screen Viewed", { View: view });
  }, [view]);

  function showToast(message: string) {
    setToast(message);
    if (toastTimeout.current) clearTimeout(toastTimeout.current);
    toastTimeout.current = setTimeout(() => setToast(null), 2800);
  }

  // The real annual price/coupon from Stripe (lib/planPricing) when available,
  // so the retention offer reflects what checkout actually charges.
  const annualTier: PlanTier = pricing
    ? {
        id: "annual",
        label: "Annual",
        price: pricing.discountedAmount,
        interval: pricing.interval as PlanTier["interval"],
        perWeek: `about $${formatAmount(pricing.discountedAmount / 52)} a week`,
        saveLabel: pricing.discountLabel,
      }
    : planTiers.find((t) => t.id === "annual")!;

  const currentTier =
    planTiers.find((t) => t.id === planId) ?? planTiers[0];
  const nextPaymentAmount = priceOverride ?? currentTier.price;

  // Only offer switching to Annual when the member isn't already on it —
  // otherwise (already on the top tier) offer a discount on that same plan.
  const offerKind: OfferKind =
    cancelReasonId === "expensive"
      ? currentTier.id === "annual"
        ? "discount"
        : "switch"
      : "pause";
  const retentionDiscountPrice =
    currentTier.price * (1 - RETENTION_DISCOUNT_PERCENT / 100);

  function goDashboard() {
    setView("dashboard");
  }

  return (
    <>
      <BackgroundGlow />
      <div className="relative flex min-h-dvh flex-col">
        <Header
          authed={authed}
          onSignOut={() => {
            track("Manage Signed Out");
            setAuthed(false);
            setView("login");
          }}
        />

        <main className="mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 items-start gap-12 px-6 py-10 sm:px-10 lg:grid-cols-2 lg:items-center lg:py-16">
          <MarketingPanel group={MARKETING_GROUP[view]} />

          <div className="flex w-full justify-center lg:justify-end">
            {view === "login" ? (
              <LoginCard
                onSignedIn={(loginEmail) => {
                  setEmail(loginEmail || mockAccount.email);
                  setAuthed(true);
                  setView("dashboard");
                  track("Manage Signed In");
                  showToast("Welcome back — your membership is active");
                }}
              />
            ) : null}

            {view === "dashboard" ? (
              <DashboardCard
                name={name}
                email={email}
                plan={currentTier}
                nextPaymentAmount={nextPaymentAmount}
                status={status}
                started={subscriptionDates.started}
                renews={subscriptionDates.renews}
                paymentBrand={payment.brand}
                paymentLast4={payment.last4}
                paymentExpiry={payment.expiry}
                onChangePlan={() => setView("change-plan")}
                onUpdatePayment={() => setView("update-payment")}
                onEditDetails={() => setView("edit-details")}
                onPauseOrResume={() => {
                  if (status === "paused") {
                    setStatus("active");
                    showToast("Welcome back — your membership is active");
                    track("Manage Membership Resumed");
                  } else {
                    setView("pause");
                  }
                }}
                onCancelOrReactivate={() => {
                  if (status === "canceling") {
                    setStatus("active");
                    showToast("Welcome back — your membership is active");
                    track("Manage Membership Reactivated");
                  } else {
                    setCancelReasonId(null);
                    setView("cancel-reason");
                  }
                }}
              />
            ) : null}

            {view === "change-plan" ? (
              <ChangePlanCard
                tiers={planTiers}
                currentTierId={planId}
                renews={subscriptionDates.renews}
                onBack={goDashboard}
                onConfirmSwitch={(tierId) => {
                  setPlanId(tierId);
                  setPriceOverride(null);
                  goDashboard();
                  track("Manage Plan Switched", { "Plan Id": tierId });
                  showToast("Your plan will switch on your next billing date");
                }}
              />
            ) : null}

            {view === "update-payment" ? (
              <UpdatePaymentCard
                currentBrand={payment.brand}
                currentLast4={payment.last4}
                name={name}
                onBack={goDashboard}
                onSave={() => {
                  setPayment((p) => ({ ...p, last4: "4242" }));
                  goDashboard();
                  track("Manage Payment Updated");
                  showToast("Payment method updated");
                }}
              />
            ) : null}

            {view === "edit-details" ? (
              <EditDetailsCard
                name={name}
                email={email}
                onBack={goDashboard}
                onSave={(newName, newEmail) => {
                  setName(newName);
                  setEmail(newEmail);
                  goDashboard();
                  track("Manage Details Updated");
                  showToast("Your details have been saved");
                }}
              />
            ) : null}

            {view === "pause" ? (
              <PauseCard
                resumeDate={subscriptionDates.renews}
                onBack={goDashboard}
                onConfirmPause={() => {
                  setStatus("paused");
                  goDashboard();
                  track("Manage Membership Paused");
                  showToast("Your membership is paused for one month");
                }}
              />
            ) : null}

            {view === "cancel-reason" ? (
              <CancelReasonCard
                onBack={goDashboard}
                onStay={goDashboard}
                onContinue={(reasonId, feedback) => {
                  setCancelReasonId(reasonId);
                  setView("cancel-offer");
                  track("Manage Cancel Reason Selected", {
                    Reason: reasonId,
                    Feedback: feedback || undefined,
                  });
                }}
              />
            ) : null}

            {view === "cancel-offer" && cancelReasonId ? (
              <CancelOfferCard
                offerKind={offerKind}
                currentTier={currentTier}
                switchTier={annualTier}
                discountedPrice={retentionDiscountPrice}
                discountPercent={RETENTION_DISCOUNT_PERCENT}
                onBack={() => setView("cancel-reason")}
                onAcceptSwitch={() => {
                  setPlanId("annual");
                  setPriceOverride(null);
                  goDashboard();
                  track("Manage Cancel Offer Accepted", { Offer: "switch_plan" });
                  showToast("You're all set — welcome to the Annual plan");
                }}
                onAcceptDiscount={() => {
                  setPriceOverride(retentionDiscountPrice);
                  goDashboard();
                  track("Manage Cancel Offer Accepted", { Offer: "discount" });
                  showToast("Your discount is applied to your next renewal");
                }}
                onPause={() => setView("pause")}
                onContinueToCancel={() => {
                  track("Manage Cancel Offer Declined");
                  setView("cancel-confirm");
                }}
              />
            ) : null}

            {view === "cancel-confirm" ? (
              <CancelConfirmCard
                plan={currentTier}
                renews={subscriptionDates.renews}
                onBack={() => setView("cancel-offer")}
                onKeepSubscription={() => {
                  goDashboard();
                  showToast("Glad you're staying — your membership is active");
                }}
                onConfirm={(deleteData) => {
                  setStatus("canceling");
                  setView("cancel-done");
                  track("Manage Cancel Confirmed", {
                    Reason: cancelReasonId,
                    "Delete Data": deleteData,
                  });
                }}
              />
            ) : null}

            {view === "cancel-done" ? (
              <CancelDoneCard
                renews={subscriptionDates.renews}
                onKeepSubscription={() => {
                  setStatus("active");
                  goDashboard();
                  track("Manage Membership Reactivated");
                  showToast("Welcome back — your membership is active");
                }}
                onDone={goDashboard}
              />
            ) : null}
          </div>
        </main>
      </div>

      <Toast message={toast} />
    </>
  );
}
