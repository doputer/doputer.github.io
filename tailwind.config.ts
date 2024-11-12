import type { Config } from 'tailwindcss';

const language = {
  html: '#e34c2680',
  css: '#563d7c80',
  js: '#f1e05a80',
  jsx: '#f1e05a80',
  ts: '#3178c680',
  tsx: '#3178c680',
  shell: '#89e05180',
  yaml: '#cb171e80',
  json: '#cb171e80',
  sql: '#e38c0080',
  c: '#a8b9cc80',
  cpp: '#f34b7d80',
  text: '#80808080',
};

const config: Config = {
  content: ['./src/components/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}', './src/lib/**/*.{ts,tsx}'],
  safelist: [{ pattern: new RegExp(Object.keys(language).join('|')) }],
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
          ellipsis: '#0000001a',
        },
        dark: {
          DEFAULT: '#191c1f',
          mute: '#b3b3b3',
          link: '#10b981',
          background: '#222527',
          line: '#3a3e42',
          ellipsis: '#ffffff1a',
        },
        dimmed: '#00000066',
        language,
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
