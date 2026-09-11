/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        ink2: '#111111',
        ink3: '#1a1a1a',
        accent: '#3b82f6',
        accentLight: '#60a5fa',
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

