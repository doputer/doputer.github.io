import { ShareIcon } from '@heroicons/react/24/solid';

interface ShareProps {
  title: string;
  description: string;
}

function Share({ title, description }: ShareProps) {
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
    <div className="flex justify-center rounded-lg bg-background-light py-8 dark:bg-background-dark">
      <button
        className="flex gap-2 hover:text-link-light dark:hover:text-link-dark"
        onClick={handleShareClick}
        aria-label="share_button"
      >
        공유하기
        <ShareIcon className="h-6 w-6" />
      </button>
    </div>
  );
}

export default Share;
