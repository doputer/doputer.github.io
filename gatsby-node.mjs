import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import slugify from './src/utils/slugify.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  });
};

export const createSchemaCustomization = ({ actions }) => {
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
      tags: [TagContext!]!
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
      items: [Item!]!
    }

    type TagContext {
      tag: String!
      totalCount: Int!
    }
  `);
};

export const onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    createNodeField({
      node,
      name: `slug`,
      value: `/${slugify(node.frontmatter.title)}/`,
    });
  }
};

export const createPages = async ({ graphql, actions }) => {
  const { createPage, createSlice } = actions;
  const { data } = await graphql(`
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
  `);
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
      path: `/tags/${tag.replace(/\s/g, '-')}`,
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

  createSlice({
    id: 'header',
    component: path.resolve(__dirname, 'src/components/header.tsx'),
  });

  createSlice({
    id: 'footer',
    component: path.resolve(__dirname, 'src/components/footer.tsx'),
  });
};
