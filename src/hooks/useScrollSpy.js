import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view while scrolling, for Navbar
 * active-link highlighting. Returns the id of the last section whose top
 * has crossed the offset line.
 */
export function useScrollSpy(sectionIds, { offset = 120 } = {}) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      if (rafId !== null) return;

      rafId = requestAnimationFrame(() => {
        let current = sectionIds[0];

        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (!el) continue;

          if (el.getBoundingClientRect().top - offset <= 0) {
            current = id;
          }
        }

        setActiveId(current);
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [sectionIds, offset]);

  return activeId;
}
