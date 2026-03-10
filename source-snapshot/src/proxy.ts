import { NextResponse, type NextRequest } from "next/server";

import {
  DEFAULT_LOCALE,
  isLocale,
  LOCALE_COOKIE,
  LOCALE_COOKIE_MAX_AGE_SECONDS,
  type Locale,
} from "@/lib/i18n";

type LangPref = { tag: string; q: number };

function parseAcceptLanguage(header: string): LangPref[] {
  return header
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => {
      const [tagRaw, ...params] = part.split(";").map((s) => s.trim());
      let q = 1;
      for (const p of params) {
        if (!p.startsWith("q=")) continue;
        const parsed = Number(p.slice(2));
        if (!Number.isNaN(parsed)) q = parsed;
      }
      return { tag: tagRaw.toLowerCase(), q };
    })
    .sort((a, b) => b.q - a.q);
}

function pickLocaleFromAcceptLanguage(
  acceptLanguageHeader: string | null,
): Locale {
  if (!acceptLanguageHeader) return DEFAULT_LOCALE;

  for (const pref of parseAcceptLanguage(acceptLanguageHeader)) {
    const base = pref.tag.split("-")[0];
    if (isLocale(base)) return base;
  }

  return DEFAULT_LOCALE;
}

function setLocaleCookie(response: NextResponse, locale: Locale) {
  response.cookies.set(LOCALE_COOKIE, locale, {
    maxAge: LOCALE_COOKIE_MAX_AGE_SECONDS,
    path: "/",
    sameSite: "lax",
  });
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Keep these unprefixed by locale (e.g. /go/study -> external redirect)
  if (pathname === "/go" || pathname.startsWith("/go/")) {
    return NextResponse.next();
  }

  const firstSegment = pathname.split("/")[1];

  // If user is already in a locale path, just keep going and remember it.
  if (firstSegment && isLocale(firstSegment)) {
    const response = NextResponse.next();
    setLocaleCookie(response, firstSegment);
    return response;
  }

  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value ?? null;
  const locale = isLocale(cookieLocale)
    ? cookieLocale
    : pickLocaleFromAcceptLanguage(request.headers.get("accept-language"));

  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

  const response = NextResponse.redirect(url, 307);
  setLocaleCookie(response, locale);
  return response;
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};

