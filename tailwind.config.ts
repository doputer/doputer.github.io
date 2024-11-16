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
          line: '#e5e7eb',
          background: '#f2f4f6',
          code: {
            title: '#f6f8fa',
            ellipsis: '#0000001a',
            inline: '#818b981f',
          },
        },
        dark: {
          DEFAULT: '#191c1f',
          mute: '#b3b3b3',
          link: '#10b981',
          line: '#3a3e42',
          background: '#222527',
          code: {
            title: '#262c36',
            ellipsis: '#ffffff1a',
            inline: '#656c7633',
          },
        },
        dimmed: '#00000066',
        mark: '#fef08a4d',
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
