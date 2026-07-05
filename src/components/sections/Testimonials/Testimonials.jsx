import { useEffect, useState, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import RevealOnScroll from "../../ui/RevealOnScroll/RevealOnScroll";
import Container from "../../ui/Container/Container";
import StarRating from "../../ui/StarRating/StarRating";
import Avatar from "../../ui/Avatar/Avatar";
import { testimonials } from "../../../data/testimonials";
import styles from "./Testimonials.module.css";

const AUTOPLAY_INTERVAL = 6000;

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const goTo = useCallback((nextIndex, dir) => {
    setDirection(dir);
    setActiveIndex(nextIndex);
  }, []);

  const goNext = useCallback(() => {
    goTo((activeIndex + 1) % testimonials.length, 1);
  }, [activeIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo((activeIndex - 1 + testimonials.length) % testimonials.length, -1);
  }, [activeIndex, goTo]);

  useEffect(() => {
    if (isPaused) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    intervalRef.current = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const active = testimonials[activeIndex];

  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className={styles.section}>
      <Container size="md">
        <RevealOnScroll variant="fadeUp">
          <SectionHeading
            id="testimonials-heading"
            eyebrow="Отзывы"
            title="Нас любят и родители, и взрослые пловцы"
          />
        </RevealOnScroll>

        <div
          className={styles.carousel}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <Quote className={styles.quoteMark} aria-hidden="true" />

          <div className={styles.slideViewport}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 40 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={styles.slide}
                role="group"
                aria-roledescription="слайд"
                aria-label={`Отзыв ${activeIndex + 1} из ${testimonials.length}`}
              >
                <StarRating rating={active.rating} />
                <p className={styles.quote}>&ldquo;{active.quote}&rdquo;</p>
                <div className={styles.author}>
                  <Avatar name={active.name} className={styles.avatar} />
                  <div>
                    <p className={styles.name}>{active.name}</p>
                    <p className={styles.role}>{active.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className={styles.controls}>
            <button type="button" className={styles.arrowButton} onClick={goPrev} aria-label="Предыдущий отзыв">
              <ChevronLeft size={20} aria-hidden="true" />
            </button>

            <div className={styles.dots}>
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  type="button"
                  className={[styles.dot, index === activeIndex && styles.dotActive].filter(Boolean).join(" ")}
                  aria-label={`Перейти к отзыву ${index + 1}`}
                  aria-current={index === activeIndex}
                  onClick={() => goTo(index, index > activeIndex ? 1 : -1)}
                />
              ))}
            </div>

            <button type="button" className={styles.arrowButton} onClick={goNext} aria-label="Следующий отзыв">
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
