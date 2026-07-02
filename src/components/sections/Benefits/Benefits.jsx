import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import Card from "../../ui/Card/Card";
import IconWrapper from "../../ui/IconWrapper/IconWrapper";
import RevealOnScroll from "../../ui/RevealOnScroll/RevealOnScroll";
import Container from "../../ui/Container/Container";
import { benefits } from "../../../data/benefits";
import { getIcon } from "../../../utils/iconMap";
import styles from "./Benefits.module.css";

export default function Benefits() {
  return (
    <section id="benefits" aria-labelledby="benefits-heading" className={styles.section}>
      <Container>
        <RevealOnScroll variant="fadeUp">
          <SectionHeading
            id="benefits-heading"
            eyebrow="Why choose us"
            title="Everything your swimmer needs to thrive"
            subtitle="From certified coaching to modern facilities, every detail is built around progress and safety."
          />
        </RevealOnScroll>

        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <RevealOnScroll key={benefit.id} variant="fadeUp" delay={index * 0.08}>
              <Card hoverLift className={styles.card}>
                <IconWrapper icon={getIcon(benefit.icon)} />
                <h3 className={styles.title}>{benefit.title}</h3>
                <p className={styles.description}>{benefit.description}</p>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
