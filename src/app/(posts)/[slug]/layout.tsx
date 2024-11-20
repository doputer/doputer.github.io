'use client';

import type { PropsWithChildren } from 'react';

import Progress from '@/components/Progress';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Progress />
      {children}
    </>
  );
};

export default Layout;
