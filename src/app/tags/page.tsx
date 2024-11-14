import Link from 'next/link';

import Counter from '@/components/Counter';
import { getPosts } from '@/lib/MDX';
import { encode } from '@/utils/uri';

const Page = async () => {
  const posts = await getPosts();
  const tagsObject = posts.reduce(
    (object, post) => {
      post.frontmatter.tags.forEach((tag) => {
        object[tag] = (object[tag] || 0) + 1;
      });
      return object;
    },
    {} as Record<string, number>
  );
  const sortedTagsArray = Object.entries(tagsObject).sort(([a], [b]) => a.localeCompare(b));

  return (
    <div className="flex flex-col gap-8">
      <Counter label="tags" count={Object.keys(tagsObject).length} />
      <div className="flex flex-wrap gap-4">
        {sortedTagsArray.map(([tag, totalCount]) => (
          <Link key={tag} href={`/tags/${encode(tag)}`} className="box px-2 py-1 text-sm uppercase">
            {tag} ({totalCount})
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
