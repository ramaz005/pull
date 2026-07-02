import { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Modal from "../Modal/Modal";
import styles from "./Lightbox.module.css";

/**
 * Gallery lightbox built on top of the generic Modal.
 * `openIndex`: number | null - index into `images` currently shown (null = closed).
 */
export default function Lightbox({ images, openIndex, onClose, onNavigate }) {
  const isOpen = openIndex !== null && openIndex !== undefined;
  const image = isOpen ? images[openIndex] : null;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") onNavigate((openIndex + 1) % images.length);
      if (event.key === "ArrowLeft") onNavigate((openIndex - 1 + images.length) % images.length);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, openIndex, images.length, onNavigate]);

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} labelledBy="lightbox-caption" className={styles.dialog}>
      <button
        type="button"
        className={[styles.navButton, styles.prev].join(" ")}
        onClick={() => onNavigate((openIndex - 1 + images.length) % images.length)}
        aria-label="Previous image"
      >
        <ChevronLeft size={24} aria-hidden="true" />
      </button>

      <img src={image.src} alt={image.alt} className={styles.image} />

      <button
        type="button"
        className={[styles.navButton, styles.next].join(" ")}
        onClick={() => onNavigate((openIndex + 1) % images.length)}
        aria-label="Next image"
      >
        <ChevronRight size={24} aria-hidden="true" />
      </button>

      <p id="lightbox-caption" className={styles.caption}>
        {image.alt}
        <span className={styles.counter}>
          {openIndex + 1} / {images.length}
        </span>
      </p>
    </Modal>
  );
}
