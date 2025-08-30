import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import AboutClient from '../../../components/aboutSections/AboutClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  
  return {
    title: `${t('status')} - Abel Kouadio`,
    description: t('profil'),
    keywords: ['Data Science', 'Artificial Intelligence', 'Machine Learning', 'Full Stack Development', 'Software Engineering', 'Abel Kouadio'],
    authors: [{ name: 'Abel Kouadio' }],
    openGraph: {
      title: `${t('status')} - Abel Kouadio`,
      description: t('profil'),
      type: 'profile',
      locale: locale,
      siteName: 'Abel Kouadio Portfolio',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t('status')} - Abel Kouadio`,
      description: t('profil'),
    },
  };
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