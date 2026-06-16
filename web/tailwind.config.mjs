/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Base
        'off-black': '#0a0a0a',
        'off-white': '#e5e5e5',
        // Material Design 3 surface tokens
        'surface': '#121314',
        'surface-dim': '#121314',
        'surface-bright': '#393939',
        'surface-container-lowest': '#0d0e0f',
        'surface-container-low': '#1b1c1c',
        'surface-container': '#1f2020',
        'surface-container-high': '#292a2a',
        'surface-container-highest': '#343535',
        'surface-variant': '#343535',
        // On-surface (text)
        'on-surface': '#e3e2e2',
        'on-surface-variant': '#c4c7c7',
        // Primary / accent
        'primary': '#c9c6c5',
        'on-primary': '#313030',
        'primary-container': '#0a0a0a',
        'on-primary-container': '#7b7979',
        'primary-fixed': '#e5e2e1',
        'primary-fixed-dim': '#c9c6c5',
        // Secondary
        'secondary': '#c6c6c6',
        'secondary-container': '#454747',
        'on-secondary-container': '#b5b5b5',
        // Outlines
        'outline': '#8e9192',
        'outline-variant': '#444748',
        // Accent blue (sparing use)
        'accent': '#3b82f6',
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SF Mono', 'monospace'],
        'label-caps': ['Geist', 'system-ui', 'sans-serif'],
        'label-code': ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'headline-xl': ['48px', { lineHeight: '1.1', letterSpacing: '-0.04em', fontWeight: '700' }],
        'headline-lg': ['32px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
        'headline-lg-mobile': ['24px', { lineHeight: '1.2', fontWeight: '600' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'label-caps': ['12px', { lineHeight: '1', letterSpacing: '0.1em', fontWeight: '600' }],
        'label-code': ['13px', { lineHeight: '1.4', letterSpacing: '0.02em', fontWeight: '500' }],
      },
      borderRadius: {
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        'full': '9999px',
      },
      spacing: {
        'unit': '8px',
        'gutter': '24px',
        'margin-mobile': '16px',
        'nav-width': '280px',
      },
      maxWidth: {
        'container': '1200px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
