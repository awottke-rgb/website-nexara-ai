"use client";

import { useEffect, useState } from "react";

export function useExitIntent(delayMs = 5000) {
  const [hasTriggered, setHasTriggered] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Wait for the delay before the exit intent can be triggered
    const timer = setTimeout(() => setIsReady(true), delayMs);
    return () => clearTimeout(timer);
  }, [delayMs]);

  useEffect(() => {
    if (!isReady || hasTriggered) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger if cursor moves to the top of the viewport (often indicating intent to close/switch tab)
      if (e.clientY <= 0) {
        setHasTriggered(true);
        // We will expose this state to open the modal
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [isReady, hasTriggered]);

  return { hasTriggered, setHasTriggered };
}
