import { type Extension } from 'bright';

import InlineFold from '@/components/Typography/Code/Fold/InlineFold';

export const fold: Extension = {
  name: 'fold',
  InlineAnnotation: ({ children }) => <InlineFold>{children}</InlineFold>,
};
