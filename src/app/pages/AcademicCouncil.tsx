import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";
import { 
  FileText, 
  Calendar, 
  Users, 
  ClipboardCheck, 
  Bell, 
  ArrowRight,
  Gavel,
  BookOpen,
  UserCheck,
  TrendingUp
} from "lucide-react";

export default function AcademicCouncil() {
  const { t } = useLanguage();

  // Quick Access Links
  const quickLinks = [
    {
      title: t('Положення про вчену раду', 'Regulations on Academic Council'),
      icon: Gavel,
      path: "#", // Add your link here
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: t('Плани роботи та звіти', 'Work Plans & Reports'),
      icon: Calendar,
      path: "#",
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: t('Оголошення', 'Announcements'),
      icon: Bell,
      path: "#",
      color: "bg-orange-50 text-orange-600"
    },
    {
      title: t('Члени вченої ради', 'Council Members'),
      icon: Users,
      path: "#",
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: t('Витяги із протоколів', 'Minutes of Meetings'),
      icon: ClipboardCheck,
      path: "#",
      color: "bg-rose-50 text-rose-600"
    }
  ];

  const functions = [
    {
      title: t('Освітня діяльність', 'Educational Activities'),
      icon: BookOpen,
      items: [
        t('Затвердження освітніх програм', 'Approval of educational programs'),
        t('Визначення форм навчання', 'Determining forms of education'),
        t('Присудження наукових ступенів', 'Awarding academic degrees')
      ]
    },
    {
      title: t('Кадрова політика', 'Personnel Policy'),
      icon: UserCheck,
      items: [
        t('Обрання професорсько-викладацького складу', 'Election of teaching staff'),
        t('Присвоєння вчених звань', 'Conferring academic titles'),
        t('Підвищення кваліфікації', 'Professional development')
      ]
    },
    {
      title: t('Стратегічний розвиток', 'Strategic Development'),
      icon: TrendingUp,
      items: [
        t('Затвердження стратегії розвитку', 'Approval of development strategy'),
        t('Контроль якості освіти', 'Quality control of education'),
        t('Оптимізація структури', 'Structure optimization')
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-100 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              {t('Вчена рада', 'Academic Council')}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t(
                'Колегіальний орган управління, що визначає стратегію розвитку Острозької академії та забезпечує високі стандарти академічної діяльності.',
                'A collegial management body that defines the development strategy of Ostroh Academy and ensures high standards of academic activity.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        {/* Quick Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {quickLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all group"
            >
              <div className={`w-12 h-12 ${link.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <link.icon size={24} />
              </div>
              <h3 className="font-bold text-gray-900 text-sm leading-tight">
                {link.title}
              </h3>
              <ArrowRight size={16} className="mt-4 text-gray-300 group-hover:text-orange-500 transition-colors" />
            </motion.a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-orange-500 rounded-full"></span>
                {t('Ключові напрямки роботи', 'Key Areas of Work')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {functions.map((func, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                    <div className="bg-gray-50 w-12 h-12 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                      <func.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{func.title}</h3>
                    <ul className="space-y-3">
                      {func.items.map((item, iIdx) => (
                        <li key={iIdx} className="text-gray-600 text-sm flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-orange-300 rounded-full mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-8">
            {/* Composition Stats Card */}
            <div className="bg-gray-900 text-white p-8 rounded-[2.5rem] shadow-xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full -mr-16 -mt-16" />
              <h3 className="text-xl font-bold mb-6 relative z-10">
                {t('Склад ради', 'Council Composition')}
              </h3>
              <div className="space-y-6 relative z-10">
                <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                  <span className="text-gray-400 text-sm">{t('Членів ради', 'Council members')}</span>
                  <span className="text-2xl font-bold text-orange-400">45+</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                  <span className="text-gray-400 text-sm">{t('Засідань на рік', 'Meetings per year')}</span>
                  <span className="text-2xl font-bold text-orange-400">12</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                  <span className="text-gray-400 text-sm">{t('Студентське представництво', 'Student quota')}</span>
                  <span className="text-2xl font-bold text-orange-400">15%</span>
                </div>
              </div>
              <p className="mt-8 text-xs text-gray-500 leading-relaxed italic">
                {t(
                  '* До складу входять ректор, проректори, декани та виборні представники.',
                  '* Includes rector, vice-rectors, deans, and elected representatives.'
                )}
              </p>
            </div>

            {/* Support Info */}
            <div className="bg-orange-100 p-8 rounded-[2.5rem] border border-orange-200">
              <h4 className="font-bold text-orange-900 mb-2">
                {t('Потрібна допомога?', 'Need Help?')}
              </h4>
              <p className="text-sm text-orange-800 mb-4">
                {t('Маєте питання щодо рішень вченої ради або графіку засідань?', 'Questions about decisions or meeting schedules?')}
              </p>
              <a href="mailto:oa@oa.edu.ua" className="inline-flex items-center gap-2 text-sm font-bold text-orange-900 hover:gap-3 transition-all">
                {t('Написати запит', 'Send a request')} <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}