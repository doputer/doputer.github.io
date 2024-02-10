import useSiteMetadata from '@/hooks/useSiteMetadata';

interface SEOProps {
  title?: string;
  description?: string;
}

function SEO({ title, description }: SEOProps) {
  const seo = useSiteMetadata();

  return (
    <>
      <html lang="ko" />
      <title>{title || seo.title}</title>
      <meta name="description" content={description || seo.description} />
      <meta property="og:title" content={title || seo.title} />
      <meta property="og:description" content={description || seo.description} />
      <meta property="og:url" content={seo.siteUrl} />
      <meta name="naver-site-verification" content="ed40bb9e56fd7384da54f573c6dd780015474e61" />
    </>
  );
}

export default SEO;
