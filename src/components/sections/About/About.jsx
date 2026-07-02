import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import Container from "../../ui/Container/Container";
import IconWrapper from "../../ui/IconWrapper/IconWrapper";
import StatCounter from "../../ui/StatCounter/StatCounter";
import RevealOnScroll from "../../ui/RevealOnScroll/RevealOnScroll";
import Timeline from "./Timeline";
import { missionVisionValues } from "../../../data/values";
import { stats } from "../../../data/stats";
import { getIcon } from "../../../utils/iconMap";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className={styles.section}>
      <Container>
        <SectionHeading
          id="about-heading"
          eyebrow="О нас"
          title="Пятнадцать лет превращаем волнующихся новичков в уверенных пловцов"
          align="left"
        />

        <div className={styles.introGrid}>
          <RevealOnScroll variant="slideRight" className={styles.imageColumn}>
            <img
              // TODO: replace with real facility photography
              src="https://images.unsplash.com/photo-1530549387789-4c1017266635?w=900&q=80&auto=format&fit=crop"
              alt="Интерьер современного крытого тренировочного бассейна AquaKids"
              className={styles.image}
              loading="lazy"
            />
          </RevealOnScroll>

          <RevealOnScroll variant="slideLeft" className={styles.textColumn}>
            <p className={styles.paragraph}>
              <strong>Миссия.</strong> {missionVisionValues.mission}
            </p>
            <p className={styles.paragraph}>
              <strong>Видение.</strong> {missionVisionValues.vision}
            </p>

            <div className={styles.statsRow}>
              {stats.slice(0, 2).map((stat) => (
                <StatCounter key={stat.id} value={stat.value} suffix={stat.suffix} label={stat.label} />
              ))}
            </div>
          </RevealOnScroll>
        </div>

        <div className={styles.valuesGrid}>
          {missionVisionValues.values.map((value, index) => (
            <RevealOnScroll key={value.id} variant="fadeUp" delay={index * 0.06} className={styles.valueCard}>
              <IconWrapper icon={getIcon(value.icon)} variant="secondary" />
              <h4 className={styles.valueTitle}>{value.title}</h4>
              <p className={styles.valueDescription}>{value.description}</p>
            </RevealOnScroll>
          ))}
        </div>

        <div className={styles.timelineWrapper}>
          <h3 className={styles.timelineHeading}>Наш путь</h3>
          <Timeline />
        </div>
      </Container>
    </section>
  );
}
