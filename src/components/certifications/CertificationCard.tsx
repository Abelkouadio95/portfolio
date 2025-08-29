'use client';

import { Certification } from '@/types/portfolioTypes';
import { useState } from 'react';
import { FaEye, FaExternalLinkAlt, FaCalendarAlt, FaBuilding, FaTools, FaStar } from 'react-icons/fa';
import Image from "next/image";
import { useTranslations } from "next-intl";

interface CertificationCardProps {
  certification: Certification;
}

export default function CertificationCard({ certification }: CertificationCardProps) {

  const t = useTranslations('certifications');
  const [showImage, setShowImage] = useState(false);
  const [imageError, setImageError] = useState(false);

  const getCategoryColor = (category: string) => {
    const colors = {
      'data-science': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'python': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      'machine-learning': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      'web-development': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      'language': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      'other': 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    };
    return colors[category as keyof typeof colors] || colors.other;
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      'data-science': '📊',
      'python': '🐍',
      'machine-learning': '🤖',
      'web-development': '🌐',
      'language': '🌍',
      'other': '📜'
    };
    return icons[category as keyof typeof icons] || icons.other;
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 group">

        { /* Header avec icône de catégorie */}
        <div className="p-6 pb-4">
          <div className="flex items-start justify-between mb-4">
            <span className="text-3xl"> {getCategoryIcon(certification.category)}</span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(certification.category)}`}>
              {certification.category.replace('-', ' ').toUpperCase()}
            </span>
          </div>
          
          {/* Titre et émetteur */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {certification.title}
          </h3>
          
          <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-3">
            <FaBuilding className="mr-2" />
            <span>{certification.issuer}</span>
          </div>
          
          <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-4">
            <FaCalendarAlt className="mr-2" />
            <span>{certification.date}</span>
          </div>
        </div>

        {/* Description */}
        <div className="px-6 pb-4">
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            {certification.description}
          </p>
        </div>

        {/* Compétences */}
        <div className="px-6 pb-4">
          <div className="mb-3">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
              <FaStar className="mr-2 text-yellow-500" />
              {t('sg')}
            </h4>
            <div className="flex flex-wrap gap-2">
              {certification.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-md border border-blue-200 dark:border-blue-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Outils */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
              <FaTools className="mr-2 text-gray-500" />
              {t('tu')}
            </h4>
            <div className="flex flex-wrap gap-2">
              {certification.tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md border border-gray-200 dark:border-gray-600"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="px-6 pb-6 flex gap-3">
          <button
            onClick={() => setShowImage(true)}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
          >
            <FaEye />
            {t('vc')}
          </button>
          
          {certification.credentialUrl && (
            <a
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <FaExternalLinkAlt />
              {t('Verify')}
            </a>
          )}
        </div>
      </div>

      {/* Modal pour afficher l'image du certificat */}
      {showImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg  w-[min(900px,92vw)] max-h-[90vh] overflow-hidden relative">
            <button
              onClick={() => setShowImage(false)}
              className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-10"
            >
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                {certification.title}
              </h3>
              
              {/* Affichage de l'image du certificat */}
              <div className="relative w-full h-96 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                {!imageError && certification.imageUrl ? (
                  <Image
                    src={certification.imageUrl}
                    alt={`Certificat ${certification.title}`}
                    fill
                    className="object-contain"
                    onError={handleImageError}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <FaStar className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                      <p className="text-gray-600 dark:text-gray-400 font-medium">
                        Certificat {certification.title}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                        Délivré par {certification.issuer}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        {certification.date}
                      </p>
                      {imageError && (
                        <p className="text-xs text-red-500 mt-2">
                          Erreur de chargement de l'image
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
