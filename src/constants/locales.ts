export const locales = [
  {
    code: "fr",
    label: "Français",
    shortLabel: "FR",
  },
  {
    code: "en",
    label: "English",
    shortLabel: "EN",
  },
] as const;

export const defaultLocale = "fr";

export type Locale = (typeof locales)[number]["code"];
