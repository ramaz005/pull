/**
 * Single source of truth for business info, reused by the Contact section,
 * Footer, and the JSON-LD structured data documented in src/utils/seo.js.
 * IMPORTANT: keep in sync with the hardcoded <script type="application/ld+json"> in index.html.
 */
export const SITE_INFO = {
  name: "Новая волна", // TODO: replace with real business name
  tagline: "Уроки плавания для детей от 5 лет и взрослых любого возраста.",
  url: "https://www.newwave-swimschool.example.com", // TODO: replace with real domain
  logo: "/favicon.svg",
};

export const CONTACT = {
  phone: "+7 (999) 123-45-67", // TODO: replace with real phone number
  phoneHref: "tel:+79991234567",
  telegram: { handle: "@novaya_volna", href: "https://t.me/novaya_volna" }, // TODO: replace with real Telegram
  email: "hello@newwave-swimschool.example.com",
  address: {
    street: "482 Harbor View Lane",
    city: "Springfield",
    region: "IL",
    postalCode: "62701",
    country: "US",
  },
};

export const BUSINESS_HOURS = [
  { day: "Понедельник – Пятница", hours: "7:00 – 20:00" },
  { day: "Суббота", hours: "8:00 – 18:00" },
  { day: "Воскресенье", hours: "9:00 – 16:00" },
];

export const SOCIAL = {
  instagram: "https://instagram.com/newwaveswim",
  facebook: "https://facebook.com/newwaveswim",
  youtube: "https://youtube.com/@newwaveswim",
};
