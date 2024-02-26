import type { Config } from 'tailwindcss';

export default {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/templates/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    fontFamily: {
      sans: ['Pretendard', 'sans-serif'],
      mono: ['JetBrainsMono', 'consolas'],
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
            DEFAULT: '#ea580c',
            background: '#fb923c1a',
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
  darkMode: 'selector',
  plugins: [],
} satisfies Config;
