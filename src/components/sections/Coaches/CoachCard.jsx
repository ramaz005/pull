import { Instagram, Facebook, Linkedin } from "lucide-react";
import Card from "../../ui/Card/Card";
import Button from "../../ui/Button/Button";
import styles from "./Coaches.module.css";

const socialIcons = { instagram: Instagram, facebook: Facebook, linkedin: Linkedin };

export default function CoachCard({ coach }) {
  const socialEntries = Object.entries(coach.social).filter(([, url]) => url);

  return (
    <Card hoverLift className={styles.card} padding="md">
      <img src={coach.photo} alt={`Портрет: ${coach.name}, ${coach.position}`} className={styles.photo} loading="lazy" />

      <h3 className={styles.name}>{coach.name}</h3>
      <p className={styles.position}>{coach.position}</p>
      <p className={styles.experience}>{coach.experienceYears}+ лет опыта</p>

      <p className={styles.specializationLabel}>Специализация</p>
      <p className={styles.specialization}>{coach.specialization}</p>

      <ul className={styles.certifications}>
        {coach.certifications.map((cert) => (
          <li key={cert}>{cert}</li>
        ))}
      </ul>

      {socialEntries.length > 0 && (
        <div className={styles.socialRow}>
          {socialEntries.map(([platform, url]) => {
            const Icon = socialIcons[platform];
            return (
              <Button
                key={platform}
                as="a"
                href={url}
                variant="ghost"
                size="sm"
                aria-label={`${coach.name} в ${platform}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon size={18} aria-hidden="true" />
              </Button>
            );
          })}
        </div>
      )}
    </Card>
  );
}
