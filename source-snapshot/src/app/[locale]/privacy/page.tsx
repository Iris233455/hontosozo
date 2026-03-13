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
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            プライバシーポリシー
          </h1>
          <p className="text-slate-600 leading-relaxed">
            合同会社本当創造（以下「当社」といいます。）は、当社が提供するサービス「Nyanko
            Tarot（にゃんこタロット）」（以下「本サービス」といいます。）におけるユーザーの個人情報およびプライバシーの保護を重要な責務と認識し、本ポリシーに基づき、これらの情報を適切に取り扱います。
          </p>
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold mb-6 text-slate-900 border-b border-slate-200 pb-2">
              1. 取得する情報
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <div>
                <h3 className="font-semibold text-slate-900 mb-3">
                  （1）ユーザーが入力する情報
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>占いの利用時に入力された質問内容</li>
                  <li>生年月日、性別その他のプロフィール情報（任意入力）</li>
                  <li>お問い合わせ時に入力されたメールアドレス</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-3">
                  （2）自動的に取得する情報
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    端末・ブラウザに関する情報（OS、端末種別、ブラウザ種別、アプリ/サイトのバージョン等）
                  </li>
                  <li>識別子（Cookie、ローカルストレージ等）</li>
                  <li>利用履歴（占いの利用回数、機能の利用状況等）</li>
                  <li>IPアドレス、アクセス日時</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-slate-900 border-b border-slate-200 pb-2">
              2. 利用目的
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              当社は、取得した情報を以下の目的で利用します。
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>占い結果およびAIによる解釈の提供</li>
              <li>本サービスの改善および品質向上</li>
              <li>不正利用の防止</li>
              <li>お問い合わせへの対応</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-slate-900 border-b border-slate-200 pb-2">
              3. AI処理について（重要）
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                本サービスでは、AIによる解釈を生成するため、ユーザーが入力した内容を匿名化したうえで、外部のAIサービスに送信することがあります。
              </p>
              <p>
                なお、送信される情報には、氏名、メールアドレスその他ユーザーを直接特定し得る情報は含まれません。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-slate-900 border-b border-slate-200 pb-2">
              4. 第三者提供および国外移転
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                当社は、次の場合を除き、個人情報を第三者に提供しません。
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>法令に基づく場合</li>
                <li>ユーザーの同意がある場合</li>
                <li>
                  分析目的で、個人を特定できない形式に加工したうえで外部サービスを利用する場合
                </li>
              </ul>
              <p>
                また、当社は、Google Analytics、Firebase
                など、海外のサーバー上で提供されるサービスを利用することがあります。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-slate-900 border-b border-slate-200 pb-2">
              5. 情報の管理
            </h2>
            <p className="text-slate-600 leading-relaxed">
              当社は、不正アクセス、漏えい等を防止するため、必要かつ適切な安全管理措置を講じます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-slate-900 border-b border-slate-200 pb-2">
              6. 保存期間
            </h2>
            <p className="text-slate-600 leading-relaxed">
              当社は、個人情報を利用目的の達成に必要な期間に限って保持し、その後、適切な方法で削除または廃棄します。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-slate-900 border-b border-slate-200 pb-2">
              7. ユーザーの権利
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>ユーザーは、当社に対し、以下の請求を行うことができます。</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>個人情報の開示</li>
                <li>訂正または削除</li>
                <li>利用停止</li>
              </ul>
              <p>
                アカウントの削除は、本サービス内の「アカウント削除」から行えます。操作ができない場合は、「お問い合わせ」よりご連絡ください。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-slate-900 border-b border-slate-200 pb-2">
              8. 未成年者
            </h2>
            <p className="text-slate-600 leading-relaxed">
              未成年のユーザーは、保護者の同意を得たうえで本サービスをご利用ください。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-slate-900 border-b border-slate-200 pb-2">
              9. ポリシーの変更
            </h2>
            <p className="text-slate-600 leading-relaxed">
              当社は、法令の改正その他必要に応じて、本ポリシーを変更することがあります。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-slate-900 border-b border-slate-200 pb-2">
              10. お問い合わせ
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>本ポリシーに関するお問い合わせは、以下までご連絡ください。</p>
              <ul className="space-y-2">
                <li>運営会社：合同会社本当創造</li>
                <li>サービス名：Nyanko Tarot（にゃんこタロット）</li>
                <li>
                  お問い合わせ：
                  <a
                    className="text-primary hover:text-primary/80 transition-colors"
                    href="mailto:support@hontosozo.com"
                  >
                    support@hontosozo.com
                  </a>
                </li>
              </ul>
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
