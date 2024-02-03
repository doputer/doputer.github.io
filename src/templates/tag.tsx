import { graphql, Link, type PageProps } from 'gatsby';

import Counter from '@/components/counter';
import SEO from '@/components/seo';

function TagTemplate({
  data: { allMdx },
  pageContext: { tag, totalCount },
}: PageProps<Queries.PostsQuery, Queries.TagContext>) {
  return (
    <div className="flex flex-col gap-8">
      <Counter label={tag} count={totalCount} />
      {allMdx.nodes.map(({ fields, frontmatter }, index) => (
        <div key={index} className="group flex flex-wrap items-center justify-center gap-4">
          <div className="flex w-full items-center justify-center rounded-lg bg-background-light p-12 text-6xl dark:bg-background-dark xs:w-fit">
            <div className="group-hover:animate-flip">{frontmatter.emoji}</div>
          </div>
          <div className="flex-1">
            <Link to={fields.slug} className="text-2xl font-semibold">
              {frontmatter.title}
            </Link>
            <div className="flex gap-2 text-sm text-link-light dark:text-link-dark">
              {frontmatter.tags.map((tag) => (
                <span key={tag}>{tag.toUpperCase()}</span>
              ))}
            </div>
            <div className="my-4 text-mute-light dark:text-mute-dark">
              {frontmatter.description}
            </div>
            <time>{frontmatter.date}</time>
          </div>
        </div>
      ))}
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
