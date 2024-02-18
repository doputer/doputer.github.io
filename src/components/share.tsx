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
    <div className="flex justify-center rounded-lg bg-light-background py-8 dark:bg-dark-background">
      <button
        className="flex gap-2 hover:text-light-link dark:hover:text-dark-link"
        onClick={handleShareClick}
        aria-label="share_button"
      >
        공유하기
        <ShareIcon className="size-6" />
      </button>
    </div>
  );
}

export default Share;
