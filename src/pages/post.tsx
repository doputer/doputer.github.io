import { MDXProvider } from '@mdx-js/react';
import { graphql } from 'gatsby';

import SEO from '@/components/seo';
import typography from '@/components/typography';

interface PostPageProps {
  data: Queries.PageQuery;
  children: JSX.Element;
}

function PostPage({ data, children }: PostPageProps) {
  const { category, title, date } = data.mdx.frontmatter;

  return (
    <>
      <div className="mb-2 flex items-center gap-1 text-lg">
        <div>{category}</div>·<div>{date}</div>
      </div>
      <h1 className="mb-12 text-4xl font-extrabold tracking-tight">{title}</h1>
      <div>
        <MDXProvider components={typography}>{children}</MDXProvider>
      </div>
    </>
  );
}

export default PostPage;

export const query = graphql`
  query Page($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        category
        title
        date(formatString: "YYYY.MM.DD")
      }
    }
  }
`;

export const Head = () => <SEO />;
