import { NextResponse, type NextRequest } from "next/server";

const supportedLocales = ["fr", "en"] as const;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  const hasLocale = supportedLocales.some(
    (locale) => locale === firstSegment
  );

  if (!hasLocale) {
    return NextResponse.next();
  }

  const pathnameWithoutLocale =
    segments.length > 1 ? `/${segments.slice(1).join("/")}` : "/";

  const rewriteUrl = request.nextUrl.clone();
  rewriteUrl.pathname = pathnameWithoutLocale;

  return NextResponse.rewrite(rewriteUrl);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)",
  ],
};