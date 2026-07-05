import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import RevealOnScroll from "../../ui/RevealOnScroll/RevealOnScroll";
import Container from "../../ui/Container/Container";
import MediaPlaceholder from "../../ui/MediaPlaceholder/MediaPlaceholder";
import { gallery } from "../../../data/gallery";
import styles from "./Gallery.module.css";

export default function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-heading" className={styles.section}>
      <Container>
        <RevealOnScroll variant="fadeUp">
          <SectionHeading
            id="gallery-heading"
            eyebrow="Галерея"
            title="Загляните в «Новую волну»"
            subtitle="От первых поплавков до соревновательных стартов — моменты повседневной жизни у бассейна."
          />
        </RevealOnScroll>

        <div className={styles.grid}>
          {gallery.map((photo, index) => (
            <RevealOnScroll key={photo.id} variant="scaleIn" delay={(index % 4) * 0.06} className={styles.tile}>
              <MediaPlaceholder className={styles.thumb} variant={index % 4} alt={photo.alt} />
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
