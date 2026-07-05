import { Phone, Send, Mail, Clock } from "lucide-react";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import RevealOnScroll from "../../ui/RevealOnScroll/RevealOnScroll";
import Container from "../../ui/Container/Container";
import Button from "../../ui/Button/Button";
import { CONTACT, BUSINESS_HOURS } from "../../../utils/constants";
import styles from "./Contact.module.css";

/**
 * Booking / contact section. Target of every "Записаться" CTA (id="contact"),
 * so scrollTo("contact") from the navbar, hero, program and pricing cards lands here.
 * Booking is handled directly by phone and Telegram — the two primary channels.
 */
export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <RevealOnScroll variant="slideRight" className={styles.intro}>
            <SectionHeading
              id="contact-heading"
              eyebrow="Запись"
              title="Запишитесь на пробное занятие"
              subtitle="Оставьте заявку по телефону или в Telegram — подберём удобное время и группу. Отвечаем быстро и без навязчивости."
              align="left"
              inverse
            />

            <div className={styles.actions}>
              <Button as="a" href={CONTACT.phoneHref} size="lg" icon={Phone} iconPosition="left">
                Позвонить
              </Button>
              <Button
                as="a"
                href={CONTACT.telegram.href}
                size="lg"
                variant="outline"
                icon={Send}
                iconPosition="left"
                target="_blank"
                rel="noreferrer noopener"
              >
                Написать в Telegram
              </Button>
            </div>
          </RevealOnScroll>

          <RevealOnScroll variant="slideLeft" className={styles.details}>
            <ul className={styles.contactList}>
              <li>
                <span className={styles.iconBadge}>
                  <Phone size={20} aria-hidden="true" />
                </span>
                <div>
                  <p className={styles.label}>Телефон</p>
                  <a href={CONTACT.phoneHref} className={styles.value}>
                    {CONTACT.phone}
                  </a>
                </div>
              </li>

              <li>
                <span className={styles.iconBadge}>
                  <Send size={20} aria-hidden="true" />
                </span>
                <div>
                  <p className={styles.label}>Telegram</p>
                  <a href={CONTACT.telegram.href} className={styles.value} target="_blank" rel="noreferrer noopener">
                    {CONTACT.telegram.handle}
                  </a>
                </div>
              </li>

              <li>
                <span className={styles.iconBadge}>
                  <Mail size={20} aria-hidden="true" />
                </span>
                <div>
                  <p className={styles.label}>Эл. почта</p>
                  <a href={`mailto:${CONTACT.email}`} className={styles.value}>
                    {CONTACT.email}
                  </a>
                </div>
              </li>

              <li>
                <span className={styles.iconBadge}>
                  <Clock size={20} aria-hidden="true" />
                </span>
                <div>
                  <p className={styles.label}>Часы работы</p>
                  {BUSINESS_HOURS.map((entry) => (
                    <p key={entry.day} className={styles.hours}>
                      {entry.day}: <span>{entry.hours}</span>
                    </p>
                  ))}
                </div>
              </li>
            </ul>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
