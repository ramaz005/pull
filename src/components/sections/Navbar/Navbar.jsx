import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Waves } from "lucide-react";
import Button from "../../ui/Button/Button";
import Container from "../../ui/Container/Container";
import { navLinks } from "../../../data/navLinks";
import { useScrollSpy } from "../../../hooks/useScrollSpy";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { scrollTo } from "../../../utils/scrollTo";
import { SITE_INFO } from "../../../utils/constants";
import styles from "./Navbar.module.css";

const sectionIds = navLinks.map((link) => link.id);
const SCROLL_THRESHOLD = 20;

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeId = useScrollSpy(sectionIds);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (event, href) => {
    event.preventDefault();
    scrollTo(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={[styles.navbar, isScrolled && styles.scrolled].filter(Boolean).join(" ")}>
      <Container className={styles.inner}>
        <a href="#home" className={styles.logo} onClick={(event) => handleNavClick(event, "#home")}>
          <Waves size={26} aria-hidden="true" />
          <span>{SITE_INFO.name}</span>
        </a>

        {isDesktop && (
          <nav aria-label="Primary" className={styles.links}>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className={[styles.link, activeId === link.id && styles.linkActive].filter(Boolean).join(" ")}
                aria-current={activeId === link.id ? "page" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        <div className={styles.actions}>
          {isDesktop && (
            <Button as="a" href="#contact" size="sm" onClick={(event) => handleNavClick(event, "#contact")}>
              Book a Lesson
            </Button>
          )}

          {!isDesktop && (
            <button
              type="button"
              className={styles.menuToggle}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-panel"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </Container>

      <AnimatePresence>
        {!isDesktop && isMobileMenuOpen && (
          <motion.nav
            id="mobile-nav-panel"
            aria-label="Mobile"
            className={styles.mobilePanel}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Container className={styles.mobileLinks}>
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                  className={[styles.mobileLink, activeId === link.id && styles.linkActive].filter(Boolean).join(" ")}
                >
                  {link.label}
                </a>
              ))}
              <Button
                as="a"
                href="#contact"
                onClick={(event) => handleNavClick(event, "#contact")}
                className={styles.mobileCta}
              >
                Book a Lesson
              </Button>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
