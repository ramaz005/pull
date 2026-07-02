import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import RevealOnScroll from "../../ui/RevealOnScroll/RevealOnScroll";
import Container from "../../ui/Container/Container";
import ProgramCard from "./ProgramCard";
import { programs } from "../../../data/programs";
import styles from "./Programs.module.css";

export default function Programs() {
  return (
    <section id="programs" aria-labelledby="programs-heading" className={styles.section}>
      <Container>
        <RevealOnScroll variant="fadeUp">
          <SectionHeading
            id="programs-heading"
            eyebrow="Our programs"
            title="A program for every swimmer"
            subtitle="Whether it's a first splash or race-day preparation, we have a structured path for every age and goal."
          />
        </RevealOnScroll>

        <div className={styles.grid}>
          {programs.map((program, index) => (
            <RevealOnScroll key={program.id} variant="fadeUp" delay={index * 0.06}>
              <ProgramCard program={program} />
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
