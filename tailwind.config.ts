import type { Config } from 'tailwindcss';

export default {
  content: [`./src/pages/**/*.{js,jsx,ts,tsx}`, `./src/components/**/*.{js,jsx,ts,tsx}`],
  theme: {
    extend: {
      colors: {
        idle: '#d1d5db',
        pick: '#ffadad',
        hold: '#99d98c',
        flag: '#f4a261',
        done: '#7fc8f8',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
} satisfies Config;
