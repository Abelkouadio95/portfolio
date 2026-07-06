interface JsonLdProps {
  locale: string;
}

export default function JsonLd({ locale }: JsonLdProps) {
  const isFr = locale === 'fr';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Abel Bekantie Kouadio',
    jobTitle: isFr ? 'Data Engineer & Data Analyst' : 'Data Engineer & Data Analyst',
    description: isFr
      ? 'Ingénieur data spécialisé en pipelines, analyse de données et machine learning.'
      : 'Data engineer specializing in pipelines, data analysis, and machine learning.',
    url: `https://abelkouadio.dev/${locale}`,
    sameAs: [
      'https://www.linkedin.com/in/abel-bekanti%C3%A9-kouadio-50333527b/',
      'https://github.com/Abelkouadio95',
    ],
    knowsAbout: [
      'Python',
      'SQL',
      'Power BI',
      'Data Engineering',
      'Machine Learning',
      'ETL',
      'FastAPI',
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'ENSAM',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
