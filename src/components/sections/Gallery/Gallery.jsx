import { useState } from "react";
import { Expand } from "lucide-react";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import RevealOnScroll from "../../ui/RevealOnScroll/RevealOnScroll";
import Container from "../../ui/Container/Container";
import Lightbox from "../../ui/Lightbox/Lightbox";
import { gallery } from "../../../data/gallery";
import styles from "./Gallery.module.css";

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="gallery" aria-labelledby="gallery-heading" className={styles.section}>
      <Container>
        <RevealOnScroll variant="fadeUp">
          <SectionHeading
            id="gallery-heading"
            eyebrow="Gallery"
            title="A look inside AquaKids"
            subtitle="From first floats to competition starts - a glimpse of everyday life at the pool."
          />
        </RevealOnScroll>

        <div className={styles.grid}>
          {gallery.map((photo, index) => (
            <RevealOnScroll key={photo.id} variant="scaleIn" delay={(index % 4) * 0.06} className={styles.tile}>
              <button
                type="button"
                className={styles.thumbButton}
                onClick={() => setOpenIndex(index)}
                aria-label={`View larger image: ${photo.alt}`}
              >
                <img src={photo.src} alt={photo.alt} className={styles.thumb} loading="lazy" decoding="async" />
                <span className={styles.overlay} aria-hidden="true">
                  <Expand size={22} />
                </span>
              </button>
            </RevealOnScroll>
          ))}
        </div>
      </Container>

      <Lightbox images={gallery} openIndex={openIndex} onClose={() => setOpenIndex(null)} onNavigate={setOpenIndex} />
    </section>
  );
}
