import { defaultLocale, locales, type Locale } from "@/constants/locales";

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale.code === value);
}

export function getLocaleFromPathname(pathname: string): Locale {
  const firstSegment = pathname.split("/").filter(Boolean)[0];

  if (firstSegment && isLocale(firstSegment)) {
    return firstSegment;
  }

  return defaultLocale;
}

export function removeLocaleFromPathname(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  if (firstSegment && isLocale(firstSegment)) {
    return `/${segments.slice(1).join("/")}`;
  }

  return pathname;
}

export function localizePathname(pathname: string, locale: Locale) {
  const pathnameWithoutLocale = removeLocaleFromPathname(pathname);

  if (pathnameWithoutLocale === "/") {
    return `/${locale}`;
  }

  return `/${locale}${pathnameWithoutLocale}`;
}