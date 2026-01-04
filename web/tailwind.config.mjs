/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'off-black': '#0a0a0a',
        'off-white': '#e5e5e5',
        'surface': 'rgba(18, 18, 18, 0.95)',
        'border': 'rgba(38, 38, 38, 0.9)',
        'muted': '#a3a3a3',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
