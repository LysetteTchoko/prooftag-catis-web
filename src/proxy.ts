import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale } from "@/constants/locales";
import { isLocale } from "@/lib/i18n";

const supportedLocales = ["fr", "en"] as const;
const localeHeaderName = "x-prooftag-locale";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];
  const existingLocale = request.headers.get(localeHeaderName);
  const hasInternalLocale = existingLocale ? isLocale(existingLocale) : false;

  const hasLocale = supportedLocales.some(
    (locale) => locale === firstSegment
  );
  const requestLocale = hasLocale
    ? firstSegment
    : hasInternalLocale && existingLocale
      ? existingLocale
      : defaultLocale;

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(localeHeaderName, requestLocale);

  if (!hasLocale) {
    if (hasInternalLocale) {
      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    }

    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname =
      pathname === "/" ? `/${defaultLocale}` : `/${defaultLocale}${pathname}`;

    return NextResponse.redirect(redirectUrl);
  }

  const pathnameWithoutLocale =
    segments.length > 1 ? `/${segments.slice(1).join("/")}` : "/";

  const rewriteUrl = request.nextUrl.clone();
  rewriteUrl.pathname = pathnameWithoutLocale;

  return NextResponse.rewrite(rewriteUrl, {
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)",
  ],
};
