import { Check, ArrowRight } from "lucide-react";
import Card from "../../ui/Card/Card";
import Badge from "../../ui/Badge/Badge";
import Button from "../../ui/Button/Button";
import { scrollTo } from "../../../utils/scrollTo";
import styles from "./Programs.module.css";

export default function ProgramCard({ program }) {
  return (
    <Card hoverLift className={[styles.card, program.featured && styles.featured].filter(Boolean).join(" ")}>
      {program.featured && (
        <Badge variant="secondary" className={styles.featuredBadge}>
          Самый популярный
        </Badge>
      )}

      <div className={styles.headingRow}>
        <h3 className={styles.title}>{program.title}</h3>
        <span className={styles.ageGroup}>{program.ageGroup}</span>
      </div>

      <p className={styles.description}>{program.description}</p>

      <ul className={styles.benefitsList}>
        {program.benefits.map((benefit) => (
          <li key={benefit}>
            <Check size={16} aria-hidden="true" />
            {benefit}
          </li>
        ))}
      </ul>

      <Button
        as="a"
        href={program.ctaHref}
        variant="secondary"
        icon={ArrowRight}
        className={styles.cta}
        onClick={(event) => {
          event.preventDefault();
          scrollTo(program.ctaHref.replace("#", ""));
        }}
      >
        {program.ctaLabel}
      </Button>
    </Card>
  );
}
