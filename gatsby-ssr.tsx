import * as React from 'react';

import { type GatsbySSR } from 'gatsby';

import Layout from './src/components/layout';

import 'katex/dist/katex.min.css';
import 'prismjs/themes/prism-tomorrow.min.css';
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
            window.__theme = newTheme;
          }

          darkQuery.addListener((event) => {
            window.__setTheme(event.matches ? 'dark' : 'light');
          });

          window.__setTheme(theme);
        } catch (e) {}
      `,
    },
  }),
];

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setHeadComponents,
  setPreBodyComponents,
}) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/PretendardVariable.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="PretendardFont"
    />,
    <link
      rel="preload"
      href="/fonts/JetBrainsMono.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="JetBrainsMonoFont"
    />,
  ]);
  setPreBodyComponents(scriptElement);
};

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
