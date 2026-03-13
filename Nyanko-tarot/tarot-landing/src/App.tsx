import { useState, type FC } from "react";
import { Link } from "react-router-dom";
import { ContactForm } from "./ContactForm";
import {
  featureIcons,
  getRiderWaiteCardImage,
  getScreenshot,
  tarotAppLogo,
} from "./assets";

type AppUsageGuide = {
  title: string;
  steps: string[];
  note?: string;
};

const appUsageGuides: AppUsageGuide[] = [
  {
    title: "今日の運勢",
    steps: [
      "ホーム画面からカードを選択します。",
      "結果画面でAIによる解釈を生成できます。",
    ],
    note: "固定テンプレートの表示ではなく、その時の内容に応じて解釈を生成します。",
  },
  {
    title: "AI解釈生成",
    steps: [
      "スプレッドを選択します（ワンオラクル／ツーカードなど）。",
      "質問内容を入力してカードを引きます。",
      "結果画面でAI解釈を生成します。",
      "各カードのキーワードや基本意味も参照できます。",
    ],
    note: "AI解釈の生成にはオンライン接続が必要です。",
  },
  {
    title: "オリジナルスプレッド",
    steps: [
      "スプレッドタブまたはマイページから「オリジナルスプレッド」を選択します。",
      "新規作成でカード枚数を設定します。",
      "カードを自由に配置し、スプレッドを保存できます。",
      "保存したスプレッドでリーディングを行い、解釈内容を入力・保存できます。",
    ],
  },
  {
    title: "ログイン",
    steps: ["LINEアカウントで自動的にログインされます。"],
  },
];

const App: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lineUrl = import.meta.env.VITE_LINE_URL?.trim();

  const handleLineClick = (event: { preventDefault: () => void }) => {
    if (!lineUrl) {
      event.preventDefault();
      alert("現在サービスは一時的にご利用いただけません。もうしばらくお待ちください。");
    }
  };

  return (
    <div className="bg-brand-cream text-brand-navy min-h-screen font-sans selection:bg-brand-lavender">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="#" className="flex-shrink-0 flex items-center gap-1.5 group">
              <img src={tarotAppLogo} alt="Nyanko Tarot Logo" className="w-16 h-16 object-contain group-hover:scale-105 transition-transform" />
              <span className="font-bold text-xl tracking-tight text-brand-navy">Nyanko Tarot</span>
            </a>

            <nav className="hidden md:flex space-x-6">
              <a href="#about" className="text-gray-600 hover:text-brand-lavender-dark transition-colors font-medium text-sm">サービス紹介</a>
              <a href="#guide" className="text-gray-600 hover:text-brand-lavender-dark transition-colors font-medium text-sm">使い方ガイド</a>
              <a href="#tarot" className="text-gray-600 hover:text-brand-lavender-dark transition-colors font-medium text-sm">タロットリーディングとは</a>
              <a href="#cards" className="text-gray-600 hover:text-brand-lavender-dark transition-colors font-medium text-sm">カードの意味</a>
              <a href="#faq" className="text-gray-600 hover:text-brand-lavender-dark transition-colors font-medium text-sm">よくある質問</a>
            </nav>

            <div className="hidden md:flex items-center">
              <a
                href={lineUrl || "#contact"}
                onClick={handleLineClick}
                className="bg-brand-navy hover:bg-gray-800 text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <span>LINEで利用する</span>
              </a>
            </div>

            {/* Mobile Menu Button - Minimal for Landing Page */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-brand-navy focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-1">
            <a onClick={() => setMobileMenuOpen(false)} href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-lavender-dark hover:bg-gray-50">サービス紹介</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#guide" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-lavender-dark hover:bg-gray-50">使い方ガイド</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#tarot" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-lavender-dark hover:bg-gray-50">タロットとは</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#cards" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-lavender-dark hover:bg-gray-50">カードの意味</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#safety" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-lavender-dark hover:bg-gray-50">安心・プライバシー</a>
            <div className="pt-4 mt-2 border-t border-gray-100">
              <a
                href={lineUrl || "#contact"}
                onClick={handleLineClick}
                className="w-full text-center bg-brand-navy hover:bg-gray-800 text-white px-5 py-3 rounded-full font-medium block cursor-pointer"
              >
                LINEで利用する
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-lavender/30 to-brand-cream/10"></div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/80 border border-brand-lavender-dark/20 text-brand-lavender-dark text-sm font-medium mb-6 shadow-sm">
              AIとタロットがやさしく導くリーディング体験
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-navy mb-6 leading-tight">
              今日の気持ちに、<br className="hidden md:block" />そっと寄り添う。<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lavender-dark to-brand-navy">AIタロットリーディングアプリ</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              質問を入力し、カードを引き、今の自分に必要な視点を受け取る。<wbr /><span className="inline-block font-bold text-brand-navy">にゃんこタロット</span>は、日々の迷いや感情整理に寄り添う、やさしいリーディング体験を届けます。
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href={lineUrl || "#contact"}
                onClick={handleLineClick}
                className="w-full sm:w-auto bg-[#06C755] hover:bg-[#05B34C] text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 3.931 8.91 9.292 9.589.654.148 1.543.456 1.77.986.204.475.066 1.22.03 1.684l-.158 1.054c-.046.286-.216 1.057.928.57 1.144-.486 6.173-3.636 8.529-6.3 1.09-1.233 1.609-2.6 1.609-4.045" />
                </svg>
                LINEアプリで始める
              </a>
              <a
                href="#about"
                className="w-full sm:w-auto bg-white text-gray-700 border border-gray-200 hover:border-brand-lavender-dark hover:text-brand-lavender-dark px-8 py-4 rounded-full font-semibold text-lg transition-colors"
              >
                サービス紹介を見る
              </a>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-brand-lavender-dark"></span> 提供: 合同会社本当創造</span>
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-brand-lavender-dark"></span> 対応: スマートフォン / LINE</span>
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-brand-lavender-dark"></span> 無料で利用可能</span>
            </div>
          </div>
        </section>

        {/* サービス概要 */}
        <section id="about" className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-brand-lavender-dark tracking-widest uppercase mb-3 text-center">Features</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-brand-navy">にゃんこタロット でできること</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <img src={featureIcons.tarot} alt="tarot" className="w-16 h-16 object-contain drop-shadow-sm" />,
                  title: "質問に合わせたリーディング",
                  desc: "恋愛、仕事、人間関係、自分自身の迷いなど、気になるテーマに沿ってカードを引き、AIが解釈をサポートします。"
                },
                {
                  icon: <img src={featureIcons.cat} alt="cat" className="w-16 h-16 object-contain drop-shadow-sm" />,
                  title: "やさしく読み解くAI解釈",
                  desc: "一般的なカード意味だけではなく、入力された悩みや文脈も踏まえながら、わかりやすい言葉でメッセージを整理します。"
                },
                {
                  icon: <img src={featureIcons.magicBook} alt="magic book" className="w-16 h-16 object-contain drop-shadow-sm" />,
                  title: "自分のペースで振り返り",
                  desc: "その時の感情や考えを見つめ直し、前向きな一歩につなげるためのヒントを得られます。スマートフォンから気軽に利用可能です。"
                }
              ].map((feature, idx) => (
                <div key={idx} className="bg-brand-cream/50 rounded-2xl p-8 border border-gray-100 hover:border-brand-lavender/50 transition-colors flex flex-col items-center text-center group">
                  <div className="mb-6 flex items-center justify-center group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* アプリ画面 */}
        <section className="py-24 bg-brand-cream/30 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-sm font-bold text-brand-lavender-dark tracking-widest uppercase mb-3 text-center">Preview</h2>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-navy">アプリ画面</h3>
            </div>

            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 px-4 sm:px-0 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {[
                "Daily.jpg", "Draw.jpg", "Reading.jpg", "Custom Spread 1.jpg",
                "Custom Spread 2.jpg", "Custom Spread 3.jpg", "Questions.jpg", "Gallery.jpg"
              ].map((img, i) => (
                <div key={i} className="snap-center shrink-0 w-[240px] md:w-[280px] rounded-[2rem] overflow-hidden shadow-lg border-[6px] border-white">
                  <img src={getScreenshot(img) || tarotAppLogo} alt={`App Screen ${i}`} className="w-full h-auto object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* こんな方におすすめ */}
        <section className="py-24 bg-brand-pink/20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-brand-pink/50">
              <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-8 text-center flex items-center justify-center gap-3">
                <span className="text-brand-lavender-dark">✦</span> こんなときにおすすめです <span className="text-brand-lavender-dark">✦</span>
              </h3>

              <ul className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {[
                  "なんとなく気持ちがまとまらないとき",
                  "選択肢の間で迷っているとき",
                  "自分の本音を整理したいとき",
                  "毎日の小さな振り返り習慣を持ちたいとき",
                  "タロットに興味はあるが難しそうだったとき"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-lavender flex items-center justify-center text-brand-lavender-dark font-bold text-sm mt-0.5">✓</span>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* タロットとは */}
        <section id="tarot" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-sm font-bold text-brand-lavender-dark tracking-widest uppercase mb-3">About Tarot</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-8">タロットリーディングとは</h3>

            <div className="prose prose-lg mx-auto text-gray-600 mb-8 leading-loose">
              <p>
                タロットは、カードの象徴を通して今の状況や気持ちを見つめ直すための手法のひとつです。未来を絶対的に断定するものではなく、<strong>自分の内面や選択肢に気づくためのヒント</strong>として活用されています。
              </p>
              <p>
                <span className="inline-block font-bold text-brand-navy">にゃんこタロット</span> では、カードの意味をわかりやすく整理し、日常の思考や感情整理に役立てられる「やさしい体験」を目指しています。
              </p>
            </div>

            <div className="text-gray-500 text-sm md:text-base mx-auto mt-4 text-center">
              <span className="font-bold mr-2 text-brand-navy">※ ご注意事項</span>
              本サービスは医療、法律、投資等の専門的判断を代替するものではありません。
            </div>
          </div>
        </section>

        {/* 代表的なカードの意味 */}
        <section id="cards" className="py-24 bg-brand-cream border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-brand-lavender-dark tracking-widest uppercase mb-3">Cards</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">代表的なカードの意味</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                カードの意味は一つに固定されるものではなく、質問内容や前後の流れによって受け取り方が変わります。<wbr /><span className="inline-block font-bold text-brand-navy">にゃんこタロット</span>ではその時の悩みやテーマに応じて解釈をサポートします。
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              {[
                { name: "愚者 (The Fool)", keywords: ["新しい始まり", "自由な発想", "可能性への一歩"], image: getRiderWaiteCardImage("major_00_fool.png") || tarotAppLogo },
                { name: "魔術師 (The Magician)", keywords: ["意志と行動", "自分の力を使う", "現実化のスタート"], image: getRiderWaiteCardImage("major_01_magician.png") || tarotAppLogo },
                { name: "女教皇 (The High Priestess)", keywords: ["直感", "静かな理解", "内面の声に耳を傾ける"], image: getRiderWaiteCardImage("major_02_priestess.png") || tarotAppLogo }
              ].map((card, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center flex flex-col items-center">
                  <div className="w-24 mb-5 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                    <img src={card.image} alt={card.name} className="w-full h-auto object-cover" />
                  </div>
                  <h4 className="font-bold text-brand-navy text-sm md:text-base mb-3 leading-snug">{card.name}</h4>
                  <div className="flex flex-col gap-1 text-xs text-gray-500">
                    {card.keywords.map((kw) => (
                      <span key={kw}>• {kw}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/cards" className="text-brand-lavender-dark font-medium hover:underline inline-flex items-center gap-1">
                すべてのカードを見る
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* 利用の流れ */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-center text-brand-navy mb-16">使い方はかんたん</h3>

            <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch relative">
              <div className="hidden md:block absolute top-[20%] left-0 right-0 h-0.5 bg-gray-100 -z-10"></div>

              {[
                { step: "01", title: "LINEからアクセス", desc: "お友達追加後、メニューからトーク画面でアプリを開きます。" },
                { step: "02", title: "気になるテーマを入力", desc: "今の気持ちや悩んでいること、占いたいテーマを入力します。" },
                { step: "03", title: "カードを引いて解釈", desc: "画面上でカードを引き、AIによるやさしい解釈を受け取ります。" }
              ].map((item, idx) => (
                <div key={idx} className="flex-1 text-center bg-white">
                  <div className="w-16 h-16 mx-auto bg-brand-lavender-dark text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-md border-4 border-white">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <a
                href={lineUrl || "#contact"}
                onClick={handleLineClick}
                className="inline-flex bg-[#06C755] hover:bg-[#05B34C] text-white px-10 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-md items-center justify-center gap-2"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 3.931 8.91 9.292 9.589.654.148 1.543.456 1.77.986.204.475.066 1.22.03 1.684l-.158 1.054c-.046.286-.216 1.057.928.57 1.144-.486 6.173-3.636 8.529-6.3 1.09-1.233 1.609-2.6 1.609-4.045" />
                </svg>
                LINEでにゃんこタロットを開く
              </a>
            </div>
          </div>
        </section>

        {/* 機能別ガイド */}
        <section id="guide" className="py-24 bg-brand-cream/40 border-y border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-sm font-bold text-brand-lavender-dark tracking-widest uppercase mb-3">Guide</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-brand-navy">ご利用ガイド</h3>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
              <p className="text-gray-600 leading-relaxed mb-2">
                本アプリは、AIを活用したタロットリーディング支援ツールです。オリジナルスプレッドの作成や、自由なカード配置機能を備えています。
              </p>
              <p className="text-sm text-gray-500 mb-8">
                ※ 本アプリはエンターテインメントおよび自己探求を目的としたツールです。
              </p>

              <div className="divide-y divide-gray-100">
                {appUsageGuides.map((guide) => (
                  <div key={guide.title} className="py-6 first:pt-0 last:pb-0">
                    <h4 className="text-lg font-bold text-brand-navy mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-lavender-dark flex-shrink-0" />
                      {guide.title}
                    </h4>
                    <ol className="space-y-2 pl-4">
                      {guide.steps.map((step, idx) => (
                        <li key={step} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                          <span className="flex-shrink-0 text-sm font-bold text-brand-lavender-dark tabular-nums mt-px">{idx + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                    {guide.note ? (
                      <p className="mt-3 pl-4 text-sm text-gray-500 leading-relaxed">※ {guide.note}</p>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 安心してご利用いただくために */}
        <section id="safety" className="py-24 bg-brand-mint/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-10 text-center">安心してご利用いただくために</h3>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-mint/50">
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <p className="text-gray-700">入力内容は、サービス改善や機能提供のために必要な範囲で取り扱います</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <p className="text-gray-700">個人情報の取扱いはプライバシーポリシーに従います</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <p className="text-gray-700">リーディング結果は自己理解の補助を目的とした参考情報です</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <p className="text-gray-700">特定の結果や将来を保証するものではありません</p>
                </li>
              </ul>

              <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-100">
                <Link to="/privacy" className="text-sm font-medium text-brand-navy underline decoration-gray-300 underline-offset-4 hover:decoration-brand-navy">プライバシーポリシー</Link>
                <Link to="/terms" className="text-sm font-medium text-brand-navy underline decoration-gray-300 underline-offset-4 hover:decoration-brand-navy">利用規約</Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA (Download/Start) */}
        <section className="py-24 bg-brand-navy text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">今すぐはじめる</h3>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              <span className="inline-block font-bold text-white">にゃんこタロット</span>はLINEからご利用いただけます。スマートフォンでアクセスして、気になるテーマをやさしく読み解いてみてください。
            </p>
            <div className="flex flex-col items-center gap-6">
              <a
                href={lineUrl || "#contact"}
                onClick={handleLineClick}
                className="bg-[#06C755] hover:bg-[#05B34C] text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto min-w-[300px] cursor-pointer"
              >
                LINEで利用する
              </a>
              <div id="contact" className="w-full max-w-2xl mx-auto">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-center text-brand-navy mb-12">よくあるご質問</h3>

            <div className="space-y-6">
              {[
                { q: "無料で使えますか？", a: "はい、無料でご利用いただけます。今日の運勢は無料でお楽しみいただけるほか、スプレッドリーディングは1日3回までご利用可能です。" },
                { q: "占い結果は必ず当たりますか？", a: "本サービスは、将来を断定するものではなく、自分の考えや気持ちを整理するための参考情報を提供するものです。" },
                { q: "個人情報はどのように扱われますか？", a: "個人情報の取扱いについてはプライバシーポリシーをご確認ください。AIへの入力データも規約に基づき適切に管理されます。" },
                { q: "医療や投資などの相談にも使えますか？", a: "本サービスは専門的判断の代替を目的とするものではありません。必要に応じて専門機関へご相談ください。" }
              ].map((faq, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-2 text-brand-navy flex gap-3">
                    <span className="text-brand-lavender-dark">Q.</span> {faq.q}
                  </h4>
                  <p className="text-gray-600 pl-7 leading-relaxed">
                    <span className="text-gray-400 mr-2 font-bold hidden">A.</span>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-cream border-t border-gray-200 py-12 text-sm text-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-1.5 mb-4 group">
                <img src={tarotAppLogo} alt="Nyanko Tarot Logo" className="w-12 h-12 object-contain group-hover:scale-105 transition-transform" />
                <span className="font-bold text-lg text-brand-navy tracking-tight">Nyanko Tarot</span>
              </div>
              <p className="mb-2 font-medium">運営会社：合同会社本当創造</p>
              <p className="mb-4">お問い合わせ：support@hontosozo.com</p>
              <p className="text-xs text-gray-500 leading-relaxed max-w-lg">
                <span className="inline-block font-bold text-brand-navy">にゃんこタロット</span>は合同会社本当創造（HONTO SOZO LLC）が提供・運営するサービスです。
              </p>
            </div>

            <div className="md:text-right flex flex-col md:items-end justify-start gap-3">
              <a href="https://hontosozo.com" target="_blank" rel="noreferrer" className="hover:text-brand-navy transition-colors font-medium">会社サイト</a>
              <Link to="/privacy" className="hover:text-brand-navy transition-colors font-medium">プライバシーポリシー</Link>
              <Link to="/terms" className="hover:text-brand-navy transition-colors font-medium">利用規約</Link>
              <a href="#contact" onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("contact");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
                window.dispatchEvent(new Event("openContactForm"));
              }} className="hover:text-brand-navy transition-colors font-medium">お問い合わせ</a>
            </div>
          </div>

          <div className="text-center md:text-left text-xs text-gray-400 border-t border-gray-200 pt-8">
            &copy; {new Date().getFullYear()} 合同会社本当創造 (HONTO SOZO LLC). All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
