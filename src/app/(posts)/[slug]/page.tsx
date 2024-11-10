import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Comment from '@/components/Comment';
import Post from '@/components/Post';
import Header from '@/components/Post/header';
import Share from '@/components/Share';
import { accessPost, getPost, getPosts } from '@/lib/MDX';

interface PageProps {
  params: { slug: string };
}

const Page = async ({ params }: PageProps) => {
  if (!(await accessPost(params.slug))) notFound();

  const { frontmatter, toc, MDX } = await getPost(params.slug);
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

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  if (!(await accessPost(params.slug))) notFound();

  const { frontmatter } = await getPost(params.slug);
  const { title, description } = frontmatter;

  return { title, description };
}

export default Page;
