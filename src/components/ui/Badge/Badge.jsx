import styles from "./Badge.module.css";

/** Small pill used for the "Popular" pricing tag, program age tags, etc. */
export default function Badge({ variant = "primary", className = "", children }) {
  return <span className={[styles.badge, styles[variant], className].join(" ").trim()}>{children}</span>;
}
