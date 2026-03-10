"use client";

import { useSearchParams } from "next/navigation";

import type { Locale } from "@/lib/i18n";

const SERVICE_LABEL: Record<Locale, Record<string, string>> = {
  en: {
    study: "Study Support",
    housing: "Housing Support",
    consulting: "Consultation",
  },
  ja: {
    study: "学び支援",
    housing: "住まい支援",
    consulting: "人生相談",
  },
  zh: {
    study: "留学/学习支持",
    housing: "住房支持",
    consulting: "咨询",
  },
};

const MESSAGE: Record<Locale, (serviceLabel: string) => string> = {
  en: (serviceLabel) =>
    `The link for ${serviceLabel} is not configured yet. Please contact us below.`,
  ja: (serviceLabel) =>
    `${serviceLabel} のリンクがまだ設定されていません。下のフォームからご連絡ください。`,
  zh: (serviceLabel) =>
    `${serviceLabel} 的外部链接尚未配置，请在下方联系表单中联系我们。`,
};

export function MissingServiceNotice({ locale }: { locale: Locale }) {
  const searchParams = useSearchParams();
  const missing = searchParams.get("missing");
  if (!missing) return null;

  const serviceLabel = SERVICE_LABEL[locale][missing] ?? missing;

  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
      {MESSAGE[locale](serviceLabel)}
    </div>
  );
}

