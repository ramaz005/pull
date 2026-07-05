import styles from "./MediaPlaceholder.module.css";

/**
 * Branded gradient panel used in place of stock photography.
 * The wave motif is drawn with inline SVG — no external images, icon fonts, or
 * generated placeholder art. Sizing/border-radius come from the consumer class.
 * Pass `alt` for a meaningful description (exposed as role="img"); omit it for
 * purely decorative use.
 */
export default function MediaPlaceholder({ className = "", variant = 0, alt = "" }) {
  return (
    <div
      className={[styles.placeholder, styles[`variant${variant % 4}`], className].filter(Boolean).join(" ")}
      role={alt ? "img" : undefined}
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : "true"}
    >
      <svg className={styles.waves} viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <path d="M0 205 Q 100 165 200 205 T 400 205 V300 H0 Z" fill="rgba(255, 255, 255, 0.1)" />
        <path d="M0 232 Q 100 197 200 232 T 400 232 V300 H0 Z" fill="rgba(255, 255, 255, 0.08)" />
        <path d="M0 259 Q 100 229 200 259 T 400 259 V300 H0 Z" fill="rgba(255, 255, 255, 0.06)" />
      </svg>
    </div>
  );
}
