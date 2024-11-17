import { type Extension } from 'bright';

import LineMark from '@/components/Typography/Code/Mark/LineMark';

export const mark: Extension = {
  name: 'mark',
  MultilineAnnotation: ({ children }) => <LineMark>{children}</LineMark>,
};
