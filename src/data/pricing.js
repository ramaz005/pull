/**
 * Pricing plan cards rendered by the Pricing section (PricingCard.jsx).
 * Prices are illustrative placeholders - update to match your actual rate card.
 */
export const pricing = [
  {
    id: "kids",
    planName: "Kids Membership",
    price: 89,
    billingPeriod: "month",
    description: "Perfect for young beginners building water confidence.",
    features: [
      { text: "2 group lessons per week", included: true },
      { text: "Digital progress tracking", included: true },
      { text: "Access to open swim hours", included: true },
      { text: "Private coaching", included: false },
      { text: "Competition squad access", included: false },
    ],
    ctaLabel: "Choose Plan",
    isPopular: false,
  },
  {
    id: "adults",
    planName: "Adults Membership",
    price: 99,
    billingPeriod: "month",
    description: "Flexible learning for beginners and fitness swimmers alike.",
    features: [
      { text: "2 group lessons per week", included: true },
      { text: "Evening & weekend slots", included: true },
      { text: "Access to open swim hours", included: true },
      { text: "Private coaching", included: false },
      { text: "Nutrition & recovery guidance", included: false },
    ],
    ctaLabel: "Choose Plan",
    isPopular: false,
  },
  {
    id: "private",
    planName: "Private Lessons",
    price: 65,
    billingPeriod: "session",
    description: "One-on-one coaching tailored to individual goals.",
    features: [
      { text: "1-on-1 dedicated coach", included: true },
      { text: "Custom lesson plan", included: true },
      { text: "Flexible scheduling", included: true },
      { text: "Progress reviews every session", included: true },
      { text: "Priority booking", included: true },
    ],
    ctaLabel: "Book Now",
    isPopular: false,
  },
  {
    id: "premium",
    planName: "Premium Plan",
    price: 149,
    billingPeriod: "month",
    description: "Our most popular plan - unlimited access plus private coaching credits.",
    features: [
      { text: "Unlimited group lessons", included: true },
      { text: "2 private coaching credits/month", included: true },
      { text: "Priority scheduling", included: true },
      { text: "Competition squad access", included: true },
      { text: "Free annual skill assessment", included: true },
    ],
    ctaLabel: "Get Premium",
    isPopular: true,
  },
];
