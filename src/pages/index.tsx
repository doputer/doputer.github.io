import { graphql, PageProps } from 'gatsby';

import SEO from '@/components/seo';

function IndexPage({ data }: PageProps<Queries.PagesQuery>) {
  return (
    <div className="flex flex-col gap-8">
      {data.allMdx.nodes.map(({ fields, frontmatter }, index) => (
        <div key={index} className="flex flex-col gap-1">
          <div>
            <a
              href={fields.slug}
              className="text-2xl font-bold text-sky-700 hover:text-sky-900 dark:hover:text-sky-500"
            >
              {frontmatter.title}
            </a>
          </div>
          <div className="flex flex-wrap gap-1">
            {frontmatter.tags.map((tag) => (
              <div
                key={tag}
                className="flex items-center gap-1 rounded-sm bg-gray-200 px-1 text-sm dark:bg-gray-600"
              >
                {tag}
              </div>
            ))}
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
          title
          tags
        }
      }
    }
  }
`;

export const Head = () => <SEO />;
