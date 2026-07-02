import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import RevealOnScroll from "../../ui/RevealOnScroll/RevealOnScroll";
import Container from "../../ui/Container/Container";
import PricingCard from "./PricingCard";
import { pricing } from "../../../data/pricing";
import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className={styles.section}>
      <Container>
        <RevealOnScroll variant="fadeUp">
          <SectionHeading
            id="pricing-heading"
            eyebrow="Цены"
            title="Простые и прозрачные абонементы"
            subtitle="Каждый план включает работу с сертифицированными тренерами и доступ к современным крытым бассейнам. Отмена или смена плана в любой момент."
          />
        </RevealOnScroll>

        <div className={styles.grid}>
          {pricing.map((plan, index) => (
            <RevealOnScroll key={plan.id} variant="fadeUp" delay={index * 0.06}>
              <PricingCard plan={plan} />
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
