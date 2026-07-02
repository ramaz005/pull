import { useEffect, useRef, useState } from "react";

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

/**
 * Animates a number from `start` to `end` once `isVisible` becomes true,
 * driven by requestAnimationFrame. Returns a formatted string.
 * Short-circuits to the final value instantly under prefers-reduced-motion.
 */
export function useCountUp({ end, start = 0, duration = 1500, decimals = 0 } = {}, isVisible) {
  const [value, setValue] = useState(start);
  const frameRef = useRef(null);
  const hasRunRef = useRef(false);

  useEffect(() => {
    if (!isVisible || hasRunRef.current) return;
    hasRunRef.current = true;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(end);
      return;
    }

    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      setValue(start + (end - start) * eased);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setValue(end);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [isVisible, end, start, duration]);

  return value.toFixed(decimals);
}
