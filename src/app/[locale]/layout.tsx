import { ReactNode } from "react";

// Manuel çeviri sistemi
const messages = {
  tr: {
    'hero.title': 'Merhaba, Ben Kemal',
    'hero.subtitle': 'Modern web teknolojileri ile kullanıcı deneyimini ön planda tutan',
    'hero.role': 'Full Stack Developer',
    'hero.contactButton': 'İletişime Geç',
    'hero.portfolioButton': 'Portfolyo',
    'nav.about': 'Hakkımda',
    'nav.skills': 'Yetenekler',
    'nav.portfolio': 'Portfolyo',
    'nav.contact': 'İletişim'
  },
  en: {
    'hero.title': 'Hello, I\'m Kemal',
    'hero.subtitle': 'Full Stack Developer who prioritizes user experience with modern web technologies',
    'hero.role': 'Full Stack Developer',
    'hero.contactButton': 'Get in Touch',
    'hero.portfolioButton': 'Portfolio',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact'
  },
  de: {
    'hero.title': 'Hallo, ich bin Kemal',
    'hero.subtitle': 'Full Stack Developer, der moderne Webtechnologien mit Fokus auf Benutzererfahrung einsetzt',
    'hero.role': 'Full Stack Developer',
    'hero.contactButton': 'Kontakt aufnehmen',
    'hero.portfolioButton': 'Portfolio',
    'nav.about': 'Über mich',
    'nav.skills': 'Fähigkeiten',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Kontakt'
  }
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