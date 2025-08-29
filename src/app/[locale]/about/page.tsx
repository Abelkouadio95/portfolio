import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import AboutClient from '../../../components/aboutSections/AboutClient';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
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

export default function About() {
    return <AboutClient />;
}