import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/components/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-pretendard)', 'sans-serif'],
      mono: ['var(--font-jetbrains)', 'consolas'],
    },
    extend: {
      colors: {
        DEFAULT: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        background: 'var(--color-background)',
        muted: 'var(--color-muted)',
        surface: 'var(--color-surface)',
        line: 'var(--color-line)',
        accent: 'var(--color-accent)',
        mark: 'var(--color-mark)',
      },
      screens: {
        xs: '480px',
      },
      animation: {
        flip: 'flip 1s linear infinite',
      },
      keyframes: {
        flip: {
          '0%': { transform: 'rotateY(0)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
    },
  },
  darkMode: ['selector', '[data-theme="dark"]'],
  plugins: [],
} satisfies Config;

export default config;
