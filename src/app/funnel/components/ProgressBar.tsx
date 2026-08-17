export function ProgressBar({ progress }: { progress: number }) {
  const pct = Math.max(0, Math.min(1, progress)) * 100;
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#222]/10">
      <div
        className="h-full rounded-full bg-[#db4927] transition-all duration-300 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
