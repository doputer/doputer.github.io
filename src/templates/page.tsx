import { graphql, type PageProps } from 'gatsby';

import Counter from '@/components/counter';
import List from '@/components/list';
import Pagination from '@/components/pagination';
import SEO from '@/components/seo';

function PageTemplate({
  data: { allMdx },
  pageContext: { currentPage },
}: PageProps<Queries.PostsQuery, Queries.PageContext>) {
  return (
    <>
      <Counter count={allMdx.totalCount} />
      <List allMdx={allMdx} />
      <Pagination currentPage={currentPage} />
    </>
  );
}

export default PageTemplate;

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMdx(sort: { internal: { contentFilePath: DESC } }, limit: $limit, skip: $skip) {
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
