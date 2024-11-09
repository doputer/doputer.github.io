import Counter from '@/components/Counter';
import List from '@/components/List';
import { getPosts } from '@/lib/mdx';
import { decode } from '@/utils/uri';

interface PageProps {
  params: { tag: string };
}

const Page = async ({ params: { tag } }: PageProps) => {
  const posts = await getPosts();
  const filteredPosts = posts.filter((post) => post.frontmatter.tags.includes(decode(tag)));

  return (
    <>
      <Counter label={decode(tag)} count={filteredPosts.length} />
      <List posts={filteredPosts} />
    </>
  );
};

export default Page;
