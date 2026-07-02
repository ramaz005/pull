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
            eyebrow="Знакомьтесь с командой"
            title="Сертифицированные тренеры, влюблённые в своё дело"
            subtitle="Каждый инструктор сертифицирован, проверен и обучен именно для той возрастной группы, с которой работает."
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
