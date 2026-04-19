import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";

export default function Contacts() {
  const { t } = useLanguage();

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            {t('Контакти', 'Contacts')}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                  {t('Контактна інформація', 'Contact Information')}
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{t('Адреса', 'Address')}</h3>
                      <p className="text-gray-600">
                        {t(
                          'вул. Семінарська, 2, м. Острог, Рівненська область, 35800, Україна',
                          '2 Seminarska St, Ostroh, Rivne Region, 35800, Ukraine'
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{t('Телефон', 'Phone')}</h3>
                      <div className="space-y-1">
                        <a href="tel:+380365422116" className="block text-gray-600 hover:text-primary transition-colors">
                          +38 (03654) 2-21-16
                        </a>
                        <a href="tel:+380365422117" className="block text-gray-600 hover:text-primary transition-colors">
                          +38 (03654) 2-21-17
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{t('Електронна пошта', 'Email')}</h3>
                      <div className="space-y-1">
                        <a href="mailto:info@oa.edu.ua" className="block text-gray-600 hover:text-primary transition-colors">
                          info@oa.edu.ua
                        </a>
                        <a href="mailto:vstup@oa.edu.ua" className="block text-gray-600 hover:text-primary transition-colors">
                          vstup@oa.edu.ua {t('(приймальна комісія)', '(admissions)')}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{t('Графік роботи', 'Working Hours')}</h3>
                      <p className="text-gray-600">
                        {t('Понеділок - П\'ятниця: 8:00 - 17:00', 'Monday - Friday: 8:00 AM - 5:00 PM')}
                      </p>
                      <p className="text-gray-600">
                        {t('Субота - Неділя: Вихідні', 'Saturday - Sunday: Closed')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Соціальні мережі з робочими посиланнями */}
              <div>
                <h2 className="text-2xl font-bold mb-6">{t('Ми у соцмережах', 'Follow Us')}</h2>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/oa.edu.ua/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700 hover:bg-[#1877F2] hover:text-white transition-all shadow-sm"
                  >
                    <Facebook className="w-7 h-7" />
                  </a>
                  <a
                    href="https://www.instagram.com/ostrohacademy1576/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700 hover:bg-[#E4405F] hover:text-white transition-all shadow-sm"
                  >
                    <Instagram className="w-7 h-7" />
                  </a>
                  <a
                    href="https://www.youtube.com/user/oaedu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700 hover:bg-[#FF0000] hover:text-white transition-all shadow-sm"
                  >
                    <Youtube className="w-7 h-7" />
                  </a>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                <h3 className="font-bold mb-3 text-primary">{t('Приймальна комісія', 'Admissions Office')}</h3>
                <p className="text-gray-700 mb-2">
                  {t('Графік роботи під час вступної кампанії:', 'Working hours during admissions:')}
                </p>
                <p className="text-gray-900 font-semibold">
                  {t('Щодня: 9:00 - 18:00', 'Daily: 9:00 AM - 6:00 PM')}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                {t('Як нас знайти', 'How to Find Us')}
              </h2>
              <div className="rounded-2xl overflow-hidden h-[450px] shadow-lg border border-gray-100 relative bg-gray-50">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2546.9977139053217!2d26.512581899999994!3d50.329293899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472f002fe4d3ce7d%3A0xb3fcc686230552b5!2z0J3QsNGG0ZbQvtC90LDQu9GM0L3QuNC5INGD0L3RltCy0LXRgNGB0LjRgtC10YIgwqvQntGB0YLRgNC-0LfRjNC60LAg0LDQutCw0LTQtdC80ZbRj8K7!5e0!3m2!1suk!2spl!4v1776614883458!5m2!1suk!2spl" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ostroh Academy Map"
                ></iframe>
              </div>

              
              
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}