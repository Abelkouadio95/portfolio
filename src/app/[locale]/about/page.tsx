import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import AboutClient from '../../../components/aboutSections/AboutClient';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  
  return buildMetadata({
    title: `${t('status')} - Abel Kouadio`,
    description: t.raw('profil')[0] as string,
    locale,
    keywords: ['Data Science', 'Artificial Intelligence', 'Machine Learning', 'Full Stack Development', 'Abel Kouadio'],
    type: 'profile',
  });
}

export async function generateStaticParams(): Promise<{ locale: string }[]> {
  return [
    { locale: 'en' },
    { locale: 'fr' },
  ];
}

export default async function About({ params }: { params: Promise<{ locale: string }> }) {
  const _ = params;
  return <AboutClient />;
}
