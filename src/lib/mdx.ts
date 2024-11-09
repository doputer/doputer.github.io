import { access, constants, readdir, readFile } from 'fs/promises';
import path from 'path';

import * as runtime from 'react/jsx-runtime';

import { compile, run } from '@mdx-js/mdx';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

import remarkImage from '@/lib/remark-image';
import remarkToc from '@/lib/remark-toc';
import type { Post } from '@/lib/types';

const DIR = path.join(process.cwd(), 'contents');

const getMDXDirs = async () => {
  const entries = await readdir(DIR, { withFileTypes: true });
  const dirs = entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);

  return dirs;
};

const readMDXFile = async (slug: string) => {
  const filePath = path.resolve(path.join(DIR, slug, 'index.mdx'));
  const mdx = await readFile(filePath, { encoding: 'utf8' });

  return mdx;
};

const parseMDX = async (mdx: string, slug: string) => {
  const VFile = await compile(mdx, {
    remarkPlugins: [
      remarkFrontmatter,
      remarkMdxFrontmatter,
      remarkGfm,
      remarkMath,
      remarkToc,
      [remarkImage, { slug }],
    ],
    rehypePlugins: [rehypeSlug, rehypeKatex],
    outputFormat: 'function-body',
  });
  const MDXModule = await run(String(VFile), { ...runtime, baseUrl: import.meta.url });
  const { frontmatter, toc, default: MDX } = MDXModule;

  return { frontmatter, toc, slug, MDX } as Post;
};

const accessPost = async (slug: string) => {
  const filePath = path.resolve(path.join(DIR, slug, 'index.mdx'));

  return await access(filePath, constants.F_OK);
};

const getPost = async (slug: string) => {
  const mdx = await readMDXFile(slug);
  const post = await parseMDX(mdx, slug);

  return post;
};

const getPosts = async () => {
  const allDir = await getMDXDirs();
  const allPost = await Promise.all(allDir.map(getPost));
  const allSortedPost = allPost.sort((a, b) => {
    return new Date(a.frontmatter.date) > new Date(b.frontmatter.date) ? -1 : 1;
  });

  return allSortedPost;
};

export { accessPost, getPost, getPosts };
