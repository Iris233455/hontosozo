import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { tarotAppLogo } from './assets';

const Terms: FC = () => {
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
                <h1 className="text-3xl font-bold text-brand-navy mb-8 text-center">利用規約</h1>

                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 text-gray-700 leading-relaxed font-medium">
                    <section className="mb-10 text-sm md:text-base">
                        <p className="mb-4">
                            本利用規約（以下「本規約」といいます。）は、合同会社本当創造（以下「当社」といいます。）が提供する「Nyanko Tarot（にゃんこタロット）」（以下「本サービス」といいます。）の利用条件を定めるものです。
                        </p>
                        <p>
                            ユーザーは、本規約に同意のうえ、本サービスを利用するものとします。
                        </p>
                    </section>

                    <section className="mb-10 text-sm md:text-base">
                        <h2 className="text-xl font-bold text-brand-navy mb-4 border-b border-gray-100 pb-2">第1条（適用）</h2>
                        <p>
                            本規約は、本サービスの利用に関して、当社とユーザーとの間の一切の関係に適用されます。
                        </p>
                    </section>

                    <section className="mb-10 text-sm md:text-base">
                        <h2 className="text-xl font-bold text-brand-navy mb-4 border-b border-gray-100 pb-2">第2条（利用登録）</h2>
                        <p className="mb-4">
                            ユーザーは、本規約に同意したうえで、本サービスを利用するものとします。
                        </p>
                        <p>未成年のユーザーは、保護者の同意を得たうえで、本サービスを利用してください。</p>
                    </section>

                    <section className="mb-10 text-sm md:text-base">
                        <h2 className="text-xl font-bold text-brand-navy mb-4 border-b border-gray-100 pb-2">第3条（本サービスの利用）</h2>
                        <p>
                            本サービスは、当社が定める方法に従って利用するものとします。
                        </p>
                    </section>

                    <section className="mb-10 text-sm md:text-base">
                        <h2 className="text-xl font-bold text-brand-navy mb-4 border-b border-gray-100 pb-2">第4条（利用環境）</h2>
                        <p>
                            本サービスの利用に必要な端末、通信環境、通信費その他一切の費用は、ユーザーの負担とします。
                        </p>
                    </section>

                    <section className="mb-10 text-sm md:text-base">
                        <h2 className="text-xl font-bold text-brand-navy mb-4 border-b border-gray-100 pb-2">第5条（お問い合わせ）</h2>
                        <p>
                            本サービスに関するお問い合わせは、本サービス内の「お問い合わせ」からご連絡ください。
                        </p>
                    </section>

                    <section className="mb-10 text-sm md:text-base">
                        <h2 className="text-xl font-bold text-brand-navy mb-4 border-b border-gray-100 pb-2">第6条（禁止事項）</h2>
                        <p className="mb-2">ユーザーは、以下の行為をしてはなりません。</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>不正アクセス</li>
                            <li>システムの運営または保守を妨害する行為</li>
                            <li>虚偽の情報を登録または送信する行為</li>
                            <li>本サービスの営業または運営を妨害する行為</li>
                        </ul>
                    </section>

                    <section className="mb-10 text-sm md:text-base">
                        <h2 className="text-xl font-bold text-brand-navy mb-4 border-b border-gray-100 pb-2">第7条（免責事項）</h2>
                        <p className="mb-4">本サービスは、占いおよび娯楽を目的として提供されるものであり、医療、法律、投資判断その他の専門的助言を行うものではありません。</p>
                        <p className="mb-4">当社は、占い結果その他本サービスにより提供される情報の正確性、有用性、完全性または特定の成果を保証しません。</p>
                        <p>ユーザーが本サービスの利用または占い結果に基づいて行った判断または行動により生じた損害について、当社は責任を負いません。</p>
                    </section>

                    <section className="mb-10 text-sm md:text-base">
                        <h2 className="text-xl font-bold text-brand-navy mb-4 border-b border-gray-100 pb-2">第8条（サービスの変更・終了）</h2>
                        <p>
                            当社は、事前に告知したうえで、本サービスの全部または一部を変更し、または終了することがあります。
                        </p>
                    </section>

                    <section className="mb-4 text-sm md:text-base">
                        <h2 className="text-xl font-bold text-brand-navy mb-4 border-b border-gray-100 pb-2">第9条（準拠法・管轄）</h2>
                        <p>
                            本規約は、日本法に準拠し、日本法に従って解釈されます。
                        </p>
                        <p className="mt-4">
                            本サービスまたは本規約に関して生じた紛争については、当社所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。
                        </p>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Terms;
