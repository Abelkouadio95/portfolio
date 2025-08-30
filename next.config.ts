

import createNextIntlPlugin from 'next-intl/plugin';
import { NextConfig } from 'next';


const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');


const nextConfig: NextConfig = {
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
  },
};

export default withNextIntl(nextConfig);
