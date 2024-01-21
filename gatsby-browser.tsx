import * as React from 'react';

import Layout from './src/components/layout';

import './src/styles/global.css';
import 'prismjs/themes/prism.min.css';

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
