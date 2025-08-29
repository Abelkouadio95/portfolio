import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import HomePageClient from '@/components/HomePageClient';


export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  
  const t = await getTranslations({ locale, namespace: 'home' });
  
  return {
    title: `${t('subtitle')} - Abel Kouadio`,
    description: t('description'),
    keywords: ['Data Scientist', 'Software Engineer', 'Machine Learning', 'AI', 'Full Stack Developer'],
    authors: [{ name: 'Abel Kouadio' }],
    openGraph: {
      title: `${t('subtitle')} - Abel Kouadio`,
      description: t('description'),
      type: 'website',
      locale: locale,
      siteName: 'Abel Kouadio Portfolio',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t('subtitle')} - Abel Kouadio`,
      description: t('description'),
    },
  };
}

export default function HomePageLocale() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen pt-16 ">
      <HomePageClient />
    </main>
  );
}
