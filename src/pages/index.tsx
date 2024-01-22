import { graphql, PageProps } from 'gatsby';

import SEO from '@/components/seo';

function IndexPage({ data }: PageProps<Queries.PagesQuery>) {
  return (
    <div className="flex flex-col gap-8">
      {data.allMdx.nodes.map(({ fields, frontmatter }, index) => (
        <div key={index} className="flex flex-col gap-1">
          <div>
            <a href={fields.slug} className="text-2xl font-semibold">
              {frontmatter.title}
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-1">
            <div>{frontmatter.category}</div>·<div>{frontmatter.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default IndexPage;

export const query = graphql`
  query Pages {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          category
          title
          date(formatString: "YYYY.MM.DD")
        }
      }
    }
  }
`;

export const Head = () => <SEO />;
