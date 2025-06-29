import { useState, useEffect } from 'react';

export default function useManualTranslations() {
  const [messages, setMessages] = useState<Record<string, unknown>>({});
  const [locale, setLocale] = useState<string>('tr');

  useEffect(() => {
    const container = document.querySelector('[data-messages]');
    if (container) {
      const messagesData = container.getAttribute('data-messages');
      const localeData = container.getAttribute('data-locale');
      if (messagesData) {
        setMessages(JSON.parse(messagesData));
      }
      if (localeData) {
        setLocale(localeData);
      }
    }
  }, []);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = messages;
    for (const k of keys) {
      if (value && typeof value === 'object' && value !== null && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key; // Anahtar bulunamazsa, anahtarı döndür
      }
    }
    return typeof value === 'string' ? value : key;
  };

  return { t, locale };
} 