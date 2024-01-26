import { graphql, PageProps } from 'gatsby';

import SEO from '@/components/seo';

function IndexPage({ data }: PageProps<Queries.PagesQuery>) {
  return (
    <div className="flex flex-col gap-8">
      {data.allMdx.nodes.map(({ fields, frontmatter }, index) => (
        <div key={index} className="group flex flex-wrap items-center justify-center gap-4">
          <div className="rounded-lg bg-background p-12 text-6xl">
            <div className="group-hover:animate-flip">{frontmatter.emoji}</div>
          </div>
          <div className="flex-1">
            <div>
              <a href={fields.slug} className="text-2xl font-semibold">
                {frontmatter.title}
              </a>
            </div>
            <div className="flex gap-2 text-sm text-link">
              {frontmatter.tags.map((tag) => (
                <span key={tag}>{tag.toUpperCase()}</span>
              ))}
            </div>
            <div className="my-4 text-mute">{frontmatter.description}</div>
            <div>{frontmatter.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default IndexPage;

export const query = graphql`
  query Pages {
    allMdx(sort: { fields: { slug: DESC } }) {
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
