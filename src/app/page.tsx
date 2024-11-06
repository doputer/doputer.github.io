import Counter from '@/components/Counter';
import List from '@/components/List';
import { getPosts } from '@/lib/mdx';

const Home = async () => {
  const posts = await getPosts();

  return (
    <>
      <Counter count={posts.length} />
      <List posts={posts} />
    </>
  );
};

export default Home;
