import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle, { ThemeType } from './ThemeToggle';
import LocaleToggle from './LocaleToggle';
import useManualTranslations from '../hooks/useManualTranslations';
import { useState, useEffect } from 'react';

interface NavbarProps {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  isDark: boolean;
}

export default function Navbar({ theme, setTheme, isDark }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useManualTranslations();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? isDark
              ? 'bg-gray-900/95 backdrop-blur-md py-4 shadow-xl border-b border-gray-800/50'
              : 'bg-white/95 backdrop-blur-md py-4 shadow-xl border-b border-gray-200/50'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <motion.a
              href="#"
              className={`text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Kemal
            </motion.a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <NavLink href="#about" isDark={isDark}>{t('nav.about')}</NavLink>
              <NavLink href="#skills" isDark={isDark}>{t('nav.skills')}</NavLink>
              <NavLink href="#portfolio" isDark={isDark}>{t('nav.portfolio')}</NavLink>
              <NavLink href="#contact" isDark={isDark}>{t('nav.contact')}</NavLink>
              <LocaleToggle isDark={isDark} />
              <ThemeToggle theme={theme} setTheme={setTheme} />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              <LocaleToggle isDark={isDark} />
              <ThemeToggle theme={theme} setTheme={setTheme} />
              <motion.button
                onClick={toggleMobileMenu}
                className={`p-2 rounded-lg transition-colors ${
                  isDark 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-20 left-0 right-0 z-40 md:hidden ${
              isDark 
                ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50' 
                : 'bg-white/95 backdrop-blur-md border-b border-gray-200/50'
            }`}
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-4">
                <MobileNavLink href="#about" isDark={isDark} onClick={toggleMobileMenu}>
                  {t('nav.about')}
                </MobileNavLink>
                <MobileNavLink href="#skills" isDark={isDark} onClick={toggleMobileMenu}>
                  {t('nav.skills')}
                </MobileNavLink>
                <MobileNavLink href="#portfolio" isDark={isDark} onClick={toggleMobileMenu}>
                  {t('nav.portfolio')}
                </MobileNavLink>
                <MobileNavLink href="#contact" isDark={isDark} onClick={toggleMobileMenu}>
                  {t('nav.contact')}
                </MobileNavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isDark: boolean;
}

function NavLink({ href, children, isDark }: NavLinkProps) {
  return (
    <motion.a
      href={href}
      className={`relative font-medium transition-colors ${
        isDark
          ? 'text-gray-300 hover:text-white'
          : 'text-gray-600 hover:text-blue-600'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      <motion.div
        className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
          isDark ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gradient-to-r from-blue-600 to-purple-600'
        }`}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.a>
  );
}

interface MobileNavLinkProps {
  href: string;
  children: React.ReactNode;
  isDark: boolean;
  onClick: () => void;
}

function MobileNavLink({ href, children, isDark, onClick }: MobileNavLinkProps) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
        isDark
          ? 'text-gray-300 hover:text-white hover:bg-gray-800'
          : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
      }`}
      whileHover={{ x: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
} 