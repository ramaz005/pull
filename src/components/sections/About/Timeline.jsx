import RevealOnScroll from "../../ui/RevealOnScroll/RevealOnScroll";
import { timeline } from "../../../data/timeline";
import styles from "./About.module.css";

/** Vertical history timeline, alternating slide-in direction per entry. */
export default function Timeline() {
  return (
    <ol className={styles.timeline}>
      {timeline.map((entry, index) => (
        <RevealOnScroll
          key={entry.id}
          as="li"
          variant={index % 2 === 0 ? "slideRight" : "slideLeft"}
          delay={index * 0.05}
          className={styles.timelineItem}
        >
          <span className={styles.timelineYear}>{entry.year}</span>
          <h4 className={styles.timelineTitle}>{entry.title}</h4>
          <p className={styles.timelineDescription}>{entry.description}</p>
        </RevealOnScroll>
      ))}
    </ol>
  );
}
