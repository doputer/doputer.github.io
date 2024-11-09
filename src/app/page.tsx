import Counter from '@/components/Counter';
import List from '@/components/List';
import Pagination from '@/components/Pagination';
import { getPosts } from '@/lib/mdx';

const Home = async () => {
  const posts = await getPosts();
  const slicedPosts = posts.slice(0, 5);

  return (
    <>
      <Counter count={posts.length} />
      <List posts={slicedPosts} />
      <Pagination totalCount={posts.length} />
    </>
  );
};

export default Home;
