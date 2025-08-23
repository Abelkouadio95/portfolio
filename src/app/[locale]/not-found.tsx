import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mb-4">Page non trouvée</h2>
      <p className="text-gray-500 mb-8">La page que vous recherchez n'existe pas.</p>
      <div className="space-x-4">
        <Link 
          href="/fr" 
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Retour à l'accueil (FR)
        </Link>
        <Link 
          href="/en" 
          className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          Back to home (EN)
        </Link>
      </div>
    </div>
  );
}
