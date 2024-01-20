import { MDXProvider } from '@mdx-js/react';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import { graphql } from 'gatsby';

import SEO from '@/components/seo';
import h2 from '@/components/typography/h2';

interface PostPageProps {
  data: Queries.PageQuery;
  children: JSX.Element;
}

function PostPage({ data, children }: PostPageProps) {
  const { type, title } = data.mdx.frontmatter;

  return (
    <>
      <div className="mb-2 flex items-center text-lg">
        <div className="text-muted-foreground">{type}</div>
        <ChevronRightIcon />
        <div className="font-semibold">{title}</div>
      </div>
      <h1 className="mb-12 text-4xl font-extrabold tracking-tight">{title}</h1>
      <div>
        <MDXProvider components={{ h2 }}>{children}</MDXProvider>
      </div>
    </>
  );
}

export default PostPage;

export const query = graphql`
  query Page($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        type
        title
      }
    }
  }
`;

export const Head = () => <SEO />;
