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
                        <h2 className="text-xl font-bold text-brand-navy mb-4 border-b border-gray-100 pb-2">第1条（本規約の適用）</h2>
                        <p>
                            本規約は、合同会社本当創造（以下「当社」）が提供する「Nyanko Tarot（にゃんこタロット）」の利用条件を定めるものです。<br />
                            利用者は、本規約に同意したうえで本サービスを利用するものとします。
                        </p>
                    </section>

                    <section className="mb-10 text-sm md:text-base">
                        <h2 className="text-xl font-bold text-brand-navy mb-4 border-b border-gray-100 pb-2">第2条（サービス内容）</h2>
                        <p className="mb-4">本サービスは、タロットカードとAIを組み合わせたリーディング体験を提供するサービスです。</p>
                        <p className="mb-2">本サービスは以下を含む場合があります。</p>
                        <ul className="list-disc pl-6 space-y-1 mb-4">
                            <li>今日の運勢</li>
                            <li>1枚引きリーディング</li>
                            <li>オリジナルスプレッド</li>
                            <li>AIによる解釈</li>
                        </ul>
                        <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg border border-gray-100">
                            なお、サービス内容は予告なく変更される場合があります。
                        </p>
                    </section>

                    <section className="mb-10 text-sm md:text-base">
                        <h2 className="text-xl font-bold text-brand-navy mb-4 border-b border-gray-100 pb-2">第3条（利用条件）</h2>
                        <p className="mb-2">利用者は、以下の条件を遵守するものとします。</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>法令に違反する行為を行わないこと</li>
                            <li>他者の権利を侵害しないこと</li>
                            <li>サービスの運営を妨害しないこと</li>
                        </ul>
                    </section>

                    <section className="mb-10 text-sm md:text-base">
                        <h2 className="text-xl font-bold text-brand-navy mb-4 border-b border-gray-100 pb-2">第4条（利用制限）</h2>
                        <p>
                            本サービスでは、一部機能について利用回数の制限が設けられる場合があります。<br />
                            現在、深掘りリーディングは1日あたりの利用回数に制限があります。
                        </p>
                    </section>

                    <section className="mb-10 text-sm md:text-base">
                        <h2 className="text-xl font-bold text-brand-navy mb-4 border-b border-gray-100 pb-2">第5条（免責事項）</h2>
                        <p className="mb-4">本サービスは、利用者の思考整理や自己理解を支援することを目的としています。</p>

                        <div className="space-y-4">
                            <div>
                                <p className="mb-2">以下の点について保証するものではありません。</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>将来の結果</li>
                                    <li>占いの的中</li>
                                    <li>特定の成果</li>
                                </ul>
                            </div>

                            <div>
                                <p className="mb-2">また、本サービスは以下の専門的判断を代替するものではありません。</p>
                                <ul className="list-disc pl-6 space-y-1 mb-4">
                                    <li>医療</li>
                                    <li>法律</li>
                                    <li>投資</li>
                                    <li>金融</li>
                                </ul>
                                <p className="text-sm text-rose-600 bg-rose-50 p-3 rounded-lg border border-rose-100 font-bold">
                                    必要に応じて専門家へ相談してください。
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-10 text-sm md:text-base">
                        <h2 className="text-xl font-bold text-brand-navy mb-4 border-b border-gray-100 pb-2">第6条（知的財産）</h2>
                        <p>
                            本サービスに関する著作権、商標権その他の知的財産権は、当社または正当な権利者に帰属します。
                        </p>
                    </section>

                    <section className="mb-10 text-sm md:text-base">
                        <h2 className="text-xl font-bold text-brand-navy mb-4 border-b border-gray-100 pb-2">第7条（サービスの変更・停止）</h2>
                        <p className="mb-2">当社は、以下の場合にサービスの全部または一部を変更または停止することがあります。</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>システムメンテナンス</li>
                            <li>不可抗力</li>
                            <li>その他運営上必要と判断した場合</li>
                        </ul>
                    </section>

                    <section className="mb-10 text-sm md:text-base">
                        <h2 className="text-xl font-bold text-brand-navy mb-4 border-b border-gray-100 pb-2">第8条（利用停止）</h2>
                        <p className="mb-2">当社は、利用者が以下に該当すると判断した場合、利用を停止することがあります。</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>本規約違反</li>
                            <li>不正利用</li>
                            <li>サービス運営への重大な影響</li>
                        </ul>
                    </section>

                    <section className="mb-10 text-sm md:text-base">
                        <h2 className="text-xl font-bold text-brand-navy mb-4 border-b border-gray-100 pb-2">第9条（規約変更）</h2>
                        <p>
                            当社は必要に応じて本規約を変更することがあります。<br />
                            変更後の規約は、本サービスまたはWebサイトに掲載した時点で効力を生じます。
                        </p>
                    </section>

                    <section className="mb-4 text-sm md:text-base">
                        <h2 className="text-xl font-bold text-brand-navy mb-4 border-b border-gray-100 pb-2">第10条（準拠法・管轄）</h2>
                        <p>
                            本規約は日本法に準拠します。<br />
                            本サービスに関する紛争は、当社所在地を管轄する裁判所を専属的合意管轄とします。
                        </p>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Terms;
