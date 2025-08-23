import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const currentLocale = locale || 'fr';
  console.log('Loading messages for locale:', currentLocale);
  
  try {
    const messages = (await import(`@/messages/${currentLocale}.json`)).default;
    return { messages, locale: currentLocale };
  } catch (error) {
    console.error(`Failed to load messages for locale: ${currentLocale}`, error);
    const fallbackMessages = (await import(`@/messages/fr.json`)).default;
    return { messages: fallbackMessages, locale: 'fr' };
  }
});





