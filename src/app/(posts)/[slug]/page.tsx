import { getMdxContent } from '@/lib/mdx';

interface PageProps {
  params: { slug: string };
}

const Page = async ({ params }: PageProps) => {
  const { frontmatter, MDXContent } = await getMdxContent(params.slug);

  return (
    <>
      <article>
        <MDXContent />
      </article>
    </>
  );
};

export default Page;
