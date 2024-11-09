import { access, constants, readdir } from 'fs/promises';
import path from 'path';

import type { Post } from '@/lib/types';

const DIR = path.join(process.cwd(), 'src/app/contents');

const getMDXDirs = async () => {
  const entries = await readdir(DIR, { withFileTypes: true });
  const dirs = entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);

  return dirs;
};

const parseMDX = async (slug: string) => {
  const MDXModule = await import(`@/app/contents/${slug}/index.mdx`);
  const { frontmatter, toc, default: MDX } = MDXModule;

  frontmatter.date = frontmatter.date.replace(/-/g, '.');

  return { frontmatter, toc, slug, MDX } as Post;
};

const accessPost = async (slug: string) => {
  const filePath = path.resolve(path.join(DIR, slug, 'index.mdx'));

  return await access(filePath, constants.F_OK);
};

const getPost = async (slug: string) => {
  const post = await parseMDX(slug);

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
