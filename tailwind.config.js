/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Display',
          'Segoe UI',
          'Helvetica Neue',
          'sans-serif',
        ],
        serif: ['Instrument Serif', 'Times New Roman', 'serif'],
        mono: [
          'JetBrains Mono',
          'ui-monospace',
          'SF Mono',
          'Menlo',
          'Monaco',
          'monospace',
        ],
      },
      colors: {
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
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scroll-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 500ms ease both',
        'scroll-x': 'scroll-x 40s linear infinite',
      },
    },
  },
  plugins: [],
};
