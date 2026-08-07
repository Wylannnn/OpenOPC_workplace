# Note 5 — Page 2: Data Chart (Type 2)

> **File**: `note5-page2.png`
> **Template**: inner-data-chart-v3 (Type 2)
> **Size**: 768×1024 (3:4 portrait, Xiaohongshu format)
> **Brand**: AI BUSINESS OBSERVER

---

## Executable Prompt (English)

```
A premium data dashboard infographic card in a dark instrument-panel aesthetic, inspired by luxury automotive HUDs and financial trading terminals. The background is deep space black (#0A0A0F) with a subtle radial vignette that darkens toward the edges, focusing attention on the center. At the top, a section header in an ultra-bold condensed sans-serif font, set in electric white (#F0F0FF) at 85% opacity, reads "BEFORE & AFTER: TEA SHOP METRICS" with a thin underline accent in cyber cyan (#00D4FF) — a 2px line extending 60% of the text width, left-aligned.

Below the header, four glass-morphism metric cards are arranged in a vertical stack with 16px spacing. Each card has a dark sapphire blue (#1A1A2E) base at 40% opacity, a frosted glass texture with subtle backdrop blur, a 1px border in ice mist gray (#8A8FA8) at 20% opacity, and a soft white rim light along the top edge simulating a top-down key light. Inside each card, a before/after comparison is displayed in a horizontal split layout:

Card 1 — "MONTHLY REVENUE": Before "$8,000" in ice mist gray (#8A8FA8) with strikethrough, After "$11,200" in cyber cyan (#00D4FF) with glow, Change "+40%" in electric white (#F0F0FF) bold.
Card 2 — "CUSTOMER SATISFACTION": Before "3.2★" in ice mist gray with strikethrough, After "4.5★" in electric white (#F0F0FF), Change "+41%" in cyber cyan (#00D4FF) with glow.
Card 3 — "DAILY ORDERS": Before "45" in ice mist gray with strikethrough, After "78" in plasma purple (#7B2FFF), Change "+73%" in electric white (#F0F0FF).
Card 4 — "OPERATING COST": Before "$5,200" in ice mist gray with strikethrough, After "$3,900" in cyber cyan (#00D4FF) with glow, Change "-25%" in electric white (#F0F0FF).

Each card has a thin horizontal progress bar below the metrics: the track is dark sapphire blue (#1A1A2E) at 60% opacity, and the fill is a gradient from dark sapphire blue to the metric's accent color. Each fill has a soft inner glow. In the bottom-left of each card, a small trend indicator — an upward or downward arrow in the metric's accent color. Between the cards, thin connector lines in plasma purple (#7B2FFF) at 15% opacity create a subtle relational diagram. In the bottom-right of the overall canvas, a data source footnote in ice mist gray (#8A8FA8) monospaced font at 35% opacity reads "SOURCE: AI BUSINESS OBSERVER ANALYSIS · 2025". The brand signature "AI BUSINESS OBSERVER" appears at the bottom-left in ultra-light sans-serif at 30% opacity. The lighting is entirely diegetic — the glowing progress bars and luminous metric values are the only light sources, creating a dark cockpit ambiance. Octane render quality, architectural photography composition with a 35mm lens, capturing the precise material definition of the frosted glass surfaces and the volumetric quality of the neon glow. No Chinese characters anywhere.
```

---

## Design Specification

### Layout Diagram (text-based)
```
┌──────────────────────────────────┐
│  BEFORE & AFTER: TEA SHOP        │  ← Header, electric white
│  METRICS                         │
│  ──────────────────────────      │  ← Cyan underline
│                                  │
│  ┌──────────────────────────┐    │
│  │ MONTHLY REVENUE          │    │  ← Card 1
│  │ $8,000 → $11,200  +40%  │    │  ← Before (gray) → After (cyan)
│  │ ████████████████░░░░░░░  │    │  ← Progress bar
│  │ ↑                        │    │
│  └──────────────────────────┘    │
│  ┌──────────────────────────┐    │
│  │ CUSTOMER SATISFACTION    │    │  ← Card 2
│  │ 3.2★ → 4.5★       +41%  │    │
│  │ ████████████████░░░░░░░  │    │
│  │ ↑                        │    │
│  └──────────────────────────┘    │
│  ┌──────────────────────────┐    │
│  │ DAILY ORDERS             │    │  ← Card 3
│  │ 45 → 78           +73%  │    │
│  │ ████████████████████░░░  │    │
│  │ ↑                        │    │
│  └──────────────────────────┘    │
│  ┌──────────────────────────┐    │
│  │ OPERATING COST           │    │  ← Card 4
│  │ $5,200 → $3,900   -25%  │    │
│  │ ████████████████░░░░░░░  │    │
│  │ ↓                        │    │  ← Down arrow (cost reduction)
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
| Before values | Ice Mist Gray | #8A8FA8 | 50% + strikethrough |
| After values (Card 1) | Cyber Cyan | #00D4FF | 100% + 4px glow |
| After values (Card 2) | Electric White | #F0F0FF | 100% |
| After values (Card 3) | Plasma Purple | #7B2FFF | 100% |
| After values (Card 4) | Cyber Cyan | #00D4FF | 100% + 4px glow |
| Change % (Card 1) | Electric White | #F0F0FF | 100% |
| Change % (Card 2) | Cyber Cyan | #00D4FF | 100% |
| Change % (Card 3) | Electric White | #F0F0FF | 100% |
| Change % (Card 4) | Electric White | #F0F0FF | 100% |
| Progress bar track | Dark Sapphire Blue | #1A1A2E | 60% |
| Connector lines | Plasma Purple | #7B2FFF | 15% |
| Trend arrows | Various | per card | 80% |
| Footnote | Ice Mist Gray | #8A8FA8 | 35% |
| Brand signature | Ice Mist Gray | #8A8FA8 | 30% |

### Material Effects
- **Cards**: Frosted glass texture with backdrop blur, 1px border, top-edge rim light
- **Before values**: Strikethrough text in ice mist gray
- **After values**: Self-illuminated neon glow
- **Progress bars**: Gradient fill from dark sapphire to accent color
- **Connector lines**: Thin plasma purple lines between cards

### Composition Rules
- Header occupies top 8% of canvas
- 4 cards stacked vertically, each ~18% height
- 16px spacing between cards
- Cards have 12px corner radius
- Before/after split layout inside each card
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
- Verify: before values have strikethrough effect
- Verify: after values are clearly highlighted
- Verify: no Chinese characters
