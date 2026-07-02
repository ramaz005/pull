import { ArrowRight, PlayCircle } from "lucide-react";
import Button from "../../ui/Button/Button";
import Container from "../../ui/Container/Container";
import StatCounter from "../../ui/StatCounter/StatCounter";
import RevealOnScroll from "../../ui/RevealOnScroll/RevealOnScroll";
import { stats } from "../../../data/stats";
import { scrollTo } from "../../../utils/scrollTo";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className={styles.hero}>
      {/* Decorative animated background shapes - purely visual, hidden from screen readers */}
      <div className={styles.shapes} aria-hidden="true">
        <span className={[styles.shape, styles.shapeOne].join(" ")} />
        <span className={[styles.shape, styles.shapeTwo].join(" ")} />
        <span className={[styles.shape, styles.shapeThree].join(" ")} />
      </div>

      <Container className={styles.grid}>
        <div className={styles.copy}>
          <RevealOnScroll variant="fadeUp">
            <span className={styles.eyebrow}>Учитесь плавать с уверенностью</span>
          </RevealOnScroll>

          <RevealOnScroll variant="fadeUp" delay={0.08}>
            <h1 id="hero-heading" className={styles.headline}>
              Уроки плавания в любом возрасте — от первого всплеска до первого старта.
            </h1>
          </RevealOnScroll>

          <RevealOnScroll variant="fadeUp" delay={0.16}>
            <p className={styles.subheadline}>
              Школа плавания AquaKids обучает детей от 5 лет и взрослых любого возраста:
              сертифицированные инструкторы, малые группы и современные крытые бассейны.
              Запишитесь на пробное занятие и почувствуйте разницу настоящего тренерского подхода.
            </p>
          </RevealOnScroll>

          <RevealOnScroll variant="fadeUp" delay={0.24} className={styles.actions}>
            <Button
              as="a"
              href="#contact"
              size="lg"
              icon={ArrowRight}
              onClick={(event) => {
                event.preventDefault();
                scrollTo("contact");
              }}
            >
              Записаться на пробное занятие
            </Button>
            <Button
              as="a"
              href="#programs"
              size="lg"
              variant="secondary"
              icon={PlayCircle}
              iconPosition="left"
              onClick={(event) => {
                event.preventDefault();
                scrollTo("programs");
              }}
            >
              Смотреть программы
            </Button>
          </RevealOnScroll>

          <RevealOnScroll variant="fadeIn" delay={0.32} className={styles.statsRow}>
            {stats.map((stat) => (
              <StatCounter key={stat.id} value={stat.value} suffix={stat.suffix} label={stat.label} inverse />
            ))}
          </RevealOnScroll>
        </div>

        <RevealOnScroll variant="scaleIn" delay={0.2} className={styles.imageWrapper}>
          <img
            // TODO: replace with real photography
            src="https://images.unsplash.com/photo-1600965962361-9035dbfd1c50?w=1200&q=80&auto=format&fit=crop"
            alt="Тренер помогает юному пловцу освоить вольный стиль в светлом крытом бассейне"
            className={styles.image}
            fetchpriority="high"
          />
        </RevealOnScroll>
      </Container>
    </section>
  );
}
