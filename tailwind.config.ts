import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/components/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}', './src/lib/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-pretendard)', 'sans-serif'],
      mono: ['var(--font-jetbrains)', 'consolas'],
    },
    extend: {
      colors: {
        light: {
          DEFAULT: '#dddddd',
          mute: '#595959',
          link: '#004ec7',
          background: {
            DEFAULT: '#f2f4f6',
            pre: '#f6f8fa',
            code: '#818b981f',
          },
          line: '#e5e7eb',
          ellipsis: '#0000001a',
        },
        dark: {
          DEFAULT: '#191c1f',
          mute: '#b3b3b3',
          link: '#10b981',
          background: {
            DEFAULT: '#222527',
            pre: '#262c36',
            code: '#656c7633',
          },
          line: '#3a3e42',
          ellipsis: '#ffffff1a',
        },
        dimmed: '#00000066',
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
