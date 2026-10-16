---
name: Breezy Clarity & Soft Pop
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#3e4850'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#6e7881'
  outline-variant: '#bec8d2'
  surface-tint: '#006591'
  primary: '#006591'
  on-primary: '#ffffff'
  primary-container: '#0ea5e9'
  on-primary-container: '#003751'
  inverse-primary: '#89ceff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#944a00'
  on-tertiary: '#ffffff'
  tertiary-container: '#e6822c'
  on-tertiary-container: '#532700'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c9e6ff'
  primary-fixed-dim: '#89ceff'
  on-primary-fixed: '#001e2f'
  on-primary-fixed-variant: '#004c6e'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#ffb783'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#713700'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 3.5rem
    fontWeight: '700'
    lineHeight: 4rem
    letterSpacing: -0.025em
  display-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: 2.75rem
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.25rem
    fontWeight: '600'
    lineHeight: 2.75rem
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: 2.25rem
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: 2rem
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.5rem
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.25rem
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '600'
    lineHeight: 1.25rem
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.04em
  label-badge:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.6875rem
    fontWeight: '700'
    lineHeight: 0.875rem
    letterSpacing: 0.08em
  code:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: 1.375rem
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system is crafted for an intuitive, lightweight settings synchronization API service tailored to modern creatives, independent builders, and nimble engineering teams. Instead of leaning into clinical developer-tool conventions or sterile enterprise dashboards, it embraces an approachable, optimistic aesthetic described as *Breezy Clarity & Soft Pop*.

The personality is effortless, luminous, and clear. Key traits:
- **Weightless & Airy:** High breathing room, soft ambient glow, and translucent layered surfaces that make state management feel friction-free.
- **Friendly Precision:** Clean geometric forms counterbalanced by soft pill contours and cheerful, playful status accents.
- **Crystal-Clear Focus:** Ink-slate typography ground the breezy background, ensuring code snippets, API keys, and toggle states are legible at an instant glance.

## Colors

The palette balances buoyant sky tones and botanical mints with an anchoring deep slate for high legibility and refreshing contrast.

- **Primary (`#0ea5e9` - Sky 500 / `#38bdf8` - Sky 400):** Used for focal interactive states, primary actions, active connection indicators, and synced status badges.
- **Secondary (`#10b981` - Mint 500 / `#34d399` - Mint 400):** Expresses real-time synchronization, health metrics, live webhooks, and validation successes.
- **Tertiary (`#fb923c` - Soft Apricot / Coral):** A warm, playful accent applied to telemetry highlights, user avatars, alert counters, and onboarding delights.
- **Neutral (`#0f172a` - Ink Slate):** Provides definitive contrast for headings, core body text, and terminal blocks. Tints down to `#64748b` for subtle descriptive text.
- **Canvas & Surface Tinting:** The base background utilizes crisp, cool-tinted whites (`#f8fafc` to `#f0f9ff`) with borders layered in whisper-soft slate (`#e2e8f0`) and pale sky (`#e0f2fe`).

## Typography

The typographic hierarchy combines the warm, geometric openness of **Plus Jakarta Sans** for headers, interactive actions, and labels, with the utilitarian legibility of **Inter** for descriptions, payload tables, and dense data feeds.

- **Badges & Micro-Copy:** Use `label-badge` with full uppercase transformation and `letterSpacing: 0.08em` to deliver crisp taglines without visual clutter.
- **Code & API Data:** Embedded JSON samples, schema payloads, and endpoint tokens utilize **JetBrains Mono** at medium weight to maintain structure.
- **Tone & Rhythm:** Keep headings punchy and short. Let body copy breathe with generous line-height ratios (1.5 to 1.6).

## Layout & Spacing

The layout is built upon an 8pt-harmonic fluid grid structured for dashboard workspaces and developer documentations:

- **Grid Alignment:** 12-column dynamic grid on desktop (1024px+), shifting to an 8-column layout on tablet (768px - 1023px), and a 4-column columnated stack on mobile (<768px).
- **Margins & Gutters:** Max-width bounds on primary app containers top out at 1280px to preserve scan-ability. Exterior margins scale gracefully from 1rem (16px) on mobile viewports to 2rem (32px) on full desktop views.
- **Component Breathing Room:** Components rely heavily on `space-lg` (24px) and `space-xl` (40px) vertical separations to sustain the relaxed, open posture. Data rows and payload lists stay compact using `space-xs` and `space-sm`.

## Elevation & Depth

Visual depth avoids harsh dropshadows or heavy bevels. Instead, depth is conveyed through layered translucency and soft ambient diffusion:

- **Surface Tier 0 (Canvas):** Soft cool white tint (`#f8fafc`) accented with subtle radial ambient gradients of soft cyan (`#e0f2fe`) and blush apricot (`#ffedd5`) at top edges.
- **Surface Tier 1 (Cards & Panels):** Pure white (`#ffffff`) bounded by delicate 1px borders in `rgba(226, 232, 240, 0.8)`. Shadow profile: `0 4px 20px -2px rgba(14, 165, 233, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.04)`.
- **Surface Tier 2 (Floating Modals & Dropdowns):** Backdropped with 12px blur (`backdrop-blur-md`), surface fills at `rgba(255, 255, 255, 0.92)`, outlined with `rgba(56, 189, 248, 0.25)`, elevated by `0 20px 30px -10px rgba(15, 23, 42, 0.08)`.
- **Active State Highlights:** Interactive hovering triggers a subtle luminous glow: `box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.15)`.

## Shapes

The design uses a friendly, rounded shape language:

- **Card Containers & Panels:** Standardized on `rounded-2xl` (1rem to 1.5rem / 24px corner radius) to evoke soft physical cards.
- **Interactive Controls (Buttons, Badges, Tabs):** Shaped with full pill radii (`rounded-full`) to emphasize friendly, touchable softness.
- **Form Inputs & Code Insets:** Styled with standard `rounded-xl` (0.75rem / 12px) for snug balance with internal text.

## Components

### Buttons
- **Primary:** Full pill (`rounded-full`), solid `#0ea5e9` with white text. On hover, smooth transition to `#0284c7` accompanied by a light diffused sky shadow (`0 8px 16px -4px rgba(14, 165, 233, 0.35)`). Active click scales subtly to `0.98`.
- **Secondary / Soft Pop:** Pill contour, soft mint background (`#ecfdf5`), text in dark mint (`#065f46`), border in `rgba(16, 185, 129, 0.2)`.
- **Ghost:** Pill contour, transparent fill, text `#0f172a`. Hover transitions to tinted white (`rgba(14, 165, 233, 0.08)`).

### Badges & Status Chips
- Height: 24px–28px, `rounded-full` with uppercase `label-badge` text.
- **Live Sync:** Light green background (`#ecfdf5`), border `#a7f3d0`, text `#047857`, preceded by a 6px pulsing emerald dot.
- **Syncing:** Light sky background (`#f0f9ff`), border `#bae6fd`, text `#0369a1`.
- **Beta / Special Feature:** Light apricot background (`#fff7ed`), border `#fed7aa`, text `#c2410c`.

### Cards & Configuration Blocks
- Outer wrapper uses `rounded-2xl` with a 1px border (`#f1f5f9`).
- Header areas feature a subtle divider separating service toggles and API metadata.
- Embedded action bar sits at the bottom with a 50% opacity translucent fill.

### Input Fields & Secret Keys
- Input containers feature a 1px border (`#cbd5e1`) transitioning on focus to `#38bdf8` with an ambient glow (`box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.2))`.
- Background remains pure white, with placeholder copy muted in `#94a3b8`.
- Built-in trailing actions (copy token, reveal secret, refresh webhook) are housed in miniature rounded pill icons.

### Checkboxes, Switches & Radio Buttons
- **Switches (Core Setting Toggle):** Pill track (`w-11 h-6`), soft grey off-state (`#e2e8f0`), sky blue on-state (`#0ea5e9`). Thumb is a crisp white floating circle with a delicate ambient shadow.
- **Checkboxes:** `rounded-md` (6px) with an emerald checkmark on `#10b981` background when checked.

### Sync Event Timeline / Logs
- A specialized component featuring vertical thread lines with soft pulsing nodes indicating synced config payload events across multiple client devices.