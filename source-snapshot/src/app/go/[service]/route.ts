import { NextResponse, type NextRequest } from "next/server";

import { normalizeLocale, type Locale } from "@/lib/i18n";

function getServiceEnvUrl(service: string): string | undefined {
  switch (service) {
    case "study":
      return process.env.SERVICE_URL_STUDY;
    case "housing":
      return process.env.SERVICE_URL_HOUSING;
    case "consulting":
      return process.env.SERVICE_URL_CONSULTING;
    default:
      return undefined;
  }
}

function getFallbackUrl(origin: string, locale: Locale, service: string) {
  const url = new URL(origin);
  url.pathname = `/${locale}`;
  url.searchParams.set("missing", service);
  url.hash = "contact";
  return url;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ service: string }> },
) {
  const locale = normalizeLocale(request.nextUrl.searchParams.get("locale"));
  const { service } = await params;

  const target = getServiceEnvUrl(service);
  if (target) return NextResponse.redirect(target, 307);

  return NextResponse.redirect(getFallbackUrl(request.nextUrl.origin, locale, service), 307);
}

