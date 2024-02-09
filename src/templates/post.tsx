import { MDXProvider } from '@mdx-js/react';
import { graphql, type HeadProps, type PageProps } from 'gatsby';

import Comment from '@/components/comment';
import SEO from '@/components/seo';
import Share from '@/components/share';
import TOC from '@/components/toc';
import typography from '@/components/typography';

function PostTemplate({ data: { mdx }, children }: PageProps<Queries.PostQuery>) {
  const { title, description, date } = mdx.frontmatter;

  return (
    <>
      <div className="mb-12 flex flex-col gap-2">
        <h1 className="text-4xl font-extrabold tracking-tight">{title}</h1>
        <time>{date}</time>
      </div>
      <article className="relative">
        <MDXProvider components={typography}>
          <TOC mdx={mdx} />
          {children}
        </MDXProvider>
      </article>
      <div className="my-16">
        <Share title={title} description={description} />
      </div>
      <div className="my-16">
        <Comment />
      </div>
    </>
  );
}

export default PostTemplate;

export const query = graphql`
  query ($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
        description
      }
      tableOfContents
    }
  }
`;

export const Head = ({ data }: HeadProps<Queries.PostQuery>) => {
  const { title, description } = data.mdx.frontmatter;

  return <SEO title={title} description={description} />;
};
