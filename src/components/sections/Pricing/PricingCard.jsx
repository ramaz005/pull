import { Check, Minus } from "lucide-react";
import Card from "../../ui/Card/Card";
import Badge from "../../ui/Badge/Badge";
import Button from "../../ui/Button/Button";
import { scrollTo } from "../../../utils/scrollTo";
import styles from "./Pricing.module.css";

export default function PricingCard({ plan }) {
  return (
    <Card
      className={[styles.card, plan.isPopular && styles.popular].filter(Boolean).join(" ")}
      hoverLift={!plan.isPopular}
    >
      {plan.isPopular && (
        <Badge variant="popular" className={styles.popularBadge}>
          Самый популярный
        </Badge>
      )}

      <h3 className={styles.planName}>{plan.planName}</h3>
      <p className={styles.description}>{plan.description}</p>

      <p className={styles.price}>
        <span className={styles.priceValue}>Р{plan.price}</span>
        <span className={styles.pricePeriod}>/ {plan.billingPeriod}</span>
      </p>

      <ul className={styles.features}>
        {plan.features.map((feature) => (
          <li key={feature.text} className={!feature.included ? styles.featureExcluded : undefined}>
            {feature.included ? (
              <Check size={16} aria-hidden="true" />
            ) : (
              <Minus size={16} aria-hidden="true" />
            )}
            {feature.text}
          </li>
        ))}
      </ul>

      <Button
        variant={plan.isPopular ? "primary" : "secondary"}
        className={styles.cta}
        onClick={() => scrollTo("contact")}
      >
        {plan.ctaLabel}
      </Button>
    </Card>
  );
}
