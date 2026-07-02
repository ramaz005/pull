/** Shared sticky-navbar offset, kept in one place so Navbar and scrollTo never drift apart. */
export const NAVBAR_OFFSET = 80;

/**
 * Smoothly scrolls to a section by id, compensating for the sticky navbar height.
 * Falls back to an instant jump when the user has requested reduced motion.
 */
export function scrollTo(targetId, { offset = NAVBAR_OFFSET } = {}) {
  const el = document.getElementById(targetId.replace("#", ""));
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  window.scrollTo({ top, behavior: prefersReducedMotion ? "auto" : "smooth" });
}
