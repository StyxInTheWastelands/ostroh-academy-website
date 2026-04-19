import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";
import { Book, History, GraduationCap, Award, Globe, Quote } from "lucide-react";

export default function UniversityHistory() {
  const { t } = useLanguage();

  const timelineData = [
    { year: "1576", uk: "Заснування академії князем Василем-Костянтином Острозьким.", en: "Foundation of the academy by Prince Vasyl-Kostiantyn Ostrozkyi." },
    { year: "1581", uk: "Видання Острозької Біблії — першої повної слов’яномовної Біблії.", en: "Publication of the Ostroh Bible — the first complete Slavic Bible." },
    { year: "1636", uk: "Припинення діяльності академії через єзуїтську експансію.", en: "The academy ceased operations due to Jesuit expansion." },
    { year: "1994", uk: "Указ Президента України про відродження Острозької академії.", en: "Presidential Decree on the revival of Ostroh Academy." },
    { year: "2000", uk: "Отримання статусу Національного університету.", en: "Granted the status of National University." },
    { year: "2014", uk: "Внесення до Книги рекордів Гіннеса за найдовший поетичний марафон.", en: "Entered Guinness World Records for the longest poetry marathon." },
    { year: "2019", uk: "Відкриття нового сучасного навчального корпусу в центрі міста.", en: "Opening of the new modern academic building in the city center." },
  ];

  return (
    <div className="bg-white">
      {/* 1. IMPACT HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gray-900">
        <img 
          src="https://www.ukraine-is.com/wp-content/uploads/2016/08/355739_2.jpeg" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          alt="Ostroh Academy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        <div className="relative z-10 text-center px-4">
          <motion.span 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-500 font-bold uppercase tracking-[0.3em] mb-4 block"
          >
            {t('З 1576 року', 'Since 1576')}
          </motion.span>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
          >
            {t('Історія та сучасність', 'History and Present')}
          </motion.h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        
        {/* 2. THE FOUNDATION (Split Layout) */}
        <section className="bg-white shadow-2xl rounded-3xl overflow-hidden mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-16">
              <div className="flex items-center gap-2 text-orange-600 mb-6">
                <History size={24} />
                <span className="font-bold uppercase tracking-wider">{t('Витоки', 'The Origins')}</span>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 leading-tight">
                {t('Перший вищий навчальний заклад Східної Європи', 'The First Higher Education Institution of Eastern Europe')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t(
                  'Заснована у 1576 році князем Василем-Костянтином Острозьким, академія стала центром українського ренесансу. Тут уперше поєдналися візантійська та західноєвропейська культури.',
                  'Founded in 1576 by Prince Vasyl-Kostiantyn Ostrozkyi, the academy became the center of the Ukrainian Renaissance, merging Byzantine and Western European cultures.'
                )}
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 italic text-gray-700">
                <Quote className="text-orange-200 mb-2" size={32} />
                {t(
                  'Спудеї опановували сім вільних наук та п’ять мов: слов’янську, польську, давньоєврейську, грецьку та латинську.',
                  'Students mastered the seven liberal arts and five languages: Slavic, Polish, Hebrew, Greek, and Latin.'
                )}
              </div>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800" 
                className="absolute inset-0 w-full h-full object-cover"
                alt="Library"
              />
            </div>
          </div>
        </section>

        {/* 3. KEY FIGURES (Cards) */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t('Видатні постаті', 'Prominent Figures')}</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: t('Герасим Смотрицький', 'Herasym Smotrytskyi'), role: t('Перший ректор', 'First Rector') },
              { name: t('Іван Федоров', 'Ivan Fedorov'), role: t('Друкар Острозької Біблії', 'Printer of the Ostroh Bible') },
              { name: t('Гальшка Острозька', 'Halshka Ostrozka'), role: t('Меценатка академії', 'Patron of the Academy') }
            ].map((person, i) => (
              <div key={i} className="text-center p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center text-orange-600">
                  <GraduationCap size={32} />
                </div>
                <h4 className="text-xl font-bold">{person.name}</h4>
                <p className="text-gray-500">{person.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. THE CHRONICLE (Interactive Timeline) */}
        <section className="mb-32 py-16 bg-gray-50 rounded-[3rem] px-8">
          <h2 className="text-3xl font-bold text-center mb-20">{t('Хроніка відродження', 'Chronicle of Revival')}</h2>
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-orange-200" />
            
            {timelineData.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className={`relative flex items-center mb-12 md:justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="hidden md:block w-5/12" />
                <div className="z-10 absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 bg-white border-4 border-orange-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full" />
                </div>
                <div className="ml-16 md:ml-0 md:w-5/12 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <span className="text-orange-600 font-bold text-xl mb-2 block">{item.year}</span>
                  <p className="text-gray-700">{t(item.uk, item.en)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. MODERN ACHIEVEMENTS (Grid) */}
        <section className="pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">{t('Сучасне визнання', 'Modern Recognition')}</h2>
              <div className="space-y-6">
                {[
                  { icon: Award, text: t('Член Європейської асоціації університетів', 'Member of the European University Association') },
                  { icon: Globe, text: t('Топ-10 прозорих університетів України', 'Top 10 most transparent universities in Ukraine') },
                  { icon: Book, text: t('Дослідницький статус (самоврядний ВНЗ)', 'Research status (autonomous HEI)') }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="bg-orange-600 p-2 rounded-lg text-white">
                      <item.icon size={20} />
                    </div>
                    <p className="text-lg text-gray-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-lg mt-8" alt="Campus 1" />
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-lg" alt="Campus 2" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}