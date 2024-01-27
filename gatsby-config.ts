import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Doputer`,
    siteUrl: `https://dohyeon.dev`,
  },
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
              maxWidth: 768,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
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
        trackingIds: ['G-G34J3PGR8Z'],
      },
    },
    `gatsby-plugin-sitemap`,
  ],
  flags: {
    DEV_SSR: true,
  },
};

export default config;
