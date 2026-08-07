# Note 4 — Page 1: Data Chart (Type 2)

> **File**: `note4-page1.png`
> **Template**: inner-data-chart-v3 (Type 2)
> **Size**: 768×1024 (3:4 portrait, Xiaohongshu format)
> **Brand**: AI BUSINESS OBSERVER

---

## Executable Prompt (English)

```
A premium data dashboard infographic card in a dark instrument-panel aesthetic, inspired by luxury automotive HUDs and financial trading terminals. The background is deep space black (#0A0A0F) with a subtle radial vignette that darkens toward the edges, focusing attention on the center. At the top, a section header in an ultra-bold condensed sans-serif font, set in electric white (#F0F0FF) at 85% opacity, reads "5 INDUSTRIES × AI IMPACT INDEX" with a thin underline accent in cyber cyan (#00D4FF) — a 2px line extending 60% of the text width, left-aligned.

Below the header, five glass-morphism metric cards are arranged in a vertical stack with 14px spacing. Each card has a dark sapphire blue (#1A1A2E) base at 40% opacity, a frosted glass texture with subtle backdrop blur, a 1px border in ice mist gray (#8A8FA8) at 20% opacity, and a soft white rim light along the top edge simulating a top-down key light. Inside each card, three data points are displayed in a horizontal row:

Card 1 — "HEALTHCARE": AI Penetration "35%" in cyber cyan (#00D4FF) with glow, Efficiency Gain "+28%" in electric white (#F0F0FF), Impact Index "7.2" in plasma purple (#7B2FFF).
Card 2 — "CONTENT CREATION": AI Penetration "70%" in electric white (#F0F0FF), Efficiency Gain "+55%" in cyber cyan (#00D4FF) with glow, Impact Index "9.1" in plasma purple (#7B2FFF).
Card 3 — "EDUCATION": AI Penetration "25%" in plasma purple (#7B2FFF), Efficiency Gain "+40%" in electric white (#F0F0FF), Impact Index "6.5" in cyber cyan (#00D4FF).
Card 4 — "RETAIL": AI Penetration "50%" in cyber cyan (#00D4FF) with glow, Efficiency Gain "+50%" in electric white (#F0F0FF), Impact Index "8.3" in plasma purple (#7B2FFF).
Card 5 — "FINANCE": AI Penetration "60%" in electric white (#F0F0FF), Efficiency Gain "+45%" in cyber cyan (#00D4FF), Impact Index "8.8" in plasma purple (#7B2FFF).

Each metric value is rendered in an ultra-bold monospaced DIN-style font. Below each value, a thin horizontal progress bar with rounded ends: the track is dark sapphire blue (#1A1A2E) at 60% opacity, and the fill is the same color as the metric value above it. Each fill has a soft inner glow that makes it appear self-illuminated. In the bottom-left corner of each card, a small trend indicator — an upward arrow in cyber cyan (#00D4FF) for positive metrics, rendered as a thin vector line. Between the cards, thin connector lines in plasma purple (#7B2FFF) at 15% opacity create a subtle relational diagram. In the bottom-right of the overall canvas, a data source footnote in ice mist gray (#8A8FA8) monospaced font at 35% opacity reads "SOURCE: AI BUSINESS OBSERVER ANALYSIS · 2025". The brand signature "AI BUSINESS OBSERVER" appears at the bottom-left in ultra-light sans-serif at 30% opacity. The lighting is entirely diegetic — the glowing progress bars and luminous metric values are the only light sources, creating a dark cockpit ambiance. Octane render quality, architectural photography composition with a 35mm lens, capturing the precise material definition of the frosted glass surfaces and the volumetric quality of the neon glow. No Chinese characters anywhere.
```

---

## Design Specification

### Layout Diagram (text-based)
```
┌──────────────────────────────────┐
│  5 INDUSTRIES × AI IMPACT INDEX  │  ← Header, electric white, ultra-bold condensed
│  ──────────────────────────      │  ← Cyan underline, 60% text width
│                                  │
│  ┌──────────────────────────┐    │
│  │ HEALTHCARE               │    │  ← Glass-morphism card 1
│  │ 35%  │  +28%  │  7.2     │    │  ← Penetration / Efficiency / Impact
│  │ ████████░░░░░░░░░░░░░░░  │    │  ← Progress bar, cyan fill 35%
│  │ ↑                        │    │  ← Trend arrow
│  └──────────────────────────┘    │
│  ┌──────────────────────────┐    │
│  │ CONTENT CREATION         │    │  ← Glass-morphism card 2
│  │ 70%  │  +55%  │  9.1     │    │
│  │ ████████████████░░░░░░░  │    │  ← Progress bar, white fill 70%
│  │ ↑                        │    │
│  └──────────────────────────┘    │
│  ┌──────────────────────────┐    │
│  │ EDUCATION                │    │  ← Glass-morphism card 3
│  │ 25%  │  +40%  │  6.5     │    │
│  │ █████░░░░░░░░░░░░░░░░░░  │    │  ← Progress bar, purple fill 25%
│  │ ↑                        │    │
│  └──────────────────────────┘    │
│  ┌──────────────────────────┐    │
│  │ RETAIL                   │    │  ← Glass-morphism card 4
│  │ 50%  │  +50%  │  8.3     │    │
│  │ ███████████░░░░░░░░░░░░  │    │  ← Progress bar, cyan fill 50%
│  │ ↑                        │    │
│  └──────────────────────────┘    │
│  ┌──────────────────────────┐    │
│  │ FINANCE                  │    │  ← Glass-morphism card 5
│  │ 60%  │  +45%  │  8.8     │    │
│  │ █████████████░░░░░░░░░░  │    │  ← Progress bar, white fill 60%
│  │ ↑                        │    │
│  └──────────────────────────┘    │
│                                  │
│  AI BUSINESS OBSERVER    SOURCE  │  ← Brand + footnote
└──────────────────────────────────┘
```

### Color Specification
| Element | Color | HEX | Opacity |
|---------|-------|-----|---------|
| Background | Space Black | #0A0A0F | 100% |
| Header text | Electric White | #F0F0FF | 85% |
| Header underline | Cyber Cyan | #00D4FF | 100% |
| Card base | Dark Sapphire Blue | #1A1A2E | 40% |
| Card border | Ice Mist Gray | #8A8FA8 | 20% |
| Card rim light | Electric White | #F0F0FF | 30% |
| Metric values | Various | per card | 100% |
| Progress bar track | Dark Sapphire Blue | #1A1A2E | 60% |
| Connector lines | Plasma Purple | #7B2FFF | 15% |
| Trend arrow | Cyber Cyan | #00D4FF | 80% |
| Footnote | Ice Mist Gray | #8A8FA8 | 35% |
| Brand signature | Ice Mist Gray | #8A8FA8 | 30% |

### Material Effects
- **Cards**: Frosted glass texture with backdrop blur, 1px border, top-edge rim light
- **Progress bars**: Rounded ends, inner glow fill, self-illuminated appearance
- **Connector lines**: Thin plasma purple lines between cards, 15% opacity
- **Trend arrows**: Thin vector lines in cyber cyan

### Composition Rules
- Header occupies top 8% of canvas
- 5 cards stacked vertically, each ~15% height
- 14px spacing between cards
- Cards have 12px corner radius
- Brand signature bottom-left, footnote bottom-right

### Brand Signature Placement
- **Position**: Bottom-left corner
- **Text**: "AI BUSINESS OBSERVER"
- **Font**: Ultra-light condensed sans-serif
- **Color**: Ice Mist Gray (#8A8FA8) at 30% opacity
- **Margin**: 20px from bottom, 20px from left edge

### Generation Notes
- Use Google Flow / Midjourney / DALL·E 3
- Aspect ratio: 3:4 (768×1024)
- Verify: all 5 cards clearly visible and readable
- Verify: no Chinese characters
- Verify: glass-morphism effect is natural (not simple transparency)
