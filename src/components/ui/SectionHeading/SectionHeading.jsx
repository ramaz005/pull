import styles from "./SectionHeading.module.css";

/** Consistent eyebrow + title + subtitle header used at the top of every section. */
export default function SectionHeading({ eyebrow, title, subtitle, align = "center", id, inverse = false }) {
  const classNames = [styles.wrapper, styles[align], inverse && styles.inverse].filter(Boolean).join(" ");

  return (
    <div className={classNames}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
