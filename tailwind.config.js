/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        panel: 'var(--panel)',
        ink: 'var(--ink)',
        line: 'var(--line)',
        muted: 'var(--muted)',
        'tile-blue': 'var(--c-blue)',
        'tile-yellow': 'var(--c-yellow)',
        'tile-pink': 'var(--c-pink)',
        'tile-mint': 'var(--c-mint)',
        'on-tile': 'var(--on-tile)',
        'term-bg': 'var(--term-bg)',
        'term-fg': 'var(--term-fg)',
        'term-dim': 'var(--term-dim)',
        'term-ok': 'var(--term-ok)',
        'term-err': 'var(--term-err)',
        inspect: 'var(--inspect)',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  plugins: [],
};
