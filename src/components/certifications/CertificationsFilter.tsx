'use client';

import { useState } from 'react';
import { FaFilter, FaTrophy } from 'react-icons/fa';
import { useTranslations } from "next-intl";

interface CertificationsFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  totalCertifications: number;
}

export default function CertificationsFilter({ 
  categories, 
  activeCategory, 
  onCategoryChange, 
  totalCertifications 
}: CertificationsFilterProps) {

  const t = useTranslations('certifications');
  const [showFilters, setShowFilters] = useState(false);

  const getCategoryLabel = (category: string) => {
    const labels = {
      'all': t('all'),
      'data-science': 'Data Science',
      'python': 'Python',
      'machine-learning': 'Machine Learning',
      'web-development': t('wd'),
      'language': t('language'),
      'other': t('other')
    };
    return labels[category as keyof typeof labels] || category;
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      'all': '🏆',
      'data-science': '📊',
      'python':'🐍',
      'machine-learning': '🤖',
      'web-development': '🌐',
      'language': '🌍',
      'other': '📜'
    };
    return icons[category as keyof typeof icons] || '📜';
  };

  return (
    <div className="mb-8">
      {/* En-tête avec statistiques */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-3">
          <FaTrophy className="text-4xl text-yellow-500 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {t('pageTitle')}
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          {totalCertifications} {t('subtitle')}
        </p>
      </div>

      {/* Filtres par catégorie */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
            <FaFilter className="mr-2 text-blue-600" />
            {t('filterCat')}
          </h3>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            {showFilters ? t('hideFilter') : t('showFilter') }
          </button>
        </div>

        {showFilters && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`p-3 rounded-lg border-2 transition-all duration-200 flex flex-col items-center gap-2 ${
                  activeCategory === category
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300'
                }`}
              >
                <span className="text-2xl">{getCategoryIcon(category)}</span>
                <span className="text-xs font-medium text-center">
                  {getCategoryLabel(category)}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Onglets de catégorie visibles */}
        <div className="flex flex-wrap gap-2 mt-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <span className="text-sm">{getCategoryIcon(category)}</span>
              {getCategoryLabel(category)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
