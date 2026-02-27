"use client";

import * as React from "react";
import {
  type MotionValue,
  motion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const defaultFontSize = 40;
const padding = 10;
const height = defaultFontSize + padding;

interface CounterProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  start?: number;
  end: number;
  duration?: number;
  className?: string;
  fontSize?: number;
}

export function Counter({
  start = 0,
  end,
  duration = end,
  className,
  fontSize = defaultFontSize,
  ...rest
}: CounterProps) {
  const [value, setValue] = useState(start);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepMs = end > start ? (duration / (end - start)) * 1000 : 0;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setValue(start);
        }
      },
      { threshold: 0.2, rootMargin: "0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [start]);

  useEffect(() => {
    if (value >= end) return;
    const interval = setInterval(() => {
      setValue((prev) => Math.min(prev + 1, end));
    }, stepMs);
    return () => clearInterval(interval);
  }, [value, end, stepMs]);

  const displayHeight = fontSize + padding;

  return (
    <div
      ref={containerRef}
      style={{ fontSize }}
      {...rest}
      className={cn(
        "inline-flex overflow-hidden rounded px-2 leading-none font-bold text-white",
        className,
      )}
    >
      {value >= 100000 && (
        <Digit place={100000} value={value} height={displayHeight} />
      )}
      {value >= 10000 && (
        <Digit place={10000} value={value} height={displayHeight} />
      )}
      {value >= 1000 && (
        <Digit place={1000} value={value} height={displayHeight} />
      )}
      {value >= 100 && (
        <Digit place={100} value={value} height={displayHeight} />
      )}
      {value >= 10 && <Digit place={10} value={value} height={displayHeight} />}
      <Digit place={1} value={value} height={displayHeight} />
    </div>
  );
}

function Digit({
  place,
  value,
  height: digitHeight,
}: {
  place: number;
  value: number;
  height: number;
}) {
  const valueRoundedToPlace = Math.floor(value / place);
  const animatedValue = useSpring(valueRoundedToPlace);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div style={{ height: digitHeight }} className="relative w-[1ch]">
      {[...Array(10)].map((_, i) => (
        <Number key={i} mv={animatedValue} number={i} height={digitHeight} />
      ))}
    </div>
  );
}

function Number({
  mv,
  number,
  height: numberHeight,
}: {
  mv: MotionValue<number>;
  number: number;
  height: number;
}) {
  const y = useTransform(mv, (latest) => {
    const placeValue = latest % 10;
    let offset = (10 + number - placeValue) % 10;
    let memo = offset * numberHeight;
    if (offset > 5) {
      memo -= 10 * numberHeight;
    }
    return memo;
  });

  return (
    <motion.span
      style={{ y }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {number}
    </motion.span>
  );
}
