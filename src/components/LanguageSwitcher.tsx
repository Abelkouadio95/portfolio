'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import glob from "../../public/globe.svg"
import Image from 'next/image';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  
  // Déterminer la langue actuelle à partir du pathname
  const getCurrentLocale = () => {
    const segments = pathname.split('/').filter(segment => segment !== '');
    const firstSegment = segments[0];
    return (firstSegment === 'fr' || firstSegment === 'en') ? firstSegment : 'fr';
  };
  
  const [currentLocale, setCurrentLocale] = useState(getCurrentLocale());
  
  // Mettre à jour le locale quand le pathname change
  useEffect(() => {
    setCurrentLocale(getCurrentLocale());
  }, [pathname]);

  const switchLanguage = (newLocale: string) => {
    try {
      // Extraire le chemin sans le locale
      const segments = pathname.split('/').filter(segment => segment !== '');
      const currentLocale = segments[0];
      
      // Si le premier segment est un locale valide, le remplacer
      if (currentLocale === 'fr' || currentLocale === 'en') {
        segments[0] = newLocale;
      } else {
        // Si pas de locale, l'ajouter au début
        segments.unshift(newLocale);
      }
      
      const newPath = '/' + segments.join('/');
      console.log('Switching from', pathname, 'to', newPath);
      
      // Validation : s'assurer que l'URL est correcte
      if (newPath.startsWith('/fr/') || newPath.startsWith('/en/') || newPath === '/fr' || newPath === '/en') {
        router.push(newPath);
      } else {
        console.error('Invalid path generated:', newPath);
        // Fallback vers la page d'accueil
        router.push(`/${newLocale}`);
      }
    } catch (error) {
      console.error('Error switching language:', error);
      // Fallback vers la page d'accueil
      router.push(`/${newLocale}`);
    }
    
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Changer de langue"
      >
        <Image src={glob} alt="globe" className='w-5'/>
        <span className="text-sm font-medium">
          {currentLocale === 'fr' ? 'FR' : 'EN'}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-20 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
          <button
            onClick={() => switchLanguage('fr')}
            className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-lg ${
              currentLocale === 'fr' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : ''
            }`}
          >
            FR
          </button>
          <button
            onClick={() => switchLanguage('en')}
            className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-lg ${
              currentLocale === 'en' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : ''
            }`}
          >
            EN
          </button>
        </div>
      )}
    </div>
  );
}
