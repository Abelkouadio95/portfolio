import Layout from "@/components/layout/layout";
import ProjectsClient from "@/components/projects/ProjectsClient";
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'projects' });
  
  return buildMetadata({
    title: `${t('projectsTitle')} - Abel Kouadio`,
    description: t('projectsContent'),
    locale,
    keywords: ['Projects', 'Data Science', 'Machine Learning', 'Data Engineering', 'Power BI', 'Abel Kouadio'],
  });
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
