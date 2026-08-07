# Profile Banner 品牌资产规范

> **品牌**：AI商业观察（AI Business Observer）
> **版本**：v1.0
> **日期**：2025-07
> **设计语言**：暗色科技美学 · 玻璃拟态 · 霓虹点缀 · 瑞士网格排版

---

## 1. 用途与规格

| 字段 | 内容 |
|------|------|
| **用途** | 小红书账号主页背景图（Profile Banner），品牌氛围背景 |
| **宽高比** | 3:4 竖版 |
| **分辨率** | 768×1024 px |
| **文件命名** | `profile-banner-v1.png` |
| **关键约束** | **整体亮度 < 20%，60%+ 深色空间供平台 overlay 使用** |

---

## 2. 色彩精确匹配

### 品牌色板

| 色名 | HEX | RGB | 用途 |
|:---:|:---:|:---:|------|
| **太空黑** | `#0A0A0F` | rgb(10,10,15) | 主背景色（占画面 60%+） |
| **电光青** | `#00D4FF` | rgb(0,212,255) | 装饰线条、玻璃面板边框 |
| **等离子紫** | `#7B2FFF` | rgb(123,47,255) | 渐变装饰、次要元素 |
| **暗曜蓝** | `#1A1A2E` | rgb(26,26,46) | 玻璃面板底色、渐变过渡 |
| **冰雾灰** | `#8A8FA8` | rgb(138,143,168) | 辅助线条、水印文字 |
| **电光白** | `#F0F0FF` | rgb(240,240,255) | 高光、边缘光 |

### 禁止规则

- ❌ 不使用纯黑色 `#000000` — 统一使用太空黑 `#0A0A0F`
- ❌ 不使用纯白色 `#FFFFFF` — 统一使用电光白 `#F0F0FF`
- ❌ 不使用暖色调（橙/红/黄）
- ❌ 不使用大面积明亮元素（亮度 > 30% 的区域不超过画面 10%）

---

## 3. 材质与发光效果参数

### 玻璃拟态（Glassmorphism）

| 参数 | 值 |
|------|:---:|
| 面板底色 | 暗曜蓝 `#1A1A2E` |
| 不透明度 | 30-40% |
| 背景模糊 | 6-10px backdrop blur |
| 边框 | 1px 冰雾灰 `#8A8FA8` 25% 透明度 |
| 顶部边缘高光 | 电光白 `#F0F0FF` 12% 透明度，1.5px 宽 |
| 磨砂纹理 | 细微噪点叠加，3% 不透明度 |

### 霓虹发光（Neon Glow）

| 参数 | 值 |
|------|:---:|
| 发光颜色 | 电光青 `#00D4FF` |
| 发光范围 | ≤2px 向外扩散 |
| 发光不透明度 | 20-25%（比 Logo 更克制） |
| 应用元素 | 仅装饰线条，不用于大面积区域 |

### 网格纹理（Grid Texture）

| 参数 | 值 |
|------|:---:|
| 网格类型 | 水平 + 垂直线 |
| 颜色 | 电光青 `#00D4FF` |
| 不透明度 | 2-3%（比 Logo 更淡） |
| 网格间距 | 宽松（约 32px 间距） |
| 应用区域 | 仅底部 1/3 区域 |

---

## 4. 构图与布局规范

### 核心原则：背景即氛围，非内容

Banner 的设计哲学是 **「背景作为氛围，不作为内容」**。它必须退居次位，为头像、简介、笔记等平台内容提供优雅的视觉环境。

### 亮度控制策略

| 区域 | 位置 | 亮度要求 | 说明 |
|:----:|:----:|:--------:|------|
| 顶部 2/3 | 0-682px | 纯深空黑，零装饰 | 为头像和简介提供纯净背景 |
| 底部 1/3 | 682-1024px | 渐变过渡，亮度 < 20% | 轻微装饰，不干扰内容 |
| 头像覆盖区 | 左上 ~15% | 纯深空黑 | 确保头像在任何背景下清晰可见 |
| 简介覆盖区 | 中上 ~25% | 亮度 < 15% | 确保简介文字可读 |

### 元素布局

```
┌──────────────────────────────────┐
│                                  │  ← 顶部 2/3：纯深空黑
│                                  │     零装饰，零纹理
│                                  │
│          ┌──────────┐           │
│          │ Glass    │           │  ← 玻璃面板（右上象限）
│          │ Panel    │           │     ~15% 画布面积
│          └──────────┘           │
│                                  │
│    ○ ○ ○                         │  ← 三颗几何圆（左下象限）
│    ↘ 对角线排列                   │     对角线排列
│                                  │
│  ─────────────────────────       │  ← 水平装饰线（黄金分割点）
│                                  │     ~38.2% 从底部
│           AI BUSINESS            │  ← 幽灵水印（右下角）
│           OBSERVER               │     12% 透明度
│                                  │
└──────────────────────────────────┘
```

### 元素尺寸比例

| 元素 | 占画布比例 | 说明 |
|:----:|:---------:|------|
| 纯深空黑区域 | ≥60% | 顶部 + 左侧大面积留白 |
| 玻璃面板 | ~15% | 右上象限，不侵入头像区 |
| 几何装饰 | ~10% | 左下象限，三颗圆对角线排列 |
| 水平装饰线 | 画布宽度的 40% | 位于黄金分割点（从底部 38.2%） |
| 幽灵水印 | ~8% | 右下角，12% 透明度 |

---

## 5. 平台 overlay 适配说明

### 小红书主页覆盖区域

| 覆盖元素 | 位置 | 尺寸（约） | 要求 |
|:--------:|:----:|:---------:|:----:|
| 头像 | 左上角 | 96×96 px | 背景区域必须纯深空黑 |
| 账号名称 | 头像右侧 | 约 200×30 px | 背景亮度 < 15% |
| 简介 | 名称下方 | 约 300×60 px | 背景亮度 < 15% |
| 笔记网格 | 下方全部 | 全宽 | 底部装饰不干扰笔记缩略图 |

### 亮度验证方法

```
1. 在图像编辑软件中打开 banner
2. 查看亮度直方图（Luminance channel）
3. 确认峰值集中在 0-50 亮度范围
4. 在头像覆盖区（左上 15%）叠加 16px 白色文字
5. 确认文字在所有区域清晰可读
6. 标记任何亮度 > 30% 的区域
```

---

## 6. 竞品差异化依据

### 竞品 Banner 对比

| 竞品 | Banner 类型 | 设计语言 | 差异化机会 |
|:----:|:-----------:|:--------:|:----------:|
| **数字生命卡兹克** | 简单纯色或空白 | 极简，无设计 | ❌ 无品牌感、无材质效果 |
| **老麦的工具库** | 工具截图拼贴 | 信息密集，杂乱 | ❌ 无系统性品牌背景 |
| **赛博禅心** | AI 生成背景图 | 每期变化，无统一性 | ❌ 无品牌一致性 |
| **量子位** | 品牌色渐变 | 简单，无层次 | ❌ 无玻璃拟态、无装饰细节 |
| **APPSO** | 品牌色背景 | 简单，无科技感 | ❌ 无深色科技美学 |

### 我们的差异化核心

| 差异化点 | 说明 |
|:--------:|------|
| **深色科技背景** | 太空黑底色 + 精密几何 — 竞品均无系统性深色设计 |
| **玻璃拟态面板** | 磨砂玻璃质感装饰 — 竞品均无此效果 |
| **亮度控制策略** | 60%+ 纯深空黑为平台 overlay 预留空间 — 竞品未考虑此问题 |
| **幽灵水印** | 品牌名以 12% 透明度作为水印 — 竞品无此细节 |
| **系统性设计** | 与 Logo 共享完整设计语言 — 竞品 Banner 与 Logo 无关联 |

---

## 7. 生成 Prompt（可执行版本）

### 主版本（Main Prompt）

```
A premium brand profile banner for "AI Business Observer" — a dark, atmospheric background image designed to sit behind a social media profile avatar and bio text. The design language is dark tech aesthetic meets glassmorphism with subtle neon accents. The banner must be REESSIVE — it should never compete with foreground content. No Chinese characters. No text except the ghost watermark.

The canvas is 768x1024 pixels, vertical orientation. The overall luminance must be very low — peak histogram values in the 0-50 range.

The top 60% of the canvas is pure deep space black (#0A0A0F) with zero decoration, zero texture, zero elements — this area is reserved for the profile avatar and bio text overlay. The transition from pure black to the decorated lower section is gradual, achieved through a soft vertical gradient.

In the upper-right quadrant (approximately 15% of canvas area), a small frosted glass panel sits with its top edge at 25% from the top and right edge at 10% from the right. The panel base is dark sapphire blue (#1A1A2E) at 35% opacity with a subtle backdrop blur effect, a 1px border in ice mist gray (#8A8FA8) at 25% opacity, and a soft rim light along the top edge in electric white (#F0F0FF) at 12% opacity. The panel contains no text — it is purely decorative, suggesting data or information without being readable.

In the lower-left quadrant, three precision geometric circles in varying sizes (24px, 16px, 10px diameters) are arranged in a diagonal cascade from upper-left to lower-right. Each circle is outlined in cyber cyan (#00D4FF) at 15% opacity with a faint neon glow. The largest circle has a subtle fill in plasma purple (#7B2FFF) at 10% opacity.

A thin horizontal accent line in cyber cyan (#00D4FF) at 20% opacity extends across approximately 40% of the canvas width, positioned at the golden ratio point (approximately 38.2% from the bottom edge). The line has a subtle neon glow — no more than 1.5px outward.

In the lower-right corner, a ghost watermark reads "AI BUSINESS OBSERVER" in ultra-light condensed sans-serif, set in ice mist gray (#8A8FA8) at 12% opacity — barely perceptible, like a subtle brand signature.

A faint grid overlay in cyber cyan (#00D4FF) at 2% opacity appears only in the bottom third of the canvas, with generous spacing (approximately 32px between lines).

The overall lighting is extremely low-key — the only illumination comes from the subtle neon glow of the decorative elements, creating a self-lit atmospheric quality. The composition is asymmetrical following Swiss Design principles, with the glass panel in the upper-right balanced by the geometric circles in the lower-left. Octane render quality, architectural photography aesthetic, 50mm lens at f/8 for maximum sharpness. No Chinese characters. No bright elements. No text except the ghost watermark.
```

### 备选版本（Alternate Prompt — 更极简）

```
A dark atmospheric profile banner for "AI Business Observer" — recessive background, no Chinese characters. 768x1024 vertical.

Top 70% is pure deep space black (#0A0A0F) — zero decoration. Bottom 30% has subtle geometric decoration: a small frosted glass panel (dark sapphire blue #1A1A2E at 30% opacity) in the upper-right, three tiny outlined circles in cyber cyan (#00D4FF) at 10% opacity in the lower-left, and a thin horizontal line in cyber cyan at 15% opacity at the golden ratio point. A ghost watermark "AI BUSINESS OBSERVER" in ice mist gray (#8A8FA8) at 10% opacity in the lower-right corner. Faint grid at 2% opacity in bottom third. Overall luminance < 15%. Octane render, architectural photography, 50mm f/8. No text except watermark. No bright elements.
```

---

## 8. 质量检查清单

| # | 检查项 | 标准 | 方法 |
|:-:|:------|:----:|:----:|
| 1 | 背景色 | `#0A0A0F`（非 `#000000`） | 取色器比对 |
| 2 | 整体亮度 | 峰值在 0-50 亮度范围 | 直方图检查 |
| 3 | 顶部 60% | 纯深空黑，零装饰 | 视觉检查 |
| 4 | 头像覆盖区（左上 15%） | 纯深空黑 | 区域检查 |
| 5 | 简介覆盖区（中上 25%） | 亮度 < 15% | 取色器检查 |
| 6 | 玻璃面板位置 | 右上象限 | 位置验证 |
| 7 | 玻璃面板透明度 | 30-40% | 透明度检查 |
| 8 | 几何圆位置 | 左下象限，对角线排列 | 位置验证 |
| 9 | 水平线位置 | 黄金分割点（从底部 38.2%） | 比例测量 |
| 10 | 幽灵水印透明度 | 12% | 透明度检查 |
| 11 | 无暖色调 | 无橙/红/黄色 | 取色器扫描 |
| 12 | 无文字（除水印外） | 仅 "AI BUSINESS OBSERVER" | 视觉检查 |
