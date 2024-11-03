import { parseMDX, readMDXFile } from '@/lib/mdx';

interface PageProps {
  params: { slug: string };
}

const Page = async ({ params }: PageProps) => {
  const markdown = await readMDXFile(decodeURI(params.slug));
  const { MDXContent } = await parseMDX(markdown);

  return (
    <>
      <article>
        <MDXContent />
      </article>
    </>
  );
};

export default Page;
