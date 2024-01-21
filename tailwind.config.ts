import type { Config } from 'tailwindcss';

export default {
  content: [`./src/pages/**/*.{js,jsx,ts,tsx}`, `./src/components/**/*.{js,jsx,ts,tsx}`],
  theme: {
    extend: {
      colors: {
        muted: '#f4f4f5',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
} satisfies Config;
