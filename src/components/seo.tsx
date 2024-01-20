import useSiteMetadata from '@/hooks/useSiteMetadata';

interface SEOProps {
  title?: string;
  description?: string;
}

function SEO({ title = 'Doputer', description = 'Doputer Blog' }: SEOProps) {
  const seo = useSiteMetadata();

  return (
    <>
      <html lang="ko" />
      <title>{title || seo.title}</title>
      <meta name="description" content={description || seo.description} />
    </>
  );
}

export default SEO;
