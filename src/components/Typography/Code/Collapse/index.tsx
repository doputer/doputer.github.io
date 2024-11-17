import { type Extension } from 'bright';

import Collapse from '@/lib/Code/Collapse/Collapse';

export const collapse: Extension = {
  name: 'collapse',
  MultilineAnnotation: ({ children, query }) => <Collapse query={query}>{children}</Collapse>,
};
