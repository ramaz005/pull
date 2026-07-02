/**
 * Resolves the string icon names stored in /src/data/*.js files to their
 * lucide-react components. Keeping icons as strings in data files means
 * content can be edited without touching JSX imports.
 */
import {
  Users,
  Users2,
  UsersRound,
  UserRound,
  UserCheck,
  CalendarDays,
  CalendarClock,
  Medal,
  Smile,
  BadgeCheck,
  Waves,
  ShieldCheck,
  TrendingUp,
  Heart,
  Baby,
  Trophy,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

export const iconMap = {
  Users,
  Users2,
  UsersRound,
  UserRound,
  UserCheck,
  CalendarDays,
  CalendarClock,
  Medal,
  Smile,
  BadgeCheck,
  Waves,
  ShieldCheck,
  TrendingUp,
  Heart,
  Baby,
  Trophy,
  Instagram,
  Facebook,
  Youtube,
};

/** Returns the resolved icon component for a string key, or null if not found. */
export function getIcon(name) {
  return iconMap[name] ?? null;
}
