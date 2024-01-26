import type { Config } from 'tailwindcss';

export default {
  content: [`./src/pages/**/*.{js,jsx,ts,tsx}`, `./src/components/**/*.{js,jsx,ts,tsx}`],
  theme: {
    extend: {
      colors: {
        dark: '#24272e',
        light: '#f4f4f5',
        mute: '#808080',
        link: '#3a86ff',
        background: '#eef1f5',
      },
      animation: {
        flip: 'flip 1s ease-in-out infinite',
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
