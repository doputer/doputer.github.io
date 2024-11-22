import Link from 'next/link';

import type { Post } from '@/lib/MDX/types';
import { encode } from '@/utils/uri';

interface ListProps {
  posts: Post[];
}

const List = async ({ posts }: ListProps) => {
  return (
    <>
      {posts.map(({ frontmatter, slug }) => (
        <div
          key={frontmatter.title}
          className="group relative flex flex-wrap items-center justify-center gap-4 py-0 before:absolute before:inset-0 before:-z-10 before:hidden before:scale-x-110 before:rounded-lg hover:before:bg-surface xs:gap-8 xs:py-4 xs:before:block"
        >
          <div className="pointer-events-none select-none text-3xl group-hover:animate-flip xs:text-5xl">
            {frontmatter.emoji}
          </div>
          <div className="flex-1">
            <div className="flex items-baseline justify-between gap-2 xs:justify-normal">
              <Link href={`/${slug}`} className="break-keep text-base font-medium xs:text-2xl">
                {frontmatter.title}
              </Link>
              <time className="text-xs font-light xs:text-sm">{frontmatter.date}</time>
            </div>
            <div className="space-x-2 text-xs uppercase text-secondary xs:text-sm">
              {frontmatter.tags.map((tag) => (
                <Link key={tag} href={`/tags/${encode(tag)}`}>
                  {tag}
                </Link>
              ))}
            </div>
            <div className="mt-2 text-sm text-muted xs:text-base">{frontmatter.description}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default List;
