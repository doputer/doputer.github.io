import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';

interface PaginationProps {
  totalCount: number;
  currentPage?: number;
}

function Pagination({ totalCount, currentPage = 1 }: PaginationProps) {
  const numPages = Math.ceil(totalCount / 5);
  const startPage = (Math.ceil(currentPage / 5) - 1) * 5;
  const endPage = Math.min(startPage + 5, numPages);

  return (
    <div className="flex items-center justify-center gap-4">
      <Link href={`/pages/${startPage}`} className={`size-4 ${startPage === 0 ? 'invisible' : ''}`}>
        <ChevronLeftIcon />
      </Link>
      {Array.from({ length: endPage - startPage }).map((_, i) => (
        <Link
          key={i}
          href={`/pages/${i + 1 + startPage}`}
          className={`text-lg ${currentPage === i + 1 + startPage ? 'link' : ''}`}
        >
          {i + 1 + startPage}
        </Link>
      ))}
      <Link
        href={`/pages/${endPage + 1}`}
        className={`size-4 ${endPage === numPages ? 'invisible' : ''}`}
      >
        <ChevronRightIcon />
      </Link>
    </div>
  );
}

export default Pagination;
