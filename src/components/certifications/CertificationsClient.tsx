'use client';

import { useState, useMemo } from 'react';
import CertificationCard from './CertificationCard';
import CertificationsFilter from './CertificationsFilter';
import { useTranslations } from "next-intl";
import { Certification } from '@/types/portfolioTypes';

export default function CertificationsClient() {
  const t = useTranslations('certifications');
  const certifData= t.raw('certifData') as Certification[];

  const [activeCategory, setActiveCategory] = useState('all');

  // Obtenir toutes les catégories uniques
  const categories = useMemo(() => {
    const uniqueCategories = ['all', ...Array.from(new Set(certifData.map(cert => cert.category)))];
    return uniqueCategories;
  }, []);

  // Filtrer les certifications selon la catégorie active
  const filteredCertifications = useMemo(() => {
    if (activeCategory === 'all') {
      return certifData;
    }
    return certifData.filter(cert => cert.category === activeCategory);
  }, [activeCategory]);

  // Statistiques par catégorie
  const categoryStats = useMemo(() => {
    const stats = categories.reduce((acc, category) => {
      if (category === 'all') {
        acc[category] = certifData.length;
      } else {
        acc[category] = certifData.filter(cert => cert.category === category).length;
      }
      return acc;
    }, {} as Record<string, number>);
    return stats;
  }, [categories]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-4 md:py-8">
        {/* Filtres et en-tête */}
        <CertificationsFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          totalCertifications={certifData.length}
        />

        {/* Statistiques rapides */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
          {categories.slice(1).map((category) => (
            <div
              key={category}
              className="bg-white dark:bg-gray-800 rounded-lg p-3 md:p-4 text-center border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => handleCategoryChange(category)}
            >
              <div className="text-xl md:text-2xl mb-1 md:mb-2">
                {category === 'data-science' && '📊'}
                {category === 'python' && '🐍'}
                {category === 'machine-learning' && '🤖'}
                {category === 'web-development' && '🌐'}
                {category === 'language' && '🌍'}
                {category === 'other' && '📜'}
              </div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-1">
                {category.replace('-', ' ').toUpperCase()}
              </div>
              <div className="text-lg md:text-2xl font-bold text-blue-600 dark:text-blue-400">
                {categoryStats[category]}
              </div>
            </div>
          ))}
        </div>

        {/* Grille des certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredCertifications.map((certification) => (
            <CertificationCard
              key={certification.id}
              certification={certification}
            />
          ))}
        </div>

        {/* Section de motivation */}
        <div className="mt-8 md:mt-16 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-4 md:p-8 text-center border border-blue-200 dark:border-blue-800">
          <div className="text-3xl md:text-4xl mb-3 md:mb-4">🚀</div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
            {t('adviceTitle')}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed">
            {t('adviceContent')}
          </p>
        </div>
      </div>
    </div>
  );
}
