'use client';

import { Children, PropsWithChildren, useState } from 'react';

import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/16/solid';

interface CollapseProps {
  query?: string;
}

const Collapse = ({ query, children }: PropsWithChildren<CollapseProps>) => {
  const [isOpen, setIsOpen] = useState(query !== 'close');
  const firstLine = Children.toArray(children)[0];

  return (
    <div className="relative">
      <button
        className="absolute left-0 m-0 border-none bg-transparent p-0"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <ChevronDownIcon className="inline-block size-4 align-middle" />
        ) : (
          <ChevronRightIcon className="inline-block size-4 align-middle" />
        )}
      </button>
      {isOpen ? children : <div>{firstLine}</div>}
    </div>
  );
};

export default Collapse;
