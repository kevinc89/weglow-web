export function Toast({ message }: { message: string | null }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 animate-pop-in rounded-full bg-[#222] px-5 py-3 text-sm font-medium text-white shadow-lg sm:left-6 sm:translate-x-0">
      {message}
    </div>
  );
}
