import styles from "./Container.module.css";

/** Centers content and applies consistent responsive gutters/max-width. */
export default function Container({ size = "lg", as: Tag = "div", className = "", children, ...rest }) {
  const classNames = [styles.container, styles[size], className].join(" ").trim();

  return (
    <Tag className={classNames} {...rest}>
      {children}
    </Tag>
  );
}
