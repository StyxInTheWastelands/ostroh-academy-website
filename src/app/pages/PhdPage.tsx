import { useLanguage } from "../context/LanguageContext";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { 
  Phone, Mail, Globe, Facebook, Instagram, 
  ChevronDown, Microscope, BookOpen, Award 
} from "lucide-react";

export default function PhdPage() {
  const { t } = useLanguage();
  const [openProgram, setOpenProgram] = useState<number | null>(null);

  const contacts = [
    { icon: Phone, text: "0975537410", label: t("Приймальна комісія", "Admissions Office") },
    { icon: Phone, text: "0679157712", label: t("Ольга Кривицька — відп. секретар ПК", "Olga Kryvytska — Secretary of Admissions") },
    { icon: Mail, text: "vstup@oa.edu.ua", label: "Email" },
  ];

  const socialLinks = [
    { icon: Globe, link: "https://vstup.oa.edu.ua/", name: "Website" },
    { icon: Facebook, link: "https://www.facebook.com/vstupoa/", name: "Facebook" },
    { icon: Instagram, link: "https://www.instagram.com/abiturient_oa/", name: "Instagram" },
  ];

const programs = [
    {
      title: t("ОНП 'РЕЛІГІЄЗНАВСТВО'", "EPP 'RELIGIOUS STUDIES'"),
      code: t("Спеціальність 031 'Релігієзнавство'", "Specialty 031 'Religious Studies'"),
      description: t("Підготовка науково-педагогічних кадрів, здатних до комплексного аналізу релігійних феноменів та міжконфесійних діалогів.", "Training of scientific and pedagogical staff capable of comprehensive analysis of religious phenomena and interfaith dialogues."),
      career: t("Науковий співробітник, експерт із релігійних питань, викладач ЗВО.", "Research fellow, religious affairs expert, university lecturer.")
    },
    {
      title: t("ОНП 'ІСТОРІЯ ТА АРХЕОЛОГІЯ'", "EPP 'HISTORY AND ARCHAEOLOGY'"),
      code: t("Спеціальність 032 'Історія та археологія'", "Specialty 032 'History and Archaeology'"),
      description: t("Глибоке дослідження історичних процесів та проведення археологічних розвідок з використанням сучасних методологій.", "In-depth research of historical processes and archaeological surveys using modern methodologies."),
      career: t("Дослідник-історик, керівник археологічних експедицій, аналітик.", "Historian researcher, head of archaeological expeditions, analyst.")
    },
    {
      title: t("ОНП 'ФІЛОСОФІЯ'", "EPP 'PHILOSOPHY'"),
      code: t("Спеціальність 033 'Філософія'", "Specialty 033 'Philosophy'"),
      description: t("Розвиток критичного мислення та аналіз фундаментальних проблем людського буття, культури та суспільства.", "Development of critical thinking and analysis of fundamental problems of human existence, culture, and society."),
      career: t("Філософ-аналітик, політичний консультант, етичний експерт.", "Philosophical analyst, political consultant, ethics expert.")
    },
    {
      title: t("ОНП 'ФІЛОЛОГІЯ'", "EPP 'PHILOLOGY'"),
      code: t("Спеціальність 035 'Філологія'", "Specialty 035 'Philology'"),
      description: t("Наукові дослідження у сфері лінгвістики, літературознавства та перекладознавства.", "Scientific research in the fields of linguistics, literary studies, and translation studies."),
      career: t("Доктор філософії з філології, літературний критик, редактор наукових видань.", "PhD in Philology, literary critic, editor of scientific publications.")
    },
    {
      title: t("ОНП 'ПОЛІТОЛОГІЯ'", "EPP 'POLITICAL SCIENCE'"),
      code: t("Спеціальність 052 'Політологія'", "Specialty 052 'Political Science'"),
      description: t("Аналіз політичних систем, процесів та інститутів на національному та міжнародному рівнях.", "Analysis of political systems, processes, and institutions at national and international levels."),
      career: t("Політичний радник, аналітик think-tank центрів, стратег.", "Political advisor, think-tank analyst, strategist.")
    },
    {
      title: t("ОНП 'МІЖНАРОДНІ ВІДНОСИНИ'", "EPP 'INTERNATIONAL RELATIONS'"),
      code: t("Спеціальність 291 'Міжнародні відносини'", "Specialty 291 'International Relations'"),
      description: t("Дослідження глобальної політики, дипломатії та міжнародної безпеки в умовах глобалізації.", "Research in global politics, diplomacy, and international security in the context of globalization."),
      career: t("Експерт-міжнародник, дипломатичний радник, науковець у сфері безпеки.", "International affairs expert, diplomatic advisor, security researcher.")
    },
    {
      title: t("ОНП 'ПСИХОЛОГІЯ'", "EPP 'PSYCHOLOGY'"),
      code: t("Спеціальність 053 'Психологія'", "Specialty 053 'Psychology'"),
      description: t("Експериментальні та теоретичні дослідження психічних процесів, станів та властивостей особистості.", "Experimental and theoretical research of mental processes, states, and personality traits."),
      career: t("Дослідник у сфері психології, розробник психометричних тестів, коуч.", "Psychology researcher, psychometric test developer, coach.")
    },
    {
      title: t("ОНП 'МЕНЕДЖМЕНТ'", "EPP 'MANAGEMENT'"),
      code: t("Спеціальність 073 'Менеджмент'", "Specialty 073 'Management'"),
      description: t("Наукове обґрунтування стратегій управління організаціями в сучасних економічних умовах.", "Scientific justification of organizational management strategies in modern economic conditions."),
      career: t("Топ-менеджер, бізнес-дослідник, консультант зі стратегічного розвитку.", "Top manager, business researcher, strategic development consultant.")
    },
    {
      title: t("ОНП 'ПРАВО'", "EPP 'LAW'"),
      code: t("Спеціальність 081 'Право'", "Specialty 081 'Law'"),
      description: t("Вивчення актуальних проблем правової системи, законотворчості та правозастосування.", "Studying current problems of the legal system, lawmaking, and law enforcement."),
      career: t("Науковець-юрист, експерт із законотворчості, суддя-дослідник.", "Legal scholar, lawmaking expert, research judge.")
    },
    {
      title: t("ОНП 'ГРОМАДСЬКЕ ЗДОРОВ'Я'", "EPP 'PUBLIC HEALTH'"),
      code: t("Спеціальність 229 'Громадське здоров'я'", "Specialty 229 'Public Health'"),
      description: t("Наукова робота у сфері епідеміології, менеджменту охорони здоров'я та біостатистики.", "Scientific work in epidemiology, healthcare management, and biostatistics."),
      career: t("Дослідник систем охорони здоров'я, консультант з біобезпеки.", "Healthcare systems researcher, biosafety consultant.")
    },
    {
      title: t("ОНП 'ПРИКЛАДНА МАТЕМАТИКА'", "EPP 'APPLIED MATHEMATICS'"),
      code: t("Спеціальність 113 'Прикладна математика'", "Specialty 113 'Applied Mathematics'"),
      description: t("Математичне моделювання складних систем та розробка інтелектуальних алгоритмів.", "Mathematical modeling of complex systems and development of intelligent algorithms."),
      career: t("Data Scientist (Senior level), математик-дослідник, розробник AI.", "Data Scientist (Senior), research mathematician, AI developer.")
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <img 
          src="https://i.pinimg.com/736x/6a/1b/76/6a1b763618824d43fa3771ea63ab8daf.jpg" 
          className="w-full h-full object-cover"
          alt="PhD 2025"
        />
        <div className="absolute inset-0 bg-gray-900/60 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold text-center px-4 drop-shadow-lg">
            {t("Аспірантура 2025", "Doctoral Studies (PhD) 2025")}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Column */}
        <div className="lg:col-span-1 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight text-gray-800">{t("Майбутнім докторам філософії", "To Future PhDs")}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t(
                "Аспірантура НаУОА — це середовище для інтелектуального зростання та створення інноваційних наукових знань. Станьте частиною наукової еліти України.",
                "PhD studies at Ostroh Academy is an environment for intellectual growth and the creation of innovative scientific knowledge."
              )}
            </p>
          </section>

          <div className="bg-gray-50 p-6 rounded-3xl border border-gray-200 shadow-sm">
            <h3 className="font-bold mb-6 text-gray-800 border-b pb-2">{t("Консультації", "Consultations")}</h3>
            <div className="space-y-5">
              {contacts.map((c, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-gray-700 shrink-0 mt-1">
                    <c.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{c.label}</p>
                    <p className="font-bold text-gray-800 text-sm md:text-base">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((s, i) => (
              <a key={i} href={s.link} target="_blank" rel="noreferrer" className="p-4 bg-gray-50 rounded-2xl border border-gray-200 hover:bg-gray-800 hover:text-white transition-all shadow-sm">
                <s.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: PhD Programs */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-gray-800 rounded-full"></span>
            {t("Наукові напрями", "Scientific Fields")}
          </h2>
          
          <div className="space-y-4">
            {programs.map((program, idx) => (
              <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:border-gray-400 transition-colors">
                <button 
                  onClick={() => setOpenProgram(openProgram === idx ? null : idx)}
                  className={`w-full flex items-center justify-between p-6 transition-colors text-left ${openProgram === idx ? 'bg-gray-100' : 'bg-white hover:bg-gray-50'}`}
                >
                  <div className="flex flex-col gap-1 pr-4">
                    <span className="text-lg font-extrabold text-gray-900">{program.title}</span>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">{program.code}</span>
                  </div>
                  <ChevronDown className={`shrink-0 transition-transform duration-300 ${openProgram === idx ? 'rotate-180 text-gray-900' : 'text-gray-400'}`} />
                </button>

                <AnimatePresence>
                  {openProgram === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-white"
                    >
                      <div className="p-8 pt-2 space-y-6">
                        <div className="relative p-4 bg-gray-50 rounded-xl border-l-4 border-gray-800">
                           <p className="text-gray-700 leading-relaxed text-sm md:text-base italic">"{program.description}"</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                            <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                              <BookOpen size={18} className="text-gray-800" /> {t("Рівень освіти", "Degree Level")}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {t("Третій (освітньо-науковий) рівень вищої освіти. Ступінь: Доктор філософії (PhD).", "Third (educational-scientific) level of higher education. Degree: Doctor of Philosophy (PhD).")}
                            </p>
                          </div>

                          <div className="p-6 bg-gray-900 rounded-2xl border border-gray-800 text-white">
                            <h4 className="font-bold text-gray-100 mb-4 flex items-center gap-2">
                              <Award size={18} className="text-orange-400" /> {t("Наукові перспективи", "Scientific Prospects")}
                            </h4>
                            <p className="text-sm text-gray-300 font-medium leading-relaxed">
                              {program.career}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}