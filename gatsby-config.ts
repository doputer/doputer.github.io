import { type GatsbyConfig } from 'gatsby';

import metaConfig from './gatsby-meta-config';

const config: GatsbyConfig = {
  siteMetadata: metaConfig,
  graphqlTypegen: true,
  trailingSlash: 'never',
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 672,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              noInlineHighlight: true,
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false,
              maintainCase: false,
              removeAccents: true,
              isIconAfterHeader: true,
              elements: [`h2`],
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'contents',
        path: 'contents',
      },
      __key: 'contents',
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: metaConfig.gtag.trackingIds,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: metaConfig.siteUrl,
      },
    },
    `gatsby-plugin-sitemap`,
  ],
  flags: {
    DEV_SSR: true,
  },
};

export default config;
