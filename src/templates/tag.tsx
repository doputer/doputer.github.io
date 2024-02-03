import { graphql, type PageProps } from 'gatsby';

import Counter from '@/components/counter';
import List from '@/components/list';
import SEO from '@/components/seo';

function TagTemplate({
  data: { allMdx },
  pageContext: { tag, totalCount },
}: PageProps<Queries.PostsQuery, Queries.TagContext>) {
  return (
    <div className="flex flex-col gap-8">
      <Counter label={tag} count={totalCount} />
      <List allMdx={allMdx} />
    </div>
  );
}

export default TagTemplate;

export const query = graphql`
  query Posts($tag: String) {
    allMdx(sort: { fields: { slug: DESC } }, filter: { frontmatter: { tags: { in: [$tag] } } }) {
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
