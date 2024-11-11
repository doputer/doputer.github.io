'use client';

import { useState } from 'react';

import { CheckIcon, Square2StackIcon } from '@heroicons/react/24/outline';

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  return (
    <button
      className="absolute right-1 top-1 block rounded p-1 text-light hover:bg-light-mute group-hover:block xs:hidden"
      aria-label="Copy to clipboard"
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
    >
      {copied ? (
        <CheckIcon className="size-6 text-green-500" />
      ) : (
        <Square2StackIcon className="size-6" />
      )}
    </button>
  );
};

export default CopyButton;
