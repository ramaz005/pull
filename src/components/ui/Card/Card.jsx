import styles from "./Card.module.css";

/** Base surface used by Benefits, Programs, Coaches, Pricing, Testimonials cards. */
export default function Card({ padding = "lg", hoverLift = false, as: Tag = "div", className = "", children, ...rest }) {
  const classNames = [styles.card, styles[`padding-${padding}`], hoverLift && styles.hoverLift, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={classNames} {...rest}>
      {children}
    </Tag>
  );
}
