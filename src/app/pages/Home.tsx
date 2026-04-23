import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router"; 
import { motion } from "motion/react"; 
import Slider from "react-slick";
import { 
  ChevronRight, 
  BookOpen, 
  Users, 
  Award, 
  GraduationCap, 
  MapPin, 
  History,
  Laptop,
  Globe,
  FileText
} from "lucide-react";

export default function Home() {
  const { t } = useLanguage();

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
  };

  const newsSlides = [
    {
      image: "https://images.unsplash.com/photo-1572810833916-e5e44570cb2e?auto=format&fit=crop&q=80&w=1920",
      titleUk: "День відкритих дверей 2026",
      titleEn: "Open House Day 2026",
      descUk: "Запрошуємо майбутніх студентів ознайомитися з нашим університетом",
      descEn: "We invite future students to explore our university",
    },
    {
      image: "https://images.unsplash.com/photo-1689255170275-34db529d1182?auto=format&fit=crop&q=80&w=1920",
      titleUk: "Випускники 2026 року",
      titleEn: "Graduates of 2026",
      descUk: "Вітаємо наших випускників з успішним завершенням навчання",
      descEn: "Congratulations to our graduates on successful completion of studies",
    },
  ];

  const institutes = [
    { 
      target: "/institutes#social-humanitarian",
      nameUk: "Інститут соціально-гуманітарного менеджменту", 
      nameEn: "Institute of Social and Humanitarian Management", 
      icon: Users 
    },
    { 
      target: "/institutes#international-relations",
      nameUk: "Інститут міжнародних відносин та нац. безпеки", 
      nameEn: "Institute of International Relations", 
      icon: Globe 
    },
    { 
      target: "/institutes#law",
      nameUk: "Інститут права ім. І. Малиновського", 
      nameEn: "I. Malinovskyi Institute of Law", 
      icon: BookOpen 
    },
    { 
      target: "/institutes#linguistics",
      nameUk: "Інститут лінгвістики", 
      nameEn: "Institute of Linguistics", 
      icon: GraduationCap 
    },
    { 
      target: "/institutes#it-business",
      nameUk: "Інститут ІТ та бізнесу", 
      nameEn: "Institute of IT and Business", 
      icon: Laptop 
    },
    { 
      target: "/public-info",
      nameUk: "Публічна інформація", 
      nameEn: "Public Information", 
      icon: FileText 
    },
  ];

  const historyHighlights = [
    { year: "1576", uk: "Заснування академії князем В-К. Острозьким", en: "Foundation by Prince K. Ostrozkyi" },
    { year: "1581", uk: "Видання першої повної слов'янської Біблії", en: "First complete Slavic Bible printed" },
    { year: "1994", uk: "Указ Президента про відродження академії", en: "Presidential decree on revival" },
    { year: "2000", uk: "Надання статусу Національного університету", en: "Granted National University status" },
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[600px] md:h-[800px] overflow-hidden">
        <Slider {...carouselSettings} className="h-full">
          {newsSlides.map((slide, index) => (
            <div key={index} className="relative h-[600px] md:h-[800px]">
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt="University"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-transparent" />
              </div>
              <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-2xl text-white"
                >
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    {t(slide.titleUk, slide.titleEn)}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-orange-50 font-light">
                    {t(slide.descUk, slide.descEn)}
                  </p>
                  <Link
                    to="/university/news"
                    className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-orange-500/40"
                  >
                    {t('Дізнатися більше', 'Learn more')}
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="relative z-20 -mt-16 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: t('Років', 'Years'), val: "450+", icon: History },
            { label: t('Студентів', 'Students'), val: "5000+", icon: Users },
            { label: t('Рейтинг', 'Ranking'), val: "Top 10", icon: Award },
            { label: t('Програм', 'Programs'), val: "30+", icon: BookOpen },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center text-center border-t-4 border-orange-500"
            >
              <stat.icon className="w-6 h-6 text-orange-500 mb-2" />
              <span className="text-3xl font-bold text-gray-800">{stat.val}</span>
              <span className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- HISTORY SECTION --- */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute bottom-0 right-[-100px] opacity-[0.07] pointer-events-none select-none">
          <svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 600V250L250 150L400 250V600H100Z" fill="#EA580C"/>
            <path d="M450 600V100L550 20L650 100V600H450Z" fill="#EA580C"/>
            <rect x="180" y="300" width="40" height="60" fill="white"/>
            <rect x="180" y="400" width="40" height="60" fill="white"/>
            <rect x="520" y="150" width="60" height="80" fill="white"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold mb-8 text-gray-900 border-l-8 border-orange-500 pl-6">
                {t('Перший університет Східної Європи', 'The First University in Eastern Europe')}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t(
                  'Національний університет «Острозька академія» — наступник першого вищого навчального закладу східнослов’янських народів. Ми поєднуємо традиції 16 століття з сучасними освітніми технологіями.',
                  'Ostroh Academy is the successor of the first higher education institution of the Eastern Slavic peoples. We blend 16th-century traditions with modern educational technologies.'
                )}
              </p>
              <Link to="/university/history" className="text-orange-600 font-bold flex items-center gap-2 hover:underline">
                {t('Читати повну історію', 'Read full history')} <ChevronRight size={20}/>
              </Link>
            </motion.div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-orange-100"></div>
              {historyHighlights.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-12 mb-10"
                >
                  <div className="absolute left-0 top-1 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white ring-4 ring-orange-50 shadow-md">
                    <History size={14} />
                  </div>
                  <span className="text-orange-600 font-bold text-lg">{item.year}</span>
                  <p className="text-gray-800 font-medium">{t(item.uk, item.en)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CAMPUS MAP --- */}
      <section className="py-24 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('Наш Кампус', 'Our Campus')}</h2>
          <p className="text-gray-600">{t('Знайдіть нас на карті міста Острог', 'Find us on the map of Ostroh')}</p>
        </div>

        <div className="max-w-5xl mx-auto px-4 relative">
          <div className="aspect-video bg-white rounded-3xl shadow-2xl border-8 border-white overflow-hidden relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.2403212871026!2d26.52627947690186!3d50.329240896350325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472f109268686f05%3A0x64747738221192e2!2z0J3QsNGG0ZbQvtC90LDQu9GM0L3QuNC5INGD0L3RltCy0LXRgNGB0LjRgtC10YIgwqvQntGB0YLRgNC-0LfRjNC60LAg0LDQutCw0LTQtdC80ZbRscK7!5e0!3m2!1suk!2sua!4v1710000000000!5m2!1suk!2sua" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125"
            ></iframe>

            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none">
              <div className="bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-orange-100 max-w-xs pointer-events-auto">
                <h4 className="font-bold text-orange-700">{t('Локація', 'Location')}</h4>
                <p className="text-xs text-gray-500">
                  {t('вул. Семінарська, 2, Острог, Рівненська область', '2 Seminarska St, Ostroh, Rivne Oblast')}
                </p>
              </div>
              
              <a 
                href="https://maps.app.goo.gl/wY6H16Kz8B5NfV9j9" 
                target="_blank" 
                rel="noreferrer"
                className="bg-orange-600 text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2 pointer-events-auto hover:bg-orange-700 transition-colors shadow-lg"
              >
                <MapPin size={18}/> {t('Відкрити в Google Maps', 'Open in Google Maps')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- INSTITUTES GRID --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">{t('Факультети та інститути', 'Faculties & Institutes')}</h2>
              <div className="w-20 h-1.5 bg-orange-500"></div>
            </div>
            <Link to="/institutes" className="text-orange-600 font-bold hidden md:block hover:underline">
              {t('Всі підрозділи', 'All Departments')} →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {institutes.map((inst, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="group bg-orange-50 rounded-3xl border border-orange-100 hover:bg-orange-600 transition-all duration-300 shadow-sm overflow-hidden"
              >
                <Link to={inst.target} className="block p-8 h-full">
                  <inst.icon className="w-12 h-12 text-orange-600 group-hover:text-white mb-6 transition-colors" />
                  <h3 className="text-xl font-bold mb-4 leading-snug group-hover:text-white transition-colors">
                    {t(inst.nameUk, inst.nameEn)}
                  </h3>
                  <div className="inline-flex items-center text-sm font-semibold text-orange-600 group-hover:text-white transition-colors">
                    {t('До сторінки', 'Visit page')} <ChevronRight size={16}/>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto bg-gray-900 rounded-[3rem] overflow-hidden relative">
          <div className="absolute inset-0 opacity-20">
             <img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe1?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Background" />
          </div>
          <div className="relative z-10 py-20 px-8 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              {t('Стань частиною живої історії', 'Become a Part of Living History')}
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
              {t('Вступна кампанія 2026 вже незабаром.', '2026 Admissions are coming soon.')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/admissions" className="bg-orange-600 text-white px-10 py-4 rounded-full font-bold hover:bg-orange-700 transition-colors">
                {t('Вступ 2026', 'Admissions 2026')}
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}