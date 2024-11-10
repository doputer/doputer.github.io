import { notFound } from 'next/navigation';

import Counter from '@/components/Counter';
import List from '@/components/List';
import Pagination from '@/components/Pagination';
import { getPosts } from '@/lib/mdx';

interface PageProps {
  params: { page: string };
}

const Page = async ({ params: { page } }: PageProps) => {
  const posts = await getPosts();
  const slicedPosts = posts.slice((+page - 1) * 5, (+page - 1) * 5 + 5);

  if (slicedPosts.length === 0) notFound();

  return (
    <>
      <Counter count={posts.length} />
      <List posts={slicedPosts} />
      <Pagination totalCount={posts.length} currentPage={+page} />
    </>
  );
};

export default Page;
