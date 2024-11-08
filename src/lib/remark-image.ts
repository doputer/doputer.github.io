import type { Image, Root } from 'mdast';
import { visit } from 'unist-util-visit';

interface RemarkImageOptions {
  slug: string;
}

const remarkImage = ({ slug }: RemarkImageOptions) => {
  return (tree: Root) => {
    visit(tree, 'image', (node: Image) => {
      node.url = `/images/${slug}/${node.url}`;
    });
  };
};

export default remarkImage;
