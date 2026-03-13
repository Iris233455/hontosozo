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
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            利用規約
          </h1>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              本利用規約（以下「本規約」といいます。）は、合同会社本当創造（以下「当社」といいます。）が提供する「Nyanko
              Tarot（にゃんこタロット）」（以下「本サービス」といいます。）の利用条件を定めるものです。
            </p>
            <p>
              ユーザーは、本規約に同意のうえ、本サービスを利用するものとします。
            </p>
          </div>
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold mb-6 text-slate-900 border-b border-slate-200 pb-2">
              第1条（適用）
            </h2>
            <p className="text-slate-600 leading-relaxed">
              本規約は、本サービスの利用に関して、当社とユーザーとの間の一切の関係に適用されます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-slate-900 border-b border-slate-200 pb-2">
              第2条（利用登録）
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                ユーザーは、本規約に同意したうえで、本サービスを利用するものとします。
              </p>
              <p>
                未成年のユーザーは、保護者の同意を得たうえで、本サービスを利用してください。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-slate-900 border-b border-slate-200 pb-2">
              第3条（本サービスの利用）
            </h2>
            <p className="text-slate-600 leading-relaxed">
              本サービスは、当社が定める方法に従って利用するものとします。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-slate-900 border-b border-slate-200 pb-2">
              第4条（利用環境）
            </h2>
            <p className="text-slate-600 leading-relaxed">
              本サービスの利用に必要な端末、通信環境、通信費その他一切の費用は、ユーザーの負担とします。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-slate-900 border-b border-slate-200 pb-2">
              第5条（お問い合わせ）
            </h2>
            <p className="text-slate-600 leading-relaxed">
              本サービスに関するお問い合わせは、本サービス内の「お問い合わせ」からご連絡ください。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-slate-900 border-b border-slate-200 pb-2">
              第6条（禁止事項）
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>ユーザーは、以下の行為をしてはなりません。</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>不正アクセス</li>
                <li>システムの運営または保守を妨害する行為</li>
                <li>虚偽の情報を登録または送信する行為</li>
                <li>本サービスの営業または運営を妨害する行為</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-slate-900 border-b border-slate-200 pb-2">
              第7条（免責事項）
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                本サービスは、占いおよび娯楽を目的として提供されるものであり、医療、法律、投資判断その他の専門的助言を行うものではありません。
              </p>
              <p>
                当社は、占い結果その他本サービスにより提供される情報の正確性、有用性、完全性または特定の成果を保証しません。
              </p>
              <p>
                ユーザーが本サービスの利用または占い結果に基づいて行った判断または行動により生じた損害について、当社は責任を負いません。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-slate-900 border-b border-slate-200 pb-2">
              第8条（サービスの変更・終了）
            </h2>
            <p className="text-slate-600 leading-relaxed">
              当社は、事前に告知したうえで、本サービスの全部または一部を変更し、または終了することがあります。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-slate-900 border-b border-slate-200 pb-2">
              第9条（準拠法・管轄）
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>本規約は、日本法に準拠し、日本法に従って解釈されます。</p>
              <p>
                本サービスまたは本規約に関して生じた紛争については、当社所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。
              </p>
            </div>
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
