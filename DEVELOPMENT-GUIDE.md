# HONTO SOZO Website — 开发技术指南

## 1. 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| Next.js | 16.1.6 | App Router + Turbopack |
| React | 19.2.3 | Server Components 为主 |
| TypeScript | ^5 | strict mode |
| Tailwind CSS | ^4 | 使用 `@theme inline` 自定义 token |
| 字体 | Geist Sans / Geist Mono | 通过 `next/font/google` 加载 |
| 图标 | Google Material Symbols Outlined | 通过 CDN link 加载 |

## 2. 项目结构

```
HONTOSOZO/web/
├── public/
│   └── logo.svg              # 品牌 Logo（三色 H 图形）
├── src/
│   ├── app/
│   │   ├── layout.tsx         # 根 layout（<html lang> 动态设置、字体、全局 CSS）
│   │   ├── page.tsx           # 根页面（fallback redirect → /ja）
│   │   ├── globals.css        # CSS 变量 + Tailwind 主题定义
│   │   ├── favicon.ico
│   │   ├── [locale]/
│   │   │   ├── layout.tsx     # locale 验证 + generateStaticParams
│   │   │   ├── page.tsx       # ★ 主页面（所有 section + 全部文案 COPY 对象）
│   │   │   ├── privacy/
│   │   │   │   └── page.tsx   # プライバシーポリシー
│   │   │   └── terms/
│   │   │       └── page.tsx   # 利用規約
│   │   └── go/
│   │       └── [service]/
│   │           └── route.ts   # 服务外链重定向 API
│   ├── components/
│   │   ├── MobileNav.tsx      # 移动端汉堡菜单（client component）
│   │   └── MissingServiceNotice.tsx  # 服务链接未配置时的提示
│   ├── lib/
│   │   ├── i18n.ts            # i18n 核心工具（locale 类型、cookie 常量等）
│   │   └── paths.ts           # localePath() 工具函数
│   └── proxy.ts               # ★ Next.js 16 的请求代理（替代 middleware.ts）
├── package.json
├── tsconfig.json
├── next.config.ts
└── dev-handoff/               # ← 你现在所在的位置
```

## 3. 设计系统 / 色板

### 品牌三色

| 名称 | HEX | CSS 变量 | 用途 |
|------|-----|----------|------|
| Primary Blue | `#1978E5` | `--primary` | 按钮、CTA、链接、主色调 |
| Emerald Brand | `#10B981` | `--emerald-brand` | Hero 渐变文字、方法论图标 |
| Violet Brand | `#8B5CF6` | `--violet-brand` | Logo 第三色、预留用于洞察/AI 相关 |

### 基底色

| 名称 | HEX | CSS 变量 | 用途 |
|------|-----|----------|------|
| White | `#FFFFFF` | `--surface` | Header、卡片、section 背景 |
| Background Light | `#F6F7F8` | `--background-light` | 页面整体背景 |
| Foreground | `#0F172A` | `--foreground` | 主文本色（深海军蓝） |

### 文本层级（Tailwind Slate 系列）

| Class | 用途 |
|-------|------|
| `text-slate-900` | 大标题、强调文本 |
| `text-slate-700` | 按钮二级文本 |
| `text-slate-600` | 正文 |
| `text-slate-500` | 辅助文本、caption |
| `text-slate-400` | 极弱文本 |
| `border-slate-200` | 分割线、边框 |
| `bg-slate-100` | 浅灰背景（卡片图片区域） |

### Logo

`public/logo.svg` — 由三个三角形拼成的 "H" 图形，三色对应品牌色板：
- 左下：蓝 `#1978E5`（cls-1）
- 右下：绿 `#10B981`（cls-2）
- 右上：紫 `#8B5CF6`（cls-3）

### Hero 渐变

标题中的高亮文字使用从 primary（蓝）到 emerald-brand（绿）的渐变：
```
bg-gradient-to-r from-primary to-emerald-brand
```
配合 `text-transparent bg-clip-text` 实现渐变文字效果。

## 4. 路由系统

| 路径 | 类型 | 说明 |
|------|------|------|
| `/` | page | fallback redirect → `/ja` |
| `/[locale]` | page | 主页面（locale = en \| ja \| zh） |
| `/[locale]/privacy` | page | 隐私政策 |
| `/[locale]/terms` | page | 利用规约 |
| `/go/[service]` | API route | 外部服务重定向（study/housing/consulting） |

### proxy.ts 路由逻辑

请求处理流程：
1. `/go/*` 路径 → 直接放行到 API route
2. 已包含 locale 的路径（如 `/ja/privacy`）→ 放行 + 更新 cookie
3. 无 locale 路径（如 `/privacy`）→ 读 cookie 或 Accept-Language → 307 redirect 到 `/{locale}/privacy`

## 5. 环境变量

| 变量名 | 用途 | 当前状态 |
|--------|------|----------|
| `SERVICE_URL_STUDY` | "学び支援"外链目标 | 未配置 |
| `SERVICE_URL_HOUSING` | "住まい支援"外链目标 | 未配置 |
| `SERVICE_URL_CONSULTING` | "人生相談"外链目标 | 未配置 |

未配置时，`/go/[service]` 会 redirect 回主页的 contact section 并显示提示。

## 6. 文案管理架构

所有页面文案集中在 `src/app/[locale]/page.tsx` 的 `COPY` 对象中：

```typescript
const COPY: Record<Locale, Copy> = {
  en: { ... },
  ja: { ... },  // ← 已由人工润色
  zh: { ... },
};
```

`Copy` 类型定义了完整的文案结构（见代码），包含：brand、nav、cta、hero、methodology、services、insights、company、contact、footer。

**注意**：Privacy 和 Terms 页面的文案直接硬编码在各自的 page.tsx 中（非 COPY 对象），如果要做 i18n 需要提取。

## 7. 关键注意事项

### ⚠️ proxy.ts 不是 middleware.ts

Next.js 16 用 `proxy.ts` 完全替代了 `middleware.ts`。两者不能共存。
- ✅ `src/proxy.ts` — 正确
- ❌ `src/middleware.ts` — 会导致构建错误

### ⚠️ .next 缓存问题

如果 dev server 异常退出，`.next` 目录可能会有锁定的缓存文件，导致后续构建失败。
解决方法：`rm -rf .next && npm run build`

### ⚠️ dynamicParams = false

`[locale]/layout.tsx` 设置了 `dynamicParams = false` + `generateStaticParams`。
这意味着只有 `en`、`ja`、`zh` 三个 locale 有效，其他值会 404。
如果需要新增语言，必须同时更新 `LOCALES` 数组。

### ⚠️ Client Component 边界

- `MobileNav.tsx` — `"use client"`（使用 useState 控制菜单开关）
- `MissingServiceNotice.tsx` — `"use client"`（使用 useSearchParams）
- 其他所有组件均为 Server Components

### ⚠️ 表单未接后端

Contact form 目前是纯 HTML form，没有 action、没有 onSubmit 处理。
需要后续接入：
- hCaptcha（需注册获取 site key）
- 表单提交 API（建议用 Next.js API route 或外部服务如 Formspree）

### ⚠️ 字体加载

Geist 字体通过 `next/font/google` 在 `layout.tsx` 中加载，通过 CSS 变量暴露：
- `--font-geist-sans` → `--font-sans`
- `--font-geist-mono` → `--font-mono`

Material Symbols 图标通过 `<link>` 标签从 Google Fonts CDN 加载。
