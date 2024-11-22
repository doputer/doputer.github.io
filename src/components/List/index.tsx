import Link from 'next/link';

import type { Post } from '@/lib/MDX/types';

interface ListProps {
  posts: Post[];
}

const List = async ({ posts }: ListProps) => {
  return (
    <>
      {posts.map(({ frontmatter, slug }) => (
        <div
          key={frontmatter.title}
          className="group relative flex flex-wrap items-center justify-center gap-4 py-4 before:absolute before:inset-0 before:-z-10 before:hidden before:scale-x-110 before:rounded-lg hover:before:bg-surface xs:gap-8 xs:before:block"
        >
          <div className="flex w-full items-center justify-center rounded-lg bg-surface p-10 xs:w-fit xs:bg-inherit xs:p-0">
            <div className="pointer-events-none select-none text-5xl group-hover:animate-flip">
              {frontmatter.emoji}
            </div>
          </div>
          <div className="flex-1">
            <Link href={`/${slug}`} className="mr-2 text-2xl font-medium">
              {frontmatter.title}
            </Link>
            <time className="text-sm font-light">{frontmatter.date}</time>
            <div className="space-x-2 text-sm uppercase text-secondary">
              {frontmatter.tags.map((tag) => (
                <Link key={tag} href={`/tags/${tag.replace(/\s/g, '-')}`}>
                  {tag}
                </Link>
              ))}
            </div>
            <div className="mt-2 text-muted">{frontmatter.description}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default List;
