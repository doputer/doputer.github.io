import * as React from 'react';

import Layout from './src/components/layout';

import 'katex/dist/katex.min.css';
import 'prismjs/themes/prism-tomorrow.min.css';
import './src/styles/global.css';

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
