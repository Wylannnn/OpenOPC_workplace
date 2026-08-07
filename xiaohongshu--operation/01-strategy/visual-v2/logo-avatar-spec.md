# Logo / Avatar 品牌资产规范

> **品牌**：AI商业观察（AI Business Observer）
> **版本**：v1.0
> **日期**：2025-07
> **设计语言**：暗色科技美学 · 玻璃拟态 · 霓虹点缀 · 瑞士网格排版

---

## 1. 用途与规格

| 字段 | 内容 |
|------|------|
| **用途** | 小红书账号头像（Logo/Avatar），品牌标识核心资产 |
| **宽高比** | 1:1 正方形 |
| **分辨率** | 1024×1024 px |
| **文件命名** | `logo-avatar-v1.png` |
| **关键约束** | **纯图形设计，不含任何文字** |

---

## 2. 色彩精确匹配

### 品牌色板

| 色名 | HEX | RGB | 用途 |
|:---:|:---:|:---:|------|
| **太空黑** | `#0A0A0F` | rgb(10,10,15) | 主背景色 |
| **电光青** | `#00D4FF` | rgb(0,212,255) | 主强调色 — 外环轮廓、霓虹发光 |
| **等离子紫** | `#7B2FFF` | rgb(123,47,255) | 次强调色 — 瞳孔/焦点、渐变点缀 |
| **暗曜蓝** | `#1A1A2E` | rgb(26,26,46) | 玻璃面板底色 |
| **冰雾灰** | `#8A8FA8` | rgb(138,143,168) | 辅助线条、次要元素 |
| **电光白** | `#F0F0FF` | rgb(240,240,255) | 高光、内发光、边缘光 |

### 禁止规则

- ❌ 不使用纯黑色 `#000000` — 统一使用太空黑 `#0A0A0F`
- ❌ 不使用纯白色 `#FFFFFF` — 统一使用电光白 `#F0F0FF`
- ❌ 不使用暖色调（橙/红/黄）
- ❌ 不使用照片或位图纹理

---

## 3. 材质与发光效果参数

### 玻璃拟态（Glassmorphism）

| 参数 | 值 |
|------|:---:|
| 面板底色 | 暗曜蓝 `#1A1A2E` |
| 不透明度 | 35-45% |
| 背景模糊 | 8-12px backdrop blur |
| 边框 | 1px 冰雾灰 `#8A8FA8` 30% 透明度 |
| 顶部边缘高光 | 电光白 `#F0F0FF` 15% 透明度，2px 宽 |
| 磨砂纹理 | 细微噪点叠加，3-5% 不透明度 |

### 霓虹发光（Neon Glow）

| 参数 | 值 |
|------|:---:|
| 发光颜色 | 电光青 `#00D4FF` |
| 发光范围 | ≤2px 向外扩散 |
| 发光不透明度 | 30% |
| 发光类型 | 自发光（self-illuminated），非外部光源 |

### 金属光泽（Metallic Sheen）

| 参数 | 值 |
|------|:---:|
| 应用元素 | 外环轮廓线、数据流线 |
| 光泽效果 | 45° 方向镜面高光 |
| 色差边缘 | 微弱 RGB 分离（≤1px） |

### 网格纹理（Grid Texture）

| 参数 | 值 |
|------|:---:|
| 网格类型 | 水平 + 垂直线 |
| 颜色 | 电光青 `#00D4FF` |
| 不透明度 | 3-5% |
| 网格间距 | 宽松（约 24px 间距） |
| 暗角 | 径向暗化向边缘，15% 强度 |

---

## 4. 构图与布局规范

### 视觉隐喻：全视之眼（All-Seeing Eye）

Logo 以「全视之眼」为核心视觉隐喻，象征 AI 商业观察的「洞察」与「预见」能力。

### 元素层级（从底层到顶层）

```
Layer 1: 深空黑背景 + 网格纹理 + 暗角
Layer 2: 外环 — 电光青霓虹发光圆环（开口设计）
Layer 3: 玻璃拟态面板 — 暗曜蓝半透明圆形
Layer 4: 瞳孔/焦点 — 等离子紫渐变圆点 + 电光青内发光
Layer 5: 数据流线 — 3条对角线（右上象限）
Layer 6: 装饰性高光 — 顶部边缘光 + 金属光泽
```

### 尺寸比例

| 元素 | 占画布比例 | 说明 |
|:----:|:---------:|------|
| 外环直径 | ~65% | 从画布边缘留出 17.5% 边距 |
| 玻璃面板直径 | ~50% | 位于外环内部 |
| 瞳孔直径 | ~12% | 位于玻璃面板中心偏下 |
| 数据流线长度 | 画布宽度的 25-35% | 右上象限对角线 |
| 负空间 | ≥35% | 确保呼吸感 |

### 构图原则

- **黄金分割**：瞳孔中心位于画布垂直黄金分割点（从顶部 38.2%）
- **非对称平衡**：外环开口朝右下（约 45° 方向），数据流线在右上象限
- **留白优先**：左下象限保持纯净深空黑，无装饰

---

## 5. 缩略图/平台裁切适配说明

### 小红书头像显示

| 显示尺寸 | 必须可见 | 可忽略 |
|:-------:|:--------:|:------:|
| 200×200 px | 外环 + 玻璃面板 + 瞳孔 | 数据流线 |
| 100×100 px | 外环轮廓 + 瞳孔 | 玻璃纹理、数据流线 |
| 50×50 px | 外环轮廓 + 瞳孔亮点 | 所有细节纹理 |

### 圆形裁切安全区

- 安全区直径：画布中心的 80%（即 820px 直径圆内）
- 外环必须完全位于安全区内
- 数据流线可延伸至安全区外，但不超过画布边界

---

## 6. 竞品差异化依据

### 竞品 Logo 对比

| 竞品 | Logo 类型 | 设计语言 | 差异化机会 |
|:----:|:---------:|:--------:|:----------:|
| **数字生命卡兹克** | 文字为主 + 简单图标 | 极简，无材质效果 | ❌ 无玻璃拟态、无霓虹发光 |
| **老麦的工具库** | 文字为主 | 工具风格，无图形标识 | ❌ 无独立图形 Logo |
| **赛博禅心** | 文字为主 | 赛博风格但无系统性 | ❌ 无统一图形标识 |
| **量子位** | 品牌文字 + 简单图标 | 媒体风格，无材质 | ❌ 无玻璃拟态、无霓虹 |
| **APPSO** | 品牌文字 + 简单图标 | 清新风格，无科技感 | ❌ 无深色科技美学 |

### 我们的差异化核心

| 差异化点 | 说明 |
|:--------:|------|
| **纯图形 Logo** | 无文字、无照片 — 所有竞品均使用文字为主 Logo |
| **玻璃拟态** | 磨砂玻璃质感 — 竞品均无此效果 |
| **霓虹发光** | 电光青自发光 — 竞品均无霓虹元素 |
| **全视之眼隐喻** | 象征洞察与预见 — 竞品无此视觉叙事 |
| **深色科技美学** | 太空黑底色 + 精密几何 — 竞品无系统性深色设计 |

---

## 7. 生成 Prompt（可执行版本）

### 主版本（Main Prompt）

```
A premium brand logo for "AI Business Observer" — a pure graphical emblem with zero text, zero Chinese characters. The design language is dark tech aesthetic meets glassmorphism with neon accents and Swiss grid precision. The visual metaphor is an "all-seeing eye" symbolizing insight and foresight.

The background is deep space black (#0A0A0F) with an ultra-fine grid overlay in cyber cyan (#00D4FF) at 4% opacity — precise horizontal and vertical lines with generous spacing. A subtle radial vignette darkens the edges by 15%.

The primary structure is a circular outer ring in cyber cyan (#00D4FF) with a controlled neon glow effect — the glow spills no more than 2px outward. The ring has a deliberate opening at the lower-right (approximately 45-degree position), creating a dynamic, incomplete form. The ring line is 3px thick with a metallic sheen — a specular highlight running along its upper-left edge at 45-degree angle, giving it a polished chrome appearance.

Inside the ring, a glassmorphism panel in the shape of a circle sits centered. Its base is dark sapphire blue (#1A1A2E) at 40% opacity with a frosted glass texture achieved through subtle noise overlay at 4% opacity. The panel has a 1px border in ice mist gray (#8A8FA8) at 30% opacity, a soft backdrop blur effect, and a rim light highlight along the top edge in electric white (#F0F0FF) at 15% opacity.

At the center of the glass panel, slightly below the geometric center (at the golden ratio point — 38.2% from the top), a small pupil dot in plasma purple (#7B2FFF) with a subtle gradient from dark purple at the bottom to bright purple at the top. The pupil has an inner glow in cyber cyan (#00D4FF) at 25% opacity, creating the illusion of internal illumination.

Three diagonal data-stream lines in cyber cyan (#00D4FF) at 50% opacity arc through the upper-right quadrant of the canvas, each 1px thick with a faint neon glow. These lines suggest data flow and analytical processing. A single accent line in ice mist gray (#8A8FA8) at 30% opacity sits in the lower-left quadrant as a counterbalance.

The overall composition follows the golden ratio. Lighting is dramatic and directional — a single key light from the upper-left creates sharp highlights on the ring's metallic surface while the glass panel catches a soft rim light. Octane render quality, macro product photography aesthetic, 85mm lens at f/4 for shallow depth of field with the ring in sharp focus and the background gently softening. No Chinese characters. No text. No photographs.
```

### 备选版本（Alternate Prompt — 更极简）

```
A minimal brand emblem for "AI Business Observer" — pure geometric symbol, no text, no Chinese characters. Dark tech aesthetic with glassmorphism.

Deep space black (#0A0A0F) background with subtle grid at 3% opacity. A single continuous line forms an incomplete circle in cyber cyan (#00D4FF) with 1.5px neon glow — the opening is at the lower-right. Inside, a frosted glass circle in dark sapphire blue (#1A1A2E) at 35% opacity with 1px ice mist gray (#8A8FA8) border. At center, a small plasma purple (#7B2FFF) pupil with cyber cyan inner glow. Two thin data lines in the upper-right quadrant. Extreme negative space — the emblem occupies only 50% of the canvas. Octane render, macro product photography, 85mm f/4. No text. No Chinese characters.
```

---

## 8. 质量检查清单

| # | 检查项 | 标准 | 方法 |
|:-:|:------|:----:|:----:|
| 1 | 背景色 | `#0A0A0F`（非 `#000000`） | 取色器比对 |
| 2 | 外环颜色 | 电光青 `#00D4FF` | 取色器比对 |
| 3 | 外环发光范围 | ≤2px | 像素测量 |
| 4 | 玻璃面板底色 | 暗曜蓝 `#1A1A2E` 35-45% 透明度 | 取色器 + 透明度检查 |
| 5 | 瞳孔颜色 | 等离子紫 `#7B2FFF` | 取色器比对 |
| 6 | 无文字 | 纯图形，无任何文字 | 视觉检查 |
| 7 | 无暖色调 | 无橙/红/黄色 | 取色器扫描 |
| 8 | 外环直径 | ~65% 画布 | 比例测量 |
| 9 | 负空间 | ≥35% | 面积估算 |
| 10 | 100×100 px 可读 | 外环 + 瞳孔可见 | 缩放测试 |
| 11 | 50×50 px 可读 | 外环轮廓 + 瞳孔亮点 | 缩放测试 |
| 12 | 圆形裁切安全 | 所有核心元素在 80% 直径内 | 裁切模拟 |
