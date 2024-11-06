import Link from 'next/link';

import Counter from '@/components/Counter';
import { getPosts } from '@/lib/mdx';

const Page = async () => {
  const posts = await getPosts();
  const tags = posts.map((post) => post.frontmatter.tags).flat();
  const tagsObject = tags.reduce(
    (map, tag) => {
      map[tag] = (map[tag] || 0) + 1;
      return map;
    },
    {} as Record<string, number>
  );

  return (
    <div className="flex flex-col gap-8">
      <Counter label="tags" count={tags.length} />
      <div className="flex flex-wrap gap-4">
        {Object.entries(tagsObject).map(([tag, totalCount]) => (
          <Link
            key={tag}
            href={`/tags/${tag.replace(/\s/g, '-')}`}
            className="box px-2 py-1 text-sm uppercase"
          >
            {tag} ({totalCount})
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
