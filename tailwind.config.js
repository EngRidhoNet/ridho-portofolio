/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Geist',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Display',
          'Segoe UI',
          'sans-serif',
        ],
        serif: ['Newsreader', 'Cormorant Garamond', 'Instrument Serif', 'Georgia', 'serif'],
        script: ['Lobster', 'cursive'],
        mono: [
          'Geist Mono',
          'JetBrains Mono',
          'ui-monospace',
          'SF Mono',
          'Menlo',
          'monospace',
        ],
      },
      colors: {
        page: 'var(--color-page)',
        ink: 'var(--color-ink)',
        'ink-soft': 'var(--color-ink-soft)',
        'line-bento': 'var(--color-line)',
        sun: '#ffb743',
        mint: '#bfe8db',
        pink: '#f4cbca',
        sky: '#dbe8f5',
        lilac: '#e8dff2',
        sage: '#cfe2d0',
        brand: '#1768e5',
        bg: 'rgb(var(--bg) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        body: 'rgb(var(--text) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        muted: {
          DEFAULT: 'rgb(var(--muted) / <alpha-value>)',
          2: 'rgb(var(--muted-2) / <alpha-value>)',
        },
        accent: {
          blue: '#3b82f6',
          purple: '#8b5cf6',
          pink: '#ec4899',
        },
      },
      borderRadius: {
        xl2: '20px',
        bento: '22px',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scroll-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-x-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'float-note': {
          '0%': { opacity: '0', transform: 'translate3d(0, 12px, 0) scale(0.75)' },
          '20%': { opacity: '1' },
          '80%': { opacity: '0.9' },
          '100%': { opacity: '0', transform: 'translate3d(8px, -42px, 0) rotate(12deg) scale(1.05)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 600ms cubic-bezier(0.16, 1, 0.3, 1) both',
        'scroll-x': 'scroll-x 32s linear infinite',
        'scroll-x-reverse': 'scroll-x-reverse 40s linear infinite',
        'float-note': 'float-note 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
};
