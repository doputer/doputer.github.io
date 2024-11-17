import type { MDXComponents } from 'mdx/types';

import * as Format from '@/components/Typography/format';
import code from '@/lib/Code';
import Image from '@/components/Typography/img';
import type { ImageProps } from 'next/image';

const components: MDXComponents = {
  h2: (props) => <h2 className={Format.h2} {...props} />,
  h3: (props) => <h3 className={Format.h3} {...props} />,
  blockquote: (props) => <blockquote className={Format.blockquote} {...props} />,
  code: (props) => <code className={Format.code} {...props} />,
  ol: (props) => <ol className={Format.ol} {...props} />,
  ul: (props) => <ul className={Format.ul} {...props} />,
  p: (props) => <p className={Format.p} {...props} />,
  table: (props) => <table className={Format.table} {...props} />,
  th: (props) => <th className={Format.th} {...props} />,
  td: (props) => <td className={Format.td} {...props} />,
  a: (props) => <a className={Format.a} target="_blank" {...props} />,
  strong: (props) => <strong className={Format.strong} {...props} />,

  pre: code,
  img: (props) => <Image className={Format.img} {...(props as ImageProps)} />,
};

export default components;
