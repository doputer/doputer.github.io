import TOC from '@/components/TOC';
import * as typography from '@/components/Typography';
import type { Post } from '@/lib/MDX/types';

interface PostProps {
  toc: Post['toc'];
  MDX: Post['MDX'];
}

const Post = ({ toc, MDX }: PostProps) => {
  return (
    <article className="relative">
      <TOC toc={toc} />
      <MDX components={typography} />
    </article>
  );
};

export default Post;
