'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload } from 'react-icons/fa';
import Portfolio from '../components/Portfolio';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import { ThemeType } from '../components/ThemeToggle';
import Image from 'next/image';

// Manuel çeviri hook'u
function useManualTranslations() {
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

export default function Home() {
  const { t } = useManualTranslations();
  const [theme, setTheme] = useState<ThemeType>('system');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeType | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const applyTheme = (currentTheme: ThemeType) => {
      let dark: boolean;
      if (currentTheme === 'system') {
        dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      } else {
        dark = currentTheme === 'dark';
      }
      setIsDark(dark);
      document.documentElement.classList.toggle('dark', dark);
    };

    applyTheme(theme);
    localStorage.setItem('theme', theme);

    // Sistem temasını dinle
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} isDark={isDark} />
      <main className={`min-h-screen transition-colors duration-300 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white' 
          : 'bg-gradient-to-br from-slate-50 via-blue-50 to-white text-gray-800'
      }`}>
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className={`absolute inset-0 ${
              isDark 
                ? 'bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-indigo-900/20' 
                : 'bg-gradient-to-r from-blue-100/30 via-purple-100/30 to-indigo-100/30'
            }`}></div>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-30 ${
                isDark ? 'bg-blue-500' : 'bg-blue-400'
              }`}
            ></motion.div>
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-30 ${
                isDark ? 'bg-purple-500' : 'bg-purple-400'
              }`}
            ></motion.div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mb-8"
              >
                <div className={`inline-block p-2 rounded-full mb-6 ${
                  isDark ? 'bg-gray-800/50' : 'bg-white/50'
                } backdrop-blur-sm`}>
                  <span className={`text-sm font-medium px-4 py-2 rounded-full ${
                    isDark 
                      ? 'bg-blue-600/20 text-blue-400' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    🚀 {t('hero.role')}
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-6xl md:text-8xl font-bold mb-6"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
                  {t('hero.title')}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className={`text-xl md:text-2xl mb-8 font-light ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {t('hero.subtitle')}
                <br />
                <span className="font-semibold text-blue-600">{t('hero.role')}</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
              >
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaEnvelope className="group-hover:rotate-12 transition-transform" />
                  {t('hero.contactButton')}
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="#portfolio"
                  className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaDownload className="group-hover:rotate-12 transition-transform" />
                  {t('hero.portfolioButton')}
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="flex justify-center gap-6"
              >
                {[
                  { icon: FaGithub, href: "https://github.com/kemaltt", label: "GitHub" },
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/kemal38", label: "LinkedIn" },
                  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" }
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full transition-all duration-300 ${
                      isDark 
                        ? 'bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-700/50' 
                        : 'bg-white/50 text-gray-600 hover:text-blue-600 hover:bg-white/80'
                    } backdrop-blur-sm shadow-lg hover:shadow-xl`}
                    aria-label={social.label}
                  >
                    <social.icon className="text-2xl" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`w-6 h-10 border-2 rounded-full flex justify-center ${
                isDark ? 'border-gray-400' : 'border-gray-600'
              }`}
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`w-1 h-3 rounded-full mt-2 ${
                  isDark ? 'bg-gray-400' : 'bg-gray-600'
                }`}
              ></motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className={`py-20 relative ${
          isDark ? 'bg-gray-800/50' : 'bg-white/50'
        } backdrop-blur-sm`}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-16">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`text-5xl font-bold mb-4 ${
                    isDark ? 'text-white' : 'text-gray-800'
                  }`}
                >
                  {t('nav.about')}
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`w-24 h-1 mx-auto rounded-full ${
                    isDark ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gradient-to-r from-blue-600 to-purple-600'
                  }`}
                ></motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-start">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <Image
                    src="/profile.jpg"
                    alt="Kemal"
                    width={500}
                    height={500}
                    className="rounded-lg shadow-xl w-full h-auto"
                  />
                  <div className="flex flex-wrap gap-4 pt-6">
                    {[
                      { label: t('about.stats.experience'), value: "3+" },
                      { label: t('about.stats.projects'), value: "50+" },
                      { label: t('about.stats.satisfaction'), value: "100%" }
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`text-center p-4 rounded-lg flex-1 ${
                          isDark ? 'bg-gray-700/50' : 'bg-blue-50'
                        }`}
                      >
                        <div className={`text-2xl font-bold ${
                          isDark ? 'text-blue-400' : 'text-blue-600'
                        }`}>{stat.value}</div>
                        <div className={`text-sm ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <p className={`text-lg leading-relaxed ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {t('about.description1')}
                  </p>
                  <p className={`text-lg leading-relaxed ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {t('about.description2')}
                  </p>
                  
                  <div className={`p-8 rounded-2xl ${
                    isDark ? 'bg-gray-700/50' : 'bg-white/50'
                  } backdrop-blur-sm shadow-xl`}>
                    <h3 className={`text-2xl font-bold mb-6 ${
                      isDark ? 'text-white' : 'text-gray-800'
                    }`}>{t('about.expertise')}</h3>
                    <div className="space-y-4">
                      {[
                        { skill: "Frontend Development", level: 90 },
                        { skill: "Backend Development", level: 85 },
                        { skill: "UI/UX Design", level: 80 },
                        { skill: "DevOps", level: 75 }
                      ].map((item, index) => (
                        <div key={item.skill}>
                          <div className="flex justify-between mb-2">
                            <span className={`font-medium ${
                              isDark ? 'text-gray-300' : 'text-gray-700'
                            }`}>{item.skill}</span>
                            <span className={`font-bold ${
                              isDark ? 'text-blue-400' : 'text-blue-600'
                            }`}>{item.level}%</span>
                          </div>
                          <div className={`w-full h-2 rounded-full ${
                            isDark ? 'bg-gray-600' : 'bg-gray-200'
                          }`}>
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${item.level}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              className={`h-full rounded-full ${
                                isDark ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gradient-to-r from-blue-600 to-purple-600'
                              }`}
                            ></motion.div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={`py-20 relative ${
          isDark ? 'bg-gray-900/50' : 'bg-slate-50/50'
        } backdrop-blur-sm`}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-16">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`text-5xl font-bold mb-4 ${
                    isDark ? 'text-white' : 'text-gray-800'
                  }`}
                >
                  {t('nav.skills')}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`text-xl ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {t('skills.subtitle')}
                </motion.p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {[
                  { name: "React", icon: "⚛️", category: t('categories.frontend') },
                  { name: "Next.js", icon: "▲", category: t('categories.framework') },
                  { name: "TypeScript", icon: "📘", category: t('categories.language') },
                  { name: "Node.js", icon: "🟢", category: t('categories.backend') },
                  { name: "Python", icon: "🐍", category: t('categories.language') },
                  { name: "MongoDB", icon: "🍃", category: t('categories.database') },
                  { name: "PostgreSQL", icon: "🐘", category: t('categories.database') },
                  { name: "Docker", icon: "🐳", category: t('categories.devops') },
                  { name: "AWS", icon: "☁️", category: t('categories.cloud') },
                  { name: "Figma", icon: "🎨", category: t('categories.design') },
                  { name: "Git", icon: "📝", category: t('categories.versionControl') },
                  { name: "Tailwind CSS", icon: "🎨", category: t('categories.styling') }
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`p-6 rounded-xl text-center transition-all duration-300 shadow-lg hover:shadow-xl ${
                      isDark 
                        ? 'bg-gray-800/50 hover:bg-gray-700/50' 
                        : 'bg-white/50 hover:bg-white/80'
                    } backdrop-blur-sm border border-transparent hover:border-blue-500/20`}
                  >
                    <div className="text-4xl mb-3">{skill.icon}</div>
                    <h3 className={`text-lg font-semibold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-800'
                    }`}>{skill.name}</h3>
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      isDark 
                        ? 'bg-gray-700 text-blue-400' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {skill.category}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Section */}
        <Portfolio isDark={isDark} />

        {/* Contact Section */}
        <section id="contact" className={`py-20 relative ${
          isDark ? 'bg-gray-800/50' : 'bg-white/50'
        } backdrop-blur-sm`}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-16">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`text-5xl font-bold mb-4 ${
                    isDark ? 'text-white' : 'text-gray-800'
                  }`}
                >
                  {t('nav.contact')}
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`w-24 h-1 mx-auto rounded-full ${
                    isDark ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gradient-to-r from-blue-600 to-purple-600'
                  }`}
                ></motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className={`text-xl mt-6 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {t('contact.subtitle')}
                </motion.p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  <div>
                    <h3 className={`text-2xl font-bold mb-6 ${
                      isDark ? 'text-white' : 'text-gray-800'
                    }`}>{t('contact.contactInfo')}</h3>
                    <div className="space-y-4">
                      {[
                        { icon: FaEnvelope, label: "E-posta", value: "kemal@example.com" },
                        { icon: FaGithub, label: "GitHub", value: "github.com/kemal" },
                        { icon: FaLinkedin, label: "LinkedIn", value: "linkedin.com/in/kemal38" }
                      ].map((contact, index) => (
                        <motion.div
                          key={contact.label}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className={`flex items-center gap-4 p-4 rounded-lg ${
                            isDark ? 'bg-gray-700/50' : 'bg-white/50'
                          } backdrop-blur-sm`}
                        >
                          <div className={`p-3 rounded-full ${
                            isDark ? 'bg-blue-600/20' : 'bg-blue-100'
                          }`}>
                            <contact.icon className={`text-xl ${
                              isDark ? 'text-blue-400' : 'text-blue-600'
                            }`} />
                          </div>
                          <div>
                            <div className={`font-semibold ${
                              isDark ? 'text-white' : 'text-gray-800'
                            }`}>{contact.label}</div>
                            <div className={`${
                              isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}>{contact.value}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div>
                    <h3 className={`text-2xl font-bold mb-6 ${
                      isDark ? 'text-white' : 'text-gray-800'
                    }`}>{t('contact.socialMedia')}</h3>
                    <div className="flex gap-4">
                      {[
                        { icon: FaGithub, href: "https://github.com", label: "GitHub" },
                        { icon: FaLinkedin, href: "https://www.linkedin.com/in/kemal38/", label: "LinkedIn" },
                        { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" }
                      ].map((social) => (
                        <motion.a
                          key={social.label}
                          whileHover={{ scale: 1.1, y: -3 }}
                          whileTap={{ scale: 0.9 }}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-4 rounded-full transition-all duration-300 ${
                            isDark 
                              ? 'bg-gray-700/50 text-gray-300 hover:text-white hover:bg-gray-600/50' 
                              : 'bg-white/50 text-gray-600 hover:text-blue-600 hover:bg-white/80'
                          } backdrop-blur-sm shadow-lg hover:shadow-xl`}
                          aria-label={social.label}
                        >
                          <social.icon className="text-2xl" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`p-8 rounded-2xl ${
                    isDark ? 'bg-gray-700/50' : 'bg-white/50'
                  } backdrop-blur-sm shadow-xl`}
                >
                  <h3 className={`text-2xl font-bold mb-6 ${
                    isDark ? 'text-white' : 'text-gray-800'
                  }`}>{t('contact.sendMessage')}</h3>
                  <form className="space-y-6">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {t('contact.form.name')}
                      </label>
                      <input
                        type="text"
                        placeholder={t('contact.form.namePlaceholder')}
                        className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                          isDark 
                            ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500'
                        }`}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {t('contact.form.email')}
                      </label>
                      <input
                        type="email"
                        placeholder={t('contact.form.emailPlaceholder')}
                        className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                          isDark 
                            ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500'
                        }`}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {t('contact.form.message')}
                      </label>
                      <textarea
                        placeholder={t('contact.form.messagePlaceholder')}
                        rows={4}
                        className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none ${
                          isDark 
                            ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500'
                        }`}
                      ></textarea>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <FaEnvelope />
                      {t('contact.form.sendButton')}
                    </motion.button>
                  </form>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
