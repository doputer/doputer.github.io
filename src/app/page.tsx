import List from '@/components/List';
import { parseMDX, readMDXDir, readMDXFile } from '@/lib/mdx';

const Home = async () => {
  const allName = await readMDXDir();
  const allMarkdown = await Promise.all(allName.map(readMDXFile));
  const allMdx = await Promise.all(allMarkdown.map(parseMDX));
  const allFrontmatter = allMdx.map((mdx) => mdx.frontmatter);

  return (
    <>
      <List frontmatters={allFrontmatter} />
    </>
  );
};

export default Home;
