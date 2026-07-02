import { Star } from "lucide-react";
import styles from "./StarRating.module.css";

/** Renders a row of filled/outline stars for testimonial ratings. */
export default function StarRating({ rating, max = 5, size = 18 }) {
  return (
    <div className={styles.row} role="img" aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }).map((_, index) => (
        <Star
          key={index}
          size={size}
          className={index < rating ? styles.filled : styles.empty}
          fill={index < rating ? "currentColor" : "none"}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
