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
            <span className={styles.eyebrow}>Learn to swim with confidence</span>
          </RevealOnScroll>

          <RevealOnScroll variant="fadeUp" delay={0.08}>
            <h1 id="hero-heading" className={styles.headline}>
              Swimming lessons for every age, from first splash to first race.
            </h1>
          </RevealOnScroll>

          <RevealOnScroll variant="fadeUp" delay={0.16}>
            <p className={styles.subheadline}>
              AquaKids Swim School teaches children 5+ and adults of any age with certified
              instructors, small class sizes, and modern indoor pools. Book a trial lesson and see
              the difference real coaching makes.
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
              Book a Trial Lesson
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
              View Programs
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
            alt="Coach guiding a young swimmer through a freestyle drill in a bright indoor pool"
            className={styles.image}
            fetchpriority="high"
          />
        </RevealOnScroll>
      </Container>
    </section>
  );
}
