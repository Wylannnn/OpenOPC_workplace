# Logo/头像 — 设计规范

> **品牌**：AI商业观察 (AI Business Observer)
> **版本**：v1.0
> **日期**：2025-07
> **设计语言**：暗色科技美学 · 玻璃拟态 · 霓虹点缀 · 瑞士网格排版
> **配色体系**：太空黑 #0A0A0F · 电光白 #F0F0FF · 电光青 #00D4FF · 等离子紫 #7B2FFF · 冰雾灰 #8A8FA8 · 暗曜蓝 #1A1A2E

---

## 目录

1. [用途与规格](#1-用途与规格)
2. [色彩精确匹配](#2-色彩精确匹配)
3. [材质与发光效果参数](#3-材质与发光效果参数)
4. [构图与布局规范](#4-构图与布局规范)
5. [缩略图/平台裁切适配说明](#5-缩略图平台裁切适配说明)
6. [竞品差异化依据](#6-竞品差异化依据)
7. [生成 Prompt（可执行版本）](#7-生成-prompt可执行版本)
8. [质量检查清单](#8-质量检查清单)

---

## 1. 用途与规格

| 字段 | 内容 |
|------|------|
| **用途** | 小红书账号头像、全平台品牌标识 |
| **宽高比** | 1:1 正方形 |
| **推荐分辨率** | 1024×1024 px（生成用）→ 导出为 512×512 px（平台上传） |
| **核心要求** | 纯图形化设计，**不包含任何文字** |
| **设计语言** | 玻璃拟态 + 霓虹发光 + 瑞士网格 + 暗色科技美学 |
| **文件命名** | `brand-logo-avatar-v1.png` |
| **导出格式** | PNG-24（支持半透明） |

### 平台适配尺寸

| 平台 | 显示尺寸 | 备注 |
|------|---------|------|
| 小红书头像 | 100×100 px（圆形裁切） | 核心展示区域 |
| 小红书笔记详情 | 50×50 px（圆形裁切） | 极小尺寸需保证辨识度 |
| 微信/其他平台 | 200×200 px（圆形/方形） | 通用适配 |

---

## 2. 色彩精确匹配

### 主色板（Logo/头像专用）

| 色名 | HEX | RGB | 用途 | 透明度规则 |
|:---:|:---:|:---:|------|:---------:|
| **太空黑** | `#0A0A0F` | rgb(10,10,15) | 主背景色 | 100% 不透明 |
| **电光青** | `#00D4FF` | rgb(0,212,255) | 外环轮廓线、数据流线 | 70% → 发光时 100% |
| **等离子紫** | `#7B2FFF` | rgb(123,47,255) | 中心瞳孔填充、水平装饰线 | 100%（瞳孔）/ 30%（装饰线） |
| **暗曜蓝** | `#1A1A2E` | rgb(26,26,46) | 内圈玻璃拟态面板底色 | 50% 透明度 |
| **冰雾灰** | `#8A8FA8` | rgb(138,143,168) | 内圈边框 | 30% 透明度 |
| **电光白** | `#F0F0FF` | rgb(240,240,255) | 顶部边缘高光 | 40% 透明度 |

### 色彩使用规则

- **太空黑** 为绝对背景色，带蓝紫底色（通过径向渐变实现），非纯黑 `#000000`
- **电光青** 外环为品牌记忆锚点，发光光晕 ≤ 2px
- **等离子紫** 中心瞳孔为视觉焦点，带内发光效果
- **暗曜蓝** 内圈玻璃面板使用 50% 透明度，确保半透明质感
- **冰雾灰** 边框使用 30% 透明度，保持低调
- **电光白** 仅用于顶部边缘高光模拟 rim light

### 禁止规则

- ❌ 不使用纯黑色 `#000000` — 统一使用太空黑 `#0A0A0F`
- ❌ 不使用纯白色 `#FFFFFF` — 统一使用电光白 `#F0F0FF`
- ❌ 不使用暖色调（橙/红/黄）
- ❌ 不使用渐变作为主视觉 — 仅用于背景径向渐变
- ❌ 不包含任何文字/字母/数字

---

## 3. 材质与发光效果参数

### 玻璃拟态参数

| 元素 | 参数 | 值 |
|------|------|:---:|
| 内圈面板 | 底色 | 暗曜蓝 `#1A1A2E` @ 50% 透明度 |
| 内圈面板 | 磨砂玻璃纹理 | 有（subtle backdrop blur） |
| 内圈面板 | 边框 | 1px 冰雾灰 `#8A8FA8` @ 30% 透明度 |
| 内圈面板 | 顶部边缘高光 | 电光白 `#F0F0FF` @ 40%，柔和高光 |
| 内圈面板 | 折射质感 | 有（subtle refractive quality） |

### 霓虹发光参数

| 元素 | 发光颜色 | 光晕范围 | 透明度 |
|------|:--------:|:--------:|:------:|
| 电光青外环 | `#00D4FF` | ≤ 2px 向外扩散 | 70%（线本身）/ 30%（光晕） |
| 等离子紫瞳孔 | `#7B2FFF` | 内发光（soft inner glow） | 100%（中心）/ 40%（光晕） |
| 数据流线 | `#00D4FF` | 无发光 | 25% 透明度 |

### 金属质感参数

| 元素 | 效果 |
|------|------|
| 电光青外环 | 抛光金属光泽（polished metallic sheen） |
| 电光青外环 | 微弱色差边缘（faint chromatic edge） |
| 等离子紫瞳孔 | 温暖体积光（warm volumetric light） |

### 背景纹理参数

| 元素 | 参数 | 值 |
|------|------|:---:|
| 网格图案 | 颜色 | 电光青 `#00D4FF` @ 3% 透明度 |
| 网格图案 | 类型 | 超精细水平+垂直线（ultra-fine） |
| 网格图案 | 间距 | 宽松间距（generous spacing） |
| 背景径向渐变 | 效果 | 边缘暗化（radial vignette） |

---

## 4. 构图与布局规范

### 黄金比例布局

```
┌──────────────────────────┐
│                          │
│    ○ ← 数据流线(右上)     │
│   ╱                      │
│  ╱    ┌──────────┐       │
│ ╱     │ ╭──────╮ │       │
│       │ │  ●   │ │ ← 中心徽章(40%) │
│       │ ╰──────╯ │       │
│       └──────────┘       │
│  ─────── ← 紫装饰线(左下) │
│                          │
│  60% 负空间              │
│                          │
└──────────────────────────┘
```

### 关键尺寸比例

| 元素 | 占画布比例 | 说明 |
|------|:---------:|------|
| 中心徽章直径 | 40% | 占据画布直径的 40% |
| 负空间 | 60% | 纯太空黑留白 |
| 电光青外环线宽 | 2-3px | 精密矢量线条 |
| 数据流线长度 | 不等 | 右上象限辐射，不同距离终止 |
| 等离子紫水平线 | 画布宽度 30% | 左下象限，偏移中心 |

### 元素层级（从底到顶）

1. **背景层**：太空黑 + 径向暗角 + 3% 网格纹理
2. **装饰层**：数据流线（右上）+ 等离子紫水平线（左下）
3. **徽章外环**：电光青精密圆环 + 霓虹发光
4. **徽章内圈**：暗曜蓝玻璃拟态面板 + 冰雾灰边框
5. **徽章中心**：等离子紫瞳孔 + 内发光

### 构图原则

- **非对称平衡**：右上数据流线 vs 左下水平线形成视觉平衡
- **黄金分割**：中心徽章位于画布几何中心
- **呼吸感**：60% 负空间确保在小尺寸下仍清晰可辨
- **自发光**：所有光照来自元素自身，无外部光源

---

## 5. 缩略图/平台裁切适配说明

### 圆形裁切适配

小红书头像以圆形显示，需确保核心元素在圆形裁切区域内完整可见。

```
┌──────────────────────────┐
│   ╭──────────────────╮   │
│  │  圆形裁切区域       │  │
│  │  ┌──────────────┐  │  │
│  │  │  ╭────────╮  │  │  │
│  │  │  │  ●     │  │  │  │
│  │  │  ╰────────╯  │  │  │
│  │  └──────────────┘  │  │
│   ╰──────────────────╯   │
└──────────────────────────┘
```

### 安全区域规则

| 区域 | 占画布比例 | 说明 |
|:----:|:---------:|------|
| **安全区** | 中心 60% | 所有核心元素必须在此区域内 |
| **圆形裁切区** | 中心 80% | 平台圆形裁切不会超出此范围 |
| **出血区** | 边缘 10% | 可放置装饰性元素，但非核心内容 |

### 不同尺寸下的可读性

| 显示尺寸 | 可辨识元素 | 注意事项 |
|:-------:|-----------|---------|
| 100×100 px | 电光青外环 + 等离子紫瞳孔 | 数据流线可能不可见 |
| 50×50 px | 电光青外环 + 等离子紫瞳孔 | 玻璃拟态效果减弱 |
| 200×200 px | 全部元素 | 最佳展示尺寸 |

### 适配建议

- **核心辨识点**：电光青圆环 + 等离子紫中心点 — 这两个元素在任何尺寸下都必须清晰可见
- **数据流线**：在 100px 以下尺寸可能消失，属于可接受范围
- **网格纹理**：在 100px 以下尺寸不可见，属于正常现象
- **玻璃拟态**：在 200px 以上尺寸才能完整呈现

---

## 6. 竞品差异化依据

### 竞品头像对比

| 竞品 | 头像风格 | 色彩 | 独特性 |
|------|---------|:----:|:------:|
| **老麦的工具库** | 工具图标/文字 | 科技蓝 #2563EB | 中等 |
| **赛博禅心** | 赛博朋克头像 | 紫蓝渐变 | 中等 |
| **数字生命卡兹克** | 个人照片 | 黑白/深色 | 高（个人IP） |
| **量子位** | 品牌Logo文字 | 品牌蓝 #0066FF | 中等 |
| **APPSO** | 品牌Logo文字 | 品牌绿 #00C853 | 中等 |
| **AI商业观察（我们）** | **纯图形化几何徽章** | **太空黑+电光青+等离子紫** | **极高** |

### 差异化核心

目前 5 个对标竞品中，**无一使用「纯图形化几何徽章」作为头像**：

- 老麦的工具库 → 工具截图
- 赛博禅心 → 赛博朋克头像
- 数字生命卡兹克 → 个人照片
- 量子位 → 品牌 Logo 文字
- APPSO → 品牌 Logo 文字

我们的 **「发光几何眼」徽章** — 结合玻璃拟态、霓虹发光和瑞士网格 — 在 AI 商业赛道中具有极高的视觉独特性，同时传递 **「观察」「洞察」「数据」** 的品牌核心价值。

### 视觉隐喻

> **「全视之眼」** — 象征 AI 的观察力、数据分析能力和洞察力
>
> 电光青圆环 = 数据边界 / 等离子紫瞳孔 = 洞察焦点
> 辐射数据流线 = AI 数据处理 / 玻璃拟态 = 科技质感

---

## 7. 生成 Prompt（可执行版本）

### 主版本 — `brand-logo-avatar-v1`

**宽高比**: 1:1 (1024×1024)
**生成引擎**: Agnes Image 2.0 / Midjourney / DALL·E 3
**风格预设**: 3d-render

```
A premium brand logo mark in a 1:1 square format, designed as a purely graphical emblem with zero text — inspired by the visual language of high-end tech brands like Bloomberg Terminal, Apple's dark mode UI, and architectural identity systems. The background is deep space black (#0A0A0F) with a subtle radial vignette that darkens toward the edges, creating a sense of infinite depth.

At the center of the canvas, the primary emblem: a stylized geometric eye or observation symbol constructed from precision vector shapes. The outer ring is a thin, continuous circular band in cyber cyan (#00D4FF) at 70% opacity with a subtle neon glow — the glow is tight to the line, extending no more than 2px outward. Inside the ring, a concentric inner circle in dark sapphire blue (#1A1A2E) at 50% opacity with a frosted glass texture and a 1px border in ice mist gray (#8A8FA8) at 30% opacity. At the very center of the eye, a small solid circle in plasma purple (#7B2FFF) with a soft inner glow, representing the "pupil" — the focal point of observation.

Radiating outward from the central emblem, three thin diagonal lines in cyber cyan (#00D4FF) at 25% opacity extend from the upper-right quadrant, evoking data streams or signal rays — a subtle nod to AI data processing. These lines are precise, straight, and terminate at different distances from the center, creating a sense of dynamic movement. A single horizontal accent line in plasma purple (#7B2FFF) at 30% opacity runs through the lower-left quadrant, offset from center — a classic Swiss Design asymmetric gesture.

In the background, a faint geometric grid pattern in cyber cyan (#00D4FF) at 3% opacity spans the entire canvas — ultra-fine horizontal and vertical lines with generous spacing, evoking a blueprint or architectural reference. The grid is barely perceptible, adding texture without competing with the central emblem.

The overall composition follows the golden ratio, with the central emblem occupying approximately 40% of the canvas diameter. The remaining 60% is pure negative space in deep space black (#0A0A0F), allowing the emblem to breathe. The lighting is diegetic and self-contained — the neon glow of the cyan ring and the inner glow of the purple pupil are the only light sources, creating a self-illuminated, holographic quality.

The material quality is that of precision-machined glass and metal: the frosted glass inner circle has a subtle refractive quality, the cyan ring has a polished metallic sheen with a faint chromatic edge, and the purple center glows with a warm, volumetric light. Octane render quality, macro product photography aesthetic with a 100mm macro lens at f/8 for maximum sharpness across the entire plane. No Chinese characters anywhere. No text of any kind. Pure graphical symbol only.
```

### 备用版本 — `brand-logo-avatar-v1-alt`

如需更简洁/更易识别的版本，可使用以下简化 prompt：

```
A minimalist tech-brand avatar logo in a 1:1 square format, pure graphical emblem with zero text. Deep space black (#0A0A0F) background with subtle blue-violet radial gradient. Center: a precise geometric emblem — outer ring in cyber cyan (#00D4FF) with tight 2px neon glow, inner circle in dark sapphire blue (#1A1A2E) at 50% opacity with frosted glass texture and 1px ice mist gray (#8A8FA8) border. Center pupil: small solid circle in plasma purple (#7B2FFF) with soft inner glow. Three thin diagonal data-stream lines in cyber cyan (#00D4FF) at 25% opacity radiate from upper-right. One horizontal accent line in plasma purple (#7B2FFF) at 30% opacity in lower-left quadrant. Faint grid pattern in cyber cyan (#00D4FF) at 3% opacity across background. Central emblem occupies 40% of canvas, 60% negative space. Self-illuminated, holographic quality. Octane render, macro product photography, 100mm macro lens at f/8. No text. No Chinese characters.
```

---

## 8. 质量检查清单

### 色彩检查
- [ ] 背景色为太空黑 `#0A0A0F`（非纯黑 `#000000`）
- [ ] 外环为电光青 `#00D4FF`（非其他青色/蓝色）
- [ ] 内圈底色为暗曜蓝 `#1A1A2E` @ 50% 透明度
- [ ] 中心瞳孔为等离子紫 `#7B2FFF`
- [ ] 边框为冰雾灰 `#8A8FA8` @ 30% 透明度
- [ ] 无暖色调（橙/红/黄）侵入
- [ ] 无纯白色 `#FFFFFF` 出现

### 材质检查
- [ ] 内圈有磨砂玻璃质感（非简单半透明）
- [ ] 电光青外环有抛光金属光泽
- [ ] 顶部边缘有 rim light 高光
- [ ] 背景有 3% 网格纹理（barely perceptible）
- [ ] 背景有径向暗角效果

### 发光效果检查
- [ ] 电光青外环发光光晕 ≤ 2px
- [ ] 等离子紫瞳孔有内发光效果
- [ ] 发光可控，无过度光晕溢出
- [ ] 自发光效果自然（非外部光源照射）

### 构图检查
- [ ] 中心徽章占画布约 40%
- [ ] 负空间 ≥ 60%
- [ ] 右上数据流线清晰可见
- [ ] 左下等离子紫水平线位置正确
- [ ] 非对称平衡布局

### 可用性检查
- [ ] 在 100×100 px 尺寸下核心元素可辨识
- [ ] 在 50×50 px 尺寸下电光青外环+紫瞳孔可见
- [ ] 圆形裁切后核心元素完整
- [ ] 无文字/字母/数字
- [ ] 无中文文字

### 品牌一致性检查
- [ ] 与 visual-style-guide.md 色彩系统一致
- [ ] 与竞品形成视觉差异化
- [ ] 传递「观察」「洞察」品牌价值
- [ ] 符合暗色科技美学定位

---

> **设计即品牌。Logo/头像是用户对品牌的第一印象。**
>
> — 保持暗色、保持精致、保持可识别。
