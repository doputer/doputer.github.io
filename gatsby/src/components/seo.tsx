import useSiteMetadata from '@/hooks/useSiteMetadata';

interface SEOProps {
  title?: string;
  description?: string;
}

function SEO({ title, description }: SEOProps) {
  const siteMetadata = useSiteMetadata();

  return (
    <>
      <html lang="ko" />
      <title>{title || siteMetadata.title}</title>
      <meta name="description" content={description || siteMetadata.description} />
      <meta property="og:title" content={title || siteMetadata.title} />
      <meta property="og:description" content={description || siteMetadata.description} />
      <meta property="og:url" content={siteMetadata.siteUrl} />
      <meta name="naver-site-verification" content="ed40bb9e56fd7384da54f573c6dd780015474e61" />
    </>
  );
}

export default SEO;
