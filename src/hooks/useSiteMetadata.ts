import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          comment {
            repo
            repoId
            category
            categoryId
          }
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
