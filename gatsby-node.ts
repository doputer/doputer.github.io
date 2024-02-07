import path from 'path';

import { type GatsbyNode } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';

interface T {
  allMdx: {
    nodes: {
      fields: {
        slug: string;
      };
      internal: {
        contentFilePath: string;
      };
    }[];
    tags: {
      tag: string;
      totalCount: number;
    }[];
  };
}

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ actions }) => {
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
    type PostsQuery {
      allMdx: AllMdx!
    }

    type PostQuery {
      mdx: Nodes!
    }

    type AllMdx {
      nodes: [Nodes!]!
      totalCount: Int!
    }

    type Nodes {
      fields: Fields!
      frontmatter: Frontmatter!
      tableOfContents: TableOfContents!
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

    type PageContext {
      limit: Int!
      skip: Int!
      currentPage: Int!
    }

    type TableOfContents {
      items: [Item!]!
    }

    type Item {
      url: String!
      title: String!
    }

    type TagContext {
      tag: String!
      totalCount: Int!
    }
  `);
};

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions, getNode }) => {
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

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const { data } = (await graphql(`
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
        tags: group(field: { frontmatter: { tags: SELECT } }) {
          tag: fieldValue
          totalCount
        }
      }
    }
  `)) as { data: T };
  const posts = data.allMdx.nodes;
  const tags = data.allMdx.tags;

  const postTemplate = path.resolve(__dirname, `src/templates/post.tsx`);
  const tagTemplate = path.resolve(__dirname, 'src/templates/tag.tsx');
  const pageTemplate = path.resolve(__dirname, 'src/templates/page.tsx');

  posts.forEach((node) => {
    createPage({
      path: node.fields.slug,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        slug: node.fields.slug,
      },
    });
  });

  tags.forEach(({ tag, totalCount }) => {
    createPage({
      path: `/tags/${tag}`,
      component: tagTemplate,
      context: {
        tag,
        totalCount,
      },
    });
  });

  Array.from({ length: Math.ceil(posts.length / 5) }).forEach((_, i) => {
    createPage({
      path: `/pages/${i + 1}`,
      component: pageTemplate,
      context: {
        limit: 5,
        skip: i * 5,
        currentPage: i + 1,
      },
    });
  });
};
