import { ReactNode } from "react";

// Dil dosyalarını import et
import trMessages from './messages/tr.json';
import enMessages from './messages/en.json';
import deMessages from './messages/de.json';

// Mesaj nesnelerini birleştir
const messages = {
  tr: trMessages,
  en: enMessages,
  de: deMessages
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Desteklenen diller
  const validLocales = ['tr', 'en', 'de'];
  if (!validLocales.includes(locale)) {
    return <div>404 - Locale not found</div>;
  }

  return (
    <div data-locale={locale} data-messages={JSON.stringify(messages[locale as keyof typeof messages])}>
      {children}
    </div>
  );
} 