"use client";

import { useEffect, useState } from "react";
import { SLOGANS } from "@/lib/slogans";

export function SloganRotator({
  className = "",
  intervalMs = 4000,
}: {
  className?: string;
  intervalMs?: number;
}) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const tick = window.setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setIndex((current) => (current + 1) % SLOGANS.length);
        setVisible(true);
      }, 220);
    }, intervalMs);
    return () => window.clearInterval(tick);
  }, [intervalMs]);

  return (
    <p
      className={`transition-opacity duration-200 ${visible ? "opacity-100" : "opacity-0"} ${className}`}
      aria-live="polite"
    >
      «{SLOGANS[index]}»
    </p>
  );
}
