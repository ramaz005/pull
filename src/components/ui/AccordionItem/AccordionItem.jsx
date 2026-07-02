import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import styles from "./AccordionItem.module.css";

/** A single controlled FAQ accordion row - open state lives in the parent FAQ list. */
export default function AccordionItem({ question, answer, isOpen, onToggle, index }) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className={styles.item}>
      <h3 className={styles.heading}>
        <button
          id={buttonId}
          type="button"
          className={styles.trigger}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span>{question}</span>
          <ChevronDown className={[styles.chevron, isOpen && styles.chevronOpen].filter(Boolean).join(" ")} aria-hidden="true" />
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={styles.panelWrapper}
          >
            <p className={styles.panel}>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
