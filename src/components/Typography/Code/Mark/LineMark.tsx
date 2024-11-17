'use client';

import type { PropsWithChildren } from 'react';

const LineMark = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex bg-mark">
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default LineMark;
