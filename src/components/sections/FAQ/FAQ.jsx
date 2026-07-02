import { useState } from "react";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import RevealOnScroll from "../../ui/RevealOnScroll/RevealOnScroll";
import Container from "../../ui/Container/Container";
import AccordionItem from "../../ui/AccordionItem/AccordionItem";
import { faq } from "../../../data/faq";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" aria-labelledby="faq-heading" className={styles.section}>
      <Container size="md">
        <RevealOnScroll variant="fadeUp">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Frequently asked questions" />
        </RevealOnScroll>

        <RevealOnScroll variant="fadeUp" delay={0.1} className={styles.list}>
          {faq.map((item, index) => (
            <AccordionItem
              key={item.id}
              index={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </RevealOnScroll>
      </Container>
    </section>
  );
}
