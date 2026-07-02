/**
 * Program cards rendered by the Programs section (ProgramCard.jsx).
 * `featured` highlights a single program with an accent border/badge.
 */
export const programs = [
  {
    id: "children",
    icon: "Baby",
    title: "Children 5+",
    ageGroup: "Ages 5-12",
    description:
      "A playful, structured introduction to water confidence and stroke fundamentals for young beginners.",
    benefits: ["Water confidence building", "Stroke fundamentals", "Fun, game-based learning"],
    ctaLabel: "Explore Program",
    ctaHref: "#contact",
    featured: false,
  },
  {
    id: "teenagers",
    icon: "Users",
    title: "Teenagers",
    ageGroup: "Ages 13-17",
    description:
      "Fitness-focused sessions that sharpen technique, build endurance, and prepare teens for team or solo swimming.",
    benefits: ["Advanced stroke technique", "Endurance & conditioning", "Peer group classes"],
    ctaLabel: "Explore Program",
    ctaHref: "#contact",
    featured: false,
  },
  {
    id: "adults",
    icon: "UserRound",
    title: "Adults",
    ageGroup: "Any age",
    description:
      "It's never too late to learn. Judgment-free classes for absolute beginners through adults polishing technique.",
    benefits: ["Beginner-friendly pacing", "Fitness & stress relief", "Flexible evening slots"],
    ctaLabel: "Explore Program",
    ctaHref: "#contact",
    featured: true,
  },
  {
    id: "private",
    icon: "UserCheck",
    title: "Private Lessons",
    ageGroup: "All ages",
    description:
      "One-on-one coaching tailored to individual goals, fears, or performance targets, at a pace that fits you.",
    benefits: ["1-on-1 coach attention", "Custom lesson plans", "Fastest skill progress"],
    ctaLabel: "Book Private Lesson",
    ctaHref: "#contact",
    featured: false,
  },
  {
    id: "group",
    icon: "UsersRound",
    title: "Group Lessons",
    ageGroup: "All ages",
    description:
      "Small-group classes (max 6 swimmers) that combine structured coaching with the fun of learning alongside peers.",
    benefits: ["Max 6 swimmers per class", "Social, motivating setting", "Lower cost per lesson"],
    ctaLabel: "Join a Group",
    ctaHref: "#contact",
    featured: false,
  },
  {
    id: "competition",
    icon: "Trophy",
    title: "Competition Training",
    ageGroup: "Ages 10+",
    description:
      "Structured squad training for swimmers aiming to compete, with technique review, starts/turns, and race pacing.",
    benefits: ["Race-pace conditioning", "Starts, turns & finishes", "Meet-ready preparation"],
    ctaLabel: "Join the Squad",
    ctaHref: "#contact",
    featured: false,
  },
];
