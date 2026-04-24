"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Counter } from "@/components/ui/animated-counter";
import { ShieldCheck, Timer, FileCode, CheckCircle2 } from "lucide-react";
import React from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const FloatingBadge = ({
  icon: Icon,
  title,
  description,
  delay,
  className,
  floatOffset = 10,
  duration = 4,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
  className?: string;
  floatOffset?: number;
  duration?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className={`absolute hidden lg:block z-20 ${className}`}
  >
    <motion.div
      animate={{ y: [0, -floatOffset, 0] }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    >
      <motion.div
        whileHover={{ scale: 1.05, rotate: 0, y: -5 }}
        className="flex flex-col gap-1 rounded-xl border border-[#222] bg-gradient-to-b from-[#1c1c1e]/90 to-[#0A0A0A]/90 p-4 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden cursor-pointer group transition-all duration-300 hover:border-indigo-500/50 hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)]"
      >
        {/* Glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Noise Texture Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="flex items-center gap-2 mb-1 relative z-10 transition-transform duration-300 group-hover:translate-x-1">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/5 group-hover:bg-indigo-500/20 group-hover:shadow-[0_0_10px_rgba(99,102,241,0.5)] transition-all duration-300">
            <Icon className="h-3 w-3 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
          </div>
          <span className="text-[13px] font-semibold text-white tracking-tight">
            {title}
          </span>
        </div>
        <p className="text-[11px] font-medium text-neutral-500 leading-tight relative z-10 transition-colors duration-300 group-hover:text-neutral-300">
          {description}
        </p>
      </motion.div>
    </motion.div>
  </motion.div>
);

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
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section className="relative flex min-h-screen shrink-0 flex-col overflow-hidden snap-start [scroll-snap-stop:always] justify-center pb-16 pt-24 sm:pt-32">
      <div className="relative z-10 w-full flex-1 flex flex-col justify-center">
        {/* 14 days — animated counter */}
        <section className="mx-auto mt-16 w-full max-w-5xl px-4 sm:px-6 lg:px-8 relative">
          <FloatingBadge
            icon={ShieldCheck}
            title="0% Ghosting"
            description="Real responses, every time."
            delay={0.2}
            duration={4.5}
            floatOffset={12}
            className="-top-12 -left-12 lg:-left-16 z-20 w-[210px] -rotate-2"
          />
          <FloatingBadge
            icon={Timer}
            title="Strict Windows"
            description="Decisions within 14 days."
            delay={0.4}
            duration={5.2}
            floatOffset={8}
            className="-top-4 -right-8 lg:-right-4 z-20 w-[200px] rotate-2"
          />
          <FloatingBadge
            icon={FileCode}
            title="Proof of Work"
            description="Replacing generic resumes."
            delay={0.6}
            duration={4.8}
            floatOffset={15}
            className="-bottom-10 -left-6 lg:-left-2 z-20 w-[200px] rotate-1"
          />
          <FloatingBadge
            icon={CheckCircle2}
            title="Clear Outcomes"
            description="Accountability built-in."
            delay={0.8}
            duration={5.5}
            floatOffset={10}
            className="-bottom-6 -right-12 lg:-right-16 z-20 w-[220px] -rotate-3"
          />

          <div
            className="group relative overflow-hidden rounded-[24px] border border-[#222] bg-gradient-to-b from-[#18181b] to-[#0a0a0a] px-8 py-14 text-center sm:px-12 sm:py-20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),_0_20px_40px_-10px_rgba(0,0,0,0.8),_-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,30,85,0.05)] mx-auto max-w-2xl z-10 transition-transform duration-500 hover:scale-[1.01]"
            onMouseMove={handleMouseMove}
          >
            {/* Spotlight overlay on hover */}
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-[24px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
              style={{
                background: useMotionTemplate`
                  radial-gradient(
                    650px circle at ${mouseX}px ${mouseY}px,
                    rgba(255,255,255,0.06),
                    transparent 80%
                  )
                `,
              }}
            />
            {/* Noise Texture Overlay */}
            <div
              className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            />
            {/* Very subtle glow effect behind */}
            <div className="absolute left-1/2 top-1/2 -z-20 h-[200px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />

            <div className="flex flex-col items-center justify-center gap-4 relative z-10">
              <span className="text-sm font-medium text-neutral-400 drop-shadow-md">
                Every hiring process concludes within
              </span>

              <div className="flex items-end justify-center gap-3 mt-4">
                <Counter
                  start={1}
                  end={14}
                  duration={2}
                  className="text-8xl font-bold tracking-tight text-white leading-[0.8] drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                  fontSize={100}
                />
                <span className="text-2xl font-bold text-neutral-500 mb-1 drop-shadow-sm">
                  days
                </span>
              </div>

              <div className="w-full max-w-[280px] mt-2 flex flex-col items-center gap-3">
                <div className="h-1 w-full overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                  />
                </div>
                <p className="text-[11px] font-medium text-neutral-600 tracking-wide mt-1">
                  No silence. No drift. Just results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Profile grid -> Marquee (Embla AutoScroll) */}
        <div className="mt-14 w-full overflow-hidden py-10">
          <div className="relative mx-auto flex items-center justify-center w-full pt-20">
            <Carousel
              opts={{ loop: true }}
              plugins={[AutoScroll({ playOnInit: true })]}
              className="w-full"
            >
              <CarouselContent className="ml-0 w-full flex">
                {[
                  ...PROFILE_CARDS,
                  ...PROFILE_CARDS,
                  ...PROFILE_CARDS,
                  ...PROFILE_CARDS,
                ].map((card, i) => (
                  <CarouselItem
                    key={`${card.name}-${i}`} // Ensure unique keys for duplicated items
                    className="basis-auto pl-4 sm:pl-6"
                  >
                    <div className="flex shrink-0 items-center min-w-max gap-3 rounded-xl border border-[#222] bg-gradient-to-b from-[#1c1c1e] to-[#0A0A0A] p-2.5 pr-6 transition-all hover:brightness-110 font-sans shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),_0_5px_10px_rgba(0,0,0,0.3)] relative overflow-hidden group">
                      {/* Subtle top glare highlight */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div className="relative shrink-0">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full ${card.color} text-[11px] font-bold text-white shadow-sm`}
                        >
                          {card.initial}
                        </div>
                        <span
                          className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-[4px] border border-[#222] bg-[#111] text-[8px] font-bold text-neutral-400"
                          title={card.company}
                        >
                          {card.company.slice(0, 1)}
                        </span>
                      </div>
                      <div className="min-w-0 flex flex-col justify-center translate-y-px">
                        <p className="truncate text-[13px] font-semibold text-white leading-tight">
                          {card.name}
                        </p>
                        <p className="truncate text-[11px] text-neutral-500 font-medium leading-tight mt-0.5">
                          {card.role}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            {/* Added soft gradient edge overlays to hide the popping items smoothly */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black via-black/90 to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black via-black/90 to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
