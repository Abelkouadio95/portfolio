import Layout from "@/components/layout/layout";
import ProjectsClient from "@/components/projects/ProjectsClient";
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'projects' });
  
  return {
    title: `${t('projectsTitle')} - Abel Kouadio`,
    description: t('projectsContent'),
    keywords: ['Projets', 'Data Science', 'Machine Learning', 'Développement Web', 'Full Stack', 'IA', 'Abel Kouadio'],
    authors: [{ name: 'Abel Kouadio' }],
    openGraph: {
      title: `${t('projectsTitle')} - Abel Kouadio`,
      description: t('projectsContent'),
      type: 'website',
      locale: locale,
      siteName: 'Abel Kouadio Portfolio',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t('projectsTitle')} - Abel Kouadio`,
      description: t('projectsContent'),
    },
  };
}

export async function generateStaticParams(): Promise<{ locale: string }[]> {
  return [
    { locale: 'en' },
    { locale: 'fr' },
  ];
}


export default function Projects({ params }: { params: Promise<{ locale: string }> }) {
  const _ = params;
  return(
      <main>
          <Layout>
              <ProjectsClient />
          </Layout>
      </main>
  )
}