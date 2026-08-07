# 主页背景图 — 设计规范

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
5. [亮度控制方法](#5-亮度控制方法)
6. [平台 overlay 适配说明](#6-平台-overlay-适配说明)
7. [竞品差异化依据](#7-竞品差异化依据)
8. [生成 Prompt（可执行版本）](#8-生成-prompt可执行版本)
9. [质量检查清单](#9-质量检查清单)

---

## 1. 用途与规格

| 字段 | 内容 |
|------|------|
| **用途** | 小红书个人主页背景图 |
| **宽高比** | 3:4 竖版 |
| **推荐分辨率** | 768×1024 px（生成用）→ 导出为 768×1024 px（平台上传） |
| **核心要求** | 暗色氛围，60%+ 留白/暗区域供平台 overlay 文字叠加 |
| **设计语言** | 玻璃拟态 + 瑞士网格 + 霓虹点缀 + 暗色科技美学 |
| **文件命名** | `profile-banner-v2.png` |
| **导出格式** | PNG-24 或 JPEG（高质量） |

### 平台适配说明

| 平台 | 显示区域 | 覆盖内容 | 注意事项 |
|------|---------|---------|---------|
| 小红书主页 | 顶部背景区域 | 头像、昵称、简介、数据统计 | 背景亮度需 < 20% 确保白色文字可读 |
| 移动端显示 | 竖屏全宽 | 同上 | 中心区域需保持纯净暗色 |
| 桌面端显示 | 横屏裁切 | 同上 | 左右两侧可放置装饰元素 |

---

## 2. 色彩精确匹配

### 主色板（背景图专用）

| 色名 | HEX | RGB | 用途 | 透明度规则 |
|:---:|:---:|:---:|------|:---------:|
| **太空黑** | `#0A0A0F` | rgb(10,10,15) | 主背景色（占 60%+ 面积） | 100% 不透明 |
| **暗曜蓝** | `#1A1A2E` | rgb(26,26,46) | 底部渐变过渡色 | 15% 透明度 |
| **电光青** | `#00D4FF` | rgb(0,212,255) | 网格线、矢量线、圆环轮廓 | 4-15% 透明度 |
| **等离子紫** | `#7B2FFF` | rgb(123,47,255) | 水平装饰线、圆填充 | 10-20% 透明度 |
| **冰雾灰** | `#8A8FA8` | rgb(138,143,168) | 面板边框、文字占位符、品牌水印 | 12-20% 透明度 |
| **电光白** | `#F0F0FF` | rgb(240,240,255) | 面板顶部 rim light | 15% 透明度 |

### 色彩使用规则

- **太空黑** 占画布 60%+ 面积，确保整体亮度 < 20%
- **暗曜蓝** 仅用于底部 1/3 区域的渐变过渡，透明度 ≤ 15%
- **电光青** 所有元素透明度 ≤ 15%，保持低调不抢前景
- **等离子紫** 仅用于水平装饰线和圆填充，透明度 ≤ 20%
- **冰雾灰** 用于面板边框、文字占位符和品牌水印，透明度 12-20%
- **电光白** 仅用于面板顶部 rim light，透明度 15%

### 禁止规则

- ❌ 不使用纯黑色 `#000000` — 统一使用太空黑 `#0A0A0F`
- ❌ 不使用纯白色 `#FFFFFF` — 统一使用电光白 `#F0F0FF`
- ❌ 不使用暖色调（橙/红/黄）
- ❌ 不使用渐变作为主视觉 — 仅用于底部过渡
- ❌ 不使用高亮度元素（任何元素亮度 > 30%）
- ❌ 不使用中文字符
- ❌ 不使用实际文字内容 — 仅允许品牌水印 "AIBO"（12% 透明度）

---

## 3. 材质与发光效果参数

### 玻璃拟态参数

| 元素 | 参数 | 值 |
|------|------|:---:|
| 右上方面板 | 底色 | 暗曜蓝 `#1A1A2E` @ 30% 透明度 |
| 右上方面板 | 磨砂玻璃纹理 | 有（subtle backdrop blur） |
| 右上方面板 | 边框 | 1px 冰雾灰 `#8A8FA8` @ 15% 透明度 |
| 右上方面板 | 顶部边缘高光 | 电光白 `#F0F0FF` @ 15%，柔和高光 |
| 右上方面板 | 形状 | 窄高垂直矩形（tall narrow vertical rectangle） |

### 霓虹发光参数

| 元素 | 发光颜色 | 光晕范围 | 透明度 |
|------|:--------:|:--------:|:------:|
| 电光青矢量线 | `#00D4FF` | 无发光（faint glow） | 15% |
| 等离子紫水平线 | `#7B2FFF` | 无发光 | 20% |

### 背景纹理参数

| 元素 | 参数 | 值 |
|------|------|:---:|
| 瑞士网格 | 颜色 | 电光青 `#00D4FF` @ 4% 透明度 |
| 瑞士网格 | 类型 | 超精细水平+垂直线 |
| 瑞士网格 | 间距 | 宽松间距（generous spacing） |
| 底部渐变 | 颜色 | 太空黑 → 暗曜蓝 @ 15% 透明度 |
| 底部渐变 | 范围 | 画布下 1/3 区域 |

### 装饰元素参数

| 元素 | 颜色 | 透明度 | 位置 |
|------|:----:|:------:|:----:|
| 三圆对角排列 | 电光青 `#00D4FF` 轮廓 | 12% | 左下象限 |
| 最小圆填充 | 等离子紫 `#7B2FFF` | 10% | 左下象限 |
| 矢量数据线 | 电光青 `#00D4FF` | 15% | 穿过三圆至底部 |
| 品牌水印 "AIBO" | 冰雾灰 `#8A8FA8` | 12% | 右下角 |
| 水平装饰线 | 等离子紫 `#7B2FFF` | 20% | 黄金分割点，偏左 |

---

## 4. 构图与布局规范

### 布局示意图

```
┌──────────────────────────┐
│                          │
│                          │
│     ┌──┐                 │
│     │  │ ← 玻璃面板(右上) │
│     │  │                 │
│     └──┘                 │
│                          │
│  ───── ← 紫装饰线(黄金分割)│
│                          │
│  ○                       │
│   ○  ← 三圆对角(左下)     │
│    ○                      │
│     ╲                    │
│      ╲ ← 数据流线         │
│       ╲                  │
│                    AIBO  │
│                    (水印) │
└──────────────────────────┘
```

### 关键布局规则

| 元素 | 位置 | 占画布比例 | 说明 |
|------|:----:|:---------:|------|
| **纯黑留白区** | 中心/上部 | ≥ 60% | 供平台 overlay 文字叠加 |
| **玻璃面板** | 右上象限 | ~15% | 窄高垂直矩形 |
| **三圆装饰** | 左下象限 | ~10% | 对角排列 |
| **等离子紫线** | 黄金分割点 | 宽度 30% | 偏左放置 |
| **品牌水印** | 右下角 | ~3% | 12% 透明度 |
| **数据流线** | 左下至底部 | ~15% | 穿过三圆 |

### 元素层级（从底到顶）

1. **背景层**：太空黑 + 底部暗曜蓝渐变（15% 透明度）
2. **纹理层**：4% 电光青瑞士网格
3. **装饰层**：三圆对角排列 + 数据流线 + 等离子紫水平线
4. **面板层**：右上角玻璃拟态面板 + rim light
5. **水印层**：右下角 "AIBO" 品牌水印（12% 透明度）

### 构图原则

- **非对称平衡**：右上方面板 vs 左下三圆形成对角线平衡
- **黄金分割**：等离子紫水平线位于画布从上至下约 38.2% 处
- **呼吸感**：60%+ 纯黑留白，确保前景内容清晰可读
- **低调克制**：所有装饰元素透明度 ≤ 20%，不抢前景
- **瑞士网格**：非对称布局，精确几何关系

---

## 5. 亮度控制方法

### 亮度控制策略

背景图的核心要求是 **整体亮度 < 20%**，确保平台 overlay 文字（白色）可读。以下是具体控制方法：

### 1. 背景色控制

| 区域 | 颜色 | 亮度值 | 说明 |
|:----:|:----:|:------:|------|
| 顶部 2/3 | 太空黑 `#0A0A0F` | ~4% | OLED 级别纯黑 |
| 底部 1/3 | 太空黑 → 暗曜蓝 @ 15% | ~8% | 极轻微渐变 |
| 整体平均 | — | < 10% | 远低于 20% 阈值 |

### 2. 元素亮度控制

| 元素类型 | 最大透明度 | 等效亮度 | 控制方法 |
|---------|:---------:|:--------:|---------|
| 网格线 | 4% | ~0.5% | 透明度控制 |
| 玻璃面板 | 30% 底色 + 15% 边框 | ~5% | 底色+边框双重控制 |
| 装饰圆环 | 12% | ~1.5% | 透明度控制 |
| 矢量线 | 15% | ~2% | 透明度控制 |
| 品牌水印 | 12% | ~1.5% | 透明度控制 |
| 水平装饰线 | 20% | ~3% | 透明度控制 |

### 3. 生成后验证方法

```
验证步骤：
1. 将图片导入 Photoshop / 任何图片编辑软件
2. 添加「亮度/对比度」调整层
3. 观察直方图 — 峰值应集中在暗部区域（0-50 亮度值）
4. 在图片上叠加白色文字（#F0F0FF, 16px）— 文字应清晰可读
5. 如有亮度过高区域 → 降低该元素透明度或缩小尺寸
```

### 4. 常见问题与修复

| 问题 | 原因 | 修复方法 |
|------|------|---------|
| 整体偏亮 | 背景色使用了纯黑以外的颜色 | 确认背景为 `#0A0A0F` |
| 局部过亮 | 元素透明度设置过高 | 降低透明度至规定范围 |
| 渐变太明显 | 暗曜蓝透明度 > 15% | 降低至 15% 或以下 |
| 网格太显眼 | 网格透明度 > 4% | 降低至 4% 或以下 |
| 发光溢出 | 发光光晕超出规定范围 | 关闭发光或缩小光晕 |

---

## 6. 平台 overlay 适配说明

### 小红书主页 overlay 区域

```
┌──────────────────────────┐
│  ╭──╮                    │
│  │头像│ ← 头像区域(左上)   │
│  ╰──╯                    │
│  昵称 ← 文字区域          │
│  简介 ← 文字区域          │
│  数据统计 ← 文字区域      │
│                          │
│  ─────── ← 内容列表开始   │
│  □ 笔记1                 │
│  □ 笔记2                 │
│  □ 笔记3                 │
└──────────────────────────┘
```

### 关键 overlay 区域

| 区域 | 位置 | 内容 | 背景要求 |
|:----:|:----:|------|:--------:|
| **头像区** | 左上角 | 圆形头像 | 纯黑背景，无干扰元素 |
| **昵称区** | 头像右侧/下方 | 账号名称（白色文字） | 亮度 < 20% |
| **简介区** | 昵称下方 | 个人简介（灰色文字） | 亮度 < 20% |
| **数据区** | 简介下方 | 获赞/收藏数 | 亮度 < 20% |
| **内容列表** | 下方全部 | 笔记封面网格 | 背景图仅作为顶部背景 |

### 适配规则

- **左上角 30% 区域**：必须为纯太空黑，无任何装饰元素 — 这是头像和昵称的叠加区域
- **中心上部 40% 区域**：可放置玻璃面板等装饰，但透明度必须 ≤ 30%
- **下部 50% 区域**：可放置装饰元素，但亮度必须 < 20%
- **所有 overlay 文字为白色**（电光白 `#F0F0FF`），背景亮度 < 20% 确保可读

### 移动端 vs 桌面端适配

| 平台 | 可见区域 | 裁切方式 | 注意事项 |
|:----:|:--------:|:--------:|---------|
| **移动端** | 竖屏全宽 | 顶部对齐 | 中心区域需纯净暗色 |
| **桌面端** | 横屏裁切 | 居中裁切 | 左右两侧可放置装饰 |

---

## 7. 竞品差异化依据

### 竞品背景图对比

| 竞品 | 背景图风格 | 色彩 | 独特性 |
|------|-----------|:----:|:------:|
| **老麦的工具库** | 无/简单纯色 | 科技蓝 | 低 |
| **赛博禅心** | 无/简单纯色 | 紫蓝 | 低 |
| **数字生命卡兹克** | 无 | — | 无 |
| **量子位** | 品牌色渐变 | 品牌蓝 | 中等 |
| **APPSO** | 品牌色渐变 | 品牌绿 | 中等 |
| **AI商业观察（我们）** | **暗色科技氛围背景** | **太空黑+电光青+等离子紫** | **极高** |

### 差异化核心

目前 5 个对标竞品中，**大多数没有或只有简单的纯色背景图**：

- 老麦的工具库 → 无/简单纯色
- 赛博禅心 → 无/简单纯色
- 数字生命卡兹克 → 无背景图
- 量子位 → 品牌色渐变
- APPSO → 品牌色渐变

我们的 **暗色科技氛围背景图** — 结合玻璃拟态面板、瑞士网格、霓虹点缀 — 在 AI 商业赛道中具有独特的视觉身份，同时通过 **60%+ 纯黑留白** 确保平台 overlay 文字的可读性。

### 设计原则

> **「背景即氛围，不抢前景」**
>
> 背景图的核心价值是建立品牌氛围，而非展示内容。
> 所有装饰元素必须保持低调（透明度 ≤ 20%），
> 确保头像、昵称、简介等前景信息始终清晰可读。

---

## 8. 生成 Prompt（可执行版本）

### 主版本 — `profile-banner-v2`

**宽高比**: 3:4 (768×1024)
**生成引擎**: Agnes Image 2.0 / Midjourney / DALL·E 3
**风格预设**: cinematic

```
A dark, atmospheric profile banner image designed as the background for a social media profile page, rendered in a restrained glass-morphism and Swiss Design aesthetic. The canvas is vertical 3:4 aspect ratio with deep space black (#0A0A0F) as the dominant background — the overall luminance is kept deliberately low (average brightness below 20%) to ensure any platform overlay text (profile name, bio, stats) remains readable when superimposed.

The background transitions subtly from pure deep space black at the top to a slightly lighter dark sapphire blue (#1A1A2E) at 15% opacity in the lower third, creating a gentle atmospheric gradient without introducing any bright areas. A faint, ultra-fine Swiss grid pattern in cyber cyan (#00D4FF) at 4% opacity spans the entire canvas — thin horizontal and vertical lines with generous spacing, evoking a blueprint or architectural reference.

In the upper-right quadrant, a single glass-morphism panel element: a tall, narrow vertical rectangle with a dark sapphire blue (#1A1A2E) base at 30% opacity, a frosted glass texture with subtle backdrop blur, a 1px border in ice mist gray (#8A8FA8) at 15% opacity, and a soft top-edge rim light. Inside this panel, three short horizontal lines in ice mist gray (#8A8FA8) at 20% opacity are stacked with generous spacing — these are abstract text placeholders, not actual text.

In the lower-left quadrant, a geometric composition of three precision circles arranged in a diagonal cascade, each outlined in cyber cyan (#00D4FF) at 12% opacity, with the smallest circle filled solid in plasma purple (#7B2FFF) at 10% opacity. A thin, continuous vector line in cyber cyan (#00D4FF) at 15% opacity weaves through these circles like a data stream or circuit trace, terminating at the bottom edge of the canvas.

In the lower-right corner, a subtle brand marker: the letters "AIBO" in ultra-light condensed sans-serif, set in ice mist gray (#8A8FA8) at 12% opacity — barely perceptible, serving as a ghost watermark. A single horizontal accent line in plasma purple (#7B2FFF) at 20% opacity runs approximately 30% of the canvas width, positioned at the golden ratio point from the top edge, off-center to the left — a classic Swiss Design non-symmetric gesture.

The remaining 60%+ of the canvas is intentionally left as pure, uninterrupted deep space black (#0A0A0F) with zero texture, zero decoration — providing ample dark negative space for the platform's profile photo, bio text, and content grid to overlay without visual competition. The lighting is extremely subtle and diegetic: the only illumination comes from the faint glow of the cyber cyan vector line and the soft rim light on the glass panel, creating a quiet, meditative ambiance.

Octane render quality, architectural photography composition with a 35mm wide-angle lens, capturing the precise material definition of the frosted glass surface while maintaining the overall dark, recessive quality required for a background image. No Chinese characters anywhere. No bright elements that would compete with foreground content.
```

### 备用版本 — `profile-banner-v2-alt`

如需更简洁/生成更稳定的版本：

```
A dark profile banner background, vertical 3:4 aspect ratio. Deep space black (#0A0A0F) background with overall brightness below 20%. Subtle gradient to dark sapphire blue (#1A1A2E) at 15% opacity in lower third. Faint Swiss grid in cyber cyan (#00D4FF) at 4% opacity across canvas. Upper-right: a tall narrow glass-morphism panel in dark sapphire blue (#1A1A2E) at 30% opacity with 1px ice mist gray (#8A8FA8) border at 15% opacity and soft rim light. Inside: three short abstract lines in ice mist gray at 20% opacity. Lower-left: three precision circles in diagonal cascade, outlined in cyber cyan at 12% opacity, smallest filled in plasma purple at 10% opacity. A thin vector line in cyber cyan at 15% opacity weaves through circles to bottom edge. Lower-right: ghost watermark "AIBO" in ice mist gray at 12% opacity. Single horizontal accent line in plasma purple at 20% opacity at golden ratio point, off-center left. 60%+ of canvas is pure deep space black with zero decoration. Octane render, architectural photography, 35mm wide-angle lens. No Chinese characters. No bright elements.
```

---

## 9. 质量检查清单

### 亮度检查
- [ ] 整体亮度 < 20%（直方图峰值在暗部）
- [ ] 顶部 2/3 为纯太空黑 `#0A0A0F`
- [ ] 底部渐变 ≤ 15% 透明度
- [ ] 所有元素透明度 ≤ 20%
- [ ] 无任何高亮度区域（> 30% 亮度）

### 色彩检查
- [ ] 背景色为太空黑 `#0A0A0F`（非纯黑 `#000000`）
- [ ] 底部渐变使用暗曜蓝 `#1A1A2E` @ 15%
- [ ] 网格线为电光青 `#00D4FF` @ 4%
- [ ] 面板底色为暗曜蓝 `#1A1A2E` @ 30%
- [ ] 面板边框为冰雾灰 `#8A8FA8` @ 15%
- [ ] 无暖色调（橙/红/黄）侵入

### 材质检查
- [ ] 右上方面板有磨砂玻璃质感
- [ ] 面板有 backdrop blur 效果
- [ ] 面板顶部有 rim light 高光
- [ ] 背景有 4% 瑞士网格纹理
- [ ] 底部有渐变过渡

### 构图检查
- [ ] 60%+ 纯黑留白区域
- [ ] 右上方面板位置正确
- [ ] 左下三圆对角排列清晰
- [ ] 等离子紫水平线在黄金分割点
- [ ] 品牌水印 "AIBO" 在右下角
- [ ] 非对称瑞士网格布局

### overlay 适配检查
- [ ] 左上角 30% 区域为纯黑无装饰
- [ ] 中心上部 40% 区域无高亮元素
- [ ] 白色文字（`#F0F0FF`）叠加后可读
- [ ] 头像区域无干扰元素
- [ ] 简介区域背景纯净

### 品牌一致性检查
- [ ] 与 visual-style-guide.md 色彩系统一致
- [ ] 与 logo/avatar 视觉协调
- [ ] 与竞品形成视觉差异化
- [ ] 符合暗色科技美学定位
- [ ] 无中文文字

---

> **背景即氛围，不抢前景。**
>
> — 保持暗色、保持克制、保持品牌一致性。
