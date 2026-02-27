import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ACCENT_INDIGO = "text-indigo-400";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen shrink-0 flex-col overflow-hidden snap-start [scroll-snap-stop:always] items-center justify-center">
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
          <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
            The Professional Network
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-neutral-400 sm:text-xl">
          for people in tech with robust work profiles at its core.
        </p>

        {/* CTA block */}
        <div className="mx-auto mt-10 flex max-w-sm flex-col items-center gap-4">
          <button
            type="button"
            className="group flex w-full items-center justify-center gap-3 rounded-xl bg-white px-6 py-3.5 text-base font-bold text-black shadow-xl shadow-white/10 transition-all hover:scale-105 hover:bg-neutral-100 hover:shadow-2xl hover:shadow-white/20"
          >
            <Image
              src="/google-icon.webp"
              alt=""
              width={24}
              height={24}
              className="h-6 w-6 shrink-0 object-contain"
              aria-hidden
            />
            Continue w/ Google
          </button>
          <span className="text-sm font-medium text-neutral-500">or</span>
          <Link
            href="#signup"
            className={`group flex items-center gap-2 text-base font-semibold transition-all hover:opacity-80 ${ACCENT_INDIGO}`}
          >
            Signup w/ Email
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <p className="text-center text-xs font-medium text-neutral-600">
            Don&apos;t miss out on your favourite username ;)
          </p>
        </div>
      </div>
    </section>
  );
}
