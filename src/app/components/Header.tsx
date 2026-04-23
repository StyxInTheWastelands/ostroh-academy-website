import { Link } from "react-router";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Menu, X, ChevronDown, Globe } from "lucide-react";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [universityDropdownOpen, setUniversityDropdownOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'uk' ? 'en' : 'uk');
  };

  const displayLang = (lang: string) => lang === 'uk' ? 'UA' : 'EN';

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors flex-shrink-0">
              <img 
                src="/logo.jpg" 
                alt="Ostroh Academy Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="hidden sm:block">
              <div className="font-bold text-lg text-foreground leading-tight group-hover:text-primary transition-colors">
                {t('Острозька академія', 'Ostroh Academy')}
              </div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
                {t('Національний університет', 'National University')}
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <div 
              className="relative py-4" 
              onMouseEnter={() => setUniversityDropdownOpen(true)}
              onMouseLeave={() => setUniversityDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 font-medium transition-colors ${
                  universityDropdownOpen ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                {t('Університет', 'University')}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${universityDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {universityDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white border border-border rounded-xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link to="/university/history" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-primary transition-colors">{t('Історія та сучасність', 'History and Present')}</Link>
                  <Link to="/university/rectorate" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-primary transition-colors">{t('Ректорат', 'Rectorate')}</Link>
                  <Link to="/university/management" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-primary transition-colors">{t('Органи управління', 'Management Bodies')}</Link>
                  <Link to="/university/museum" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-primary transition-colors">{t('Музей', 'Museum')}</Link>
                  <Link to="/university/news" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-primary transition-colors">{t('Новини та події', 'News and Events')}</Link>
                  <Link to="/public-info" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-primary transition-colors">{t('Публічна інформація', 'Public Information')}</Link>
                  <Link to="/university/contacts" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-primary transition-colors">{t('Контакти', 'Contacts')}</Link>
                </div>
              )}
            </div>

            <Link to="/institutes" className="font-medium text-foreground hover:text-primary transition-colors">{t('Інститути', 'Institutes')}</Link>
            <Link to="/admissions" className="font-medium text-foreground hover:text-primary transition-colors">{t('Вступ', 'Admissions')}</Link>
            <Link to="/science" className="font-medium text-foreground hover:text-primary transition-colors">{t('Наука', 'Science')}</Link>
            
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border hover:bg-gray-50 hover:border-primary transition-all"
            >
              <Globe className="w-4 h-4 text-primary" />
              <span className="uppercase font-bold text-xs">{displayLang(language)}</span>
            </button>
          </nav>

          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-8 space-y-4 border-t border-border mt-2 animate-in slide-in-from-top duration-300 overflow-y-auto max-h-[calc(100vh-100px)]">
            <div className="pt-4">
              <div className="font-bold mb-2 text-primary px-2 uppercase text-xs tracking-widest">
                {t('Університет', 'University')}
              </div>
              <div className="flex flex-col gap-1">
                <Link to="/university/history" className="py-2 px-4 text-foreground hover:bg-gray-50 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                  {t('Історія та сучасність', 'History and Present')}
                </Link>
                <Link to="/university/rectorate" className="py-2 px-4 text-foreground hover:bg-gray-50 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                  {t('Ректорат', 'Rectorate')}
                </Link>
                <Link to="/university/management" className="py-2 px-4 text-foreground hover:bg-gray-50 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                  {t('Органи управління', 'Management Bodies')}
                </Link>
                <Link to="/university/museum" className="py-2 px-4 text-foreground hover:bg-gray-50 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                  {t('Музей', 'Museum')}
                </Link>
                <Link to="/university/news" className="py-2 px-4 text-foreground hover:bg-gray-50 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                  {t('Новини та події', 'News and Events')}
                </Link>
                <Link to="/public-info" className="py-2 px-4 text-foreground hover:bg-gray-50 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                  {t('Публічна інформація', 'Public Information')}
                </Link>
                <Link to="/university/contacts" className="py-2 px-4 text-foreground hover:bg-gray-50 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                  {t('Контакти', 'Contacts')}
                </Link>
              </div>
            </div>

            <div className="h-px bg-border mx-2"></div>

            <div className="flex flex-col gap-1">
              <Link to="/institutes" className="py-3 px-4 font-bold text-foreground hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                {t('Інститути', 'Institutes')}
              </Link>
              <Link to="/admissions" className="py-3 px-4 font-bold text-foreground hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                {t('Вступ', 'Admissions')}
              </Link>
              <Link to="/science" className="py-3 px-4 font-bold text-foreground hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                {t('Наука', 'Science')}
              </Link>
            </div>
            
            <div className="pt-2 px-2">
              <button
                onClick={() => {
                  toggleLanguage();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 px-3 py-4 rounded-xl bg-primary text-white transition-colors w-full font-bold shadow-md shadow-primary/20"
              >
                <Globe className="w-5 h-5" />
                <span>{language === 'uk' ? 'English (EN)' : 'Українська (UA)'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}