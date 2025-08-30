import AnimatedSection from "@/components/animation/animatedSection";
import Layout from "@/components/layout/layout";
import CertificationsClient from "@/components/certifications/CertificationsClient";
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'certifications' });
  
  return {
    title: `${t('pageTitle')} - Abel Kouadio`,
    description: t('subtitle'),
    keywords: ['Certifications', 'Data Science', 'Machine Learning', 'Python', 'IBM', 'Deep Learning', 'Abel Kouadio'],
    authors: [{ name: 'Abel Kouadio' }],
    openGraph: {
      title: `${t('pageTitle')} - Abel Kouadio`,
      description: t('subtitle'),
      type: 'website',
      locale: locale,
      siteName: 'Abel Kouadio Portfolio',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t('pageTitle')} - Abel Kouadio`,
      description: t('subtitle'),
    },
  };
}

export default function Certifications() {
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