# Note 7 — Page 2: Step Flow (Type 3)

> **File**: `note7-page2.png`
> **Template**: inner-step-flow-v3 (Type 3)
> **Size**: 768×1024 (3:4 portrait, Xiaohongshu format)
> **Brand**: AI BUSINESS OBSERVER

---

## Executable Prompt (English)

```
A premium step-flow infographic card in a dark tech aesthetic, inspired by Apple Keynote presentation slides and Bloomberg Terminal data screens. The background is deep space black (#0A0A0F) with a subtle vertical gradient transitioning to dark sapphire blue (#1A1A2E) at 20% opacity in the lower third. At the top, a section header in an ultra-bold condensed sans-serif font, set in electric white (#F0F0FF) at 85% opacity, reads "HOW TO FUTURE-PROOF YOUR CAREER" with a thin underline accent in cyber cyan (#00D4FF) — a 2px line extending 60% of the text width, left-aligned. Below the header, a subtitle in ultra-light condensed sans-serif, ice mist gray (#8A8FA8) at 60% opacity, reads "A 3-STEP FRAMEWORK FOR THE AI ERA".

Below the header area, three glass-morphism step cards are arranged in a vertical stack with 16px spacing, aligned along the central axis. Each card has a 12px corner radius, a dark sapphire blue (#1A1A2E) base at 35% opacity, a frosted glass texture with subtle backdrop blur, a 1px border in ice mist gray (#8A8FA8) at 20% opacity, and a soft white rim light along the top edge.

Card 1 — Circular step badge in cyber cyan (#00D4FF) fill with white numeral "1". Step title "IDENTIFY TRANSFERABLE SKILLS" in ultra-bold condensed sans-serif, electric white (#F0F0FF). Three bullet points in ultra-light sans-serif, ice mist gray (#8A8FA8) at 70% opacity: "Critical thinking — AI can't evaluate context", "Creative strategy — AI needs human direction", "Emotional intelligence — AI lacks empathy". Each bullet has a small cyber cyan dot indicator.

Card 2 — Circular step badge in cyber cyan (#00D4FF) fill with white numeral "2". Step title "LEVERAGE AI AS YOUR COPILOT" in ultra-bold condensed sans-serif, electric white (#F0F0FF). Three bullet points: "Master prompt engineering — communicate with AI", "Build AI workflows — automate routine tasks", "Focus on strategy — let AI handle execution". Cyber cyan dot indicators.

Card 3 — Circular step badge in plasma purple (#7B2FFF) fill with white numeral "3". Step title "CREATE YOUR AI-ENHANCED BRAND" in ultra-bold condensed sans-serif, electric white (#F0F0FF). Three bullet points: "Showcase AI-augmented portfolio", "Position yourself as AI-savvy expert", "Build thought leadership in your niche". The card border has a subtle plasma purple (#7B2FFF) pulse glow effect at 30% opacity. Purple dot indicators.

Between each adjacent card, a 2px horizontal connector line in cyber cyan (#00D4FF) at 40% opacity runs from the right edge of one card to the left edge of the next, with a 6px circular node at each end. The connector line has a subtle neon glow effect — light spill not exceeding 3px.

At the bottom of the canvas, a thin horizontal line in ice mist gray (#8A8FA8) at 30% opacity extends across 80% of the canvas width, centered. Below this line, a summary quote in ultra-bold condensed sans-serif, electric white (#F0F0FF) at 80% opacity reads "THE FUTURE BELONGS TO THOSE WHO USE AI, NOT THOSE WHO ARE REPLACED BY IT". Below this, a smaller attribution in ultra-light condensed sans-serif, ice mist gray (#8A8FA8) at 50% opacity reads "AI BUSINESS OBSERVER INSIGHT". In the bottom-right corner, a forward-arrow icon in cyber cyan (#00D4FF) at 60% opacity serves as a visual continuation cue. The brand signature "AI BUSINESS OBSERVER" appears at the bottom-left in ultra-light sans-serif at 30% opacity. Octane render quality, architectural photography composition with a 35mm lens. No Chinese characters anywhere.
```

---

## Design Specification

### Layout Diagram (text-based)
```
┌──────────────────────────────────┐
│  HOW TO FUTURE-PROOF YOUR CAREER │  ← Header
│  ──────────────────────────      │  ← Cyan underline
│  A 3-STEP FRAMEWORK FOR AI ERA   │  ← Subtitle
│                                  │
│  ┌──────────────────────────┐    │
│  │① IDENTIFY TRANSFERABLE   │    │  ← Step card 1
│  │  • Critical thinking     │    │
│  │  • Creative strategy     │    │
│  │  • Emotional intelligence│    │
│  └──────────────────────────┘    │
│  ───────●───────●───────         │  ← Connector
│  ┌──────────────────────────┐    │
│  │② LEVERAGE AI AS COPILOT  │    │  ← Step card 2
│  │  • Master prompt eng     │    │
│  │  • Build AI workflows    │    │
│  │  • Focus on strategy     │    │
│  └──────────────────────────┘    │
│  ───────●───────●───────         │  ← Connector
│  ┌──────────────────────────┐    │
│  │③ CREATE AI-ENHANCED BRAND│    │  ← Step card 3 (purple glow)
│  │  • Showcase portfolio    │    │
│  │  • Position as expert    │    │
│  │  • Build thought leader  │    │
│  └──────────────────────────┘    │
│                                  │
│  ────────────────────────────    │  ← Separator
│  THE FUTURE BELONGS TO THOSE...  │  ← Summary quote
│  AI BUSINESS OBSERVER INSIGHT    │  ← Attribution
│  AI BUSINESS OBSERVER        ▶   │  ← Brand + forward arrow
└──────────────────────────────────┘
```

### Color Specification
| Element | Color | HEX | Opacity |
|---------|-------|-----|---------|
| Background | Space Black | #0A0A0F | 100% |
| Header text | Electric White | #F0F0FF | 85% |
| Header underline | Cyber Cyan | #00D4FF | 100% |
| Subtitle | Ice Mist Gray | #8A8FA8 | 60% |
| Card base | Dark Sapphire Blue | #1A1A2E | 35% |
| Card border | Ice Mist Gray | #8A8FA8 | 20% |
| Badge 1,2 fill | Cyber Cyan | #00D4FF | 100% |
| Badge 3 fill | Plasma Purple | #7B2FFF | 100% |
| Step titles | Electric White | #F0F0FF | 100% |
| Bullet text | Ice Mist Gray | #8A8FA8 | 70% |
| Bullet dots | Cyber Cyan | #00D4FF | 80% |
| Card 3 glow border | Plasma Purple | #7B2FFF | 30% |
| Connector lines | Cyber Cyan | #00D4FF | 40% |
| Summary quote | Electric White | #F0F0FF | 80% |
| Attribution | Ice Mist Gray | #8A8FA8 | 50% |
| Forward arrow | Cyber Cyan | #00D4FF | 60% |
| Brand signature | Ice Mist Gray | #8A8FA8 | 30% |

### Material Effects
- **Cards**: Frosted glass texture with backdrop blur, 1px border, top-edge rim light
- **Badges**: Solid fill with white numeral, clean circular shape
- **Connector lines**: 2px neon glow, 6px circular nodes at each end
- **Card 3**: Plasma purple pulse glow border effect (highlight card)

### Composition Rules
- Header occupies top 10% of canvas
- 3 cards stacked vertically, each ~22% height
- 16px spacing between cards
- Cards have 12px corner radius
- Summary quote at bottom 12% of canvas
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
- Verify: card 3 has purple glow distinction
