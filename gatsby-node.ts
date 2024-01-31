import path from 'path';

import { GatsbyNode } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';

export const onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  });
};

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({ actions }) => {
  actions.createTypes(`
    type PagesQuery {
      allMdx: AllMdx!
    }

    type PageQuery {
      mdx: Nodes!
    }

    type AllMdx {
      nodes: [Nodes!]!
    }

    type Nodes {
      fields: Fields!
      frontmatter: Frontmatter!
    }

    type Fields {
      slug: String!
    }

    type Frontmatter {
      emoji: String!
      title: String!
      description: String!
      tags: [String!]!
      date: String!
    }
  `);
};

export const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode });

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

export const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query Node {
      allMdx {
        nodes {
          fields {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);
  const posts = result.data.allMdx.nodes;

  const postTemplate = path.resolve(__dirname, `src/pages/post.tsx`);

  posts.forEach((node) => {
    createPage({
      path: node.fields.slug,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        slug: node.fields.slug,
      },
    });
  });

  const postsPerPage = 5;
  const numPages = Math.ceil(posts.length / postsPerPage);

  const pageTemplate = path.resolve(__dirname, 'src/templates/page.tsx');

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: `/pages/${i + 1}`,
      component: pageTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};
