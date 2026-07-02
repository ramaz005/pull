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
            eyebrow="Pricing"
            title="Simple, transparent membership plans"
            subtitle="Every plan includes certified coaching and access to our modern indoor pools. Cancel or switch plans anytime."
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
