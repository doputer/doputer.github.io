import Counter from '@/components/Counter';
import List from '@/components/List';
import { getPosts } from '@/lib/mdx';

interface PageProps {
  params: { tag: string };
}

const Page = async ({ params: { tag } }: PageProps) => {
  const posts = await getPosts();
  const filteredPosts = posts.filter((post) => post.frontmatter.tags.includes(tag));

  return (
    <>
      <Counter label={tag} count={filteredPosts.length} />
      <List posts={filteredPosts} />
    </>
  );
};

export default Page;
