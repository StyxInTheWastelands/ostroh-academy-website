import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">{t('Університет', 'University')}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/university/history" className="hover:text-primary transition-colors">{t('Історія', 'History')}</Link></li>
              <li><Link to="/university/museum" className="hover:text-primary transition-colors">{t('Музей', 'Museum')}</Link></li>
              <li><Link to="/university/management" className="hover:text-primary transition-colors">{t('Управління', 'Management')}</Link></li>
              <li><Link to="/university/news" className="hover:text-primary transition-colors">{t('Новини', 'News')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">{t('Навчання', 'Education')}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/institutes" className="hover:text-primary transition-colors">{t('Інститути', 'Institutes')}</Link></li>
              <li><Link to="/admissions" className="hover:text-primary transition-colors">{t('Вступ', 'Admissions')}</Link></li>
              <li><Link to="/science" className="hover:text-primary transition-colors">{t('Наука', 'Science')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">{t('Контакти', 'Contacts')}</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{t('вул. Семінарська, 2, м. Острог, 35800', '2 Seminarska St, Ostroh, 35800')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+380365422116" className="hover:text-primary transition-colors">+38 (03654) 2-21-16</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@oa.edu.ua" className="hover:text-primary transition-colors">info@oa.edu.ua</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">{t('Соціальні мережі', 'Social Media')}</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2026 {t('Національний університет «Острозька академія»', 'Ostroh Academy National University')}</p>
        </div>
      </div>
    </footer>
  );
}
