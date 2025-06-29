import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Desteklenen diller
  locales: ['tr', 'en', 'de'],
  
  // Varsayılan dil
  defaultLocale: 'tr'
});

export const config = {
  // Tüm path'leri yakala
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}; 