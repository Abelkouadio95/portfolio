'use client';

import { useTranslations } from 'next-intl';

export default function TestPage() {
  const t = useTranslations('home');
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Page de test</h1>
      <p>Locale: {t('title')}</p>
      <p>Subtitle: {t('subtitle')}</p>
    </div>
  );
}
