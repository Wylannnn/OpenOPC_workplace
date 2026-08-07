# 🎯 AI商业观察 — 完整视觉 Prompt 包

> **品牌**：AI商业观察 (AI Business Observer)
> **版本**：v1.1
> **日期**：2025-07
> **设计语言**：暗色科技美学 · 玻璃拟态 · 霓虹点缀 · 瑞士网格排版
> **配色体系**：太空黑 #0A0A0F · 电光白 #F0F0FF · 电光青 #00D4FF · 等离子紫 #7B2FFF · 冰雾灰 #8A8FA8 · 暗曜蓝 #1A1A2E
> **生成引擎**：Google Flow / Midjourney / DALL·E 3（英文 prompt 响应最佳）
> **总物料**：36张图（12封面 + 24内页）+ 2品牌资产（Logo + 主页背景图）

---

## 目录

0. [品牌资产 — Logo/头像 + 主页背景图](#0-品牌资产)
1. [模板映射总表](#1-模板映射总表)
2. [第1周 — 冷启动·建立认知](#2-第1周--冷启动建立认知)
3. [第2周 — 建立信任·深度内容](#3-第2周--建立信任深度内容)
4. [第3周 — 强化标签·内容深化](#4-第3周--强化标签内容深化)
5. [第4周 — 冲刺涨粉·内容优化](#5-第4周--冲刺涨粉内容优化)
6. [第1周已有图片评估意见](#6-第1周已有图片评估意见)
7. [竞品差异化依据说明](#7-竞品差异化依据说明)

---

## 0. 品牌资产 — Logo/头像 + 主页背景图

---

### 0.1 Logo/头像 — 品牌标识

> **用途**：小红书账号头像、全平台品牌标识
> **宽高比**：1:1 正方形（1024×1024）
> **核心要求**：纯图形化设计，不包含任何文字，基于六色体系
> **设计语言**：玻璃拟态 + 霓虹发光 + 瑞士网格 + 暗色科技美学

**图片名称**: `brand-logo-avatar-v1`
**推荐宽高比**: 1:1 (1024×1024)
**生成引擎**: Google Flow / Midjourney / DALL·E 3

**Prompt**:

```text
A premium brand logo mark in a 1:1 square format, designed as a purely graphical emblem with zero text — inspired by the visual language of high-end tech brands like Bloomberg Terminal, Apple's dark mode UI, and architectural identity systems. The background is deep space black (#0A0A0F) with a subtle radial vignette that darkens toward the edges, creating a sense of infinite depth.

At the center of the canvas, the primary emblem: a stylized geometric eye or observation symbol constructed from precision vector shapes. The outer ring is a thin, continuous circular band in cyber cyan (#00D4FF) at 70% opacity with a subtle neon glow — the glow is tight to the line, extending no more than 2px outward. Inside the ring, a concentric inner circle in dark sapphire blue (#1A1A2E) at 50% opacity with a frosted glass texture and a 1px border in ice mist gray (#8A8FA8) at 30% opacity. At the very center of the eye, a small solid circle in plasma purple (#7B2FFF) with a soft inner glow, representing the "pupil" — the focal point of observation.

Radiating outward from the central emblem, three thin diagonal lines in cyber cyan (#00D4FF) at 25% opacity extend from the upper-right quadrant, evoking data streams or signal rays — a subtle nod to AI data processing. These lines are precise, straight, and terminate at different distances from the center, creating a sense of dynamic movement. A single horizontal accent line in plasma purple (#7B2FFF) at 30% opacity runs through the lower-left quadrant, offset from center — a classic Swiss Design asymmetric gesture.

In the background, a faint geometric grid pattern in cyber cyan (#00D4FF) at 3% opacity spans the entire canvas — ultra-fine horizontal and vertical lines with generous spacing, evoking a blueprint or architectural reference. The grid is barely perceptible, adding texture without competing with the central emblem.

The overall composition follows the golden ratio, with the central emblem occupying approximately 40% of the canvas diameter. The remaining 60% is pure negative space in deep space black (#0A0A0F), allowing the emblem to breathe. The lighting is diegetic and self-contained — the neon glow of the cyan ring and the inner glow of the purple pupil are the only light sources, creating a self-illuminated, holographic quality.

The material quality is that of precision-machined glass and metal: the frosted glass inner circle has a subtle refractive quality, the cyan ring has a polished metallic sheen with a faint chromatic edge, and the purple center glows with a warm, volumetric light. Octane render quality, macro product photography aesthetic with a 100mm macro lens at f/8 for maximum sharpness across the entire plane. No Chinese characters anywhere. No text of any kind. Pure graphical symbol only.
```

---

### 0.2 主页背景图 — Profile Banner

> **用途**：小红书个人主页背景图
> **宽高比**：3:4 竖版（768×1024）
> **核心要求**：暗色氛围，60%+留白/暗区域供平台overlay文字叠加，玻璃拟态+瑞士网格+霓虹点缀
> **参考**：prompts-manifest-v3.md §11 已有初版，此处为优化版

**图片名称**: `profile-banner-v2`
**推荐宽高比**: 3:4 (768×1024)
**生成引擎**: Google Flow / Midjourney / DALL·E 3

**Prompt**:

```text
A dark, atmospheric profile banner image designed as the background for a social media profile page, rendered in a restrained glass-morphism and Swiss Design aesthetic. The canvas is vertical 3:4 aspect ratio with deep space black (#0A0A0F) as the dominant background — the overall luminance is kept deliberately low (average brightness below 20%) to ensure any platform overlay text (profile name, bio, stats) remains readable when superimposed.

The background transitions subtly from pure deep space black at the top to a slightly lighter dark sapphire blue (#1A1A2E) at 15% opacity in the lower third, creating a gentle atmospheric gradient without introducing any bright areas. A faint, ultra-fine Swiss grid pattern in cyber cyan (#00D4FF) at 4% opacity spans the entire canvas — thin horizontal and vertical lines with generous spacing, evoking a blueprint or architectural reference.

In the upper-right quadrant, a single glass-morphism panel element: a tall, narrow vertical rectangle with a dark sapphire blue (#1A1A2E) base at 30% opacity, a frosted glass texture with subtle backdrop blur, a 1px border in ice mist gray (#8A8FA8) at 15% opacity, and a soft top-edge rim light. Inside this panel, three short horizontal lines in ice mist gray (#8A8FA8) at 20% opacity are stacked with generous spacing — these are abstract text placeholders, not actual text.

In the lower-left quadrant, a geometric composition of three precision circles arranged in a diagonal cascade, each outlined in cyber cyan (#00D4FF) at 12% opacity, with the smallest circle filled solid in plasma purple (#7B2FFF) at 10% opacity. A thin, continuous vector line in cyber cyan (#00D4FF) at 15% opacity weaves through these circles like a data stream or circuit trace, terminating at the bottom edge of the canvas.

In the lower-right corner, a subtle brand marker: the letters "AIBO" in ultra-light condensed sans-serif, set in ice mist gray (#8A8FA8) at 12% opacity — barely perceptible, serving as a ghost watermark. A single horizontal accent line in plasma purple (#7B2FFF) at 20% opacity runs approximately 30% of the canvas width, positioned at the golden ratio point from the top edge, off-center to the left — a classic Swiss Design non-symmetric gesture.

The remaining 60%+ of the canvas is intentionally left as pure, uninterrupted deep space black (#0A0A0F) with zero texture, zero decoration — providing ample dark negative space for the platform's profile photo, bio text, and content grid to overlay without visual competition. The lighting is extremely subtle and diegetic: the only illumination comes from the faint glow of the cyber cyan vector line and the soft rim light on the glass panel, creating a quiet, meditative ambiance.

Octane render quality, architectural photography composition with a 35mm wide-angle lens, capturing the precise material definition of the frosted glass surface while maintaining the overall dark, recessive quality required for a background image. No Chinese characters anywhere. No bright elements that would compete with foreground content.
```

---

### 竞品差异化依据（品牌资产维度）

| 维度 | 老麦的工具库 | 赛博禅心 | 数字生命卡兹克 | 量子位 | APPSO | **AI商业观察（我们）** |
|------|------------|---------|--------------|-------|-------|-------------------|
| **头像风格** | 工具图标/文字 | 赛博朋克头像 | 个人照片 | 品牌Logo | 品牌Logo | **纯图形化几何徽章** |
| **头像色彩** | 科技蓝 | 紫蓝渐变 | 黑白/深色 | 品牌蓝 | 品牌绿 | **太空黑+电光青+等离子紫** |
| **背景图** | 无/简单 | 无/简单 | 无 | 品牌色 | 品牌色 | **暗色科技氛围背景** |
| **视觉独特性** | 中等 | 中等 | 高（个人IP） | 中等 | 中等 | **极高（无竞品使用玻璃拟态几何徽章）** |
| **品牌记忆点** | 工具截图 | 赛博风格 | 个人形象 | 品牌蓝 | 品牌绿 | **发光几何眼 + 霓虹青 + 玻璃拟态** |

**差异化核心**：目前5个对标竞品中，无一使用「纯图形化几何徽章」作为头像。老麦的工具库使用工具截图，赛博禅心使用赛博朋克头像，数字生命卡兹克使用个人照片，量子位和APPSO使用品牌Logo文字。我们的「发光几何眼」徽章——结合玻璃拟态、霓虹发光和瑞士网格——在AI商业赛道中具有极高的视觉独特性，同时传递「观察」「洞察」「数据」的品牌核心价值。

---

## 1. 模板映射总表

### 封面模板分配

| 笔记 | 内容支柱 | 封面模板 | 选择理由 |
|:----:|---------|:--------:|---------|
| 笔记1 🏗️ | AI商业案例 | **A — 案例型** | 真实案例+数字冲击，需要权威感 |
| 笔记2 🛠️ | AI效率方案 | **B — 清单型** | 5个工作流清单，适合列表展示 |
| 笔记3 ⚠️ | 避坑/洞察 | **D — 洞察型** | 观点输出+认知冲击，大字报风格 |
| 笔记4 📊 | 行业趋势 | **C — 数据型** | 5个行业数据，数据仪表盘风格 |
| 笔记5 🏗️ | AI商业案例 | **A — 案例型** | 奶茶店案例，故事性强 |
| 笔记6 🛠️ | AI效率方案 | **B — 清单型** | 3个模板清单，实用导向 |
| 笔记7 📊 | 行业趋势 | **D — 洞察型** | 岗位淘汰话题，观点冲击力强 |
| 笔记8 🏗️ | AI商业案例 | **A — 案例型** | 工厂案例，深度拆解 |
| 笔记9 🛠️ | AI效率方案 | **B — 清单型** | 4个工具推荐，清单展示 |
| 笔记10 ⚠️ | 避坑/洞察 | **D — 洞察型** | 学习误区，认知颠覆 |
| 笔记11 📊 | 行业趋势 | **C — 数据型** | ROI计算，数据驱动 |
| 笔记12 🏗️ | AI商业案例 | **A — 案例型** | 账号复盘，自我案例 |

### 内页模板分配

| 笔记 | 内页1 | 内页2 | 内页3 |
|:----:|:-----:|:-----:|:-----:|
| 笔记1 | 步骤流程（3步：客服→营销→数据） | 数据图表（5万→15万对比） | — |
| 笔记2 | 步骤流程（5个工作流概览） | 数据图表（时间节省对比） | 步骤流程（2个最省时工作流详解） |
| 笔记3 | 金句页（AI不会替代你） | 对比页（误区 vs 正确姿势） | — |
| 笔记4 | 数据图表（5个行业数据） | 数据图表（行业影响深度对比） | — |
| 笔记5 | 步骤流程（3步：客服→营销→数据） | 数据图表（利润40%增长） | — |
| 笔记6 | 步骤流程（3个模板详解） | 金句页（提示词即生产力） | — |
| 笔记7 | 对比页（淘汰 vs 创造岗位） | 数据图表（岗位变化数据） | — |
| 笔记8 | 步骤流程（问题诊断→方案→执行） | 数据图表（效率翻倍数据） | — |
| 笔记9 | 步骤流程（4个工具详解） | 对比页（免费 vs 付费对比） | — |
| 笔记10 | 金句页（学习AI的正确姿势） | 对比页（错误 vs 正确方法） | — |
| 笔记11 | 数据图表（ROI计算公式拆解） | 步骤流程（3步计算ROI） | — |
| 笔记12 | 数据图表（30天数据回顾） | 金句页（30天复盘感悟） | — |

---

## 2. 第1周 — 冷启动·建立认知

---

### 笔记1：我用AI帮一家小店把月营收翻了3倍 📈

> **内容支柱**：🏗️ AI商业案例
> **封面模板**：A — 案例型（Dark Authoritative）
> **内页1**：步骤流程（3步：AI客服→AI营销→AI数据分析）
> **内页2**：数据图表（30天前后对比：月营收5万→15万）

---

#### 笔记1 · 封面 (Template A — Case Study)

**图片名称**: `note1-cover-v3`
**推荐宽高比**: 3:4 (768x1024)
**生成引擎**: Google Flow / Midjourney / DALL·E 3

**Prompt**:

```
A bold, editorial cover image in the style of Wired and The Verge's most iconic tech features. The background is deep space black (#0A0A0F) with a subtle grid pattern overlay at 8% opacity — fine, precise horizontal and vertical lines evoking a blueprint or data center schematic. In the upper-left quadrant, a large translucent glass-morphism panel with a frosted glass texture sits at a slight angle: its base layer is dark sapphire blue (#1A1A2E) at 40% opacity, with a 2px cyber cyan (#00D4FF) border at 50% opacity, a subtle backdrop blur effect, and a soft white glow at the top edge simulating rim lighting. Inside this glass panel, a bold sans-serif headline in electric white (#F0F0FF) reads "SMALL SHOP" on the first line and "3X REVENUE" on the second, set in an extra-condensed ultra-bold font with tight tracking. Below the headline, a smaller subhead in ice mist gray (#8A8FA8) thin sans-serif reads "How AI transformed a local business in 30 days". To the right of the glass panel, a massive numeral "3X" floats independently, rendered in an ultra-bold condensed DIN-style font in cyber cyan (#00D4FF) with a subtle neon glow effect — the glow spills softly onto the dark background. Beneath this numeral, a thin horizontal accent line in plasma purple (#7B2FFF) extends from the glass panel's right edge to the canvas boundary. In the lower-right corner, three precision geometric circles in varying sizes are arranged in a diagonal cascade, each outlined in cyber cyan (#00D4FF) at 20% opacity, with one circle filled solid in plasma purple (#7B2FFF) at 15% opacity. A thin, continuous vector line in cyber cyan (#00D4FF) weaves through these circles like a circuit trace. At the very bottom, a brand footer in ultra-light sans-serif reads "AI BUSINESS OBSERVER" in electric white (#F0F0FF) at 40% opacity. The lighting is dramatic and directional — a single key light from the upper-left creates sharp highlights on the glass panel's edge while the rest of the scene recedes into deep shadow. Octane render quality, architectural photography composition, 24mm wide-angle lens with subtle chromatic aberration at the edges for a cinematic feel. No Chinese characters anywhere.
```

---

#### 笔记1 · 内页1 (Step Flow — 3步流程)

**图片名称**: `note1-page1-v3`
**推荐宽高比**: 3:4 (768x1024)

**Prompt**:

```
A structured horizontal timeline infographic card in a dark glass-morphism aesthetic. The background is deep space black (#0A0A0F) with a subtle horizontal gradient that transitions to dark sapphire blue (#1A1A2E) at the bottom, creating a sense of forward motion. At the top, a section header in an ultra-bold condensed sans-serif font, set in electric white (#F0F0FF) at 85% opacity, reads "3 STEPS TO 3X REVENUE" with a thin accent line in cyber cyan (#00D4FF) beneath it — a 2px line extending 50% of the text width, left-aligned. Below the header, three glass-morphism step cards are arranged horizontally from left to right, evenly spaced along a central axis. Each card is a rounded rectangle with 12px corner radius, a dark sapphire blue (#1A1A2E) base at 35% opacity, a frosted glass texture with subtle backdrop blur, a 1px border in ice mist gray (#8A8FA8) at 20% opacity, and a soft top-edge rim light. Each card contains: a circular step badge in the upper-left corner — the first two badges are filled with cyber cyan (#00D4FF) containing white bold numbers "01", "02", and the third badge is filled with plasma purple (#7B2FFF) containing "03". Inside each card, a step title in electric white (#F0F0FF) bold sans-serif reads "AI CUSTOMER SERVICE", "AI MARKETING", "AI DATA ANALYSIS" respectively. Below each title, a brief description in ice mist gray (#8A8FA8) ultra-light sans-serif at 60% opacity: "Auto-reply to 100% of orders", "Generate content & boost orders 200%", "Reduce waste 40% optimize stock". Between adjacent cards, a connecting line in cyber cyan (#00D4FF) at 50% opacity runs horizontally, terminating in a small circular node at each end — the line is 2px thick with a subtle neon glow, and the nodes are 6px diameter filled circles in cyber cyan (#00D4FF). The third card has a subtle pulsing glow effect around its border in plasma purple (#7B2FFF), indicating it as the final or most impactful step. Below the timeline, a thin horizontal rule in ice mist gray (#8A8FA8) at 20% opacity spans the full width. At the bottom-right, a small forward-arrow icon in cyber cyan (#00D4FF) suggests progression. The brand signature "AI BUSINESS OBSERVER" appears at the bottom-left in ultra-light sans-serif at 30% opacity. The lighting is directional from the upper-left, casting soft shadows behind each card onto the dark surface below — the shadows are subtle, with a 45-degree angle and 20% opacity. Octane render quality, product photography aesthetic with a 50mm macro lens at f/4, capturing the precise material qualities of the frosted glass surfaces and the volumetric glow of the neon connecting lines. No Chinese characters anywhere.
```

---

#### 笔记1 · 内页2 (Data Chart — 营收对比)

**图片名称**: `note1-page2-v3`
**推荐宽高比**: 3:4 (768x1024)

**Prompt**:

```
A premium data dashboard infographic card in a dark instrument-panel aesthetic, inspired by luxury automotive HUDs and financial trading terminals. The background is deep space black (#0A0A0F) with a subtle radial vignette that darkens toward the edges, focusing attention on the center. At the top, a section header in an ultra-bold condensed sans-serif font, set in electric white (#F0F0FF) at 85% opacity, reads "REVENUE TRANSFORMATION: 30 DAYS" with a thin underline accent in cyber cyan (#00D4FF) — a 2px line extending 60% of the text width, left-aligned. Below the header, two large glass-morphism metric cards are arranged side by side with 16px gutters. The LEFT card represents "BEFORE" — its base is dark sapphire blue (#1A1A2E) at 50% opacity with a heavy frosted glass texture, a 1px border in ice mist gray (#8A8FA8) at 20% opacity, and a matte non-reflective surface. Inside: a label in ice mist gray (#8A8FA8) reads "BEFORE AI" in uppercase wide tracking. Below, a large metric value "50,000" in ice mist gray (#8A8FA8) thin sans-serif at 70% opacity, with a currency symbol "¥" before it. A small downward trend arrow in ice mist gray (#8A8FA8) at 40% opacity sits below the number. The RIGHT card represents "AFTER" — its base is dark sapphire blue (#1A1A2E) at 30% opacity with a 2px cyber cyan (#00D4FF) border at 80% opacity and a 6px neon glow spill. The surface has a polished reflective sheen with a top-to-bottom gradient gloss. Inside: a label in cyber cyan (#00D4FF) reads "AFTER AI" in uppercase wide tracking. Below, a large metric value "150,000+" in cyber cyan (#00D4FF) ultra-bold condensed DIN-style font with a subtle neon glow, with a currency symbol "¥" before it. A large upward trend arrow in cyber cyan (#00D4FF) with glow sits below the number. Between the two cards, a central connector line in plasma purple (#7B2FFF) at 30% opacity with a small arrowhead points from left to right. Below the cards, a thin horizontal progress bar spanning the full width: the track is dark sapphire blue (#1A1A2E) at 60% opacity, and the fill is cyber cyan (#00D4FF) at 87% fill with a soft inner glow. A label below reads "GROWTH: +200%" in cyber cyan (#00D4FF) bold condensed font. At the bottom, a data source footnote in ice mist gray (#8A8FA8) monospaced font at 35% opacity reads "SOURCE: AI BUSINESS OBSERVER CASE STUDY · 30-DAY DATA". The lighting is entirely diegetic — the glowing metric values and luminous progress bar are the only light sources, creating a dark cockpit ambiance. Octane render quality, architectural photography composition with a 35mm lens. No Chinese characters anywhere.
```
