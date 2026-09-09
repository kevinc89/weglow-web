"use client";

import { useState } from "react";
import { BackLink, PanelCard } from "./PanelCard";

export function EditDetailsCard({
  name: initialName,
  email: initialEmail,
  onBack,
  onSave,
}: {
  name: string;
  email: string;
  onBack: () => void;
  onSave: (name: string, email: string) => void;
}) {
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [changingPassword, setChangingPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validEmail = /\S+@\S+\.\S+/.test(email);
  const passwordOk =
    !changingPassword ||
    (newPassword.length >= 8 && newPassword === confirmPassword);
  const canSave = name.trim().length > 0 && validEmail && passwordOk;

  return (
    <PanelCard>
      <BackLink onClick={onBack} />

      <div className="p-8 pt-4">
        <h2 className="font-[var(--font-nohemi)] text-2xl font-extrabold text-[#222]">
          Your details
        </h2>
        <p className="mt-2 text-sm text-[#444]">
          Keep your name and email current so we can reach you and you never
          miss anything from WeGlow.
        </p>

        <div className="mt-5 space-y-3">
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-[#222]">
              Full name
            </span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-[#222]/15 bg-white px-4 py-3 text-[#222] outline-none focus:border-[#db4927]"
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-[#222]">
              Email
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-[#222]/15 bg-white px-4 py-3 text-[#222] outline-none focus:border-[#db4927]"
            />
          </label>
        </div>

        {changingPassword ? (
          <div className="mt-3 space-y-3 rounded-xl border border-[#222]/10 p-4">
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-[#222]">
                New password
              </span>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="At least 8 characters"
                className="w-full rounded-xl border border-[#222]/15 bg-white px-4 py-3 text-[#222] outline-none focus:border-[#db4927]"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-[#222]">
                Confirm new password
              </span>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full rounded-xl border border-[#222]/15 bg-white px-4 py-3 text-[#222] outline-none focus:border-[#db4927]"
              />
            </label>
            <button
              type="button"
              onClick={() => {
                setChangingPassword(false);
                setNewPassword("");
                setConfirmPassword("");
              }}
              className="text-xs font-medium text-[#444] hover:text-[#222]"
            >
              Cancel password change
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setChangingPassword(true)}
            className="mt-3 text-sm font-semibold text-[#db4927] hover:underline"
          >
            Change password
          </button>
        )}

        <button
          type="button"
          disabled={!canSave}
          onClick={() => onSave(name.trim(), email.trim())}
          className="mt-6 w-full rounded-full bg-[#db4927] px-6 py-3.5 font-[var(--font-nohemi)] text-base font-bold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.01] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none disabled:hover:scale-100"
        >
          Save changes
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
