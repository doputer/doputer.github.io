'use client';

import { Share2 } from 'lucide-react';

interface ShareProps {
  title: string;
  description: string;
}

const Share = ({ title, description }: ShareProps) => {
  const handleShareClick = () => {
    const shareData = {
      title: title,
      text: description,
      url: decodeURI(window.location.href),
    };

    if (navigator.canShare && navigator.canShare(shareData)) {
      window.navigator.share(shareData);
    } else {
      navigator.clipboard.writeText(decodeURI(window.location.href));
    }
  };

  return (
    <div className="flex justify-center rounded-lg bg-surface py-8">
      <button
        className="flex gap-2 hover:text-secondary"
        onClick={handleShareClick}
        aria-label="Share Button"
      >
        공유하기
        <Share2 className="size-6" />
      </button>
    </div>
  );
};

export default Share;
