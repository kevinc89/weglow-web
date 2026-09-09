"use client";

import { useState } from "react";
import { PanelCard } from "./PanelCard";

export function LoginCard({
  onSignedIn,
}: {
  onSignedIn: (email: string) => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading">("idle");

  const canSubmit =
    /\S+@\S+\.\S+/.test(email) && password.length >= 6 && status === "idle";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setStatus("loading");
    setTimeout(() => onSignedIn(email.trim()), 600);
  };

  return (
    <PanelCard>
      <form onSubmit={handleSubmit} className="p-8">
        <h2 className="font-[var(--font-nohemi)] text-2xl font-extrabold text-[#222]">
          Sign in
        </h2>
        <p className="mt-2 text-sm text-[#444]">
          Use the same email and password you use in the WeGlow app.
        </p>

        <div className="mt-6 space-y-4">
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-[#222]">
              Email
            </span>
            <input
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-[#222]/15 bg-white px-4 py-3 text-[#222] outline-none focus:border-[#db4927]"
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-[#222]">
              Password
            </span>
            <input
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-[#222]/15 bg-white px-4 py-3 text-[#222] outline-none focus:border-[#db4927]"
            />
          </label>
        </div>

        <button
          type="submit"
          disabled={!canSubmit}
          className="mt-6 w-full rounded-full bg-[#db4927] px-6 py-3.5 font-[var(--font-nohemi)] text-base font-bold text-white shadow-lg shadow-[#db4927]/30 transition-transform hover:scale-[1.01] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none disabled:hover:scale-100"
        >
          {status === "loading" ? "Signing in…" : "Sign in"}
        </button>

        <p className="mt-4 text-center text-xs text-[#444]">
          Forgot your password? Reset it from Settings in the WeGlow app.
        </p>
        <p className="mt-6 border-t border-[#222]/10 pt-4 text-center text-xs text-[#444]">
          New to WeGlow?{" "}
          <a
            href="https://www.weglow.app/"
            className="font-semibold text-[#db4927] hover:underline"
          >
            Get the app
          </a>{" "}
          to start your membership.
        </p>
      </form>
    </PanelCard>
  );
}
