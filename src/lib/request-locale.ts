import { headers } from "next/headers";

import { defaultLocale } from "@/constants/locales";
import { isLocale } from "@/lib/i18n";

const localeHeaderName = "x-prooftag-locale";

export async function getRequestLocale() {
  const requestLocale = (await headers()).get(localeHeaderName);

  return requestLocale && isLocale(requestLocale)
    ? requestLocale
    : defaultLocale;
}
