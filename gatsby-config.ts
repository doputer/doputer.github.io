import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Doputer`,
    siteUrl: `https://doputer.github.io`,
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
  ],
  flags: {
    DEV_SSR: true,
  },
};

export default config;
