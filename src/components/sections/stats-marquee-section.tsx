"use client";

import { motion } from "framer-motion";
import { Counter } from "@/components/ui/animated-counter";

const PROFILE_CARDS = [
  {
    name: "Alex Chen",
    role: "Senior Engineer at Loom",
    company: "Loom",
    initial: "AC",
    color: "bg-violet-500",
  },
  {
    name: "Jordan Lee",
    role: "Product Lead at Postman",
    company: "Postman",
    initial: "JL",
    color: "bg-orange-500",
  },
  {
    name: "Sam Rivera",
    role: "Design Director at ThoughtWorks",
    company: "TW",
    initial: "SR",
    color: "bg-teal-500",
  },
  {
    name: "Morgan Kim",
    role: "Growth at HubSpot",
    company: "HubSpot",
    initial: "MK",
    color: "bg-amber-500",
  },
  {
    name: "Riley Park",
    role: "Engineer at Dropbox",
    company: "Dropbox",
    initial: "RP",
    color: "bg-blue-500",
  },
  {
    name: "Casey Jones",
    role: "Payments at Razorpay",
    company: "Razorpay",
    initial: "CJ",
    color: "bg-rose-500",
  },
];

export function StatsMarqueeSection() {
  return (
    <section className="relative flex min-h-screen shrink-0 flex-col overflow-hidden snap-start [scroll-snap-stop:always] justify-center pb-16 pt-24 sm:pt-32">
      <div className="relative z-10 w-full flex-1 flex flex-col justify-center">
        {/* 14 days — animated counter */}
        <section className="mx-auto mt-16 w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-8 py-12 text-center backdrop-blur-3xl sm:px-12 sm:py-16">
            {/* Glow effect behind */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-[100px]" />

            <div className="flex flex-col items-center justify-center gap-6">
              <span className="text-lg font-medium text-neutral-400 sm:text-xl">
                Every hiring process concludes within
              </span>

              <div className="flex items-baseline justify-center gap-2">
                <Counter
                  start={0}
                  end={14}
                  duration={2}
                  className="text-8xl font-extrabold tracking-tighter text-white sm:text-9xl leading-[0.8]"
                  fontSize={128}
                />
                <span className="text-3xl font-bold text-white/50 sm:text-4xl">
                  days
                </span>
              </div>

              <div className="w-full max-w-sm space-y-2">
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                  />
                </div>
                <p className="text-sm font-medium text-neutral-500">
                  No silence. No drift. Just results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Profile grid -> Marquee */}
        <div className="mt-14 flex w-full flex-col gap-4 overflow-hidden py-4 sm:gap-6">
          <div className="flex w-full select-none gap-4 overflow-hidden sm:gap-6">
            <motion.div
              className="flex min-w-full shrink-0 items-center justify-around gap-4 sm:gap-6"
              animate={{
                x: ["0%", "-100%"],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                duration: 20, // Adjust speed here
              }}
            >
              {[...PROFILE_CARDS, ...PROFILE_CARDS].map((card, i) => (
                <div
                  key={`${card.name}-${i}`} // Ensure unique keys for duplicated items
                  className="flex w-72 shrink-0 flex-col gap-3 rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 transition-all hover:scale-105 hover:border-neutral-700 hover:bg-neutral-800 hover:shadow-lg hover:shadow-indigo-500/10"
                >
                  <div className="flex items-start gap-3">
                    <div className="relative shrink-0">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-full ${card.color} text-sm font-semibold text-white shadow-md`}
                      >
                        {card.initial}
                      </div>
                      <span
                        className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded border border-neutral-700 bg-neutral-800 text-[10px] font-bold text-neutral-300"
                        title={card.company}
                      >
                        {card.company.slice(0, 1)}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-bold text-white">
                        {card.name}
                      </p>
                      <p className="truncate text-sm text-neutral-400">
                        {card.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
            {/* Duplicate for seamless loop */}
            <motion.div
              className="flex min-w-full shrink-0 items-center justify-around gap-4 sm:gap-6"
              animate={{
                x: ["0%", "-100%"],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                duration: 20,
              }}
              aria-hidden="true"
            >
              {[...PROFILE_CARDS, ...PROFILE_CARDS].map((card, i) => (
                <div
                  key={`${card.name}-duplicate-${i}`}
                  className="flex w-72 shrink-0 flex-col gap-3 rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 transition-all hover:scale-105 hover:border-neutral-700 hover:bg-neutral-800 hover:shadow-lg hover:shadow-indigo-500/10"
                >
                  <div className="flex items-start gap-3">
                    <div className="relative shrink-0">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-full ${card.color} text-sm font-semibold text-white shadow-md`}
                      >
                        {card.initial}
                      </div>
                      <span
                        className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded border border-neutral-700 bg-neutral-800 text-[10px] font-bold text-neutral-300"
                        title={card.company}
                      >
                        {card.company.slice(0, 1)}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-bold text-white">
                        {card.name}
                      </p>
                      <p className="truncate text-sm text-neutral-400">
                        {card.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
