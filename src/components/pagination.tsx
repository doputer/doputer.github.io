import { Link } from 'gatsby';

interface PaginationProps {
  numPages: number;
}

function Pagination({ numPages }: PaginationProps) {
  return (
    <div className="flex justify-center gap-4">
      {Array.from({ length: numPages }).map((_, i) => (
        <Link
          key={i}
          to={`/pages/${i + 1}`}
          className="text-lg hover:text-link-light hover:dark:text-link-dark"
        >
          {i + 1}
        </Link>
      ))}
    </div>
  );
}

export default Pagination;
