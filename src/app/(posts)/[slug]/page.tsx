import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Comment from '@/components/Comment';
import Post from '@/components/Post';
import Header from '@/components/Post/header';
import Share from '@/components/Share';
import { accessPost, getPost } from '@/lib/mdx';

interface PageProps {
  params: { slug: string };
}

const Page = async ({ params }: PageProps) => {
  try {
    await accessPost(decodeURI(params.slug));
  } catch {
    notFound();
  }

  const { frontmatter, toc, MDX } = await getPost(decodeURI(params.slug));
  const { title, description, date } = frontmatter;

  return (
    <>
      <Header title={title} date={date} />
      <Post toc={toc} MDX={MDX} />
      <Share title={title} description={description} />
      <Comment />
    </>
  );
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { frontmatter } = await getPost(decodeURI((await params).slug));
  const { title, description } = frontmatter;

  return { title, description };
}

export default Page;
