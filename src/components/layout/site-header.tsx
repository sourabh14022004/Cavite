import Link from "next/link";

const NAV_LINKS = [
  { label: "for Individuals", href: "#" },
  { label: "Recruiters", href: "#" },
  { label: "Find Jobs", href: "#" },
];

export function SiteHeader() {
  return (
    <header className="absolute top-0 z-50 w-full shrink-0 border-b border-white/[0.08] bg-black/60 shadow-[0_1px_0_0_rgba(255,255,255,0.05)_inset] backdrop-blur-xl supports-[backdrop-filter]:bg-neutral-950/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-10 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bitcount-single text-3xl font-bold tracking-tight text-white">
            cavite
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link, i) => (
            <span key={link.label} className="flex items-center">
              <Link
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-neutral-400 hover:text-white"
              >
                {link.label}
              </Link>
              {i < NAV_LINKS.length - 1 && (
                <span className="h-4 w-px bg-neutral-700" aria-hidden />
              )}
            </span>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#login"
            className="rounded-lg border border-neutral-600 px-4 py-2 text-sm font-medium text-neutral-200 hover:bg-neutral-800 hover:text-white"
          >
            Log in
          </Link>
          <Link
            href="#join"
            className="rounded-lg px-4 py-2 text-sm font-medium transition-colors bg-indigo-500 hover:bg-indigo-600 text-white"
          >
            Join Cavite
          </Link>
        </div>
      </div>
    </header>
  );
}
