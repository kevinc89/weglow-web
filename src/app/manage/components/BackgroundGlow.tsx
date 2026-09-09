export function BackgroundGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#fde8e5]"
    >
      <div className="absolute -top-40 -left-40 h-[26rem] w-[26rem] rounded-full bg-[#db4927]/20 blur-3xl" />
      <div className="absolute top-1/3 -right-32 h-[30rem] w-[30rem] rounded-full bg-[#2d62ff]/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 h-[24rem] w-[24rem] rounded-full bg-[#dd23bb]/10 blur-3xl" />
      <div className="absolute inset-0 bg-white/40" />
    </div>
  );
}
