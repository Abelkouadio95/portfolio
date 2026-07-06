import { Metadata } from 'next';

const OG_IMAGE = '/images/projects/pecom.jpg';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://abelkouadio.dev';

interface BuildMetadataOptions {
  title: string;
  description: string;
  locale: string;
  keywords?: string[];
  type?: 'website' | 'profile';
}

export function buildMetadata({
  title,
  description,
  locale,
  keywords,
  type = 'website',
}: BuildMetadataOptions): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords,
    authors: [{ name: 'Abel Bekantie Kouadio' }],
    openGraph: {
      title,
      description,
      type,
      locale,
      siteName: 'Abel Kouadio Portfolio',
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}
