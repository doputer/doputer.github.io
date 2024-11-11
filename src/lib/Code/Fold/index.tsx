import { type Extension } from 'bright';

import InlineFold from '@/lib/Code/Fold/InlineFold';

export const fold: Extension = {
  name: 'fold',
  InlineAnnotation: ({ children }) => <InlineFold>{children}</InlineFold>,
};
