import { motion } from "framer-motion";
import { useScrollReveal } from "../../../hooks/useScrollReveal";
import { variantsByName, EASE_OUT, DEFAULT_DURATION } from "../../../utils/motionVariants";

/**
 * Thin wrapper combining useScrollReveal + a framer-motion variant.
 * Every section uses this on its heading/content blocks instead of
 * hand-rolling IntersectionObserver + motion.div logic each time.
 */
export default function RevealOnScroll({ children, variant = "fadeUp", delay = 0, once = true, as = "div", className }) {
  const [ref, isVisible] = useScrollReveal({ once });
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variantsByName[variant]}
      transition={{ duration: DEFAULT_DURATION, ease: EASE_OUT, delay }}
    >
      {children}
    </MotionTag>
  );
}
