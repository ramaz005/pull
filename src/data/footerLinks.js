/**
 * Footer navigation columns. Contact details live in src/utils/constants.js
 * (single source of truth shared with the Contact section and JSON-LD).
 */
export const footerLinks = {
  quickLinks: [
    { label: "Главная", href: "#home" },
    { label: "О нас", href: "#about" },
    { label: "Тренеры", href: "#coaches" },
    { label: "Цены", href: "#pricing" },
    { label: "Вопросы", href: "#faq" },
    { label: "Контакты", href: "#contact" },
  ],
  programs: [
    { label: "Дети от 5 лет", href: "#programs" },
    { label: "Подростки", href: "#programs" },
    { label: "Взрослые", href: "#programs" },
    { label: "Индивидуальные занятия", href: "#programs" },
    { label: "Соревновательная подготовка", href: "#programs" },
  ],
  legal: [
    { label: "Политика конфиденциальности", href: "#" },
    { label: "Условия использования", href: "#" },
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com", icon: "Instagram" },
    { label: "Facebook", href: "https://facebook.com", icon: "Facebook" },
    { label: "YouTube", href: "https://youtube.com", icon: "Youtube" },
  ],
};
