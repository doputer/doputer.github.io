import { graphql, Link, PageProps } from 'gatsby';

import Counter from '@/components/counter';
import SEO from '@/components/seo';

function TagsPage({ data: { allMdx } }: PageProps<Queries.PostsQuery>) {
  return (
    <div className="flex flex-col gap-8">
      <Counter label="tags" count={allMdx.tags.length} />
      <div className="flex flex-wrap gap-4">
        {allMdx.tags.map(({ tag, totalCount }) => (
          <Link
            key={tag}
            to={`/tags/${tag.replace(/\s/g, '-')}`}
            className="box px-2 py-1 text-sm uppercase"
          >
            {tag} ({totalCount})
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TagsPage;

export const query = graphql`
  query {
    allMdx {
      tags: group(field: { frontmatter: { tags: SELECT } }) {
        tag: fieldValue
        totalCount
      }
    }
  }
`;

export const Head = () => <SEO />;
