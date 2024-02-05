import type { Config } from 'tailwindcss';

export default {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/templates/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    fontFamily: {
      sans: ['Pretendard'],
      mono: ['JetBrainsMono'],
    },
    extend: {
      colors: {
        light: '#e6edf3',
        dark: '#191c1f',
        mute: {
          light: '#595959',
          dark: '#b3b3b3',
        },
        link: {
          light: '#004ec7',
          dark: '#69b8fc',
        },
        background: {
          light: '#eef1f5',
          dark: '#2d2d2d',
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
          '0%, 100%': { transform: 'rotateY(0)' },
          '50%': { transform: 'rotateY(180deg)' },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
} satisfies Config;
