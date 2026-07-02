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
            eyebrow="Почему выбирают нас"
            title="Всё, что нужно вашему пловцу для успеха"
            subtitle="От сертифицированного тренерского состава до современных бассейнов — всё продумано ради прогресса и безопасности."
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
