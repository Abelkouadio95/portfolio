import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ContactClient from '@/components/contact/ContactClient';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });

  return buildMetadata({
    title: `${t('title')} - Abel Kouadio`,
    description: t('subtitle'),
    locale,
    keywords: ['Contact', 'Data Engineer', 'Data Analyst', 'Abel Kouadio', 'Recrutement'],
  });
}

export async function generateStaticParams(): Promise<{ locale: string }[]> {
  return [{ locale: 'en' }, { locale: 'fr' }];
}

export default function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const _ = params;
  return (
    <main className="min-h-screen pt-20">
      <ContactClient />
    </main>
  );
}
