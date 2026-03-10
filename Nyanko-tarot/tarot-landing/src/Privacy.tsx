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
                        <h2 className="text-xl font-bold text-brand-navy mb-4 border-b border-gray-100 pb-2">1. 基本方針</h2>
                        <p>
                            合同会社本当創造（以下「当社」といいます）は、当社が提供するサービス「Nyanko Tarot（にゃんこタロット）」（以下「本サービス」といいます）において、利用者の個人情報およびプライバシーの保護を重要な責務と認識し、以下の方針に基づき適切に取り扱います。
                        </p>
                    </section>

                    <section className="mb-10 text-sm md:text-base">
                        <h2 className="text-xl font-bold text-brand-navy mb-4 border-b border-gray-100 pb-2">2. 取得する情報</h2>
                        <p className="mb-4">当社は、本サービスの提供にあたり、以下の情報を取得する場合があります。</p>

                        <div className="space-y-4">
                            <div>
                                <h3 className="font-bold text-brand-navy mb-2">(1) 利用者が入力する情報</h3>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>リーディングのために入力された質問やメッセージ</li>
                                    <li>フィードバックやお問い合わせ内容</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-brand-navy mb-2">(2) サービス利用情報</h3>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>利用日時</li>
                                    <li>利用機能</li>
                                    <li>アクセスログ</li>
                                    <li>端末情報</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-brand-navy mb-2">(3) LINEプラットフォームから取得される情報</h3>
                                <p className="mb-2">LINEアプリを通じて本サービスを利用する場合、以下の情報を取得することがあります。</p>
                                <ul className="list-disc pl-6 space-y-1 mb-2">
                                    <li>LINEユーザー識別子</li>
                                    <li>表示名</li>
                                    <li>その他LINEプラットフォームが提供する情報</li>
                                </ul>
                                <p className="text-xs text-gray-500 bg-gray-50 p-3 rounded-lg border border-gray-100">※取得される情報はLINEのプライバシー設定および利用規約に基づきます。</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-10 text-sm md:text-base">
                        <h2 className="text-xl font-bold text-brand-navy mb-4 border-b border-gray-100 pb-2">3. 利用目的</h2>
                        <p className="mb-2">取得した情報は、以下の目的で利用します。</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>本サービスの提供および機能改善</li>
                            <li>AIリーディング機能の提供</li>
                            <li>利用状況の分析</li>
                            <li>不正利用の防止</li>
                            <li>お問い合わせ対応</li>
                            <li>サービス品質向上</li>
                        </ul>
                    </section>

                    <section className="mb-10 text-sm md:text-base">
                        <h2 className="text-xl font-bold text-brand-navy mb-4 border-b border-gray-100 pb-2">4. AIサービスの利用</h2>
                        <p>
                            本サービスでは、AIによるリーディング生成のため、利用者が入力した内容の一部を外部AIサービスに送信する場合があります。<br />
                            当該データはリーディング結果生成の目的にのみ使用されます。
                        </p>
                    </section>

                    <section className="mb-10 text-sm md:text-base">
                        <h2 className="text-xl font-bold text-brand-navy mb-4 border-b border-gray-100 pb-2">5. 第三者提供</h2>
                        <p className="mb-2">当社は、以下の場合を除き、利用者の個人情報を第三者に提供することはありません。</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>利用者の同意がある場合</li>
                            <li>法令に基づく場合</li>
                            <li>サービス提供に必要な範囲で業務委託する場合</li>
                        </ul>
                    </section>

                    <section className="mb-10 text-sm md:text-base">
                        <h2 className="text-xl font-bold text-brand-navy mb-4 border-b border-gray-100 pb-2">6. Cookieおよびアクセス解析</h2>
                        <p>
                            本サービスでは、サービス改善のためアクセス解析ツールを利用する場合があります。<br />
                            これにより匿名の利用データが収集される場合があります。
                        </p>
                    </section>

                    <section className="mb-10 text-sm md:text-base">
                        <h2 className="text-xl font-bold text-brand-navy mb-4 border-b border-gray-100 pb-2">7. データの管理</h2>
                        <p>
                            当社は、取得した情報の漏えい、紛失、不正アクセス等を防止するため、適切な安全管理措置を講じます。
                        </p>
                    </section>

                    <section className="mb-10 text-sm md:text-base">
                        <h2 className="text-xl font-bold text-brand-navy mb-4 border-b border-gray-100 pb-2">8. 利用者の権利</h2>
                        <p>
                            利用者は、当社が保有する個人情報について、開示、訂正、削除等を求めることができます。
                        </p>
                    </section>

                    <section className="mb-10 text-sm md:text-base">
                        <h2 className="text-xl font-bold text-brand-navy mb-4 border-b border-gray-100 pb-2">9. プライバシーポリシーの変更</h2>
                        <p>
                            当社は、必要に応じて本ポリシーを変更することがあります。<br />
                            重要な変更がある場合は、Webサイト等で通知します。
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
