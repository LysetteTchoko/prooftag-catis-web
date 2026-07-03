"use client";

import { usePathname } from "next/navigation";

import { getLocaleFromPathname } from "@/lib/i18n";

export function useLocale() {
  const pathname = usePathname();

  return getLocaleFromPathname(pathname);
}