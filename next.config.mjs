import createMDX from '@next/mdx';

import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import rehypeUnwrapImages from 'rehype-unwrap-images';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

import remarkImage from '@doputer/remark-image';
import remarkToc from '@doputer/remark-toc';

import { redirects } from './scripts/redirects.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects,
  pageExtensions: ['ts', 'tsx', 'mdx'],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      remarkFrontmatter,
      remarkMdxFrontmatter,
      remarkGfm,
      remarkMath,
      remarkToc,
      remarkImage,
    ],
    rehypePlugins: [rehypeSlug, rehypeKatex, rehypeUnwrapImages],
  },
});

export default withMDX(nextConfig);
