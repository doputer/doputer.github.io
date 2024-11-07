import { access, readdir, readFile } from 'fs/promises';
import path from 'path';

import * as runtime from 'react/jsx-runtime';

import { compile, run } from '@mdx-js/mdx';
import { notFound } from 'next/navigation';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

import type { Frontmatter } from '@/lib/types';

const DIR = path.join(process.cwd(), 'src/contents');

const getMDXFiles = async () => {
  const filePaths = await readdir(DIR);

  return filePaths.filter((path) => path.endsWith('.mdx')).map((path) => path.split('.')[0]);
};

const readMDXFile = async (name: string) => {
  const filePath = path.resolve(path.join(DIR, `${name}.mdx`));

  try {
    await access(filePath);
  } catch {
    notFound();
  }

  const fileContent = await readFile(filePath, { encoding: 'utf8' });

  return fileContent;
};

const parseMDX = async (markdown: string) => {
  const code = String(
    await compile(markdown, {
      remarkPlugins: [remarkFrontmatter, [remarkMdxFrontmatter, { name: 'frontmatter' }]],
      outputFormat: 'function-body',
    })
  );

  const { default: MDX, frontmatter } = await run(code, {
    ...runtime,
    baseUrl: import.meta.url,
  });

  return { frontmatter: frontmatter as Frontmatter, MDX };
};

const getPost = async (name: string) => {
  const content = await readMDXFile(name);
  const post = await parseMDX(content);

  return post;
};

const getPosts = async () => {
  const allFile = await getMDXFiles();
  const allPost = await Promise.all(allFile.map(getPost));
  const allSortedPost = allPost.sort((a, b) => {
    return new Date(a.frontmatter.date) > new Date(b.frontmatter.date) ? -1 : 1;
  });

  return allSortedPost;
};

export { getPost, getPosts };
