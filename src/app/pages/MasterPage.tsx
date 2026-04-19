import { useLanguage } from "../context/LanguageContext";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { 
  Phone, Mail, Globe, Facebook, Instagram, 
  ChevronDown, GraduationCap, Briefcase, Award 
} from "lucide-react";

export default function MasterPage() {
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
      title: t("Комп’ютерна лінгвістика", "Computational Linguistics"),
      description: t("Програма передбачає комплексну підготовку фахівців у галузі філології, здатних використовувати англійську та інші мови з використанням інформаційних та комунікаційних технологій.", "Comprehensive training of philology specialists using English and ICT technologies."),
      career: t("Розробник NLP-систем, спеціаліст із машинного перекладу, лінгвіст-програміст.", "NLP developer, machine translation specialist, computational linguist."),
      isBoth: true 
    },
    {
      title: t("HR-менеджмент", "HR Management"),
      description: t("Підготовка магістрів менеджменту, спроможних до практичної та інноваційної діяльності у галузі кадрового менеджменту.", "Training masters of management for practical and innovative activities in HR."),
      career: t("HR-директор, рекрутер, коуч, менеджер із корпоративної культури.", "HR Director, recruiter, coach, corporate culture manager."),
      isBoth: false
    },
    {
      title: t("Управління IT-проєктами", "IT Project Management"),
      description: t("Надання знань та навичок, необхідних для успішного управління проєктами в сфері комп'ютерних технологій.", "Knowledge and skills for successful project management in computer technologies."),
      career: t("Project Manager (PM), Delivery Manager, Scrum Master в IT-компаніях.", "Project Manager (PM), Delivery Manager, Scrum Master in IT companies."),
      isBoth: false
    },
    {
      title: t("Культурологія: проєктна діяльність", "Cultural Studies: Project Activity"),
      description: t("Формування умінь щодо ефективного формування команди, бізнес планування та реалізації культурних проєктів.", "Team building, business planning, and implementation of cultural projects."),
      career: t("Арт-менеджер, куратор мистецьких проєктів, креативний директор.", "Art manager, art project curator, creative director."),
      isBoth: false
    },
    {
      title: t("Національна безпека", "National Security"),
      description: t("Підготовка фахівців для соціально-політичної, безпекової та аналітичної діяльності у сфері нацбезпеки.", "Specialists for socio-political, security, and analytical activities in national security."),
      career: t("Аналітик у державних структурах, радник із безпеки, експерт спецслужб.", "Analyst in state structures, security advisor, intelligence expert."),
      isBoth: true
    },
    {
      title: t("Початкова освіта", "Primary Education"),
      description: t("Ґрунтовні знання та практичні навички навчання учнів початкових класів із застосуванням новітніх методик.", "Deep knowledge and practical skills for primary school teaching using latest methods."),
      career: t("Завуч, розробник освітніх методик, методист у департаменті освіти.", "Head teacher, educational methodology developer, education department specialist."),
      isBoth: true
    },
    {
      title: t("Громадське здоров'я", "Public Health"),
      description: t("Вирішення складних теоретичних та практичних проблем у сфері біобезпеки та охорони здоров’я.", "Solving complex problems in biosafety and healthcare."),
      career: t("Керівник медичних установ, експерт ВООЗ, менеджер охорони здоров'я.", "Head of medical institutions, WHO expert, healthcare manager."),
      isBoth: true
    },
    {
      title: t("Психологія", "Psychology"),
      description: t("Компетентності для психологічної діяльності в освіті, медицині та консалтингових організаціях.", "Competencies for psychology in education, medicine, and consulting."),
      career: t("Практикуючий психотерапевт, кризовий психолог, бізнес-консультант.", "Practicing psychotherapist, crisis psychologist, business consultant."),
      isBoth: true
    },
    {
      title: t("Політологія", "Political Science"),
      description: t("Знання політичної теорії та практики, володіння аналітично-дослідницьким апаратом.", "Knowledge of political theory and practice with analytical research tools."),
      career: t("Політичний експерт, GR-менеджер, аналітик у партійних структурах.", "Political expert, GR manager, party structure analyst."),
      isBoth: true
    },
    {
      title: t("Журналістика", "Journalism"),
      description: t("Навички інформаційної діяльності у медіапросторі, дотримання професійних стандартів журналіста.", "Media space information skills and professional journalism standards."),
      career: t("Головний редактор, медіа-експерт, продюсер інформаційних програм.", "Editor-in-chief, media expert, news program producer."),
      isBoth: true
    },
    {
      title: t("Лінгвістична медіація. Англійська та друга іноземна мови", "Linguistic Mediation. English and Second Foreign Language"),
      description: t("Професійні навички роботи з текстами та здійснення міжнаціональної комунікації.", "Professional skills in text processing and international communication."),
      career: t("Дипломатичний перекладач, медіатор міжнародних конфліктів.", "Diplomatic interpreter, international conflict mediator."),
      isBoth: true
    },
    {
      title: t("Облік і оподаткування", "Accounting and Taxation"),
      description: t("Організація бухгалтерського обліку та аналізу діяльності з використанням сучасних ІТ-систем.", "Organization of accounting and analysis using modern IT systems."),
      career: t("Аудитор, податковий консультант, фінансовий директор (CFO).", "Auditor, tax consultant, Chief Financial Officer (CFO)."),
      isBoth: false
    },
    {
      title: t("Українська філологія: літературні та мовнокомунікативні студії", "Ukrainian Philology: Literary and Communication Studies"),
      description: t("Створення науково-дослідницьких концепцій із застосуванням інноваційних технологій.", "Creating research concepts using innovative technologies."),
      career: t("Літературознавець, копірайтер-експерт, викладач вищої школи.", "Literary scholar, expert copywriter, higher education lecturer."),
      isBoth: true
    },
    {
      title: t("Врядування, суспільна політика і комунікації", "Governance, Public Policy and Communications"),
      description: t("Здобуття інноваційних навичок у сфері врядування, що відповідають потребам України.", "Innovation skills in governance meeting the needs of Ukraine."),
      career: t("Аналітик публічної політики, фахівець із комунікацій у держорганах.", "Public policy analyst, communications specialist in government bodies."),
      isBoth: false
    },
    {
      title: t("Право", "Law"),
      description: t("Підготовка юристів з фундаментальними знаннями для практичної діяльності.", "Training lawyers with fundamental knowledge for practical work."),
      career: t("Суддя, адвокат, корпоративний юрист, прокурор.", "Judge, attorney, corporate lawyer, prosecutor."),
      isBoth: true
    },
    {
      title: t("Глобальний комунікаційний менеджмент", "Global Communication Management"),
      description: t("Розв’язання складних задач у площині міжнародних відносин та менеджменту.", "Solving complex tasks in international relations and management."),
      career: t("PR-стратег міжнародних брендів, спеціаліст із публічної дипломатії.", "International brand PR strategist, public diplomacy specialist."),
      isBoth: false
    },
    {
      title: t("Історія та археологія", "History and Archaeology"),
      description: t("Поглиблене вивчення історії України та формування педагогічних навичок.", "Advanced study of Ukrainian history and pedagogical skills."),
      career: t("Науковий співробітник, експерт із культурної спадщини, археолог-дослідник.", "Researcher, cultural heritage expert, archaeologist."),
      isBoth: true
    },
    {
      title: t("Міжнародні відносини", "International Relations"),
      description: t("Академічна мобільність, стажування у дипломатичних установах та перекладацькі компетентності.", "Academic mobility, diplomatic internships, and translation competencies."),
      career: t("Аташе, консул, аналітик міжнародних організацій (ООН, ЄС).", "Attache, consul, analyst for international organizations (UN, EU)."),
      isBoth: true
    },
    {
      title: t("Інформаційна аналітика та документні комунікації", "Information Analytics and Document Communications"),
      description: t("Управління інформаційними потоками та аналіз документних комунікацій у сучасному суспільстві.", "Information flow management and documentary communication analysis."),
      career: t("Керівник інформаційного відділу, архіваріус-аналітик, контент-стратег.", "Head of info department, archivist-analyst, content strategist."),
      isBoth: true
    },
    {
      title: t("Публічне управління та адміністрування", "Public Management and Administration"),
      description: t("Вироблення й аналіз публічної політики, методи збору даних для локального управління.", "Public policy production and analysis, data collection for local management."),
      career: t("Мер, голова ОТГ, державний секретар, адміністратор у ЦНАП.", "Mayor, head of hromada, state secretary, CNAP administrator."),
      isBoth: false
    },
    {
      title: t("Капеланське служіння", "Chaplaincy Service"),
      description: t("Спеціалізована підготовка для здійснення душпастирської опіки у різних інституціях.", "Specialized training for pastoral care in various institutions."),
      career: t("Військовий капелан, госпітальний капелан, консультант із духовної опіки.", "Military chaplain, hospital chaplain, spiritual care consultant."),
      isBoth: false
    },
    {
      title: t("Євроатлантичні студії", "Euro-Atlantic Studies"),
      description: t("Проєктно-орієнтоване навчання у галузі міжнародних відносин та регіональних студій.", "Project-oriented learning in international relations and regional studies."),
      career: t("Експерт із питань НАТО та ЄС, аналітик із питань безпеки.", "NATO and EU expert, security analyst."),
      isBoth: false
    },
    {
      title: t("Менеджмент продажів та логістика", "Sales Management and Logistics"),
      description: t("Дослідницька діяльність у галузі логістичного менеджменту з урахуванням вимог ринку.", "Research activities in logistics management considering market demands."),
      career: t("Supply Chain Manager, начальник відділу збуту, логіст-аналітик.", "Supply Chain Manager, sales department head, logistics analyst."),
      isBoth: false
    },
    {
      title: t("Фінанси та бізнес-аналітика", "Finance and Business Analytics"),
      description: t("Фінансовий аналіз на основі статистичних даних за допомогою ІТ-технологій.", "Financial analysis based on statistical data via IT technologies."),
      career: t("Фінансовий контролер, ризик-менеджер, бізнес-консультант.", "Financial controller, risk manager, business consultant."),
      isBoth: true
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <img 
          src="https://vstup.oa.edu.ua/assets/files/vstup/2024/mahistratura_2024.jpg" 
          className="w-full h-full object-cover"
          alt="Master 2025"
        />
        <div className="absolute inset-0 bg-blue-900/40 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold text-center px-4 drop-shadow-lg">
            {t("Магістратура 2025", "Master's Degree 2025")}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Column */}
        <div className="lg:col-span-1 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight text-blue-700">{t("Вступникам магістратури", "To Master Applicants")}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t(
                "Магістратура Острозької академії – це поглиблення ваших професійних знань та шлях до успішної кар'єри у науці чи управлінні.",
                "Ostroh Academy Master's programs offer deep professional knowledge and a path to a successful career."
              )}
            </p>
          </section>

          <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="font-bold mb-6 text-gray-800 border-b pb-2">{t("Консультації щодо вступу", "Admissions Consultations")}</h3>
            <div className="space-y-5">
              {contacts.map((c, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-blue-700 shrink-0 mt-1">
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
              <a key={i} href={s.link} target="_blank" rel="noreferrer" className="p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-blue-700 hover:text-white transition-all shadow-sm">
                <s.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Accordion */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-blue-700 rounded-full"></span>
            {t("Магістерські програми", "Master's Programs")}
          </h2>
          
          <div className="space-y-4">
            {programs.map((program, idx) => (
              <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:border-blue-200 transition-colors">
                <button 
                  onClick={() => setOpenProgram(openProgram === idx ? null : idx)}
                  className={`w-full flex items-center justify-between p-6 transition-colors text-left ${openProgram === idx ? 'bg-blue-50/50' : 'bg-white hover:bg-gray-50'}`}
                >
                  <div className="flex flex-col gap-1 pr-4">
                    <span className="text-lg font-bold text-gray-800">{program.title}</span>
                    {program.isBoth && (
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest flex items-center gap-1">
                        <Award size={12} /> {t("Бакалавр + Магістр", "Bachelor + Master")}
                      </span>
                    )}
                  </div>
                  <ChevronDown className={`shrink-0 transition-transform duration-300 ${openProgram === idx ? 'rotate-180 text-blue-700' : 'text-gray-400'}`} />
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
                        <div className="relative p-4 bg-gray-50 rounded-xl border-l-4 border-blue-700">
                           <p className="text-gray-700 leading-relaxed text-sm md:text-base">{program.description}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                            <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                              <GraduationCap size={18} className="text-blue-700" /> {t("Рівень освіти", "Degree Level")}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {t("Другий (магістерський) рівень вищої освіти. Форма навчання: денна/заочна.", "Second (Master's) level of higher education. Full-time/Part-time.")}
                            </p>
                          </div>

                          <div className="p-6 bg-blue-50/30 rounded-2xl border border-blue-100">
                            <h4 className="font-bold text-blue-800 mb-4 flex items-center gap-2">
                              <Briefcase size={18} className="text-blue-700" /> {t("Кар'єра", "Career")}
                            </h4>
                            <p className="text-sm text-blue-900">
                              {t("Керівні посади, наукова діяльність, аналітика та викладання у вищій школі.", "Management roles, research, analytics, and higher education teaching.")}
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