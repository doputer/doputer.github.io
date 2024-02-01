import { graphql, Link, type PageProps } from 'gatsby';

import Pagination from '@/components/pagination';
import SEO from '@/components/seo';

function PageTemplate({
  data: { allMdx },
  pageContext: { currentPage },
}: PageProps<Queries.PostsQuery, Queries.PageContext>) {
  return (
    <div className="flex flex-col gap-8">
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
      <Pagination currentPage={currentPage} />
    </div>
  );
}

export default PageTemplate;

export const query = graphql`
  query Posts($skip: Int!, $limit: Int!) {
    allMdx(sort: { fields: { slug: DESC } }, limit: $limit, skip: $skip) {
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
