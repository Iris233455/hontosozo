# HONTO SOZO Website — AI 开发交接文档

> **给接手 AI 的第一句话：请按以下顺序阅读本文件夹中的文档。**

## 阅读顺序

1. **`START-HERE.md`**（本文件）— 项目概况、阅读地图
2. **`DEVELOPMENT-GUIDE.md`** — 完整技术栈、项目结构、设计系统、注意事项
3. **`I18N-GUIDE.md`** — i18n 架构详解 + 后期多语言扩展指南
4. **`source-snapshot/`** — 当前所有源代码的完整快照（截至 2026-03-09）

## 项目概况

| 项目 | 值 |
|------|---|
| 名称 | HONTO SOZO（合同会社本当創造）企业官网 |
| 框架 | Next.js 16.1.6 + React 19 + TypeScript 5 + Tailwind CSS 4 |
| 路径 | `HONTOSOZO/web/` |
| 状态 | 日语版本已完成，可正常构建和运行 |
| 当前语言 | 仅显示日语（i18n 结构已预留 en/ja/zh） |
| Logo | SVG 三色标志（蓝/绿/紫），位于 `public/logo.svg` |

## 当前状态总结

### 已完成
- 全站日语文案已由人工重写并应用到代码中
- Privacy（プライバシーポリシー）和 Terms（利用規約）页面已日语化
- Logo SVG 已集成到 Header 和 Footer（替换了之前的占位符）
- 颜色统一为三色品牌色板：蓝 `#1978E5`、绿 `#10B981`、紫 `#8B5CF6`
- 语言切换 UI 已移除（但 i18n 路由基础设施完整保留）
- 移动端汉堡菜单组件已实现
- TypeScript 构建通过，无错误
- 所有路由已验证：`/ja`、`/ja/privacy`、`/ja/terms`、`/go/[service]`

### 待开发（TODO）
- hCaptcha 集成（contact form 目前是占位符）
- 表单提交后端逻辑（目前 form 无 action）
- en/zh 语言文案润色（代码中有占位文案，但未经人工审核）
- 语言切换 UI 的恢复（当需要多语言时）
- SEO 优化（Open Graph 标签、结构化数据等）
- 各服务外部链接配置（环境变量 `SERVICE_URL_*`）

## 关键警告

> **Next.js 16 使用 `proxy.ts` 而不是 `middleware.ts`！**
>
> 这是 Next.js 16 的重大变更。项目中的 `src/proxy.ts` 就是中间件等价物。
> **绝对不要创建 `middleware.ts`**，否则会导致构建错误：
> "Both middleware file and proxy file are detected. Please use proxy.ts only."

## 启动方式

```bash
cd HONTOSOZO/web
npm install
npm run dev
# 访问 http://localhost:3000/ja
```

## 构建

```bash
npm run build
# 如果遇到 .next 缓存权限问题，删除 .next 目录后重试
```
