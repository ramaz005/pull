import { useScrollReveal } from "../../../hooks/useScrollReveal";
import { useCountUp } from "../../../hooks/useCountUp";
import styles from "./StatCounter.module.css";

/** Animated "5000+ Students" style counter, used in Hero and About. */
export default function StatCounter({ value, prefix = "", suffix = "", label, duration = 1500, inverse = false }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.4 });
  const formatted = useCountUp({ end: value, duration }, isVisible);

  return (
    <div ref={ref} className={[styles.stat, inverse && styles.inverse].filter(Boolean).join(" ")}>
      <p className={styles.value}>
        {prefix}
        {Number(formatted).toLocaleString()}
        {suffix}
      </p>
      <p className={styles.label}>{label}</p>
    </div>
  );
}
