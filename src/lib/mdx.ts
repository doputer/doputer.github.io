import { access, readdir, readFile } from 'fs/promises';
import path from 'path';

import * as runtime from 'react/jsx-runtime';

import { compile, run } from '@mdx-js/mdx';
import { notFound } from 'next/navigation';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

import type { Frontmatter } from '@/lib/types';

const MDX_DIR = path.join(process.cwd(), 'src/contents');

const readMDXDir = async () => {
  const filePaths = await readdir(MDX_DIR);

  return filePaths.map((filePath) => filePath.split('.')[0]);
};

const readMDXFile = async (name: string) => {
  const filePath = path.resolve(path.join(MDX_DIR, `${name}.mdx`));

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

  const { default: MDXContent, frontmatter } = await run(code, {
    ...runtime,
    baseUrl: import.meta.url,
  });

  return { frontmatter: frontmatter as Frontmatter, MDXContent };
};

export { readMDXDir, readMDXFile, parseMDX };
