# Note 4 — Cover: Data Dashboard (Template C)

> **File**: `note4-cover.png`
> **Template**: cover-data-dashboard-v3 (Template C)
> **Size**: 768×1024 (3:4 portrait, Xiaohongshu format)
> **Brand**: AI BUSINESS OBSERVER

---

## Executable Prompt (English)

```
A cinematic data dashboard cover image inspired by Bloomberg Terminal aesthetics and sci-fi UI design. The background is deep space black (#0A0A0F) with a subtle grid overlay — fine horizontal and vertical lines in cyber cyan (#00D4FF) at 5% opacity, creating the illusion of a live data monitoring screen. In the upper-center area, a large headline in an ultra-bold monospaced DIN-style font reads "2025 AI MARKET" on the first line and "BY THE NUMBERS" on the second, set in electric white (#F0F0FF) with tight tracking and generous letter spacing. Below the headline, a thin horizontal rule in cyber cyan (#00D4FF) at 60% opacity extends across approximately 70% of the canvas width, with a small glowing dot at its center.

In the lower half of the canvas, five horizontal data bars are stacked vertically with precise 18px spacing. Each bar is a rounded capsule shape (full rounded ends) with a dark sapphire blue (#1A1A2E) track background at 60% opacity. The five bars represent five industries with their AI adoption percentages:
- Bar 1: filled to 35% with cyber cyan (#00D4FF) neon glow — label "HEALTHCARE" in ice mist gray (#8A8FA8) thin sans-serif on the left, value "35%" in cyber cyan ultra-bold condensed font on the right
- Bar 2: filled to 70% with electric white (#F0F0FF) — label "CONTENT CREATION" on the left, value "70%" in electric white on the right
- Bar 3: filled to 25% with plasma purple (#7B2FFF) — label "EDUCATION" on the left, value "25%" in plasma purple on the right
- Bar 4: filled to 50% with cyber cyan (#00D4FF) — label "RETAIL" on the left, value "50%" in cyber cyan on the right
- Bar 5: filled to 60% with electric white (#F0F0FF) — label "FINANCE" on the left, value "60%" in electric white on the right

Each bar fill has a subtle inner glow that makes it appear self-illuminated, with neon glow spill no more than 4px beyond the fill edge. Above the data bars, a floating holographic ring element in plasma purple (#7B2FFF) at 25% opacity orbits around an invisible center, rendered with a wireframe 3D aesthetic — thin continuous lines forming an elliptical path with small data nodes at cardinal points. A subtle lens flare effect in cyber cyan (#00D4FF) appears at the upper-right corner, as if a bright data projector is casting light onto the scene. In the bottom-left corner, a small real-time data ticker element: a dark sapphire blue (#1A1A2E) rounded rectangle with a pulsing green dot and scrolling text in ice mist gray (#8A8FA8) monospaced font reading "LIVE DATA FEED". The brand name "AI BUSINESS OBSERVER" appears at the bottom-right in ultra-light sans-serif at 35% opacity, set in ice mist gray (#8A8FA8). The lighting is low-key and dramatic — the only illumination comes from the glowing data elements themselves, creating a self-lit holographic aesthetic. Octane render quality, macro detail shot with a 50mm lens, subtle volumetric fog in the background adds atmospheric depth. No Chinese characters anywhere.
```

---

## Design Specification

### Layout Diagram (text-based)
```
┌──────────────────────────────────┐
│  ═══ 2025 AI MARKET  ═══        │  ← Headline, electric white, ultra-bold DIN
│  ═══ BY THE NUMBERS  ═══        │
│         ─────●─────              │  ← Cyan rule with glow dot (70% width)
│                                  │
│     💠 (holographic ring)        │  ← Plasma purple wireframe ring, 25% opacity
│                                  │
│  HEALTHCARE     ████████░░ 35%   │  ← Cyan bar, 35% fill
│  CONTENT CREAT. ████████████░ 70%│  ← White bar, 70% fill
│  EDUCATION      █████░░░░░ 25%   │  ← Purple bar, 25% fill
│  RETAIL         ██████████░░ 50% │  ← Cyan bar, 50% fill
│  FINANCE        ████████████░ 60%│  ← White bar, 60% fill
│                                  │
│  [● LIVE DATA FEED]              │  ← Ticker, bottom-left
│                    AI BUSINESS   │  ← Brand signature, bottom-right, 35% opacity
│                    OBSERVER      │
└──────────────────────────────────┘
```

### Color Specification
| Element | Color | HEX | Opacity |
|---------|-------|-----|---------|
| Background | Space Black | #0A0A0F | 100% |
| Grid overlay | Cyber Cyan | #00D4FF | 5% |
| Headline | Electric White | #F0F0FF | 100% |
| Headline underline | Cyber Cyan | #00D4FF | 60% |
| Bar track | Dark Sapphire Blue | #1A1A2E | 60% |
| Bar fill (Healthcare) | Cyber Cyan | #00D4FF | 100% + 4px glow |
| Bar fill (Content) | Electric White | #F0F0FF | 100% |
| Bar fill (Education) | Plasma Purple | #7B2FFF | 100% |
| Bar fill (Retail) | Cyber Cyan | #00D4FF | 100% |
| Bar fill (Finance) | Electric White | #F0F0FF | 100% |
| Data labels | Ice Mist Gray | #8A8FA8 | 60% |
| Holographic ring | Plasma Purple | #7B2FFF | 25% |
| Ticker bg | Dark Sapphire Blue | #1A1A2E | 80% |
| Brand signature | Ice Mist Gray | #8A8FA8 | 35% |

### Material Effects
- **Background**: Deep space black with subtle blue-violet undertone, fine grid pattern
- **Data bars**: Rounded capsule shape, inner glow fill, 4px neon spill
- **Holographic ring**: Wireframe 3D, elliptical orbit, data nodes at cardinal points
- **Ticker**: Rounded rectangle with pulsing green dot, monospaced scrolling text
- **Lens flare**: Cyber cyan, upper-right corner, subtle volumetric quality

### Composition Rules
- Headline occupies upper 25% of canvas
- Data bars occupy middle 50% (centered vertically)
- Ticker and brand signature occupy bottom 15%
- Grid overlay spans full canvas
- Holographic ring floats between headline and data bars

### Brand Signature Placement
- **Position**: Bottom-right corner
- **Text**: "AI BUSINESS OBSERVER"
- **Font**: Ultra-light condensed sans-serif
- **Color**: Ice Mist Gray (#8A8FA8) at 35% opacity
- **Margin**: 24px from bottom, 24px from right edge

### Generation Notes
- Use Google Flow / Midjourney / DALL·E 3
- Aspect ratio: 3:4 (768×1024) — crop from 4:3 if needed
- Post-process: resize to 768×1024 if generated at different size
- Verify: no Chinese characters, all text in English
- Verify: neon glow ≤ 6px spill
- Verify: background is dark (no bright areas)
