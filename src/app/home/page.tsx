"use client";

import { motion } from "framer-motion";
import { FooterWithPaths } from "@/components/layout/footer-with-paths";
import { DigitalSerenityLanding } from "@/components/sections/digital-serenity";
import { SiteHeader } from "@/components/layout/site-header";
import { HeroSection } from "@/components/sections/hero-section";
import { StatsMarqueeSection } from "@/components/sections/stats-marquee-section";
import { IndividualsSection } from "@/components/sections/individuals-section";

import { IntelligenceDeliveredSection } from "@/components/sections/intelligence-delivered-section";

const EASE_SMOOTH = [0.4, 0, 0.2, 1] as const;

export default function HomePage() {
  return (
    <div className="flex h-screen w-full flex-col">
      <SiteHeader />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: EASE_SMOOTH }}
        className="scrollbar-hide flex-1 w-full overflow-y-auto overflow-x-hidden bg-black text-white snap-y snap-mandatory scroll-smooth"
      >
        <section className="min-h-[calc(100vh-64px)] shrink-0 snap-start [scroll-snap-stop:always]">
          <DigitalSerenityLanding />
        </section>

        <IntelligenceDeliveredSection />

        <HeroSection />

        <StatsMarqueeSection />

        <IndividualsSection />

        <section className="shrink-0 snap-start">
          <FooterWithPaths />
        </section>
      </motion.div>
    </div>
  );
}
