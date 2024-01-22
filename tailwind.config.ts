import type { Config } from 'tailwindcss';

export default {
  content: [`./src/pages/**/*.{js,jsx,ts,tsx}`, `./src/components/**/*.{js,jsx,ts,tsx}`],
  theme: {
    extend: {
      colors: {
        dark: '#24272e',
        light: '#f4f4f5',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
} satisfies Config;
