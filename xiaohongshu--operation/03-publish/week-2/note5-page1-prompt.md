# Note 5 — Page 1: Step Flow (Type 3)

> **File**: `note5-page1.png`
> **Template**: inner-step-flow-v3 (Type 3)
> **Size**: 768×1024 (3:4 portrait, Xiaohongshu format)
> **Brand**: AI BUSINESS OBSERVER

---

## Executable Prompt (English)

```
A structured vertical timeline infographic card in a dark glass-morphism aesthetic, adapted for portrait 3:4 format. The background is deep space black (#0A0A0F) with a subtle vertical gradient that transitions to dark sapphire blue (#1A1A2E) at the bottom, creating a sense of forward motion. At the top, a section header in an ultra-bold condensed sans-serif font, set in electric white (#F0F0FF) at 85% opacity, reads "3 AI TOOLS, 40% PROFIT BOOST" with a thin accent line in cyber cyan (#00D4FF) beneath it — a 2px line extending 50% of the text width, left-aligned.

Below the header, three glass-morphism tool cards are arranged vertically from top to bottom, connected by a central vertical timeline line. Each card is a rounded rectangle with 12px corner radius, a dark sapphire blue (#1A1A2E) base at 35% opacity, a frosted glass texture with subtle backdrop blur, a 1px border in ice mist gray (#8A8FA8) at 20% opacity, and a soft top-edge rim light. A vertical connecting line in cyber cyan (#00D4FF) at 40% opacity runs down the left side of the cards, with a 6px circular node at each card junction. Each card has a circular step badge in the upper-left corner — filled with cyber cyan (#00D4FF) containing white bold numbers "01", "02", "03".

Each card contains:
- Card 1 — "AI CUSTOMER SERVICE" in electric white (#F0F0FF) bold sans-serif, description "NEGATIVE REVIEWS: 15% → 3%" in ice mist gray (#8A8FA8) ultra-light, and a highlighted metric "-80%" in cyber cyan (#00D4FF) with neon glow, positioned at the right edge of the card.
- Card 2 — "AI MARKETING" in electric white, description "ONLINE ORDERS: 20 → 60/DAY" in ice mist gray, metric "+200%" in electric white (#F0F0FF).
- Card 3 — "AI DATA ANALYSIS" in electric white, description "FOOD WASTE: 30% → 19.5%" in ice mist gray, metric "-35%" in plasma purple (#7B2FFF).

The third card has a subtle pulsing glow effect around its border in plasma purple (#7B2FFF), indicating it as the most impactful tool. Below the timeline, a thin horizontal rule in ice mist gray (#8A8FA8) at 20% opacity spans the full width. The brand signature "AI BUSINESS OBSERVER" appears at the bottom-left in ultra-light sans-serif at 30% opacity. The lighting is directional from the upper-left, casting soft shadows behind each card onto the dark surface below — the shadows are subtle, with a 45-degree angle and 20% opacity. Octane render quality, product photography aesthetic with a 50mm macro lens at f/4, capturing the precise material qualities of the frosted glass surfaces and the volumetric glow of the neon connecting lines. No Chinese characters anywhere.
```

---

## Design Specification

### Layout Diagram (text-based)
```
┌──────────────────────────────────┐
│  3 AI TOOLS, 40% PROFIT BOOST    │  ← Header, electric white
│  ──────────────────────          │  ← Cyan underline
│                                  │
│  ●──┌──────────────────────┐     │
│  01 │ AI CUSTOMER SERVICE  │     │  ← Card 1, cyan metric -80%
│  │  │ NEGATIVE REVIEWS     │     │
│  │  │ 15% → 3%       -80% │     │
│  │  └──────────────────────┘     │
│  ●──┌──────────────────────┐     │
│  02 │ AI MARKETING         │     │  ← Card 2, white metric +200%
│  │  │ ONLINE ORDERS        │     │
│  │  │ 20 → 60/DAY   +200% │     │
│  │  └──────────────────────┘     │
│  ●──┌──────────────────────┐     │
│  03 │ AI DATA ANALYSIS     │     │  ← Card 3, purple metric -35%, glow border
│  │  │ FOOD WASTE           │     │
│  │  │ 30% → 19.5%   -35%  │     │
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
| Step badge (01, 02) | Cyber Cyan | #00D4FF | 100% fill |
| Step badge (03) | Cyber Cyan | #00D4FF | 100% fill |
| Card title | Electric White | #F0F0FF | 100% |
| Card description | Ice Mist Gray | #8A8FA8 | 60% |
| Metric (Card 1) | Cyber Cyan | #00D4FF | 100% + 4px glow |
| Metric (Card 2) | Electric White | #F0F0FF | 100% |
| Metric (Card 3) | Plasma Purple | #7B2FFF | 100% |
| Timeline line | Cyber Cyan | #00D4FF | 40% |
| Timeline nodes | Cyber Cyan | #00D4FF | 60% |
| Card 3 glow border | Plasma Purple | #7B2FFF | pulse effect |
| Brand signature | Ice Mist Gray | #8A8FA8 | 30% |

### Material Effects
- **Cards**: Frosted glass, 12px corner radius, backdrop blur, top-edge rim light
- **Step badges**: Circular, cyan filled with white numbers
- **Timeline**: Vertical cyan line with circular nodes
- **Card 3**: Pulsing plasma purple border glow (most impactful)
- **Shadows**: 45-degree angle, 20% opacity

### Composition Rules
- Header occupies top 8%
- 3 cards stacked vertically with generous spacing
- Timeline on left with step badges
- Metrics positioned at right edge of each card
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
- Verify: all 3 cards clearly visible with before→after data
- Verify: step badges "01", "02", "03" are visible
- Verify: no Chinese characters
