import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import HomePageClient from '@/components/HomePageClient';
import { buildMetadata } from '@/lib/seo';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });
  
  return buildMetadata({
    title: `${t('subtitle')} - Abel Kouadio`,
    description: t('description'),
    locale,
    keywords: ['Data Engineer', 'Data Analyst', 'Machine Learning', 'Power BI', 'Python', 'ETL'],
  });
}


export async function generateStaticParams(): Promise<{ locale: string }[]> {
  return [
    { locale: 'en' },
    { locale: 'fr' },
  ];
}


export default function HomePageLocale({ params }: { params: Promise<{ locale: string }> }) {
  const _ = params;
  return (
    <main className="flex flex-col text-dark w-full min-h-screen pt-16">
      <HomePageClient />
    </main>
  );
}
