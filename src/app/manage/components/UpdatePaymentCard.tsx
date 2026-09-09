"use client";

import { useState } from "react";
import { BackLink, PanelCard } from "./PanelCard";

export function UpdatePaymentCard({
  currentBrand,
  currentLast4,
  name,
  onBack,
  onSave,
}: {
  currentBrand: string;
  currentLast4: string;
  name: string;
  onBack: () => void;
  onSave: () => void;
}) {
  const [cardholder, setCardholder] = useState(name);
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [zip, setZip] = useState("");
  const [status, setStatus] = useState<"idle" | "saving">("idle");

  const canSave =
    cardholder.trim().length > 0 &&
    cardNumber.replace(/\s/g, "").length >= 12 &&
    expiry.length >= 4 &&
    cvc.length >= 3 &&
    zip.length >= 3 &&
    status === "idle";

  return (
    <PanelCard>
      <BackLink onClick={onBack} />

      <div className="p-8 pt-4">
        <h2 className="font-[var(--font-nohemi)] text-2xl font-extrabold text-[#222]">
          Update your payment method
        </h2>
        <p className="mt-2 text-sm text-[#444]">
          Your details are encrypted and only ever used for your WEGLOW
          membership. Nothing else about your plan changes.
        </p>

        <div className="mt-5 flex items-center gap-2 rounded-xl bg-[#f8f8f8] px-4 py-3 text-sm text-[#222]">
          <span className="rounded bg-[#1a1f71] px-2 py-0.5 text-xs font-bold tracking-wide text-white">
            {currentBrand.toUpperCase()}
          </span>
          Current card •••• {currentLast4}
        </div>

        <div className="mt-4 space-y-3">
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-[#222]">
              Cardholder name
            </span>
            <input
              value={cardholder}
              onChange={(e) => setCardholder(e.target.value)}
              placeholder="Full name on card"
              className="w-full rounded-xl border border-[#222]/15 bg-white px-4 py-3 text-[#222] outline-none focus:border-[#db4927]"
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-[#222]">
              Card number
            </span>
            <input
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="1234 5678 9012 3456"
              inputMode="numeric"
              className="w-full rounded-xl border border-[#222]/15 bg-white px-4 py-3 text-[#222] outline-none focus:border-[#db4927]"
            />
          </label>

          <div className="grid grid-cols-3 gap-3">
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-[#222]">
                Expiry
              </span>
              <input
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                placeholder="MM / YY"
                className="w-full rounded-xl border border-[#222]/15 bg-white px-3 py-3 text-[#222] outline-none focus:border-[#db4927]"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-[#222]">
                CVC
              </span>
              <input
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                placeholder="123"
                inputMode="numeric"
                className="w-full rounded-xl border border-[#222]/15 bg-white px-3 py-3 text-[#222] outline-none focus:border-[#db4927]"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-[#222]">
                ZIP
              </span>
              <input
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                placeholder="94107"
                inputMode="numeric"
                className="w-full rounded-xl border border-[#222]/15 bg-white px-3 py-3 text-[#222] outline-none focus:border-[#db4927]"
              />
            </label>
          </div>
        </div>

        <button
          type="button"
          disabled={!canSave}
          onClick={() => {
            setStatus("saving");
            setTimeout(onSave, 500);
          }}
          className="mt-6 w-full rounded-full bg-[#db4927] px-6 py-3.5 font-[var(--font-nohemi)] text-base font-bold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.01] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none disabled:hover:scale-100"
        >
          {status === "saving" ? "Saving…" : "Save card"}
        </button>
        <button
          type="button"
          onClick={onBack}
          className="mt-3 w-full text-center text-sm text-[#444] hover:text-[#222]"
        >
          Cancel
        </button>
      </div>
    </PanelCard>
  );
}
