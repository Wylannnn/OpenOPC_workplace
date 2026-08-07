# Note 6 — Page 1: Step Flow (Type 3)

> **File**: `note6-page1.png`
> **Template**: inner-step-flow-v3 (Type 3)
> **Size**: 768×1024 (3:4 portrait, Xiaohongshu format)
> **Brand**: AI BUSINESS OBSERVER

---

## Executable Prompt (English)

```
A premium step-flow infographic card in a dark tech aesthetic, inspired by Apple Keynote presentation slides and Bloomberg Terminal data screens. The background is deep space black (#0A0A0F) with a subtle vertical gradient transitioning to dark sapphire blue (#1A1A2E) at 20% opacity in the lower third, creating a sense of forward motion and depth. At the top, a section header in an ultra-bold condensed sans-serif font, set in electric white (#F0F0FF) at 85% opacity, reads "3 AI PROMPT TEMPLATES" with a thin underline accent in cyber cyan (#00D4FF) — a 2px line extending 60% of the text width, left-aligned. Below the header, a subtitle in ultra-light condensed sans-serif, ice mist gray (#8A8FA8) at 60% opacity, reads "COVER 80% OF YOUR WRITING SCENARIOS".

Below the header area, three glass-morphism step cards are arranged in a vertical stack with 16px spacing, aligned along the central axis. Each card has a 12px corner radius, a dark sapphire blue (#1A1A2E) base at 35% opacity, a frosted glass texture with subtle backdrop blur, a 1px border in ice mist gray (#8A8FA8) at 20% opacity, and a soft white rim light along the top edge simulating a top-down key light.

Card 1 — In the top-left corner of the card, a circular step badge in cyber cyan (#00D4FF) fill with white sans-serif numeral "1". To the right of the badge, the step title "XIAOHONGSHU SEEDING" in ultra-bold condensed sans-serif, electric white (#F0F0FF). Below the title, two lines of descriptive text in ultra-light sans-serif, ice mist gray (#8A8FA8) at 70% opacity: "Input product info → 30-second draft" on the first line, "Fine-tune 5 minutes → ready to publish" on the second line. Below the description, a thin horizontal progress indicator in cyber cyan (#00D4FF) at 50% opacity, with a small glowing dot at the right end.

Card 2 — Circular step badge in cyber cyan (#00D4FF) fill with white numeral "2". Step title "WECHAT MOMENTS MARKETING" in ultra-bold condensed sans-serif, electric white (#F0F0FF). Description text in ultra-light sans-serif, ice mist gray (#8A8FA8) at 70% opacity: "Input selling points → generate 3 versions" on the first line, "10 minutes total → ready to post" on the second line. Progress indicator in cyber cyan (#00D4FF) at 50% opacity with glowing dot.

Card 3 — Circular step badge in plasma purple (#7B2FFF) fill with white numeral "3", indicating this is the final/most important template. Step title "WORK REPORT / WEEKLY SUMMARY" in ultra-bold condensed sans-serif, electric white (#F0F0FF). Description text: "Input work items → STAR method organization" on the first line, "Detailed + concise versions → 5 minutes done" on the second line. The card border has a subtle plasma purple (#7B2FFF) pulse glow effect at 30% opacity, marking it as the highlight card. Progress indicator in plasma purple (#7B2FFF) at 50% opacity with glowing dot.

Between each adjacent card, a 2px horizontal connector line in cyber cyan (#00D4FF) at 40% opacity runs from the right edge of one card to the left edge of the next, with a 6px circular node at each end. The connector line has a subtle neon glow effect — light spill not exceeding 3px.

At the bottom of the canvas, a thin horizontal line in ice mist gray (#8A8FA8) at 30% opacity extends across 80% of the canvas width, centered. Below this line, a summary stat in ultra-bold monospaced DIN-style font, cyber cyan (#00D4FF) with a 3px neon glow, reads "BEFORE: 1 HOUR → AFTER: 5-10 MINUTES". Below this, a smaller label in ultra-light condensed sans-serif, ice mist gray (#8A8FA8) at 50% opacity reads "AVERAGE TIME SAVED PER TASK". In the bottom-right corner, a forward-arrow icon in cyber cyan (#00D4FF) at 60% opacity serves as a visual continuation cue. The brand signature "AI BUSINESS OBSERVER" appears at the bottom-left in ultra-light sans-serif at 30% opacity. The lighting is entirely diegetic — the glowing step badges, neon connector lines, and luminous progress indicators are the only light sources, creating a dark cockpit ambiance. Octane render quality, architectural photography composition with a 35mm lens, capturing the precise material definition of the frosted glass surfaces and the volumetric quality of the neon glow. No Chinese characters anywhere.
```

---

## Design Specification

### Layout Diagram (text-based)
```
┌──────────────────────────────────┐
│  3 AI PROMPT TEMPLATES           │  ← Header, electric white, ultra-bold condensed
│  ──────────────────────────      │  ← Cyan underline, 60% text width
│  COVER 80% OF YOUR WRITING       │  ← Subtitle, ice mist gray
│                                  │
│  ┌──────────────────────────┐    │
│  │ ① XIAOHONGSHU SEEDING   │    │  ← Step card 1, cyan badge
│  │   Input → 30s draft     │    │
│  │   Fine-tune → publish    │    │
│  │   ──────────────●        │    │  ← Progress indicator
│  └──────────────────────────┘    │
│  ───────●───────●───────         │  ← Connector line with nodes
│  ┌──────────────────────────┐    │
│  │ ② WECHAT MOMENTS MKTG   │    │  ← Step card 2, cyan badge
│  │   Input → 3 versions     │    │
│  │   10 min → ready to post │    │
│  │   ──────────────●        │    │
│  └──────────────────────────┘    │
│  ───────●───────●───────         │  ← Connector line with nodes
│  ┌──────────────────────────┐    │
│  │ ③ WORK REPORT           │    │  ← Step card 3, purple badge (highlight)
│  │   Input → STAR method    │    │
│  │   Detailed+concise → 5m  │    │
│  │   ──────────────●        │    │  ← Purple glow
│  └──────────────────────────┘    │
│                                  │
│  ────────────────────────────    │  ← Separator line
│  BEFORE: 1 HOUR → AFTER: 5-10M  │  ← Summary stat, cyan glow
│  AVERAGE TIME SAVED PER TASK     │  ← Label
│  AI BUSINESS OBSERVER        ▶   │  ← Brand + forward arrow
└──────────────────────────────────┘
```

### Color Specification
| Element | Color | HEX | Opacity |
|---------|-------|-----|---------|
| Background | Space Black | #0A0A0F | 100% |
| Gradient lower | Dark Sapphire Blue | #1A1A2E | 20% |
| Header text | Electric White | #F0F0FF | 85% |
| Header underline | Cyber Cyan | #00D4FF | 100% |
| Subtitle | Ice Mist Gray | #8A8FA8 | 60% |
| Card base | Dark Sapphire Blue | #1A1A2E | 35% |
| Card border | Ice Mist Gray | #8A8FA8 | 20% |
| Card rim light | Electric White | #F0F0FF | 30% |
| Badge 1,2 fill | Cyber Cyan | #00D4FF | 100% |
| Badge 3 fill | Plasma Purple | #7B2FFF | 100% |
| Step titles | Electric White | #F0F0FF | 100% |
| Description text | Ice Mist Gray | #8A8FA8 | 70% |
| Connector lines | Cyber Cyan | #00D4FF | 40% |
| Connector nodes | Cyber Cyan | #00D4FF | 60% |
| Card 3 glow border | Plasma Purple | #7B2FFF | 30% |
| Summary stat | Cyber Cyan | #00D4FF | 100% |
| Summary label | Ice Mist Gray | #8A8FA8 | 50% |
| Forward arrow | Cyber Cyan | #00D4FF | 60% |
| Brand signature | Ice Mist Gray | #8A8FA8 | 30% |

### Material Effects
- **Cards**: Frosted glass texture with backdrop blur, 1px border, top-edge rim light
- **Badges**: Solid fill with white numeral, clean circular shape
- **Connector lines**: 2px neon glow, 6px circular nodes at each end
- **Card 3**: Plasma purple pulse glow border effect (highlight card)
- **Summary stat**: Cyber cyan neon glow, 3px spill

### Composition Rules
- Header occupies top 10% of canvas
- 3 cards stacked vertically, each ~22% height
- 16px spacing between cards
- Cards have 12px corner radius
- Connector lines centered between cards
- Summary stat at bottom 12% of canvas
- Brand signature bottom-left, forward arrow bottom-right

### Brand Signature Placement
- **Position**: Bottom-left corner
- **Text**: "AI BUSINESS OBSERVER"
- **Font**: Ultra-light condensed sans-serif
- **Color**: Ice Mist Gray (#8A8FA8) at 30% opacity
- **Margin**: 20px from bottom, 20px from left edge

### Generation Notes
- Use Google Flow / Midjourney / DALL·E 3
- Aspect ratio: 3:4 (768×1024)
- Verify: all 3 cards clearly visible with readable text
- Verify: step badges show numerals 1, 2, 3
- Verify: no Chinese characters
- Verify: glass-morphism effect is natural
- Verify: connector lines have subtle neon glow
