import { MDXProvider } from '@mdx-js/react';
import { graphql, type HeadProps, type PageProps } from 'gatsby';

import Comment from '@/components/comment';
import SEO from '@/components/seo';
import typography from '@/components/typography';

function PostPage({ data: { mdx }, children }: PageProps<Queries.PostQuery>) {
  const { title, date } = mdx.frontmatter;

  return (
    <>
      <div className="mb-12 flex flex-col gap-2">
        <h1 className="text-4xl font-extrabold tracking-tight">{title}</h1>
        <time>{date}</time>
      </div>
      <article>
        <MDXProvider components={typography}>{children}</MDXProvider>
      </article>
      <div className="my-16">
        <Comment />
      </div>
    </>
  );
}

export default PostPage;

export const query = graphql`
  query Post($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
        description
      }
    }
  }
`;

export const Head = ({ data }: HeadProps<Queries.PostQuery>) => {
  const { title, description } = data.mdx.frontmatter;

  return <SEO title={title} description={description} />;
};
