import type { Config } from 'tailwindcss';

export default {
  content: [`./src/pages/**/*.{js,jsx,ts,tsx}`, `./src/components/**/*.{js,jsx,ts,tsx}`],
  theme: {
    fontFamily: {
      sans: ['Pretendard'],
      mono: ['JetBrainsMono'],
    },
    extend: {
      colors: {
        light: '#f4f4f5',
        dark: '#24272e',
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
