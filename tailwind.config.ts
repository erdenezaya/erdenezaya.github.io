import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans:  ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono:  ['var(--font-mono)', 'monospace'],
      },
      colors: {
        bg:          '#0c0c0e',
        'bg-raised': '#131316',
        'bg-card':   '#111114',
        text:        '#dedede',
        muted:       '#6b7280',
        faint:       '#3f3f46',
        accent:      '#5eead4',
      },
    },
  },
  plugins: [],
}
export default config
