import { SITE_INFO, CONTACT, BUSINESS_HOURS, SOCIAL } from "./constants";

/**
 * Builds the LocalBusiness/SportsActivityLocation JSON-LD object from the
 * single source of truth in constants.js.
 *
 * NOTE: This is a Vite SPA with no server-side rendering, so search engine
 * crawlers may not reliably execute JS to see a runtime-injected <script> tag.
 * For that reason the *canonical* copy of this schema is hardcoded directly
 * into index.html's <head>. Treat the object returned here as the source of
 * truth to copy from whenever SITE_INFO/CONTACT/BUSINESS_HOURS change -
 * update index.html to match. If you later migrate to a framework with SSR/SSG
 * (Next.js, Astro, Remix), this function can be rendered directly instead.
 */
export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: SITE_INFO.name,
    description: SITE_INFO.tagline,
    url: SITE_INFO.url,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    image: `${SITE_INFO.url}/og-cover.jpg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address.street,
      addressLocality: CONTACT.address.city,
      addressRegion: CONTACT.address.region,
      postalCode: CONTACT.address.postalCode,
      addressCountry: CONTACT.address.country,
    },
    openingHoursSpecification: BUSINESS_HOURS.map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: entry.day,
      hours: entry.hours,
    })),
    sameAs: Object.values(SOCIAL),
  };
}
