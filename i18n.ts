import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Desteklenen diller
const locales = ['tr', 'en', 'de'] as const;
type Locale = typeof locales[number];

export default getRequestConfig(async ({ locale }) => {
  // Gelen locale parametresinin geçerli olup olmadığını kontrol et
  if (!locale || !locales.includes(locale as Locale)) notFound();

  return {
    locale,
    messages: (await import(`./src/app/[locale]/messages/${locale}.json`)).default
  };
}); 