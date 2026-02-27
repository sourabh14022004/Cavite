"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";

// --- TIMING ---
const SPARKLES_FADE_IN_S = 0.8;
const SPARKLES_LOAD_WAIT_MS = 1200;
const VIEW_DURATION_MS = 1000;
const FADEOUT_DURATION_S = 0.7; // smooth fade-out before navigate

const SPARKLES_FADE_IN_MS = SPARKLES_FADE_IN_S * 1000;
const FADEOUT_START_MS = SPARKLES_FADE_IN_MS + SPARKLES_LOAD_WAIT_MS + VIEW_DURATION_MS;

// Buttery smooth easing (custom cubic-bezier)
const EASE_SMOOTH = [0.4, 0, 0.2, 1] as const;
const EASE_OUT_SMOOTH = [0.25, 0.1, 0.25, 1] as const;

const CAVITE_TEXT_CLASS =
  "relative z-20 text-center font-bold text-white md:text-7xl lg:text-9xl text-3xl";

export default function StartExperience() {
  const router = useRouter();
  const hasNavigated = useRef(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setIsFadingOut(true);
    }, FADEOUT_START_MS);
    return () => clearTimeout(t);
  }, []);

  const handleFadeOutComplete = () => {
    if (isFadingOut && !hasNavigated.current) {
      hasNavigated.current = true;
      router.push("/home");
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Sparkles + "cavite" — fade in on load, fade out before navigate */}
      <motion.div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isFadingOut ? 0 : 1 }}
        transition={{
          duration: isFadingOut ? FADEOUT_DURATION_S : SPARKLES_FADE_IN_S,
          ease: isFadingOut ? EASE_OUT_SMOOTH : EASE_SMOOTH,
        }}
        onAnimationComplete={() => {
          if (isFadingOut) handleFadeOutComplete();
        }}
      >
        <div className="relative flex h-full w-full flex-col items-center justify-center">
          <h1 className={CAVITE_TEXT_CLASS}>cavite</h1>
          <div className="relative h-40 w-full max-w-[40rem]">
            <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
            <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
            <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
            <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
            <SparklesCore
              id="start-sparkles"
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="absolute inset-0 h-full w-full"
              particleColor="#FFFFFF"
            />
            <div className="absolute inset-0 h-full w-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
