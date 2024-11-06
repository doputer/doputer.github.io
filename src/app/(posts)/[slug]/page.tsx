import * as typography from '@/components/Typography';
import { getPost } from '@/lib/mdx';

interface PageProps {
  params: { slug: string };
}

const Page = async ({ params }: PageProps) => {
  const { MDX } = await getPost(decodeURI(params.slug));

  return (
    <>
      <article>
        <MDX components={typography} />
      </article>
    </>
  );
};

export default Page;
