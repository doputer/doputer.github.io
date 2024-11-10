'use client';

import { useState } from 'react';

import { DocumentCheckIcon, DocumentIcon } from '@heroicons/react/24/solid';

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  return (
    <button
      className="absolute right-1 top-1 rounded p-1 text-light hover:bg-light-mute"
      aria-label="Copy to clipboard"
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      }}
    >
      {copied ? <DocumentCheckIcon className="size-6" /> : <DocumentIcon className="size-6" />}
    </button>
  );
};

export default CopyButton;
