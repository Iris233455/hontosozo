"use client";

import { useState, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import Link from "next/link";
import { localePath } from "@/lib/paths";
import type { Locale } from "@/lib/i18n";

type ContactFormProps = {
    locale: Locale;
    t: {
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
};

const STATUS_MESSAGES = {
    en: {
        successTitle: "Message Sent",
        successDesc: "Thank you for reaching out. We will get back to you shortly.",
        sendAnother: "Send another message",
        error: "Something went wrong. Please try again.",
        sending: "Sending...",
    },
    ja: {
        successTitle: "送信完了",
        successDesc: "お問い合わせありがとうございます。内容を確認の上、後日ご連絡いたします。",
        sendAnother: "続けて送信する",
        error: "送信に失敗しました。もう一度お試しください。",
        sending: "送信中...",
    },
    zh: {
        successTitle: "发送成功",
        successDesc: "感谢您的联系。我们将尽快与您取得联系。",
        sendAnother: "继续发送",
        error: "发送失败，请稍后重试。",
        sending: "发送中...",
    }
};

export function ContactForm({ locale, t }: ContactFormProps) {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [hcaptchaToken, setHcaptchaToken] = useState<string | null>(null);
    const captchaRef = useRef<HCaptcha>(null);
    const msg = STATUS_MESSAGES[locale] || STATUS_MESSAGES.en;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        const siteKey = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY;
        if (siteKey && !hcaptchaToken) {
            setStatus("error");
            return;
        }

        const payload = { ...data, hcaptchaToken };

        try {
            const response = await fetch("/api/contact", {
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

    const [isExpanded, setIsExpanded] = useState(false);

    if (status === "success") {
        return (
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm py-12 px-6 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-emerald-brand/10 text-emerald-brand rounded-full flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-3xl">check</span>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-3">{msg.successTitle}</h4>
                <p className="text-slate-600 max-w-md mx-auto leading-relaxed">{msg.successDesc}</p>
                <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 bg-white border border-slate-200 hover:border-primary text-slate-700 hover:text-primary transition-all font-medium py-2.5 px-6 rounded-lg shadow-sm"
                >
                    {msg.sendAnother}
                </button>
            </div>
        );
    }

    if (!isExpanded) {
        return (
            <div className="text-center py-6">
                <button
                    onClick={() => setIsExpanded(true)}
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-xl transition-all shadow-sm hover:shadow-md"
                >
                    <span className="material-symbols-outlined text-xl">mail</span>
                    お問い合わせフォームを開く
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm relative">
            <button
                onClick={() => setIsExpanded(false)}
                className="absolute -top-3 -right-3 w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-full transition-colors z-10"
                aria-label="閉じる"
            >
                <span className="material-symbols-outlined text-lg">close</span>
            </button>
            <form className="space-y-6 pt-2" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label
                            className="block text-sm font-medium text-slate-700 mb-2"
                            htmlFor="name"
                        >
                            {t.fields.name}
                        </label>
                        <input
                            className="w-full rounded-lg border-slate-300 bg-white text-slate-900 focus:ring-primary focus:border-primary shadow-sm"
                            id="name"
                            name="name"
                            required
                            type="text"
                            disabled={status === "submitting"}
                        />
                    </div>
                    <div>
                        <label
                            className="block text-sm font-medium text-slate-700 mb-2"
                            htmlFor="email"
                        >
                            {t.fields.email}
                        </label>
                        <input
                            className="w-full rounded-lg border-slate-300 bg-white text-slate-900 focus:ring-primary focus:border-primary shadow-sm"
                            id="email"
                            name="email"
                            required
                            type="email"
                            disabled={status === "submitting"}
                        />
                    </div>
                </div>

                <div>
                    <label
                        className="block text-sm font-medium text-slate-700 mb-2"
                        htmlFor="topic"
                    >
                        {t.fields.topic}
                    </label>
                    <select
                        className="w-full rounded-lg border-slate-300 bg-white text-slate-900 focus:ring-primary focus:border-primary shadow-sm"
                        id="topic"
                        name="topic"
                        required
                        disabled={status === "submitting"}
                    >
                        <option value="">{t.fields.topicPlaceholder}</option>
                        {t.topics.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label
                        className="block text-sm font-medium text-slate-700 mb-2"
                        htmlFor="message"
                    >
                        {t.fields.message}
                    </label>
                    <textarea
                        className="w-full rounded-lg border-slate-300 bg-white text-slate-900 focus:ring-primary focus:border-primary shadow-sm"
                        id="message"
                        name="message"
                        required
                        rows={4}
                        disabled={status === "submitting"}
                    />
                </div>

                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input
                            className="h-4 w-4 text-primary focus:ring-primary border-slate-300 rounded bg-white"
                            id="consent"
                            name="consent"
                            required
                            type="checkbox"
                            disabled={status === "submitting"}
                        />
                    </div>
                    <div className="ml-3 text-sm">
                        <label className="font-medium text-slate-700" htmlFor="consent">
                            {t.fields.consentBefore ? (
                                <>
                                    {t.fields.consentBefore}{" "}
                                    <Link
                                        className="text-primary hover:underline"
                                        href={localePath(locale, "/privacy")}
                                    >
                                        {t.fields.consentLink}
                                    </Link>
                                    .
                                </>
                            ) : (
                                <Link
                                    className="text-primary hover:underline"
                                    href={localePath(locale, "/privacy")}
                                >
                                    {t.fields.consentLink}
                                </Link>
                            )}
                        </label>
                    </div>
                </div>

                {process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY ? (
                    <div className="flex justify-center my-4 min-h-[78px]">
                        <HCaptcha
                            sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
                            onVerify={(token) => setHcaptchaToken(token)}
                            ref={captchaRef}
                            onExpire={() => setHcaptchaToken(null)}
                        />
                    </div>
                ) : (
                    <div className="bg-slate-100 border border-slate-300 rounded-lg h-20 flex items-center justify-center text-slate-500 text-sm">
                        {t.captchaPlaceholder} (NEXT_PUBLIC_HCAPTCHA_SITE_KEY missing)
                    </div>
                )}

                {status === "error" && (
                    <div className="text-red-600 text-sm font-medium">
                        {msg.error}
                    </div>
                )}

                <button
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-4 rounded-xl transition-colors shadow-sm disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center"
                    type="submit"
                    disabled={status === "submitting"}
                >
                    {status === "submitting" ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            {msg.sending}
                        </>
                    ) : (
                        t.fields.button
                    )}
                </button>
            </form>
        </div>
    );
}
