import * as React from 'react';

import Layout from './src/components/layout';

import './src/styles/global.css';

const scriptElement = [
  React.createElement('script', {
    dangerouslySetInnerHTML: {
      __html: `
        try {
          const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
          const theme = localStorage.getItem('theme') || (darkQuery.matches ? 'dark' : 'light');

          window.__setTheme = (newTheme) => {
            if (newTheme === 'dark') document.body.classList.add('dark');
            else document.body.classList.remove('dark');

            localStorage.setItem('theme', newTheme);
          }

          darkQuery.addListener((event) => {
            window.__setTheme(event.matches ? 'dark' : 'light');
          });

          window.__theme = theme;
          window.__setTheme(theme);
        } catch (e) {}
      `,
    },
  }),
];

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/PretendardVariable.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="pretendardFont"
    />,
  ]);
  setPreBodyComponents(scriptElement);
};

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
