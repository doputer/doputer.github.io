import Link from 'next/link';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import clsx from 'clsx';

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
      <Link href={`/pages/${startPage}`} className={clsx({ invisible: startPage === 0 })}>
        <ChevronLeft className="size-6" />
      </Link>
      <div className="space-x-1">
        {Array.from({ length: endPage - startPage }).map((_, i) => (
          <Link
            key={i}
            href={`/pages/${i + 1 + startPage}`}
            className={clsx('px-2 text-lg', { link: currentPage === i + 1 + startPage })}
          >
            {i + 1 + startPage}
          </Link>
        ))}
      </div>
      <Link href={`/pages/${endPage + 1}`} className={clsx({ invisible: endPage === numPages })}>
        <ChevronRight className="size-6" />
      </Link>
    </div>
  );
};

export default Pagination;
