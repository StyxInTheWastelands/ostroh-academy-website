import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'uk' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (uk: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // 1. Initialize state from localStorage if it exists, otherwise default to 'uk'
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('app_language');
    return (saved === 'en' || saved === 'uk') ? saved : 'uk';
  });

  // 2. Create a wrapper function that saves the choice to localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('app_language', lang);
  };

  // 3. Optional: Sync state if the user manually changes localStorage in another tab
  useEffect(() => {
    const handleStorageChange = () => {
      const saved = localStorage.getItem('app_language');
      if (saved === 'en' || saved === 'uk') {
        setLanguageState(saved);
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const t = (uk: string, en: string) => {
    return language === 'uk' ? uk : en;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}