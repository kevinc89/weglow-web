export function ChoiceCard({
  label,
  sublabel,
  emoji,
  selected,
  onClick,
}: {
  label: string;
  sublabel?: string;
  emoji?: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-4 rounded-2xl border-2 px-5 py-4 text-left transition-all ${
        selected
          ? "border-[#db4927] bg-[#db4927]/10 scale-[1.01]"
          : "border-[#222]/10 bg-white hover:border-[#db4927]/40"
      }`}
    >
      {emoji ? <span className="text-2xl">{emoji}</span> : null}
      <span className="flex-1">
        <span className="block font-[var(--font-creato)] font-medium text-[#222]">
          {label}
        </span>
        {sublabel ? (
          <span className="block text-sm text-[#444]">{sublabel}</span>
        ) : null}
      </span>
      <span
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${
          selected ? "border-[#db4927] bg-[#db4927]" : "border-[#222]/20"
        }`}
      >
        {selected ? (
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="animate-pop-in text-white"
          >
            <path
              d="M2.5 7L5.5 10L11.5 3.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : null}
      </span>
    </button>
  );
}
