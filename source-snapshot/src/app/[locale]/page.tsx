import Link from "next/link";

import { ContactForm } from "@/components/ContactForm";
import { MissingServiceNotice } from "@/components/MissingServiceNotice";
import { MobileNav } from "@/components/MobileNav";
import { normalizeLocale, type Locale } from "@/lib/i18n";
import { localePath } from "@/lib/paths";

type Copy = {
  brand: string;
  nav: {
    methodology: string;
    services: string;
    insights: string;
    company: string;
  };
  cta: {
    getStarted: string;
    exploreServices: string;
    viewInsights: string;
    learnMore: string;
    getStartedAlt: string;
  };
  hero: {
    titleBefore: string;
    titleHighlight: string;
    titleAfter: string;
    subtitle: string;
  };
  methodology: {
    eyebrow: string;
    title: string;
    steps: Array<{ icon: string; title: string; desc: string; tone?: "primary" }>;
    tagline: string;
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: Array<{
      key: "study" | "housing" | "consulting";
      icon: string;
      title: string;
      desc: string;
    }>;
  };
  insights: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Array<{
      category: string;
      title: string;
      summary: string;
      body: Array<string>;
      sources?: string;
    }>;
  };
  company: {
    eyebrow: string;
    title: string;
    missionLabel: string;
    mission: string;
    serveLabel: string;
    serve: string;
    approachLabel: string;
    approachBullets: string[];
    profileTitle: string;
    profile: Array<{ label: string; value: string }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    formTitle: string;
    fields: {
      name: string;
      email: string;
      topic: string;
      topicPlaceholder: string;
      message: string;
      consentBefore: string;
      consentLink: string;
      button: string;
    };
    topics: Array<{ value: string; label: string }>;
    captchaPlaceholder: string;
  };
  footer: {
    tagline: string;
    legal: string;
    privacy: string;
    terms: string;
    contact: string;
    location: string;
    copyright: string;
  };
};

const COPY: Record<Locale, Copy> = {
  en: {
    brand: "HONTO SOZO",
    nav: {
      methodology: "Methodology",
      services: "Services",
      insights: "Insights",
      company: "Company",
    },
    cta: {
      getStarted: "Get Started",
      exploreServices: "Explore Services",
      viewInsights: "View Insights",
      learnMore: "Learn More",
      getStartedAlt: "Get Started",
    },
    hero: {
      titleBefore: "Your Data-Driven",
      titleHighlight: "Decision Partner",
      titleAfter: "",
      subtitle:
        "Transforming complex real-world information into clear, structured, and actionable insights for study, housing, and consulting.",
    },
    methodology: {
      eyebrow: "Methodology",
      title: "From Data to Decision",
      steps: [
        {
          icon: "database",
          title: "Raw Data Input",
          desc: "Gathering comprehensive information from verified, diverse real-world sources.",
        },
        {
          icon: "account_tree",
          title: "Systematic Structuring",
          desc: "Extracting, standardizing, and organizing data to ensure accuracy and comparability.",
        },
        {
          icon: "lightbulb",
          title: "Clear Actions",
          desc: "Delivering actionable conclusions and decision-ready frameworks tailored to your needs.",
          tone: "primary",
        },
      ],
      tagline: "Traceable sources • Structured outputs • Clear next steps",
    },
    services: {
      eyebrow: "Core Services",
      title: "Solutions Built on Structured Data",
      subtitle:
        "We navigate complexity so you don't have to. Access our dedicated platforms below.",
      cards: [
        {
          key: "study",
          icon: "school",
          title: "Study Support",
          desc: "Data-driven comparisons of educational institutions, application requirements, and geographical advantages to optimize your academic path.",
        },
        {
          key: "housing",
          icon: "real_estate_agent",
          title: "Housing Support",
          desc: "Systematic analysis of neighborhoods, market rates, and living conditions to help you make informed relocation or investment decisions.",
        },
        {
          key: "consulting",
          icon: "support_agent",
          title: "Consultation",
          desc: "Bespoke advisory services leveraging structured methodologies to solve complex challenges with clear logic.",
        },
      ],
    },
    insights: {
      eyebrow: "Data Insights",
      title: "Evidence-Based Reports",
      subtitle: "Sample analyses demonstrating our approach to structuring information.",
      items: [
        {
          category: "Housing",
          title: "Comparative Analysis of Rent Yields in Tokyo vs. Osaka (2023)",
          summary:
            "A look into structural differences in initial costs and long-term yields.",
          body: [
            "Based on publicly available data structured across key listings in major wards, we compared initial costs, depreciation, and long-term value signals.",
            "Key Finding: Initial moving costs in Tokyo average higher multiples of monthly rent than Osaka, which can materially impact short-term ROI for temporary relocations.",
          ],
          sources:
            "Sources: Public data structured by HONTO SOZO (e.g., official statistics and market listings).",
        },
        {
          category: "Education",
          title: "Hidden Costs in International Program Applications",
          summary: "Standardizing fee structures across top institutions.",
          body: [
            "Tuition is only part of the total cost. We standardized required incidental fees across institutions to highlight common hidden cost categories.",
          ],
          sources: "Sources: Institutional fee schedules and public documents.",
        },
      ],
    },
    company: {
      eyebrow: "Company",
      title: "Turning Reality into Clarity",
      missionLabel: "Our Mission",
      mission:
        "To transform chaotic real-world information into structured, clear, and decision-ready intelligence.",
      serveLabel: "Who We Serve",
      serve:
        "Individuals, families, and self-employed professionals facing high-stakes decisions in unfamiliar domains.",
      approachLabel: "Our Data-First Approach",
      approachBullets: [
        "Strict reliance on verified, primary sources.",
        "Rigorous structuring methodology for objective comparison.",
        "Outputs designed for actionable decision-making.",
      ],
      profileTitle: "Company Profile",
      profile: [
        {
          label: "Company Name",
          value: "HONTO SOZO, LIMITED LIABILITY COMPANY",
        },
        { label: "Location", value: "Tokyo, Japan" },
        { label: "Email", value: "support@hontosozo.com" },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Get in Touch",
      subtitle: "For inquiries about our services or custom data structuring needs.",
      formTitle: "Contact Form",
      fields: {
        name: "Name *",
        email: "Email *",
        topic: "Topic *",
        topicPlaceholder: "Select a topic",
        message: "Message *",
        consentBefore: "I agree to the",
        consentLink: "Privacy Policy",
        button: "Send Message",
      },
      topics: [
        { value: "study", label: "Study Support" },
        { value: "housing", label: "Housing Support" },
        { value: "consulting", label: "Consultation" },
        { value: "other", label: "Other Inquiry" },
      ],
      captchaPlaceholder: "hCaptcha Widget Placeholder",
    },
    footer: {
      tagline: "Data-driven decision partner for individuals and families.",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      contact: "Contact",
      location: "Tokyo, Japan",
      copyright: "© 2026 HONTO SOZO, LIMITED LIABILITY COMPANY. All rights reserved.",
    },
  },
  ja: {
    brand: "本当創造 HONTO SOZO",
    nav: {
      methodology: "方法論",
      services: "サービス",
      insights: "洞察",
      company: "会社情報",
    },
    cta: {
      getStarted: "はじめる",
      exploreServices: "サービスを見る",
      viewInsights: "洞察を見る",
      learnMore: "詳細へ",
      getStartedAlt: "はじめる",
    },
    hero: {
      titleBefore: "家族の人生を",
      titleHighlight: "データで読み解く",
      titleAfter: "意思決定パートナー",
      subtitle:
        "住まい、学び、仕事、人生の選択。現実世界には多くの情報が存在しますが、それらは必ずしも比較しやすい形ではありません。私たちは公開データ、一次情報、AI分析、そして対話を組み合わせ、複雑な情報を「判断できる形」に整理します。個人と家族がより納得できる未来を選択できるよう、洞察と具体的な行動のヒントを提供します。",
    },
    methodology: {
      eyebrow: "Methodology",
      title: "データから、意思決定へ",
      steps: [
        {
          icon: "database",
          title: "情報収集",
          desc: "一次情報、公的統計、制度資料、地域データなど信頼できるソースを中心に収集します。",
        },
        {
          icon: "account_tree",
          title: "構造化・AI分析",
          desc: "情報を整理・標準化し、データ分析やAIを用いて傾向や可能性を読み解きます。",
        },
        {
          icon: "lightbulb",
          title: "行動に落とす",
          desc: "分析結果を、意思決定に役立つ「次の一手」として提示します。",
          tone: "primary",
        },
      ],
      tagline: "Traceable Data • AI Analysis • Human Insight • Clear Action",
    },
    services: {
      eyebrow: "Core Services",
      title: "人生に寄り添う意思決定支援サービス",
      subtitle:
        "私たちは、人生や家族の重要な意思決定を支えるさまざまなサービスやプロジェクトを展開しています。詳細は各サービスページをご覧ください。",
      cards: [
        {
          key: "study",
          icon: "school",
          title: "学び支援",
          desc: "教育制度、学校情報、地域環境、費用構造などの公開データを整理し、家族にとって納得できる教育選択を支援します。",
        },
        {
          key: "housing",
          icon: "real_estate_agent",
          title: "住まい支援",
          desc: "エリア特性、住宅相場、生活利便性などを体系的に分析し、住まいに関する意思決定をサポートします。",
        },
        {
          key: "consulting",
          icon: "support_agent",
          title: "人生相談",
          desc: "タロットカードを思考補助ツールとして活用し、対話を通じて思考を整理します。未来を断定する占いではなく、新しい視点や選択肢を見つけるための「対話型ライフコンサルティング」です。",
        },
      ],
    },
    insights: {
      eyebrow: "Data Insights",
      title: "データから見える社会のヒント",
      subtitle: "私たちの分析や情報整理の例です。",
      items: [
        {
          category: "Housing",
          title: "東京と大阪：初期費用と中長期の差分（2023）",
          summary: "初期費用だけでなく将来の資産価値や生活コストの違いを整理します。",
          body: [
            "公開統計や市場データをもとに、住宅相場、人口動向、都市成長などの要素を比較しました。",
          ],
          sources: "Sources: 公的統計・公開資料。",
        },
        {
          category: "Education",
          title: "出願で見落としがちな「隠れコスト」",
          summary: "教育費の見えにくい費用構造を整理します。",
          body: ["授業料以外の費用や生活コストなどを整理し、比較可能な形にします。"],
          sources: "Sources: 公開資料（学校要項・制度資料等）。",
        },
      ],
    },
    company: {
      eyebrow: "Company",
      title: "現実を、判断できる形へ",
      missionLabel: "ミッション",
      mission:
        "現実世界の複雑な情報を整理し、個人と家族が意思決定に使える形へ変換すること。それが私たちの使命です。",
      serveLabel: "対象",
      serve:
        "人生の重要な選択を行うすべての人。個人、家族、自営業者、海外在住者など。",
      approachLabel: "アプローチ",
      approachBullets: [
        "信頼できる一次情報と公開データを優先。",
        "データ分析とAIによる構造化。",
        "人間の対話による洞察。",
      ],
      profileTitle: "会社概要",
      profile: [
        { label: "会社名", value: "合同会社本当創造（HONTO SOZO LLC）" },
        { label: "所在地", value: "Tokyo, Japan" },
        { label: "Email", value: "support@hontosozo.com" },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "お問い合わせ",
      subtitle: "サービスに関するご相談は下記よりご連絡ください。",
      formTitle: "Contact Form",
      fields: {
        name: "お名前 *",
        email: "メール *",
        topic: "トピック *",
        topicPlaceholder: "選択してください",
        message: "内容 *",
        consentBefore: "",
        consentLink: "プライバシーポリシーに同意します",
        button: "送信",
      },
      topics: [
        { value: "study", label: "学び支援" },
        { value: "housing", label: "住まい支援" },
        { value: "consulting", label: "人生相談" },
        { value: "other", label: "その他" },
      ],
      captchaPlaceholder: "hCaptcha Widget Placeholder",
    },
    footer: {
      tagline: "家族の人生意思決定を支えるデータ洞察パートナー",
      legal: "Legal",
      privacy: "Privacy",
      terms: "Terms",
      contact: "Contact",
      location: "Tokyo, Japan",
      copyright: "© 2026 合同会社本当創造（HONTO SOZO LLC）. All rights reserved.",
    },
  },
  zh: {
    brand: "HONTO SOZO",
    nav: {
      methodology: "方法论",
      services: "服务入口",
      insights: "洞察",
      company: "公司信息",
    },
    cta: {
      getStarted: "开始使用",
      exploreServices: "查看服务",
      viewInsights: "查看洞察",
      learnMore: "了解更多",
      getStartedAlt: "开始使用",
    },
    hero: {
      titleBefore: "你的数据驱动",
      titleHighlight: "决策伙伴",
      titleAfter: "",
      subtitle:
        "把复杂的现实信息变成清晰、可对比、可执行的结论，服务于留学、住房与咨询决策。",
    },
    methodology: {
      eyebrow: "Methodology",
      title: "从数据到决策",
      steps: [
        {
          icon: "database",
          title: "信息收集",
          desc: "从可追溯、可验证的来源中系统收集信息。",
        },
        {
          icon: "account_tree",
          title: "抽取与结构化",
          desc: "抽取、标准化、核对并结构化，确保可比性与准确性。",
        },
        {
          icon: "lightbulb",
          title: "输出行动建议",
          desc: "给出可执行结论与判断依据，帮助你做决定。",
          tone: "primary",
        },
      ],
      tagline: "可追溯来源 • 结构化输出 • 清晰下一步",
    },
    services: {
      eyebrow: "Core Services",
      title: "基于结构化数据的解决方案",
      subtitle: "站内不展开细节，点击进入外部服务系统。",
      cards: [
        {
          key: "study",
          icon: "school",
          title: "留学/学习支持",
          desc: "把学校、要求与地区因素整理成可对比信息，减少决策成本。",
        },
        {
          key: "housing",
          icon: "real_estate_agent",
          title: "住房支持",
          desc: "系统整理区域、价格与生活条件，支持搬家或投资判断。",
        },
        {
          key: "consulting",
          icon: "support_agent",
          title: "咨询",
          desc: "用结构化方法拆解复杂问题，输出清晰的判断材料。",
        },
      ],
    },
    insights: {
      eyebrow: "Data Insights",
      title: "洞察示例",
      subtitle: "用极轻量方式展示我们如何“整理信息”。",
      items: [
        {
          category: "Housing",
          title: "东京 vs 大阪：初期成本与回报结构（2023）",
          summary: "对比初期费用、折旧与长期信号。",
          body: ["基于公开信息整理，建立可对比的指标口径并输出结论。"],
          sources: "来源：公开数据与信息整理。",
        },
        {
          category: "Education",
          title: "国际项目申请中的隐性成本",
          summary: "把费用结构标准化，避免只看学费。",
          body: ["对学校公开费用表进行标准化与分类，揭示常见隐性费用。"],
          sources: "来源：学校公开费用表/项目说明。",
        },
      ],
    },
    company: {
      eyebrow: "Company",
      title: "把现实变成清晰判断",
      missionLabel: "使命",
      mission: "把混乱的现实信息结构化，转化为可用于决策的结论。",
      serveLabel: "服务对象",
      serve: "个人、家庭、自营业者等需要做重要决策的人群。",
      approachLabel: "数据优先原则",
      approachBullets: ["可验证来源", "结构化与标准化", "面向行动的输出"],
      profileTitle: "公司信息",
      profile: [
        { label: "公司名称", value: "HONTO SOZO, LIMITED LIABILITY COMPANY" },
        { label: "所在地", value: "Tokyo, Japan" },
        { label: "邮箱", value: "support@hontosozo.com" },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "联系我们",
      subtitle: "服务咨询或数据整理需求，可通过表单联系。",
      formTitle: "联系表单",
      fields: {
        name: "姓名 *",
        email: "邮箱 *",
        topic: "主题 *",
        topicPlaceholder: "请选择",
        message: "内容 *",
        consentBefore: "我同意",
        consentLink: "隐私政策",
        button: "发送",
      },
      topics: [
        { value: "study", label: "留学/学习支持" },
        { value: "housing", label: "住房支持" },
        { value: "consulting", label: "咨询" },
        { value: "other", label: "其他" },
      ],
      captchaPlaceholder: "hCaptcha 占位（后续接入）",
    },
    footer: {
      tagline: "为个人与家庭提供数据整理与决策支持。",
      legal: "合规",
      privacy: "隐私政策",
      terms: "使用条款",
      contact: "联系",
      location: "Tokyo, Japan",
      copyright: "© 2026 HONTO SOZO, LIMITED LIABILITY COMPANY. All rights reserved.",
    },
  },
};

export default async function HomePage({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>;
}>) {
  const { locale: localeParam } = await params;
  const locale = normalizeLocale(localeParam);
  const t = COPY[locale];

  return (
    <div className="bg-background-light text-slate-900 antialiased selection:bg-primary/30">
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link
              className="flex-shrink-0 flex items-center gap-2"
              href={localePath(locale, "/")}
            >
              <img src="/logo.svg" alt="HONTO SOZO" className="w-8 h-8" />
              <span className="font-bold text-xl tracking-tight">HONTO SOZO</span>
            </Link>

            <nav className="hidden md:flex space-x-8">
              <a
                className="text-slate-600 hover:text-primary transition-colors font-medium text-sm"
                href="#methodology"
              >
                {t.nav.methodology}
              </a>
              <a
                className="text-slate-600 hover:text-primary transition-colors font-medium text-sm"
                href="#services"
              >
                {t.nav.services}
              </a>
              <a
                className="text-slate-600 hover:text-primary transition-colors font-medium text-sm"
                href="#insights"
              >
                {t.nav.insights}
              </a>
              <a
                className="text-slate-600 hover:text-primary transition-colors font-medium text-sm"
                href="#company"
              >
                {t.nav.company}
              </a>
            </nav>

            <div className="hidden md:flex items-center">
              <a
                className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-colors shadow-sm shadow-primary/20"
                href="#services"
              >
                {t.cta.exploreServices}
              </a>
            </div>

            <MobileNav nav={t.nav} ctaLabel={t.cta.exploreServices} />
          </div>
        </div>
      </header>

      <main>
        <section
          className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden"
          id="hero"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background-light to-background-light"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 mx-auto max-w-4xl">
              {t.hero.titleBefore}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-brand">
                {t.hero.titleHighlight}
              </span>
              {t.hero.titleAfter ? ` ${t.hero.titleAfter}` : ""}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40"
                href="#services"
              >
                {t.cta.exploreServices}
              </a>
              <a
                className="bg-white text-slate-700 border border-slate-200 hover:border-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all"
                href="#insights"
              >
                {t.cta.viewInsights}
              </a>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white" id="methodology">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">
                {t.methodology.eyebrow}
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                {t.methodology.title}
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-100 -z-0"></div>

              {t.methodology.steps.map((step) => (
                <div
                  key={step.title}
                  className="relative z-10 bg-background-light rounded-2xl p-8 border border-slate-100 text-center"
                >
                  <div
                    className={`w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-200 mb-6 ${step.tone === "primary" ? "text-emerald-brand" : "text-primary"}`}
                  >
                    <span className="material-symbols-outlined text-3xl">
                      {step.icon}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{step.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                {t.methodology.tagline}
              </p>
            </div>
          </div>
        </section>

        <section className="py-24" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">
                {t.services.eyebrow}
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {t.services.title}
              </h3>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {t.services.subtitle}
              </p>
            </div>

            <div className="max-w-3xl mx-auto mb-8">
              <MissingServiceNotice locale={locale} />
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {t.services.cards.map((card) => {
                const CARD_IMAGES: Record<string, string> = {
                  study: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
                  housing: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
                  consulting: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
                };
                return (
                  <div
                    key={card.key}
                    className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full group"
                  >
                    <div className="h-56 bg-slate-100 relative overflow-hidden">
                      <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10 transition-opacity group-hover:bg-primary/20"></div>
                      <img
                        src={CARD_IMAGES[card.key]}
                        alt={card.title}
                        className="w-full h-full object-cover saturate-50 contrast-125 transition-all duration-500 group-hover:scale-105 group-hover:saturate-100"
                      />
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <h4 className="text-2xl font-bold mb-4">{card.title}</h4>
                      <p className="text-slate-600 mb-8 flex-grow">
                        {card.desc}
                      </p>
                      <div className="flex flex-col gap-3">
                        <a
                          className="w-full text-center bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-medium transition-colors"
                          href={`/go/${card.key}?locale=${locale}`}
                        >
                          {t.cta.learnMore}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white" id="insights">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">
                {t.insights.eyebrow}
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {t.insights.title}
              </h3>
              <p className="text-lg text-slate-600">
                {t.insights.subtitle}
              </p>
            </div>

            <div className="space-y-4">
              {t.insights.items.map((item) => (
                <details
                  key={item.title}
                  className="group bg-background-light rounded-xl border border-slate-200 overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50 transition-colors list-none">
                    <div>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-2">
                        {item.category}
                      </span>
                      <h4 className="text-lg font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 text-sm mt-1">
                        {item.summary}
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-slate-400 transition-transform duration-300 group-open:rotate-180">
                      expand_more
                    </span>
                  </summary>
                  <div className="bg-white border-t border-slate-200">
                    <div className="p-6 text-slate-600 text-sm leading-relaxed space-y-4">
                      {item.body.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                      {item.sources ? (
                        <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-400">
                          {item.sources}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24" id="company">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">
                  {t.company.eyebrow}
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  {t.company.title}
                </h3>

                <div className="prose prose-slate mb-8 max-w-none">
                  <p className="text-lg text-slate-600 mb-6">
                    <strong>{t.company.missionLabel}:</strong> {t.company.mission}
                  </p>

                  <h4 className="text-xl font-semibold text-slate-900 mb-3">
                    {t.company.serveLabel}
                  </h4>
                  <p className="text-slate-600 mb-6">
                    {t.company.serve}
                  </p>

                  <h4 className="text-xl font-semibold text-slate-900 mb-3">
                    {t.company.approachLabel}
                  </h4>
                  <ul className="list-disc pl-5 text-slate-600 space-y-2">
                    {t.company.approachBullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <h4 className="text-2xl font-bold mb-6 border-b border-slate-100 pb-4">
                  {t.company.profileTitle}
                </h4>
                <div className="space-y-4">
                  {t.company.profile.map((row) => (
                    <div
                      key={row.label}
                      className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-slate-100"
                    >
                      <span className="text-slate-500 font-medium">
                        {row.label}
                      </span>
                      <span className="font-semibold text-slate-900">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-slate-50" id="contact">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">
                {t.contact.eyebrow}
              </h2>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                {t.contact.title}
              </h3>
              <p className="text-slate-600">
                {t.contact.subtitle}
              </p>
            </div>

            <div className="">
              <h4 className="sr-only">{t.contact.formTitle}</h4>

              <ContactForm locale={locale} t={t.contact} />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white text-slate-600 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.svg" alt="HONTO SOZO" className="w-6 h-6" />
                <span className="font-bold text-lg text-slate-900 tracking-tight">HONTO SOZO</span>
              </div>
              <p className="text-sm text-slate-500 whitespace-nowrap">{t.footer.tagline}</p>
            </div>

            <div>
              <h4 className="text-slate-900 font-semibold mb-4">{t.footer.legal}</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    className="hover:text-primary transition-colors"
                    href={localePath(locale, "/privacy")}
                  >
                    {t.footer.privacy}
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-primary transition-colors"
                    href={localePath(locale, "/terms")}
                  >
                    {t.footer.terms}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-900 font-semibold mb-4">{t.footer.contact}</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="mailto:support@hontosozo.com"
                  >
                    support@hontosozo.com
                  </a>
                </li>
                <li>{t.footer.location}</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

