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
    </>
  );
}

export default SEO;
