import styles from "./Avatar.module.css";

/**
 * Initials avatar used in place of stock portrait photography.
 * Decorative by design — the person's name is always shown in adjacent text,
 * so the initials are marked aria-hidden. The gradient is chosen deterministically
 * from the name so each card looks distinct while staying on-brand.
 */
function getInitials(name = "") {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return "?";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = (hash * 31 + str.charCodeAt(i)) % 100000;
  }
  return hash;
}

const VARIANT_COUNT = 4;

export default function Avatar({ name = "", className = "" }) {
  const variant = hashString(name) % VARIANT_COUNT;

  return (
    <span
      className={[styles.avatar, styles[`variant${variant}`], className].filter(Boolean).join(" ")}
      aria-hidden="true"
    >
      {getInitials(name)}
    </span>
  );
}
