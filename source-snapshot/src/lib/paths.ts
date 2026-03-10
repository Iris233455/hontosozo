import type { Locale } from "@/lib/i18n";

export function localePath(locale: Locale, pathname: string) {
  if (pathname === "/") return `/${locale}`;
  return `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`;
}

