import Share from '@/components/Share';
import * as typography from '@/components/Typography';
import { getPost } from '@/lib/mdx';

interface PageProps {
  params: { slug: string };
}

const Page = async ({ params }: PageProps) => {
  const { frontmatter, MDX } = await getPost(decodeURI(params.slug));
  const { title, description } = frontmatter;

  return (
    <>
      <article>
        <MDX components={typography} />
      </article>
      <Share title={title} description={description} />
    </>
  );
};

export default Page;
