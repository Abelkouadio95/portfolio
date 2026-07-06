import AnimatedSection from "@/components/animation/animatedSection";
import Layout from "@/components/layout/layout";
import CertificationsClient from "@/components/certifications/CertificationsClient";
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'certifications' });
  
  return buildMetadata({
    title: `${t('pageTitle')} - Abel Kouadio`,
    description: t('subtitle'),
    locale,
    keywords: ['Certifications', 'Data Science', 'Machine Learning', 'Python', 'Google', 'IBM', 'Abel Kouadio'],
  });
}

export async function generateStaticParams(): Promise<{ locale: string }[]> {
  return [
    { locale: 'en' },
    { locale: 'fr' },
  ];
}


export default function Certifications({ params }: { params: Promise<{ locale: string }> }) {
  const _ = params;
  return(
      <Layout>
          <div className="pt-24">
              <AnimatedSection>
                  <CertificationsClient />
              </AnimatedSection>
          </div>  
      </Layout>
  )
}
