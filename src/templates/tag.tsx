import { graphql, type PageProps } from 'gatsby';

import Counter from '@/components/counter';
import List from '@/components/list';
import SEO from '@/components/seo';

function TagTemplate({
  data: { allMdx },
  pageContext: { tag, totalCount },
}: PageProps<Queries.PostsQuery, Queries.TagContext>) {
  return (
    <>
      <Counter label={tag} count={totalCount} />
      <List allMdx={allMdx} />
    </>
  );
}

export default TagTemplate;

export const query = graphql`
  query ($tag: String) {
    allMdx(
      sort: { internal: { contentFilePath: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
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
    }
  }
`;

export const Head = () => <SEO />;
