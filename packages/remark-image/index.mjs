import { visit } from 'unist-util-visit';

const remarkImage = () => {
  return (tree, file) => {
    const path = file.history.at(0).split('/').at(-2);

    visit(tree, 'image', (node) => {
      node.url = node.url;
      node.url = `/images/${path}/${node.url}`;
    });
  };
};

export default remarkImage;
