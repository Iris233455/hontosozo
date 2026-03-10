# HONTO SOZO Website — i18n 架构与扩展指南

## 当前状态

- **支持语言**：en / ja / zh（代码中三语并存）
- **当前显示**：仅日语（语言切换 UI 已移除）
- **ja 文案**：已由人工完整润色
- **en / zh 文案**：为占位版本，未经人工审核
- **语言切换 UI**：代码已删除，但恢复简单（见下方）

## 架构概览

```
用户请求
  ↓
proxy.ts（Next.js 16 的 middleware 等价物）
  ├─ 检查 URL 是否包含 locale segment（/ja/、/en/、/zh/）
  │   └─ 是 → 放行 + 更新 cookie
  └─ 否 → 读取 cookie(hs_locale) 或 Accept-Language header
         └─ 307 redirect 到 /{locale}{path}
  ↓
[locale]/layout.tsx
  ├─ generateStaticParams() → 生成 en/ja/zh 三个静态路径
  ├─ dynamicParams = false → 其他值 404
  └─ isLocale() 验证
  ↓
[locale]/page.tsx
  └─ COPY[locale] 获取对应语言文案 → 渲染
```

## 核心文件说明

### `src/lib/i18n.ts`

```typescript
export const LOCALES = ["en", "ja", "zh"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "ja";
export const LOCALE_COOKIE = "hs_locale";
export const LOCALE_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 180; // 180天

// 类型守卫：接受 string | null | undefined
export function isLocale(value: string | null | undefined): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}

// 归一化：无效值返回默认 locale
export function normalizeLocale(value: string | null | undefined): Locale {
  if (value && isLocale(value)) return value;
  return DEFAULT_LOCALE;
}
```

**添加新语言**只需：
1. 在 `LOCALES` 数组中添加（如 `"ko"`）
2. 在 `COPY` 对象中添加对应语言条目
3. 在 `MissingServiceNotice.tsx` 的 `SERVICE_LABEL` 和 `MESSAGE` 中添加
4. 如需要，在 Privacy / Terms 页面添加对应语言处理

### `src/proxy.ts`

请求代理逻辑（详见 DEVELOPMENT-GUIDE.md）。关键点：
- Cookie 名：`hs_locale`
- Cookie 有效期：180天
- Accept-Language 解析：提取 `q` 权重，取第一个匹配的 locale
- `/go/*` 路径不经过 locale 处理

### `src/lib/paths.ts`

```typescript
export function localePath(locale: Locale, pathname: string) {
  if (pathname === "/") return `/${locale}`;
  return `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`;
}
```

用于生成带 locale 前缀的路径，在 Link 组件中使用。

## 文案管理：COPY 对象

### 结构（Type 定义）

```typescript
type Copy = {
  brand: string;                    // Header/Footer 品牌名
  nav: { methodology, services, insights, company };  // 导航文本
  cta: { getStarted, exploreServices, viewInsights, learnMore, getStartedAlt };
  hero: { titleBefore, titleHighlight, titleAfter, subtitle };
  methodology: { eyebrow, title, steps[], tagline };
  services: { eyebrow, title, subtitle, cards[] };
  insights: { eyebrow, title, subtitle, items[] };
  company: { eyebrow, title, missionLabel, mission, serveLabel, serve,
             approachLabel, approachBullets[], profileTitle, profile[] };
  contact: { eyebrow, title, subtitle, formTitle, fields{}, topics[], captchaPlaceholder };
  footer: { tagline, legal, privacy, terms, contact, location, copyright };
};
```

### 当前 COPY 位置

**主页面**：`src/app/[locale]/page.tsx` 中的 `const COPY: Record<Locale, Copy>`
- `COPY.en` — 英语占位文案
- `COPY.ja` — ★ 已完成人工润色
- `COPY.zh` — 中文占位文案

**Privacy / Terms 页面**：文案直接硬编码在各自的 `page.tsx` 中
- 目前只有日语版本
- 如果需要 i18n，建议提取到类似 COPY 对象的结构中

### 日语文案要点（已润色版本）

品牌定位变更：
- 公司名："合同会社本当創造（HONTO SOZO LLC）"
- 定位：从通用数据公司 → 家族/人生意思决定パートナー
- "相談"（Consulting）→ "人生相談"（使用塔罗牌的对话型 Life Consulting）
- 方法论：强调了 AI 分析（"構造化・AI分析"）
- Hero 标语："家族の人生を データで読み解く 意思決定パートナー"

## 恢复语言切换 UI

语言切换 UI 曾在三个位置存在，后被移除。恢复方法：

### Desktop Header（在 nav 和 CTA 之间添加）

```tsx
<div className="flex items-center gap-2 text-sm">
  {(["en", "ja", "zh"] as const).map((loc) => (
    <Link
      key={loc}
      href={localePath(loc, "/")}
      className={`px-2 py-1 rounded ${
        locale === loc ? "bg-primary text-white" : "text-slate-500 hover:text-primary"
      }`}
    >
      {loc.toUpperCase()}
    </Link>
  ))}
</div>
```

### MobileNav（需要恢复 locale prop）

1. 给 `Props` 类型加回 `locale: Locale`
2. 在菜单底部添加语言链接

### Privacy / Terms 页面 Header

同样在 header 的 flex 容器中添加语言链接。

## 后续 i18n 开发建议

### 短期（仅日语）
- 当前架构即可，无需改动
- 新增页面时只需在 `[locale]/` 目录下创建，使用 `normalizeLocale()` 获取 locale

### 中期（启用多语言）
1. 让人工审核 `COPY.en` 和 `COPY.zh` 的占位文案
2. 恢复语言切换 UI
3. 将 Privacy / Terms 页面的文案提取到 COPY 对象
4. 考虑将 COPY 对象拆分到独立的 `messages/en.ts`、`messages/ja.ts` 等文件

### 长期（规模化）
- 考虑引入 `next-intl` 或类似库
- 将文案迁移到 JSON 格式，便于非开发人员编辑
- 添加 Open Graph / SEO 元数据的多语言支持
- 添加 `hreflang` 标签
- 考虑 RTL 语言支持（如阿拉伯语）的布局适配

## Cookie 机制

| 属性 | 值 |
|------|---|
| 名称 | `hs_locale` |
| 有效期 | 180天 |
| Path | `/` |
| SameSite | `lax` |
| 设置时机 | proxy.ts 中的 redirect 响应 |
| 读取时机 | proxy.ts（路由判断）、layout.tsx（<html lang> 设置） |
