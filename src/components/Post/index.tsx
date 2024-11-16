import TOC from '@/components/TOC';
import * as typography from '@/components/Typography';
import type { Post } from '@/lib/MDX/types';

interface PostProps {
  toc: Post['toc'];
  MDX: Post['MDX'];
}

const Post = ({ toc, MDX }: PostProps) => {
  return (
    <div className="relative">
      <TOC toc={toc} />
      <article>
        <MDX components={typography} />
      </article>
    </div>
  );
};

export default Post;
