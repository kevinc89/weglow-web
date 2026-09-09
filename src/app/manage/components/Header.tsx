import { Logo } from "@/components/Logo";

export function Header({
  authed,
  onSignOut,
}: {
  authed: boolean;
  onSignOut: () => void;
}) {
  return (
    <header className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-10">
      <a href="https://www.weglow.app/" className="shrink-0">
        <Logo />
      </a>

      <nav className="hidden items-center gap-8 text-sm text-[#444] sm:flex">
        <a
          href="https://www.weglow.app/"
          className="transition-colors hover:text-[#222]"
        >
          weglow.app
        </a>
        <span className="font-semibold text-[#222]">Manage Membership</span>
        <a
          href="mailto:support@weglow.app"
          className="transition-colors hover:text-[#222]"
        >
          Support
        </a>
      </nav>

      {authed ? (
        <button
          type="button"
          onClick={onSignOut}
          className="text-sm font-medium text-[#444] transition-colors hover:text-[#222]"
        >
          Sign out
        </button>
      ) : (
        <a
          href="mailto:support@weglow.app"
          className="text-sm font-medium text-[#444] transition-colors hover:text-[#222] sm:hidden"
        >
          Support
        </a>
      )}
    </header>
  );
}
