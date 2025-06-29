import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaDesktop } from 'react-icons/fa';

export type ThemeType = 'light' | 'dark' | 'system';

interface ThemeToggleProps {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

export default function ThemeToggle({ theme, setTheme }: ThemeToggleProps) {
  // Sıradaki temayı döndür
  const getNextTheme = (current: ThemeType): ThemeType => {
    if (current === 'light') return 'dark';
    if (current === 'dark') return 'system';
    return 'light';
  };

  const icon =
    theme === 'light' ? <FaSun className="text-yellow-400 text-xl" /> :
    theme === 'dark' ? <FaMoon className="text-gray-600 text-xl" /> :
    <FaDesktop className="text-blue-500 text-xl" />;

  const label =
    theme === 'light' ? 'Açık mod' :
    theme === 'dark' ? 'Koyu mod' :
    'Sistem modu';

  return (
    <motion.button
      onClick={() => setTheme(getNextTheme(theme))}
      className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-colors
        bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={label}
      title={label}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="absolute"
      >
        {icon}
      </motion.div>
    </motion.button>
  );
} 