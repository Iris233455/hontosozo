import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";

import { LOCALE_COOKIE, normalizeLocale } from "@/lib/i18n";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "合同会社本当創造 | HONTO SOZO LLC",
  description: "家族の人生意思決定を、データ・AI・対話によって支えるライフデザインパートナー。見知らぬ領域での選択肢を構造化し、最適な意思決定をサポート。",
  metadataBase: new URL("https://hontosozo.com"),
  keywords: [
    "意思決定支援",
    "データ分析",
    "ライフデザイン",
    "本当創造",
    "コンサルティング",
    "HONTO SOZO",
    "家族のサポート",
    "AI",
  ],
  authors: [{ name: "HONTO SOZO LLC" }],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://hontosozo.com",
    siteName: "合同会社本当創造",
    title: "HONTO SOZO LLC | あなたのデータ洞察パートナー",
    description: "家族の人生意思決定を支えるデータ洞察パートナー。見知らぬ領域での選択肢を可視化します。",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "HONTO SOZO LLC Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HONTO SOZO LLC | 合同会社本当創造",
    description: "家族の人生意思決定を支えるデータ洞察パートナー。未知の領域での最適な選択を支援します。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const locale = normalizeLocale(cookieStore.get(LOCALE_COOKIE)?.value);

  return (
    <html lang={locale}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
