'use client';

import { PropsWithChildren, useState } from 'react';

const InlineFold = ({ children }: PropsWithChildren) => {
  const [folded, setFolded] = useState(true);

  if (!folded) return children;

  return (
    <button
      onClick={() => setFolded(false)}
      className="rounded bg-light-code-ellipsis dark:bg-dark-code-ellipsis"
      aria-label="Expand Button"
    >
      ...
    </button>
  );
};

export default InlineFold;
