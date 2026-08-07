# Note 7 — Cover: Data Dashboard (Template C)

> **File**: `note7-cover.png`
> **Template**: cover-data-dashboard-v3 (Template C)
> **Size**: 768×1024 (3:4 portrait, Xiaohongshu format)
> **Brand**: AI BUSINESS OBSERVER

---

## Executable Prompt (English)

```
A cinematic data dashboard cover image inspired by Bloomberg Terminal aesthetics and sci-fi UI design. The background is deep space black (#0A0A0F) with a subtle grid overlay — fine horizontal and vertical lines in cyber cyan (#00D4FF) at 5% opacity, creating the illusion of a live data monitoring screen. In the upper-center area, a large headline in an ultra-bold monospaced DIN-style font reads "AI WILL REPLACE" on the first line and "THESE JOBS IN 3 YEARS" on the second line, set in electric white (#F0F0FF) with tight tracking and generous letter spacing. Below the headline, a thin horizontal rule in cyber cyan (#00D4FF) at 60% opacity extends across approximately 70% of the canvas width, with a small glowing dot at its center.

Below the rule, the canvas is divided into two vertical halves by a subtle 1px vertical line in ice mist gray (#8A8FA8) at 20% opacity. The left half is labeled "HIGH RISK" in an ultra-bold condensed sans-serif, cyber cyan (#00D4FF) at 70% opacity, with a small red downward arrow icon. The right half is labeled "NEW OPPORTUNITIES" in ultra-bold condensed sans-serif, plasma purple (#7B2FFF) at 70% opacity, with a green upward arrow icon. Below each label, a vertical stack of five capsule-shaped data bars with rounded ends. Each bar has a dark sapphire blue (#1A1A2E) track at 60% opacity. The left-side bars (High Risk) are filled in ice mist gray (#8A8FA8) at 50% opacity with varying fill levels representing risk severity. The right-side bars (New Opportunities) are filled in cyber cyan (#00D4FF) at 70% opacity with inner glow, representing growth potential. Each bar has a label in ultra-light condensed sans-serif, ice mist gray (#8A8FA8) at 60% opacity, positioned to the left of each bar.

In the upper-right corner, a holographic ring element in plasma purple (#7B2FFF) at 20% opacity, rendered as a wireframe 3D torus with subtle rotation effect. In the lower-left corner, a live data ticker element: a dark sapphire blue (#1A1A2E) rounded rectangle at 50% opacity with a pulsing green dot at its left edge, followed by scrolling monospaced text in ice mist gray (#8A8FA8) reading "AI JOB DISPLACEMENT INDEX · 2025 · REAL-TIME DATA". A subtle cyber cyan (#00D4FF) lens flare effect appears in the upper-left quadrant at 10% opacity. The brand signature "AI BUSINESS OBSERVER" appears at the bottom-right in ultra-light condensed sans-serif at 35% opacity. The lighting is entirely diegetic — the glowing data bars and luminous text are the only light sources, creating a dark cockpit ambiance. Octane render quality, architectural photography composition with a 35mm lens. No Chinese characters anywhere.
```

---

## Design Specification

### Layout Diagram (text-based)
```
┌──────────────────────────────────┐
│  AI WILL REPLACE                 │  ← Headline, electric white
│  THESE JOBS IN 3 YEARS           │
│  ────────────────────────●       │  ← Cyan rule with glowing dot
│                                  │
│  HIGH RISK ↓   │ NEW OPPORTUNITIES ↑ │
│  ┌───┐         │  ┌───┐              │
│  │███│ Copy    │  │███│ Prompt Eng   │  ← Capsule bars
│  │████│ Design  │  │███│ AI Trainer   │
│  │█████│ CS     │  │███│ AI PM        │
│  │██████│ Data   │  │███│ AI Ethics   │
│  │███████│ Acct  │  │███│ AI Ops      │
│  └───┘         │  └───┘              │
│                                  │
│  [● AI JOB DISPLACEMENT INDEX]   │  ← Live ticker
│                     AI BUSINESS  │  ← Brand signature
└──────────────────────────────────┘
```

### Color Specification
| Element | Color | HEX | Opacity |
|---------|-------|-----|---------|
| Background | Space Black | #0A0A0F | 100% |
| Grid overlay | Cyber Cyan | #00D4FF | 5% |
| Headline | Electric White | #F0F0FF | 100% |
| Rule + dot | Cyber Cyan | #00D4FF | 60% |
| High Risk label | Cyber Cyan | #00D4FF | 70% |
| New Opps label | Plasma Purple | #7B2FFF | 70% |
| Bar track | Dark Sapphire Blue | #1A1A2E | 60% |
| High Risk fill | Ice Mist Gray | #8A8FA8 | 50% |
| New Opps fill | Cyber Cyan | #00D4FF | 70% |
| Bar labels | Ice Mist Gray | #8A8FA8 | 60% |
| Holographic ring | Plasma Purple | #7B2FFF | 20% |
| Ticker bg | Dark Sapphire Blue | #1A1A2E | 50% |
| Ticker text | Ice Mist Gray | #8A8FA8 | 60% |
| Lens flare | Cyber Cyan | #00D4FF | 10% |
| Brand signature | Ice Mist Gray | #8A8FA8 | 35% |

### Material Effects
- **Background**: Deep space black with subtle grid overlay
- **Data bars**: Capsule shape with rounded ends, inner glow on New Opportunities side
- **Holographic ring**: Wireframe 3D torus, plasma purple
- **Live ticker**: Rounded rectangle with pulsing green dot

### Composition Rules
- Headline occupies top 25% of canvas
- Two-column layout for High Risk vs New Opportunities, each ~35% width
- 5 capsule bars per column, stacked vertically
- Live ticker in lower-left corner
- Brand signature bottom-right

### Brand Signature Placement
- **Position**: Bottom-right corner
- **Text**: "AI BUSINESS OBSERVER"
- **Font**: Ultra-light condensed sans-serif
- **Color**: Ice Mist Gray (#8A8FA8) at 35% opacity
- **Margin**: 24px from bottom, 24px from right edge

### Generation Notes
- Use Google Flow / Midjourney / DALL·E 3
- Aspect ratio: 3:4 (768×1024)
- Verify: no Chinese characters
- Verify: two-column layout clearly shows High Risk vs New Opportunities
- Verify: capsule bars have rounded ends
