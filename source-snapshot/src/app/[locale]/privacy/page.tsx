import Link from "next/link";

import { normalizeLocale } from "@/lib/i18n";
import { localePath } from "@/lib/paths";

export default async function PrivacyPage({
  params,
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  const { locale: localeParam } = await params;
  const locale = normalizeLocale(localeParam);

  return (
    <div className="bg-background-light text-slate-800 antialiased min-h-screen flex flex-col">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            className="flex items-center text-primary hover:text-primary/80 transition-colors gap-2 font-medium"
            href={localePath(locale, "/")}
          >
            <span className="material-symbols-outlined text-xl">arrow_back</span>
            ホームに戻る
          </Link>

        </div>
      </header>

      <main className="flex-grow max-w-4xl mx-auto w-full px-6 py-12 md:py-20">
        <div className="mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            プライバシーポリシー
          </h1>
          <p className="text-slate-500 text-lg">
            最終更新日: 2026年3月5日
          </p>
          <p className="mt-4 text-slate-600">
            本文書は、合同会社本当創造（HONTO SOZO LLC）のプライバシーポリシーを定めたものです。
            当社のサービスをご利用いただく前に、必ずお読みください。
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-6 text-slate-900 border-b border-slate-200 pb-2">
              1. 収集する情報
            </h2>
            <p className="text-slate-600 leading-relaxed">
              当社は、お客様が直接ご提供いただく情報（お問い合わせフォームなど）を収集します。
              これには、お名前、メールアドレス、お問い合わせ内容が含まれる場合があります。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-slate-900 border-b border-slate-200 pb-2">
              2. 利用目的
            </h2>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>サービスの提供および改善。</li>
              <li>お問い合わせやサポートリクエストへの対応。</li>
              <li>不正利用の防止（該当する場合）。</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-slate-900 border-b border-slate-200 pb-2">
              3. 第三者への提供
            </h2>
            <p className="text-slate-600 leading-relaxed">
              当社は、サービスの運営に必要な場合または法令に基づく場合を除き、
              個人情報を第三者に提供することはありません。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-slate-900 border-b border-slate-200 pb-2">
              4. データの安全管理
            </h2>
            <p className="text-slate-600 leading-relaxed">
              当社は、不正アクセス、漏洩、改ざん、または破壊から情報を保護するために、
              合理的な措置を講じています。
            </p>
          </section>
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 mt-auto">
        <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-500">
            © 2026 合同会社本当創造（HONTO SOZO LLC）. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <Link
              className="text-slate-600 hover:text-primary transition-colors"
              href={localePath(locale, "/privacy")}
            >
              プライバシーポリシー
            </Link>
            <Link
              className="text-slate-600 hover:text-primary transition-colors"
              href={localePath(locale, "/terms")}
            >
              利用規約
            </Link>
            <Link
              className="text-slate-600 hover:text-primary transition-colors"
              href={localePath(locale, "/#contact")}
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
