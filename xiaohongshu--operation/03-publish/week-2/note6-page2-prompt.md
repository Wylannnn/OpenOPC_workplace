# Note 6 — Page 2: Data Chart (Type 2)

> **File**: `note6-page2.png`
> **Template**: inner-data-chart-v3 (Type 2)
> **Size**: 768×1024 (3:4 portrait, Xiaohongshu format)
> **Brand**: AI BUSINESS OBSERVER

---

## Executable Prompt (English)

```
A premium data comparison infographic card in a dark instrument-panel aesthetic, inspired by luxury automotive HUDs and financial trading terminals. The background is deep space black (#0A0A0F) with a subtle radial vignette that darkens toward the edges, focusing attention on the center. At the top, a section header in an ultra-bold condensed sans-serif font, set in electric white (#F0F0FF) at 85% opacity, reads "BEFORE vs AFTER — WRITING TIME COMPARISON" with a thin underline accent in cyber cyan (#00D4FF) — a 2px line extending 60% of the text width, left-aligned.

Below the header, five glass-morphism comparison cards are arranged in a vertical stack with 12px spacing. Each card has a dark sapphire blue (#1A1A2E) base at 40% opacity, a frosted glass texture with subtle backdrop blur, a 1px border in ice mist gray (#8A8FA8) at 20% opacity, and a soft white rim light along the top edge simulating a top-down key light. Inside each card, data is displayed in a horizontal row with three columns:

Card 1 — "XIAOHONGSHU SEEDING": Before "45min" in ice mist gray (#8A8FA8) at 60% opacity with strikethrough effect, After "5min" in cyber cyan (#00D4FF) with 3px neon glow, Saved "-40min" in electric white (#F0F0FF) with a small upward green arrow indicator.
Card 2 — "WECHAT MOMENTS": Before "60min" in ice mist gray (#8A8FA8) at 60% opacity with strikethrough, After "10min" in cyber cyan (#00D4FF) with glow, Saved "-50min" in electric white (#F0F0FF) with green arrow.
Card 3 — "WEEKLY REPORT": Before "30min" in ice mist gray (#8A8FA8) at 60% opacity with strikethrough, After "5min" in cyber cyan (#00D4FF) with glow, Saved "-25min" in electric white (#F0F0FF) with green arrow.
Card 4 — "PRODUCT INTRO": Before "90min" in ice mist gray (#8A8FA8) at 60% opacity with strikethrough, After "15min" in cyber cyan (#00D4FF) with glow, Saved "-75min" in electric white (#F0F0FF) with green arrow.
Card 5 — "EVENT COPY": Before "60min" in ice mist gray (#8A8FA8) at 60% opacity with strikethrough, After "10min" in cyber cyan (#00D4FF) with glow, Saved "-50min" in electric white (#F0F0FF) with green arrow.

Each time value is rendered in an ultra-bold monospaced DIN-style font. Below each row of data, a thin horizontal comparison bar with rounded ends: the left portion (Before) in ice mist gray (#8A8FA8) at 30% opacity, and the right portion (After) in cyber cyan (#00D4FF) at 70% opacity with a soft inner glow. The bar visually represents the dramatic time reduction — the After segment is significantly shorter than the Before segment. Column headers in ultra-light condensed sans-serif, ice mist gray (#8A8FA8) at 50% opacity, read "SCENARIO", "BEFORE", "AFTER", "SAVED" from left to right, positioned above the first card.

Between the cards, thin connector lines in plasma purple (#7B2FFF) at 15% opacity create a subtle relational diagram. In the bottom section of the canvas, a large summary stat in ultra-bold monospaced DIN-style font, cyber cyan (#00D4FF) with a 4px neon glow, reads "AVERAGE 80% TIME SAVED". Below this, a thin horizontal progress bar fills 80% of its track in cyber cyan (#00D4FF) with inner glow, representing the average savings rate. Below the progress bar, a footnote in ice mist gray (#8A8FA8) monospaced font at 35% opacity reads "BASED ON 5 COMMON WRITING SCENARIOS". The brand signature "AI BUSINESS OBSERVER" appears at the bottom-left in ultra-light sans-serif at 30% opacity. The lighting is entirely diegetic — the glowing After values and luminous progress bars are the only light sources, creating a dark cockpit ambiance. Octane render quality, architectural photography composition with a 35mm lens, capturing the precise material definition of the frosted glass surfaces and the volumetric quality of the neon glow. No Chinese characters anywhere.
```

---

## Design Specification

### Layout Diagram (text-based)
```
┌──────────────────────────────────┐
│  BEFORE vs AFTER                 │  ← Header
│  WRITING TIME COMPARISON         │
│  ──────────────────────────      │  ← Cyan underline
│                                  │
│  SCENARIO    BEFORE  AFTER SAVED │  ← Column headers
│  ┌──────────────────────────┐    │
│  │ XIAOHONGSHU  45min 5min -40│  │  ← Card 1
│  │ ████████████████░░░░░░░░░  │    │  ← Comparison bar
│  └──────────────────────────┘    │
│  ┌──────────────────────────┐    │
│  │ WECHAT MOMENTS 60min 10m │    │  ← Card 2
│  │ ████████████████████░░░░  │    │
│  └──────────────────────────┘    │
│  ┌──────────────────────────┐    │
│  │ WEEKLY REPORT 30min 5min │    │  ← Card 3
│  │ ██████████░░░░░░░░░░░░░  │    │
│  └──────────────────────────┘    │
│  ┌──────────────────────────┐    │
│  │ PRODUCT INTRO 90min 15m  │    │  ← Card 4
│  │ ████████████████████████  │    │
│  └──────────────────────────┘    │
│  ┌──────────────────────────┐    │
│  │ EVENT COPY 60min 10min   │    │  ← Card 5
│  │ ████████████████░░░░░░░  │    │
│  └──────────────────────────┘    │
│                                  │
│  AVERAGE 80% TIME SAVED         │  ← Summary stat, cyan glow
│  ████████████████████░░░░       │  ← Progress bar, 80% fill
│  BASED ON 5 COMMON SCENARIOS    │  ← Footnote
│  AI BUSINESS OBSERVER           │  ← Brand signature
└──────────────────────────────────┘
```

### Color Specification
| Element | Color | HEX | Opacity |
|---------|-------|-----|---------|
| Background | Space Black | #0A0A0F | 100% |
| Header text | Electric White | #F0F0FF | 85% |
| Header underline | Cyber Cyan | #00D4FF | 100% |
| Column headers | Ice Mist Gray | #8A8FA8 | 50% |
| Card base | Dark Sapphire Blue | #1A1A2E | 40% |
| Card border | Ice Mist Gray | #8A8FA8 | 20% |
| Before values | Ice Mist Gray | #8A8FA8 | 60% |
| After values | Cyber Cyan | #00D4FF | 100% |
| Saved values | Electric White | #F0F0FF | 100% |
| Before bar segment | Ice Mist Gray | #8A8FA8 | 30% |
| After bar segment | Cyber Cyan | #00D4FF | 70% |
| Connector lines | Plasma Purple | #7B2FFF | 15% |
| Summary stat | Cyber Cyan | #00D4FF | 100% |
| Summary progress bar | Cyber Cyan | #00D4FF | 80% |
| Footnote | Ice Mist Gray | #8A8FA8 | 35% |
| Brand signature | Ice Mist Gray | #8A8FA8 | 30% |

### Material Effects
- **Cards**: Frosted glass texture with backdrop blur, 1px border, top-edge rim light
- **After values**: Cyber cyan neon glow, 3px spill
- **Comparison bars**: Rounded ends, Before in muted gray, After in glowing cyan
- **Summary stat**: Large neon glow, 4px spill

### Composition Rules
- Header occupies top 8% of canvas
- Column headers below header, ~4% height
- 5 cards stacked vertically, each ~13% height
- 12px spacing between cards
- Summary stat at bottom 15% of canvas
- Brand signature bottom-left

### Brand Signature Placement
- **Position**: Bottom-left corner
- **Text**: "AI BUSINESS OBSERVER"
- **Font**: Ultra-light condensed sans-serif
- **Color**: Ice Mist Gray (#8A8FA8) at 30% opacity
- **Margin**: 20px from bottom, 20px from left edge

### Generation Notes
- Use Google Flow / Midjourney / DALL·E 3
- Aspect ratio: 3:4 (768×1024)
- Verify: all 5 cards clearly visible with readable time values
- Verify: Before values have strikethrough effect
- Verify: After values have neon glow
- Verify: no Chinese characters
- Verify: comparison bars show dramatic Before vs After difference
