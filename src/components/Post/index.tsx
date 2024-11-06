import * as typography from '@/components/Typography';
import type { Post } from '@/lib/types';

interface PostProps {
  MDX: Post['MDX'];
}

const Post = ({ MDX }: PostProps) => {
  return (
    <article>
      <MDX components={typography} />
    </article>
  );
};

export default Post;
