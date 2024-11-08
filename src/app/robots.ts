import type { MetadataRoute } from 'next';

import meta from '@/configs/metadata.json';

export default function robots(): MetadataRoute.Robots {
  const { siteUrl } = meta;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: siteUrl,
    sitemap: siteUrl + '/sitemap.xml',
  };
}
