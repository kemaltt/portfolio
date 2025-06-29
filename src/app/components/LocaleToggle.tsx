import { motion } from 'framer-motion';
import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type LocaleType = 'tr' | 'en' | 'de';

interface LocaleToggleProps {
  isDark: boolean;
}

export default function LocaleToggle({ isDark }: LocaleToggleProps) {
  const router = useRouter();
  const params = useParams();
  const [currentLocale, setCurrentLocale] = useState<LocaleType>('tr');

  useEffect(() => {
    if (params?.locale) {
      setCurrentLocale(params.locale as LocaleType);
    }
  }, [params?.locale]);

  const locales: { code: LocaleType; flag: string; name: string }[] = [
    { code: 'tr', flag: '🇹🇷', name: 'Türkçe' },
    { code: 'en', flag: '🇺🇸', name: 'English' },
    { code: 'de', flag: '🇩🇪', name: 'Deutsch' }
  ];

  // Sıradaki dili döndür
  const getNextLocale = (current: LocaleType): LocaleType => {
    if (current === 'tr') return 'en';
    if (current === 'en') return 'de';
    return 'tr';
  };

  const currentLocaleData = locales.find(locale => locale.code === currentLocale);

  const handleLocaleChange = () => {
    const nextLocale = getNextLocale(currentLocale);
    // URL'yi güncelle
    const currentPath = window.location.pathname;
    const pathWithoutLocale = currentPath.replace(/^\/(tr|en|de)/, '');
    router.push(`/${nextLocale}${pathWithoutLocale}`);
  };

  return (
    <motion.button
      onClick={handleLocaleChange}
      className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
        ${isDark 
          ? 'bg-gray-800/50 text-white hover:bg-gray-700/50 border border-gray-700/50' 
          : 'bg-white/50 text-gray-800 hover:bg-white/80 border border-gray-200/50'
        } 
        backdrop-blur-sm shadow-lg hover:shadow-xl`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Dil değiştir: ${currentLocaleData?.name}`}
      title={`Dil değiştir: ${currentLocaleData?.name}`}
    >
      <motion.div
        key={currentLocale}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="text-xl"
      >
        {currentLocaleData?.flag}
      </motion.div>
    </motion.button>
  );
} 