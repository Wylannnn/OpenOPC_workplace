# Note 7 — Page 1: Data Chart (Type 2)

> **File**: `note7-page1.png`
> **Template**: inner-data-chart-v3 (Type 2)
> **Size**: 768×1024 (3:4 portrait, Xiaohongshu format)
> **Brand**: AI BUSINESS OBSERVER

---

## Executable Prompt (English)

```
A premium data comparison infographic card in a dark instrument-panel aesthetic, inspired by luxury automotive HUDs and financial trading terminals. The background is deep space black (#0A0A0F) with a subtle radial vignette that darkens toward the edges, focusing attention on the center. At the top, a section header in an ultra-bold condensed sans-serif font, set in electric white (#F0F0FF) at 85% opacity, reads "AI JOB DISPLACEMENT vs CREATION" with a thin underline accent in cyber cyan (#00D4FF) — a 2px line extending 60% of the text width, left-aligned.

Below the header, the canvas is divided into two vertical columns by a subtle 1px vertical divider line in ice mist gray (#8A8FA8) at 20% opacity, with a small plasma purple (#7B2FFF) circular node at its midpoint. The left column is labeled "HIGH RISK ROLES" in ultra-bold condensed sans-serif, ice mist gray (#8A8FA8) at 60% opacity, with a red downward arrow. The right column is labeled "EMERGING ROLES" in ultra-bold condensed sans-serif, cyber cyan (#00D4FF) at 80% opacity, with a green upward arrow.

In the left column, five glass-morphism cards are stacked vertically with 10px spacing. Each card has a dark sapphire blue (#1A1A2E) base at 35% opacity, a frosted glass texture with subtle backdrop blur, a 1px border in ice mist gray (#8A8FA8) at 15% opacity, and a matte non-reflective surface finish. Inside each card: Card L1 "COPYWRITING / TRANSLATION" — Replacement risk "95%" in ice mist gray (#8A8FA8) at 70% opacity, progress bar filled to 95%. Card L2 "JUNIOR DESIGN" — risk "85%". Card L3 "CUSTOMER SERVICE" — risk "80%". Card L4 "DATA ENTRY" — risk "99%". Card L5 "JUNIOR ACCOUNTING" — risk "90%".

In the right column, five glass-morphism cards are stacked vertically with 10px spacing. Each card has a dark sapphire blue (#1A1A2E) base at 40% opacity, a frosted glass texture, a 1px border in cyber cyan (#00D4FF) at 30% opacity, and a glossy reflective surface finish. Inside each card: Card R1 "PROMPT ENGINEER" — Salary "$20K-80K" in cyber cyan (#00D4FF) with 2px neon glow, Demand "+300%" in electric white (#F0F0FF) with green arrow. Card R2 "AI TRAINER" — "$15K-40K", "+200%". Card R3 "AI PRODUCT MANAGER" — "$30K-100K", "+150%". Card R4 "AI ETHICS EXPERT" — "$40K-120K", "+250%". Card R5 "AI GROWTH SPECIALIST" — "$25K-60K", "+180%".

Between the two columns, thin connector lines in plasma purple (#7B2FFF) at 15% opacity create a subtle relational diagram. At the bottom, a summary line in ultra-light condensed sans-serif, ice mist gray (#8A8FA8) at 50% opacity reads "DON'T COMPETE WITH AI ON EFFICIENCY — COMPETE ON JUDGMENT AND CREATIVITY". The brand signature "AI BUSINESS OBSERVER" appears at the bottom-left in ultra-light sans-serif at 30% opacity. Octane render quality, architectural photography composition with a 35mm lens. No Chinese characters anywhere.
```

---

## Design Specification

### Layout Diagram (text-based)
```
┌──────────────────────────────────┐
│  AI JOB DISPLACEMENT vs CREATION │  ← Header
│  ──────────────────────────      │  ← Cyan underline
│                                  │
│  HIGH RISK ↓  │●│ EMERGING ↑    │  ← Two columns with divider
│  ┌─────────┐  │ │ ┌─────────┐   │
│  │ Copy 95%│  │ │ │Prompt   │   │
│  │ ████████│  │ │ │$20-80K  │   │
│  └─────────┘  │ │ └─────────┘   │
│  ┌─────────┐  │ │ ┌─────────┐   │
│  │ Design85│  │ │ │Trainer  │   │
│  │ ███████ │  │ │ │$15-40K  │   │
│  └─────────┘  │ │ └─────────┘   │
│  ...          │ │ ...           │
│                                  │
│  DON'T COMPETE ON EFFICIENCY...  │  ← Summary
│  AI BUSINESS OBSERVER           │  ← Brand
└──────────────────────────────────┘
```

### Color Specification
| Element | Color | HEX | Opacity |
|---------|-------|-----|---------|
| Background | Space Black | #0A0A0F | 100% |
| Header text | Electric White | #F0F0FF | 85% |
| Header underline | Cyber Cyan | #00D4FF | 100% |
| Divider line | Ice Mist Gray | #8A8FA8 | 20% |
| Divider node | Plasma Purple | #7B2FFF | 60% |
| Left column label | Ice Mist Gray | #8A8FA8 | 60% |
| Right column label | Cyber Cyan | #00D4FF | 80% |
| Left card base | Dark Sapphire Blue | #1A1A2E | 35% |
| Left card border | Ice Mist Gray | #8A8FA8 | 15% |
| Right card base | Dark Sapphire Blue | #1A1A2E | 40% |
| Right card border | Cyber Cyan | #00D4FF | 30% |
| Left values | Ice Mist Gray | #8A8FA8 | 70% |
| Right salary values | Cyber Cyan | #00D4FF | 100% |
| Right demand values | Electric White | #F0F0FF | 100% |
| Connector lines | Plasma Purple | #7B2FFF | 15% |
| Summary text | Ice Mist Gray | #8A8FA8 | 50% |
| Brand signature | Ice Mist Gray | #8A8FA8 | 30% |

### Material Effects
- **Left cards**: Matte frosted glass, non-reflective, muted appearance
- **Right cards**: Glossy frosted glass, reflective shine, neon glow borders
- **Right values**: Cyber cyan neon glow, 2px spill
- **Progress bars**: Rounded ends, fill matches card side aesthetic

### Composition Rules
- Header occupies top 10% of canvas
- Two columns, each ~45% width, separated by 1px divider
- 5 cards per column, each ~14% height, 10px spacing
- Summary text at bottom 8% of canvas
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
- Verify: no Chinese characters
- Verify: left column matte vs right column glossy distinction is visible
- Verify: all 10 cards clearly readable
