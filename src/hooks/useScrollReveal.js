import { useEffect, useRef, useState } from "react";

/**
 * Reveals content once it scrolls into view, using IntersectionObserver.
 * Returns [ref, isVisible] - attach `ref` to the element you want to observe.
 *
 * Under prefers-reduced-motion, isVisible is immediately true (no observer
 * is created) so content simply appears rather than animating in.
 */
export function useScrollReveal({ threshold = 0.2, rootMargin = "0px 0px -60px 0px", once = true } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, isVisible];
}
