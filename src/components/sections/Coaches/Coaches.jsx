import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import RevealOnScroll from "../../ui/RevealOnScroll/RevealOnScroll";
import Container from "../../ui/Container/Container";
import CoachCard from "./CoachCard";
import { coaches } from "../../../data/coaches";
import styles from "./Coaches.module.css";

export default function Coaches() {
  return (
    <section id="coaches" aria-labelledby="coaches-heading" className={styles.section}>
      <Container>
        <RevealOnScroll variant="fadeUp">
          <SectionHeading
            id="coaches-heading"
            eyebrow="Meet the team"
            title="Certified coaches who love teaching"
            subtitle="Every instructor is certified, background-checked, and trained specifically for the age group they teach."
          />
        </RevealOnScroll>

        <div className={styles.grid}>
          {coaches.map((coach, index) => (
            <RevealOnScroll key={coach.id} variant="fadeUp" delay={index * 0.08}>
              <CoachCard coach={coach} />
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
