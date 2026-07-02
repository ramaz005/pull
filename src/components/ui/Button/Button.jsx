import { Loader2 } from "lucide-react";
import styles from "./Button.module.css";

/**
 * Universal call-to-action button used across every section.
 * Renders as a native <button> or an <a> (for anchor-link CTAs) depending on `as`.
 */
export default function Button({
  as = "button",
  href,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  isLoading = false,
  disabled = false,
  type = "button",
  className = "",
  children,
  ...rest
}) {
  const classNames = [styles.button, styles[variant], styles[size], className].join(" ").trim();

  const content = (
    <>
      {isLoading && <Loader2 className={styles.spinner} size={18} aria-hidden="true" />}
      {!isLoading && Icon && iconPosition === "left" && <Icon size={18} aria-hidden="true" />}
      <span>{children}</span>
      {!isLoading && Icon && iconPosition === "right" && <Icon size={18} aria-hidden="true" />}
    </>
  );

  if (as === "a") {
    return (
      <a href={href} className={classNames} aria-disabled={disabled} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classNames}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...rest}
    >
      {content}
    </button>
  );
}
