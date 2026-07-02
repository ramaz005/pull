/**
 * Shared framer-motion variants so every section animates with the same
 * timing/easing instead of each component hand-rolling its own transition object.
 * Timing/easing/delay is applied centrally via the `transition` prop in
 * RevealOnScroll.jsx (kept out of the variants themselves so a `delay` passed
 * at the call site is never silently overridden by a per-variant transition).
 */
export const EASE_OUT = [0.16, 1, 0.3, 1];
export const DEFAULT_DURATION = 0.5;

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};

export const slideLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0 },
};

export const slideRight = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0 },
};

export const variantsByName = { fadeUp, fadeIn, scaleIn, slideLeft, slideRight };

/** Wrap around a grid/list of children to stagger their entrance animation. */
export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});
