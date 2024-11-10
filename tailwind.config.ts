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
          background: '#eef1f5',
          line: '#e5e7eb',
          code: {
            DEFAULT: '#16a34a',
            background: '#4ade801a',
          },
        },
        dark: {
          DEFAULT: '#191c1f',
          mute: '#b3b3b3',
          link: '#10b981',
          background: '#222527',
          line: '#3a3e42',
          code: {
            DEFAULT: '#a78bfa',
            background: '#f3e8ff1a',
          },
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
