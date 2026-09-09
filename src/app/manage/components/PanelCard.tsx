export function PanelCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-xl shadow-[#222]/5 animate-fade-in-up ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

export function BackLink({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-1 px-8 pt-8 text-sm font-medium text-[#444] transition-colors hover:text-[#222]"
    >
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
        <path
          d="M11 4L5 9L11 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Back
    </button>
  );
}

export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={className}
    >
      <path
        d="M2.5 7L5.5 10L11.5 3.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StepDots({ step, total }: { step: number; total: number }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`h-1.5 w-1.5 rounded-full ${
            i < step ? "bg-[#db4927]" : "bg-[#222]/15"
          }`}
        />
      ))}
    </div>
  );
}
