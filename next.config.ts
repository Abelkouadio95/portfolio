

import createNextIntlPlugin from 'next-intl/plugin';
import { NextConfig } from 'next';


const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');


const nextConfig: NextConfig = {
  output: 'export', 
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default withNextIntl(nextConfig);
