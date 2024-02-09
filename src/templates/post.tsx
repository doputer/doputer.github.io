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
      <div className="space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tight">{title}</h1>
        <time className="block">{date}</time>
      </div>
      <article className="relative">
        <TOC mdx={mdx} />
        <MDXProvider components={typography}>{children}</MDXProvider>
      </article>
      <Share title={title} description={description} />
      <Comment />
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
