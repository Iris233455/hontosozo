import { useState, useEffect } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Link } from "react-router-dom";

interface ContactFormProps {
    className?: string;
}

export function ContactForm({ className = "" }: ContactFormProps) {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [hcaptchaToken, setHcaptchaToken] = useState<string | null>(null);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const checkHash = () => {
            if (window.location.hash === "#contact") {
                setIsExpanded(true);
            }
        };

        const handleOpen = () => setIsExpanded(true);

        // Check on mount
        checkHash();

        // Listen for hash changes
        window.addEventListener("hashchange", checkHash);
        window.addEventListener("openContactForm", handleOpen);

        return () => {
            window.removeEventListener("hashchange", checkHash);
            window.removeEventListener("openContactForm", handleOpen);
        };
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        const siteKey = import.meta.env.VITE_HCAPTCHA_SITE_KEY;
        if (siteKey && !hcaptchaToken) {
            setStatus("error");
            return;
        }

        const payload = { ...data, hcaptchaToken, topic: "にゃんこタロット" };

        try {
            const apiUrl = import.meta.env.VITE_API_URL || "https://hontosozo.com/api/contact";
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className={`bg-white rounded-2xl p-8 border border-gray-200 shadow-sm py-12 px-6 text-center text-gray-900 ${className}`}>
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h4 className="text-2xl font-bold mb-3">送信完了</h4>
                <p className="text-gray-600 max-w-md mx-auto leading-relaxed">お問い合わせありがとうございます。内容を確認の上、後日ご連絡いたします。</p>
                <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 bg-white border border-gray-200 hover:border-brand-lavender-dark text-gray-700 hover:text-brand-lavender-dark transition-all font-medium py-2.5 px-6 rounded-lg shadow-sm"
                >
                    続けて送信する
                </button>
            </div>
        );
    }

    if (!isExpanded) {
        return (
            <div className={`text-center py-2 ${className}`}>
                <button
                    onClick={() => setIsExpanded(true)}
                    className="w-full sm:w-auto min-w-[300px] bg-transparent border-2 border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors inline-flex items-center justify-center gap-2"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    お問い合わせはこちら
                </button>
            </div>
        );
    }

    return (
        <div className={`bg-white rounded-2xl p-8 border border-gray-200 shadow-sm relative text-left ${className}`}>
            <button
                onClick={() => setIsExpanded(false)}
                className="absolute -top-3 -right-3 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-full transition-colors z-10"
                aria-label="閉じる"
            >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <form className="space-y-6 pt-2 text-brand-navy" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">お名前</label>
                        <input className="w-full rounded-lg border-gray-300 bg-white text-gray-900 focus:ring-brand-lavender focus:border-brand-lavender shadow-sm py-2 px-3 border" id="name" name="name" required type="text" disabled={status === "submitting"} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">メールアドレス</label>
                        <input className="w-full rounded-lg border-gray-300 bg-white text-gray-900 focus:ring-brand-lavender focus:border-brand-lavender shadow-sm py-2 px-3 border" id="email" name="email" required type="email" disabled={status === "submitting"} />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">お問い合わせ内容</label>
                    <textarea className="w-full rounded-lg border-gray-300 bg-white text-gray-900 focus:ring-brand-lavender focus:border-brand-lavender shadow-sm py-2 px-3 border" id="message" name="message" required rows={4} disabled={status === "submitting"} />
                </div>

                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input className="h-4 w-4 text-brand-lavender-dark focus:ring-brand-lavender border-gray-300 rounded bg-white mt-1" id="consent" name="consent" required type="checkbox" disabled={status === "submitting"} />
                    </div>
                    <div className="ml-3 text-sm">
                        <label className="font-medium text-gray-700" htmlFor="consent">
                            送信前に <Link className="text-brand-lavender-dark hover:underline" to="/privacy" target="_blank">プライバシーポリシー</Link> に同意します。
                        </label>
                    </div>
                </div>

                {import.meta.env.VITE_HCAPTCHA_SITE_KEY ? (
                    <div className="flex justify-center my-4 min-h-[78px]">
                        <HCaptcha
                            sitekey={import.meta.env.VITE_HCAPTCHA_SITE_KEY}
                            onVerify={(token) => setHcaptchaToken(token)}
                            onExpire={() => setHcaptchaToken(null)}
                        />
                    </div>
                ) : (
                    <div className="bg-gray-100 border border-gray-300 rounded-lg h-20 flex items-center justify-center text-gray-500 text-sm">
                        hCaptcha Widget Placeholder (VITE_HCAPTCHA_SITE_KEY missing)
                    </div>
                )}

                {status === "error" && (
                    <div className="text-rose-600 text-sm font-medium text-center">
                        送信に失敗しました。もう一度お試しください。
                    </div>
                )}

                <button
                    className="w-full bg-brand-navy hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded-xl transition-colors shadow-sm disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center"
                    type="submit"
                    disabled={status === "submitting"}
                >
                    {status === "submitting" ? "送信中..." : "送信する"}
                </button>
            </form>
        </div>
    );
}
