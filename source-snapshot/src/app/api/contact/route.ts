import { NextResponse } from "next/server";
import { render } from "@react-email/render";
import { Resend } from "resend";
import { ContactEmail } from "@/emails/ContactEmail";

// 初始化 Resend 客户端
// 只有在使用真实的 RESEND_API_KEY 时才会实例化，防止构建时缺少 key 报错
const resendUrl = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const DEFAULT_ALLOWED_ORIGINS = new Set([
    "https://hontosozo.com",
    "https://www.hontosozo.com",
    "https://tarot.hontosozo.com",
    "http://localhost:3000",
    "http://localhost:5173",
]);

function getCorsHeaders(origin: string | null): Record<string, string> {
    if (!origin || !DEFAULT_ALLOWED_ORIGINS.has(origin)) {
        return {};
    }

    return {
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Max-Age": "86400",
        Vary: "Origin",
    };
}

function jsonResponse(body: unknown, status: number, origin: string | null) {
    return NextResponse.json(body, {
        status,
        headers: getCorsHeaders(origin),
    });
}

export async function OPTIONS(request: Request) {
    return new NextResponse(null, {
        status: 204,
        headers: getCorsHeaders(request.headers.get("origin")),
    });
}

export async function POST(request: Request) {
    const origin = request.headers.get("origin");

    try {
        const data = await request.json();
        const { hcaptchaToken, ...formData } = data;

        // 如果配置了 hCaptcha，验证令牌
        if (process.env.HCAPTCHA_SECRET_KEY) {
            if (!hcaptchaToken) {
                return jsonResponse({ success: false, error: "Missing captcha token" }, 400, origin);
            }

            const verifyParams = new URLSearchParams();
            verifyParams.append("secret", process.env.HCAPTCHA_SECRET_KEY);
            verifyParams.append("response", hcaptchaToken);

            const captchaResponse = await fetch("https://api.hcaptcha.com/siteverify", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: verifyParams.toString(),
            });

            const captchaResult = await captchaResponse.json();

            if (!captchaResult.success) {
                console.error("hCaptcha verification failed:", captchaResult);
                return jsonResponse({ success: false, error: "Captcha verification failed" }, 400, origin);
            }
        }

        // 如果没有配置 Resend key，则做模拟提交（用于开发环境）
        if (!resendUrl) {
            console.warn("RESEND_API_KEY is not defined. Simulating email send for 1 second.");
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log("Mock contact form submission data:", formData);
            return jsonResponse({ success: true, message: "Thank you for your message." }, 200, origin);
        }

        // 从环境变量读取收件人邮箱，如果没有配置则退回到默认邮箱
        const adminEmail = process.env.CONTACT_EMAIL_TO || "support@hontosozo.com";

        // 从环境变量读取发件人邮箱，例如 "onboarding@resend.dev" 或者您验证过的自己域名邮箱
        const fromEmail = process.env.RESEND_FROM_EMAIL || "HONTO SOZO Contact <onboarding@resend.dev>";

        const emailHtml = await render(
            ContactEmail({
                name: formData.name,
                email: formData.email,
                topic: formData.topic,
                message: formData.message,
            })
        );

        const { data: emailData, error } = await resendUrl.emails.send({
            from: fromEmail,
            to: [adminEmail],
            replyTo: formData.email, // 允许管理员直接回信给填写者
            subject: `[HONTO SOZO Website] New Inquiry - ${formData.topic}`,
            html: emailHtml,
        });

        if (error) {
            console.error("Resend API error:", error);
            return jsonResponse(
                { success: false, error: "Email delivery failed" },
                500,
                origin
            );
        }

        console.log("Contact form successfully sent via Resend:", emailData?.id);

        return jsonResponse({ success: true, message: "Thank you for your message." }, 200, origin);
    } catch (error) {
        console.error("Catch error in contact route:", error);
        return jsonResponse(
            { success: false, error: "Failed to process contact form" },
            500,
            origin
        );
    }
}
