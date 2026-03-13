import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { tarotAppLogo } from './assets';

const Privacy: FC = () => {
    return (
        <div className="bg-brand-cream text-brand-navy min-h-screen font-sans selection:bg-brand-lavender pb-20">
            <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <Link to="/" className="flex flex-shrink-0 items-center gap-1.5 group">
                            <img src={tarotAppLogo} alt="Nyanko Tarot Logo" className="w-12 h-12 object-contain group-hover:scale-105 transition-transform" />
                            <span className="font-bold text-xl tracking-tight text-brand-navy">Nyanko Tarot</span>
                        </Link>
                        <div className="flex items-center">
                            <Link to="/" className="text-gray-500 hover:text-brand-navy text-sm font-medium transition-colors flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                ホームに戻る
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
                <h1 className="text-3xl font-bold text-brand-navy mb-8 text-center">プライバシーポリシー</h1>

                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 text-gray-700 leading-relaxed font-medium">
                    <section className="mb-10 text-sm md:text-base">
                        <p>
                            合同会社本当創造（以下「当社」といいます。）は、当社が提供するサービス「Nyanko Tarot（にゃんこタロット）」（以下「本サービス」といいます。）におけるユーザーの個人情報およびプライバシーの保護を重要な責務と認識し、本ポリシーに基づき、これらの情報を適切に取り扱います。
                        </p>
                    </section>

                    <section className="mb-10 text-sm md:text-base">
                        <h2 className="text-xl font-bold text-brand-navy mb-4 border-b border-gray-100 pb-2">1. 取得する情報</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-brand-navy mb-2">（1）ユーザーが入力する情報</h3>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>占いの利用時に入力された質問内容</li>
                                    <li>生年月日、性別その他のプロフィール情報（任意入力）</li>
                                    <li>お問い合わせ時に入力されたメールアドレス</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-brand-navy mb-2">（2）自動的に取得する情報</h3>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>端末・ブラウザに関する情報（OS、端末種別、ブラウザ種別、アプリ/サイトのバージョン等）</li>
                                    <li>識別子（Cookie、ローカルストレージ等）</li>
                                    <li>利用履歴（占いの利用回数、機能の利用状況等）</li>
                                    <li>IPアドレス、アクセス日時</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="mb-10 text-sm md:text-base">
                        <h2 className="text-xl font-bold text-brand-navy mb-4 border-b border-gray-100 pb-2">2. 利用目的</h2>
                        <p className="mb-2">当社は、取得した情報を以下の目的で利用します。</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>占い結果およびAIによる解釈の提供</li>
                            <li>本サービスの改善および品質向上</li>
                            <li>不正利用の防止</li>
                            <li>お問い合わせへの対応</li>
                        </ul>
                    </section>

                    <section className="mb-10 text-sm md:text-base">
                        <h2 className="text-xl font-bold text-brand-navy mb-4 border-b border-gray-100 pb-2">3. AI処理について（重要）</h2>
                        <p>
                            本サービスでは、AIによる解釈を生成するため、ユーザーが入力した内容を匿名化したうえで、外部のAIサービスに送信することがあります。
                        </p>
                        <p>
                            なお、送信される情報には、氏名、メールアドレスその他ユーザーを直接特定し得る情報は含まれません。
                        </p>
                    </section>

                    <section className="mb-10 text-sm md:text-base">
                        <h2 className="text-xl font-bold text-brand-navy mb-4 border-b border-gray-100 pb-2">4. 第三者提供および国外移転</h2>
                        <p className="mb-2">当社は、次の場合を除き、個人情報を第三者に提供しません。</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>法令に基づく場合</li>
                            <li>ユーザーの同意がある場合</li>
                            <li>分析目的で、個人を特定できない形式に加工したうえで外部サービスを利用する場合</li>
                        </ul>
                        <p className="mt-4">
                            また、当社は、Google Analytics、Firebase など、海外のサーバー上で提供されるサービスを利用することがあります。
                        </p>
                    </section>

                    <section className="mb-10 text-sm md:text-base">
                        <h2 className="text-xl font-bold text-brand-navy mb-4 border-b border-gray-100 pb-2">5. 情報の管理</h2>
                        <p>
                            当社は、不正アクセス、漏えい等を防止するため、必要かつ適切な安全管理措置を講じます。
                        </p>
                    </section>

                    <section className="mb-10 text-sm md:text-base">
                        <h2 className="text-xl font-bold text-brand-navy mb-4 border-b border-gray-100 pb-2">6. 保存期間</h2>
                        <p>
                            当社は、個人情報を利用目的の達成に必要な期間に限って保持し、その後、適切な方法で削除または廃棄します。
                        </p>
                    </section>

                    <section className="mb-10 text-sm md:text-base">
                        <h2 className="text-xl font-bold text-brand-navy mb-4 border-b border-gray-100 pb-2">7. ユーザーの権利</h2>
                        <p className="mb-2">ユーザーは、当社に対し、以下の請求を行うことができます。</p>
                        <ul className="list-disc pl-6 space-y-1 mb-4">
                            <li>個人情報の開示</li>
                            <li>訂正または削除</li>
                            <li>利用停止</li>
                        </ul>
                        <p>
                            アカウントの削除は、本サービス内の「アカウント削除」から行えます。操作ができない場合は、「お問い合わせ」よりご連絡ください。
                        </p>
                    </section>

                    <section className="mb-10 text-sm md:text-base">
                        <h2 className="text-xl font-bold text-brand-navy mb-4 border-b border-gray-100 pb-2">8. 未成年者</h2>
                        <p>
                            未成年のユーザーは、保護者の同意を得たうえで本サービスをご利用ください。
                        </p>
                    </section>

                    <section className="mb-10 text-sm md:text-base">
                        <h2 className="text-xl font-bold text-brand-navy mb-4 border-b border-gray-100 pb-2">9. ポリシーの変更</h2>
                        <p>
                            当社は、法令の改正その他必要に応じて、本ポリシーを変更することがあります。
                        </p>
                    </section>

                    <section className="text-sm md:text-base border-t-2 border-brand-cream pt-8 mt-12 bg-gray-50/50 p-6 rounded-xl border border-gray-100">
                        <h2 className="text-xl font-bold text-brand-navy mb-4">10. お問い合わせ</h2>
                        <p className="mb-4">本ポリシーに関するお問い合わせは、以下までご連絡ください。</p>
                        <ul className="space-y-2 font-medium">
                            <li>運営会社：合同会社本当創造</li>
                            <li>サービス名：Nyanko Tarot（にゃんこタロット）</li>
                            <li>
                                お問い合わせ：<a href="mailto:support@hontosozo.com" className="text-brand-lavender-dark hover:underline">support@hontosozo.com</a>
                            </li>
                        </ul>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Privacy;
