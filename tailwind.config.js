/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        ink2: '#111111',
        ink3: '#1a1a1a',
        /* Brand highlight — used sparingly (~10%): hero numerals,
           ordinal numbers, CTA hover, subtle card hover. */
        brand: '#589BF9',
        brandSoft: 'rgba(88,155,249,0.05)',
        brandLine: 'rgba(88,155,249,0.4)',
        /* `accent` is the legacy name for the same highlight colour.
           Both point at #589BF9 so the page never shows two blues. */
        accent: '#589BF9',
        accentLight: '#8ab8fb',
        silver: '#c0c0c0',
        mute: '#8a8a8a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        times: ['"Times New Roman"', 'Times', 'serif'],
      },
    },
  },
  plugins: [],
}

