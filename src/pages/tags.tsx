import { graphql, Link, PageProps } from 'gatsby';

import Counter from '@/components/counter';
import SEO from '@/components/seo';

function Tags({ data: { allMdx } }: PageProps<Queries.TagsQuery>) {
  return (
    <div className="flex flex-col gap-8">
      <Counter label="tags" count={allMdx.tags.length} />
      <div className="flex flex-wrap gap-4">
        {allMdx.tags.map(({ tag, totalCount }) => (
          <Link
            key={tag}
            to={`/tags/${tag}`}
            className="rounded-lg bg-background-light px-2 py-1 text-sm dark:bg-background-dark"
          >
            {tag?.toUpperCase()} ({totalCount})
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Tags;

export const query = graphql`
  query Tags {
    allMdx {
      tags: group(field: { frontmatter: { tags: SELECT } }) {
        tag: fieldValue
        totalCount
      }
    }
  }
`;

export const Head = () => <SEO />;
