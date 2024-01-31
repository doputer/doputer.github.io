import { graphql, Link, type PageProps } from 'gatsby';

import Pagination from '@/components/pagination';
import SEO from '@/components/seo';

function IndexPage({ data: { allMdx } }: PageProps<Queries.PostsQuery>) {
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
            <div>{frontmatter.date}</div>
          </div>
        </div>
      ))}
      <Pagination numPages={Math.ceil(allMdx.totalCount / 5)} />
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
