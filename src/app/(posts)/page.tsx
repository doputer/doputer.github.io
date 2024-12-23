import Link from 'next/link';

import Counter from '@/components/Counter';
import List from '@/components/List';
import { getPosts } from '@/lib/MDX';

const Page = async () => {
  const posts = await getPosts();
  const slicedPosts = posts.slice(0, 5);

  return (
    <>
      <Counter label="Latest" count={slicedPosts.length} />
      <List posts={slicedPosts} />
      <div className="text-right text-lg">
        <Link href={'/pages/1'} className="text-secondary">
          All Posts →
        </Link>
      </div>
    </>
  );
};

export default Page;
