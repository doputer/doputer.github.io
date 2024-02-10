import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import { graphql, Link, useStaticQuery } from 'gatsby';

interface PaginationProps {
  currentPage?: number;
}

function Pagination({ currentPage = 1 }: PaginationProps) {
  const {
    allMdx: { totalCount },
  } = useStaticQuery(graphql`
    query {
      allMdx {
        totalCount
      }
    }
  `);
  const numPages = Math.ceil(totalCount / 5);
  const startPage = (Math.ceil(currentPage / 5) - 1) * 5;
  const endPage = Math.min(startPage + 5, numPages);

  return (
    <div className="flex items-center justify-center gap-4">
      <Link to={`/pages/${startPage}`} className={`h-4 w-4 ${startPage === 0 ? 'invisible' : ''}`}>
        <ChevronLeftIcon />
      </Link>
      {Array.from({ length: endPage - startPage }).map((_, i) => (
        <Link
          key={i}
          to={`/pages/${i + 1 + startPage}`}
          className={`text-lg ${currentPage === i + 1 + startPage ? 'text-light-link dark:text-dark-link' : ''}`}
        >
          {i + 1 + startPage}
        </Link>
      ))}
      <Link
        to={`/pages/${endPage + 1}`}
        className={`h-4 w-4 ${endPage === numPages ? 'invisible' : ''}`}
      >
        <ChevronRightIcon />
      </Link>
    </div>
  );
}

export default Pagination;
