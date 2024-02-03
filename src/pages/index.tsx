import { graphql, type PageProps } from 'gatsby';

import Counter from '@/components/counter';
import List from '@/components/list';
import Pagination from '@/components/pagination';
import SEO from '@/components/seo';

function IndexPage({ data: { allMdx } }: PageProps<Queries.PostsQuery>) {
  return (
    <div className="flex flex-col gap-8">
      <Counter count={allMdx.totalCount} />
      <List allMdx={allMdx} />
      <Pagination />
    </div>
  );
}

export default IndexPage;

export const query = graphql`
  query Posts {
    allMdx(sort: { fields: { slug: DESC } }, limit: 5, skip: 0) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          emoji
          title
          description
          tags
          date(formatString: "YYYY.MM.DD")
        }
      }
      totalCount
    }
  }
`;

export const Head = () => <SEO />;
