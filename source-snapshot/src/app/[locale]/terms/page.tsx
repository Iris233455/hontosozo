import Link from "next/link";

import { normalizeLocale } from "@/lib/i18n";
import { localePath } from "@/lib/paths";

export default async function TermsPage({
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
            利用規約
          </h1>
          <p className="text-slate-500 text-lg">
            最終更新日: 2026年3月5日
          </p>
          <p className="mt-4 text-slate-600">
            本規約は、合同会社本当創造（HONTO SOZO LLC）のウェブサイトおよびサービスのご利用条件を定めたものです。
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-6 text-slate-900 border-b border-slate-200 pb-2">
              1. 規約への同意
            </h2>
            <p className="text-slate-600 leading-relaxed">
              当社のウェブサイトにアクセスし、ご利用いただくことにより、本規約に同意したものとみなされます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-slate-900 border-b border-slate-200 pb-2">
              2. サービスの変更
            </h2>
            <p className="text-slate-600 leading-relaxed">
              当社は、事前の通知の有無にかかわらず、サービスの内容を変更または中止する場合があります。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-slate-900 border-b border-slate-200 pb-2">
              3. 利用上の注意
            </h2>
            <p className="text-slate-600 leading-relaxed">
              本サービスは合法的な目的にのみご利用いただくものとし、
              有害または不正なコンテンツの送信を行わないことに同意するものとします。
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
