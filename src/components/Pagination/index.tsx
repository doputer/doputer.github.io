import Link from 'next/link';

import clsx from 'clsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  totalCount: number;
  currentPage?: number;
}

const Pagination = ({ totalCount, currentPage = 1 }: PaginationProps) => {
  const numPages = Math.ceil(totalCount / 5);
  const startPage = (Math.ceil(currentPage / 5) - 1) * 5;
  const endPage = Math.min(startPage + 5, numPages);

  return (
    <div className="flex items-center justify-center gap-1">
      <Link
        href={`/pages/${startPage}`}
        className={clsx({ invisible: startPage === 0 })}
        aria-label="Prev Page Link"
      >
        <ChevronLeft className="size-6" />
      </Link>
      <div className="space-x-1">
        {Array.from({ length: endPage - startPage }).map((_, i) => (
          <Link
            key={i}
            href={`/pages/${i + 1 + startPage}`}
            className={clsx('px-2 text-lg', {
              'text-secondary': currentPage === i + 1 + startPage,
            })}
          >
            {i + 1 + startPage}
          </Link>
        ))}
      </div>
      <Link
        href={`/pages/${endPage + 1}`}
        className={clsx({ invisible: endPage === numPages })}
        aria-label="Next Page Link"
      >
        <ChevronRight className="size-6" />
      </Link>
    </div>
  );
};

export default Pagination;
