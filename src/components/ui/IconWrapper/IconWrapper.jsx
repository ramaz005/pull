import styles from "./IconWrapper.module.css";

/** Consistent circular icon badge used across Benefits, Programs, and About values. */
export default function IconWrapper({ icon: Icon, size = 24, variant = "primary", className = "" }) {
  if (!Icon) return null;

  return (
    <span className={[styles.wrapper, styles[variant], className].join(" ").trim()} aria-hidden="true">
      <Icon size={size} strokeWidth={2} />
    </span>
  );
}
