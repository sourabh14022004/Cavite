"use client";
import { EtheralShadow } from "@/components/ui/etheral-shadow";

export function FooterWithPaths() {
  return (
    <footer className="relative min-h-[280px] overflow-hidden border-t border-neutral-800 bg-black text-white">
      <div className="absolute inset-0 text-white z-0 opacity-50 pointer-events-none">
        <EtheralShadow
          color="rgba(128, 128, 128, 1)"
          animation={{ scale: 100, speed: 90 }}
          noise={{ opacity: 1, scale: 1.2 }}
          sizing="fill"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
          <div className="flex flex-col items-start justify-center lg:max-w-md">
            <h2 className="font-bitcount-grid-double text-5xl font-[150] tracking-tighter text-white sm:text-8xl">
              CAVITE
            </h2>
            <p className="mt-4 text-sm font-medium italic text-neutral-400">
              "Your Time Matters Here."
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-16">
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-200">
                Product
              </h3>
              <ul className="space-y-3">
                {["Features", "How it Works", "Waitlist"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-200">
                Use Cases
              </h3>
              <ul className="space-y-3">
                {["For Candidates", "For Companies"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-200">
                Company
              </h3>
              <ul className="space-y-3">
                {["About", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-800 pt-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="hidden lg:block"></div>
            <div className="flex items-center justify-center">
              <p className="text-sm text-neutral-500">
                © {new Date().getFullYear()} Cavite. All rights reserved.
              </p>
            </div>
            <div className="flex items-center justify-center gap-6 lg:justify-end">
              <a
                href="#"
                className="text-sm text-neutral-500 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-neutral-500 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
