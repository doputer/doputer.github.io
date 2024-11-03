import { access, readFile } from 'fs/promises';
import path from 'path';

import * as runtime from 'react/jsx-runtime';

import { compile, run } from '@mdx-js/mdx';
import { notFound } from 'next/navigation';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

import type { Frontmatter } from '@/lib/types';

const POSTS_FOLDER = path.join(process.cwd(), 'src/contents');

const readContentFile = async (slug: string) => {
  const filePath = path.resolve(path.join(POSTS_FOLDER, `${slug}.mdx`));

  try {
    await access(filePath);
  } catch {
    notFound();
  }

  const fileContent = await readFile(filePath, { encoding: 'utf8' });

  return fileContent;
};

const getMdxContent = async (fileName: string) => {
  const markdown = await readContentFile(fileName);

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

export { getMdxContent };
