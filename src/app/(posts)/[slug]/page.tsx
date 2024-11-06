import Post from '@/components/Post';
import Header from '@/components/Post/header';
import Share from '@/components/Share';
import { getPost } from '@/lib/mdx';

interface PageProps {
  params: { slug: string };
}

const Page = async ({ params }: PageProps) => {
  const { frontmatter, MDX } = await getPost(decodeURI(params.slug));
  const { title, description, date } = frontmatter;

  return (
    <>
      <Header title={title} date={date} />
      <Post MDX={MDX} />
      <Share title={title} description={description} />
    </>
  );
};

export default Page;
