import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";
import { 
  BookOpen, Award, Users, TrendingUp, 
  Microscope, GraduationCap, Newspaper, 
  Globe, ChevronRight, FileDown, MessageSquare
} from "lucide-react";

export default function Science() {
  const { t } = useLanguage();

  // Quick Access Hub for the links you mentioned
  const scienceHub = [
    {
      title: t('Наукові заходи', 'Scientific Events'),
      desc: t('Конференції, семінари та круглі столи', 'Conferences, seminars, and roundtables'),
      icon: Microscope,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: t('Аспірантура та докторантура', 'Graduate Studies'),
      desc: t('Підготовка наукових кадрів вищої кваліфікації', 'Training of high-level scientific personnel'),
      icon: GraduationCap,
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      title: t('Наукові записки', 'Scientific Notes'),
      desc: t('Фаховий журнал Острозької академії', 'Ostroh Academy professional journal'),
      icon: Newspaper,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: t('Науковий блог', 'Research Blog'),
      desc: t('Думки та дослідження наших викладачів', 'Thoughts and research from our faculty'),
      icon: MessageSquare,
      color: "text-orange-600",
      bg: "bg-orange-50"
    },
    {
      title: t('Спеціалізовані вчені ради', 'Specialized Councils'),
      desc: t('Захист кандидатських та докторських дисертацій', 'Defense of PhD and Doctoral dissertations'),
      icon: Award,
      color: "text-rose-600",
      bg: "bg-rose-50"
    },
    {
      title: t('Наукові досягнення', 'Research Achievements'),
      desc: t('Нагороди, гранти та патенти університету', 'Awards, grants, and university patents'),
      icon: TrendingUp,
      color: "text-amber-600",
      bg: "bg-amber-50"
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#ea580c,transparent_70%)] opacity-30" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-bold mb-6">
              {t('Дослідницький університет', 'Research University')}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">
              {t('Наукова діяльність', 'Research Activities')}
            </h1>
            <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
              {t(
                'Національний університет «Острозька академія» має статус самоврядного (автономного) дослідницького національного вищого навчального закладу. В університеті функціонують наукові центри, лабораторії та спеціалізовані ради.',
                'Ostroh Academy National University holds the status of a self-governing (autonomous) research national higher educational institution. The university operates research centers, laboratories, and specialized councils.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: t('Публікацій', 'Publications'), val: '850+' },
            { label: t('Науковців', 'Researchers'), val: '250+' },
            { label: t('Проєктів', 'Projects'), val: '45+' },
            { label: t('Докторів', 'Doctors'), val: '120+' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 text-center">
              <div className="text-2xl font-bold text-gray-900">{stat.val}</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-24">
        {/* Science Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {scienceHub.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-[2rem] bg-gray-50 border border-transparent hover:border-orange-100 hover:bg-white hover:shadow-2xl hover:shadow-orange-500/5 transition-all cursor-pointer"
            >
              <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{item.desc}</p>
              <div className="flex items-center text-orange-600 font-bold text-sm">
                {t('Переглянути', 'Explore')} <ChevronRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Section: Status & Facilities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
            <img 
              src="https://www.oa.edu.ua/images/f/university_research.jpg" 
              alt="Research" 
              className="relative rounded-[3rem] shadow-2xl"
              onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1532094349884-543bb1195375?auto=format&fit=crop&q=80&w=1000" }}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t('Наукова інфраструктура', 'Research Infrastructure')}
            </h2>
            <div className="space-y-6">
              {[
                { title: t('Наукові центри', 'Research Centers'), text: t('Міждисциплінарні центри досліджень історії, релігієзнавства та права.', 'Interdisciplinary centers for research in history, religious studies, and law.') },
                { title: t('Лабораторії', 'Laboratories'), text: t('Сучасні лабораторії психології, кібербезпеки та журналістики.', 'Modern laboratories for psychology, cybersecurity, and journalism.') },
                { title: t('Бібліотека', 'Scientific Library'), text: t('Доступ до світових баз даних Scopus та Web of Science.', 'Access to global databases Scopus and Web of Science.') }
              ].map((point, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white text-[10px] font-bold mt-1">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{point.title}</h4>
                    <p className="text-gray-600 text-sm">{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 rounded-[3rem] p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6">
              {t('Наукові праці викладачів', 'Faculty Scientific Works')}
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              {t('Ознайомтеся з повним переліком монографій, статей та навчальних посібників наших науковців.', 'Check the full list of monographs, articles, and textbooks by our researchers.')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-2xl font-bold transition-all">
                <FileDown size={20} />
                {t('Завантажити реєстр праць', 'Download Works Registry')}
              </button>
              <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-bold border border-white/10 transition-all">
                <Globe size={20} />
                {t('Електронний репозитарій', 'Digital Repository')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}