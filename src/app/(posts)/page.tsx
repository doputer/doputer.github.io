import Counter from '@/components/Counter';
import List from '@/components/List';
import Pagination from '@/components/Pagination';
import { getPosts } from '@/lib/MDX';

const Page = async () => {
  const posts = await getPosts();
  const slicedPosts = posts.slice(0, 10);

  return (
    <>
      <Counter count={posts.length} />
      <List posts={slicedPosts} />
      <Pagination totalCount={posts.length} />
    </>
  );
};

export default Page;
