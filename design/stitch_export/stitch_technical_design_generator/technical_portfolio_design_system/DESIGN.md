---
name: Technical Portfolio Design System
colors:
  surface: '#121314'
  surface-dim: '#121314'
  surface-bright: '#393939'
  surface-container-lowest: '#0d0e0f'
  surface-container-low: '#1b1c1c'
  surface-container: '#1f2020'
  surface-container-high: '#292a2a'
  surface-container-highest: '#343535'
  on-surface: '#e3e2e2'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e3e2e2'
  inverse-on-surface: '#303031'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c9c6c5'
  primary: '#c9c6c5'
  on-primary: '#313030'
  primary-container: '#0a0a0a'
  on-primary-container: '#7b7979'
  inverse-primary: '#5f5e5e'
  secondary: '#c6c6c6'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b5b5b5'
  tertiary: '#c8c6c5'
  on-tertiary: '#303030'
  tertiary-container: '#0a0a0a'
  on-tertiary-container: '#7a7979'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474746'
  background: '#121314'
  on-background: '#e3e2e2'
  surface-variant: '#343535'
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  nav_width_desktop: 280px
  container_max_width: 1200px
  gutter: 24px
  margin_mobile: 16px
  unit: 8px
---

## Brand & Style

The design system is engineered for a senior technical professional, balancing the precision of a software engineer with the strategic oversight of a manager. The aesthetic is rooted in **Minimalism** with subtle **Glassmorphic** and **Technical** influences.

The personality is **authoritative** through its restraint, **technical** through its monospaced accents and grid-based structure, and **approachable** via soft transitions and high-quality typography. The UI should feel like a high-end IDE—focused, efficient, and sophisticated. 

Visual interest is driven by negative space and the interplay between deep "off-black" surfaces and crisp "off-white" content, accented by low-energy gradients that suggest depth without distracting from the portfolio's substance.

## Colors

The palette is strictly curated to maintain a high-density, professional atmosphere.

- **Primary (#0a0a0a):** The "Off-Black" base. Used for the global background and deep surfaces.
- **Secondary (#e5e5e5):** The "Off-White" primary ink. Used for body text, headings, and primary icons to ensure high readability without the harshness of pure white.
- **Tertiary (#262626):** Surface-layer color. Used for cards, navigation backgrounds, and input fields to create subtle separation from the base.
- **Accent (#3b82f6):** A technical blue used sparingly for interactive states, progress bars, or "live" indicators.
- **Neutral (#737373):** Secondary text, borders, and metadata.

Gradients should be used exclusively for "glow" effects or subtle card borders, typically transitioning from `#262626` to `#0a0a0a`.

## Typography

This design system utilizes **Geist** for its core communication, chosen for its Swiss-inspired geometric precision and developer-centric aesthetic. **JetBrains Mono** is introduced as a secondary label font to emphasize technical expertise in data points, tags, and code snippets.

- **Headlines:** Use tight letter-spacing and bold weights to establish authority.
- **Body:** Prioritize legibility with generous line heights (1.6x) and the Neutral color for secondary information.
- **Labels:** Technical metadata and "Overlines" should use the monospaced font to reinforce the engineering theme.

## Layout & Spacing

The layout is built on a **12-column fluid grid** with specific structural constraints to mirror a management dashboard or an IDE.

- **Desktop Navigation:** A fixed left-side vertical sidebar (`280px`). This sidebar contains the primary branding and navigation links, ensuring tools and sections are always accessible.
- **Content Area:** Flows to the right of the sidebar. Content is centered within a maximum width of `1200px` to maintain line-length readability.
- **Mobile:** The sidebar collapses into a top-bar with a hamburger menu. Margins reduce to `16px`.
- **Rhythm:** An 8px base unit governs all padding and margins. Use `unit * 4` (32px) for section vertical spacing and `unit * 2` (16px) for component internal spacing.

## Elevation & Depth

In a dark "off-black" environment, depth is achieved through **Tonal Layers** and **Subtle Glows** rather than traditional heavy shadows.

- **Level 0 (Base):** `#0a0a0a`. The foundation.
- **Level 1 (Cards/Sidebar):** `#171717`. Elevated slightly with a 1px solid border of `#262626`.
- **Level 2 (Popovers/Tooltips):** `#262626`. Uses a soft, large-radius ambient shadow (`0 20px 40px rgba(0,0,0,0.4)`).
- **Interactive Depth:** On hover, cards may feature a subtle inner-glow gradient (Top-left to bottom-right: `#262626` to `#0a0a0a`) or a 1px border transition to the Primary ink (`#e5e5e5`).

## Shapes

The design system uses a **Soft (Level 1)** roundedness profile. This `4px` (0.25rem) base radius provides a modern, professional feel that is less aggressive than sharp corners but more serious than highly rounded "consumer" apps.

- **Standard Elements (Buttons, Inputs):** 4px.
- **Large Elements (Cards, Modals):** 8px.
- **Inner Elements:** When nesting elements, the inner radius should be 4px smaller than the outer radius to maintain visual harmony.

## Components

### Buttons
- **Primary:** Background `#e5e5e5`, text `#0a0a0a`. No border. Transition to a subtle gray on hover.
- **Secondary:** Transparent background, border 1px `#262626`, text `#e5e5e5`. 
- **Ghost:** No border or background. Text `#737373`. Transitions to `#e5e5e5` on hover.

### Cards
Cards are the primary container for portfolio projects.
- **Surface:** `#171717`.
- **Border:** 1px `#262626`.
- **Header:** Features a `label-code` tag for the technology stack.

### Input Fields
- **Surface:** Darker than the card background to show inset depth.
- **Border:** Solid `#262626`, changing to `#e5e5e5` on focus.
- **Text:** geist body-md for input, JetBrains Mono for placeholders.

### Navigation Links (Sidebar)
- **Active State:** A vertical 2px line on the far left (accent color) and high-contrast text (`#e5e5e5`).
- **Inactive State:** Low-contrast text (`#737373`) that brightens on hover.

### Technical Tags (Chips)
- Small, monospaced text.
- Background `#262626`, rounded 4px, minimal horizontal padding.