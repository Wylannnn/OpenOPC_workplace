# Note 4 — Page 2: Step Flow (Type 3)

> **File**: `note4-page2.png`
> **Template**: inner-step-flow-v3 (Type 3)
> **Size**: 768×1024 (3:4 portrait, Xiaohongshu format)
> **Brand**: AI BUSINESS OBSERVER

---

## Executable Prompt (English)

```
A structured vertical timeline infographic card in a dark glass-morphism aesthetic, adapted for portrait 3:4 format. The background is deep space black (#0A0A0F) with a subtle vertical gradient that transitions to dark sapphire blue (#1A1A2E) at the bottom, creating a sense of forward motion. At the top, a section header in an ultra-bold condensed sans-serif font, set in electric white (#F0F0FF) at 85% opacity, reads "HOW AI IS TRANSFORMING 5 INDUSTRIES" with a thin accent line in cyber cyan (#00D4FF) beneath it — a 2px line extending 50% of the text width, left-aligned.

Below the header, five glass-morphism industry cards are arranged vertically from top to bottom, connected by a central vertical timeline line. Each card is a rounded rectangle with 12px corner radius, a dark sapphire blue (#1A1A2E) base at 35% opacity, a frosted glass texture with subtle backdrop blur, a 1px border in ice mist gray (#8A8FA8) at 20% opacity, and a soft top-edge rim light. A vertical connecting line in cyber cyan (#00D4FF) at 40% opacity runs down the left side of the cards, with a 6px circular node at each card junction.

Each card contains:
- Card 1 — "MEDICAL IMAGING" in electric white (#F0F0FF) bold sans-serif, description "AI DIAGNOSIS ACCURACY" in ice mist gray (#8A8FA8) ultra-light, and a highlighted metric "96%" in cyber cyan (#00D4FF) with neon glow, positioned at the right edge of the card.
- Card 2 — "CONTENT GENERATION" in electric white, description "AI-GENERATED CONTENT SHARE" in ice mist gray, metric "35%" in electric white (#F0F0FF).
- Card 3 — "PERSONALIZED LEARNING" in electric white, description "LEARNING EFFICIENCY BOOST" in ice mist gray, metric "+40%" in plasma purple (#7B2FFF).
- Card 4 — "RECOMMENDATION ENGINE" in electric white, description "CONVERSION RATE IMPROVEMENT" in ice mist gray, metric "+50%" in cyber cyan (#00D4FF) with glow.
- Card 5 — "RISK CONTROL" in electric white, description "FRAUD DETECTION RATE" in ice mist gray, metric "99.7%" in electric white (#F0F0FF).

The fifth card has a subtle pulsing glow effect around its border in plasma purple (#7B2FFF), indicating it as the most impactful application. Below the timeline, a thin horizontal rule in ice mist gray (#8A8FA8) at 20% opacity spans the full width. The brand signature "AI BUSINESS OBSERVER" appears at the bottom-left in ultra-light sans-serif at 30% opacity. The lighting is directional from the upper-left, casting soft shadows behind each card onto the dark surface below — the shadows are subtle, with a 45-degree angle and 20% opacity. Octane render quality, product photography aesthetic with a 50mm macro lens at f/4, capturing the precise material qualities of the frosted glass surfaces and the volumetric glow of the neon connecting lines. No Chinese characters anywhere.
```

---

## Design Specification

### Layout Diagram (text-based)
```
┌──────────────────────────────────┐
│  HOW AI IS TRANSFORMING          │  ← Header, electric white
│  5 INDUSTRIES                    │
│  ──────────────────────          │  ← Cyan underline
│                                  │
│  ●──┌──────────────────────┐     │
│  │  │ MEDICAL IMAGING  96% │     │  ← Card 1, cyan metric with glow
│  │  │ AI DIAGNOSIS ACCURACY│     │
│  │  └──────────────────────┘     │
│  ●──┌──────────────────────┐     │
│  │  │ CONTENT GENERATION 35%│     │  ← Card 2, white metric
│  │  │ AI-GENERATED CONTENT │     │
│  │  └──────────────────────┘     │
│  ●──┌──────────────────────┐     │
│  │  │ PERSONALIZED LEARN +40%│    │  ← Card 3, purple metric
│  │  │ LEARNING EFFICIENCY  │     │
│  │  └──────────────────────┘     │
│  ●──┌──────────────────────┐     │
│  │  │ RECOMMENDATION  +50% │     │  ← Card 4, cyan metric with glow
│  │  │ CONVERSION RATE      │     │
│  │  └──────────────────────┘     │
│  ●──┌──────────────────────┐     │
│  │  │ RISK CONTROL   99.7% │     │  ← Card 5, white metric, purple glow border
│  │  │ FRAUD DETECTION RATE │     │
│  │  └──────────────────────┘     │
│  ────────────────────────────    │  ← Horizontal rule
│  AI BUSINESS OBSERVER            │  ← Brand signature
└──────────────────────────────────┘
```

### Color Specification
| Element | Color | HEX | Opacity |
|---------|-------|-----|---------|
| Background | Space Black | #0A0A0F | 100% |
| Background gradient | Dark Sapphire Blue | #1A1A2E | bottom transition |
| Header | Electric White | #F0F0FF | 85% |
| Header underline | Cyber Cyan | #00D4FF | 100% |
| Card base | Dark Sapphire Blue | #1A1A2E | 35% |
| Card border | Ice Mist Gray | #8A8FA8 | 20% |
| Card title | Electric White | #F0F0FF | 100% |
| Card description | Ice Mist Gray | #8A8FA8 | 60% |
| Metric (Card 1) | Cyber Cyan | #00D4FF | 100% + 4px glow |
| Metric (Card 2) | Electric White | #F0F0FF | 100% |
| Metric (Card 3) | Plasma Purple | #7B2FFF | 100% |
| Metric (Card 4) | Cyber Cyan | #00D4FF | 100% + 4px glow |
| Metric (Card 5) | Electric White | #F0F0FF | 100% |
| Timeline line | Cyber Cyan | #00D4FF | 40% |
| Timeline nodes | Cyber Cyan | #00D4FF | 60% |
| Card 5 glow border | Plasma Purple | #7B2FFF | pulse effect |
| Brand signature | Ice Mist Gray | #8A8FA8 | 30% |

### Material Effects
- **Cards**: Frosted glass, 12px corner radius, backdrop blur, top-edge rim light
- **Timeline**: Vertical cyan line with circular nodes at each card junction
- **Card 5**: Pulsing plasma purple border glow (final/most important)
- **Shadows**: 45-degree angle, 20% opacity, behind each card

### Composition Rules
- Header occupies top 8%
- 5 cards stacked vertically, connected by timeline on left
- Timeline nodes aligned with card left edge
- Metric values positioned at right edge of each card
- Bottom rule and brand signature in bottom 5%

### Brand Signature Placement
- **Position**: Bottom-left corner
- **Text**: "AI BUSINESS OBSERVER"
- **Font**: Ultra-light condensed sans-serif
- **Color**: Ice Mist Gray (#8A8FA8) at 30% opacity
- **Margin**: 20px from bottom, 20px from left edge

### Generation Notes
- Use Google Flow / Midjourney / DALL·E 3
- Aspect ratio: 3:4 (768×1024)
- Verify: all 5 cards clearly visible with metrics
- Verify: timeline connection is visible and consistent
- Verify: no Chinese characters
