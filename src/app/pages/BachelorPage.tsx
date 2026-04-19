import { useLanguage } from "../context/LanguageContext";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { 
  Phone, Mail, Globe, Facebook, Instagram, 
  ChevronDown, GraduationCap, Briefcase 
} from "lucide-react";

export default function BachelorPage() {
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
      title: t("Інформаційна діяльність та цифрові документні ресурси", "Information Activity and Digital Document Resources"),
      description: t("Акцент на здатності забезпечувати управління процесами збору, аналізу та поширення документно-інформаційних ресурсів через різні соціальні комунікації для розвитку економіки, політики, медіапростору країни рідною та іноземними мовами.", "Focus on the ability to manage the processes of collection, analysis, and dissemination of document and information resources through various social communications."),
      jobs: [t("SMM-менеджер", "SMM Manager"), t("Аналітик інформації", "Information Analyst")]
    },
    {
      title: t("Початкова освіта з поглибленим вивченням англійської мови", "Primary Education with Intensive English"),
      description: t("Формуються ґрунтовні знання та практичні навички навчання та виховання учнів початкових класів із застосуванням новітніх методик.", "Fundamental knowledge and practical skills for teaching primary school students using the latest methods."),
      jobs: [t("Вчитель початкових класів", "Primary School Teacher"), t("Вчитель англійської мови", "English Teacher")]
    },
    {
      title: t("Журналістика", "Journalism"),
      description: t("Програма надасть навички інформаційно-комунікаційної діяльності у медіапросторі України і світу, продуктивно виконувати професійно-прикладні завдання у сфері соціальних комунікацій.", "Skills for information and communication activities in the media space of Ukraine and the world."),
      jobs: [t("Журналіст", "Journalist"), t("Редактор", "Editor"), t("Кореспондент", "Correspondent")]
    },
    {
      title: t("Міжнародний туризм", "International Tourism"),
      description: t("Програма забезпечує глибоке вивчення міжнародного туристичного ринку з наголосом на Європейський туристичний макрорегіон та фундаментальну перекладацьку складову.", "In-depth study of the international tourism market with an emphasis on the European macro-region and translation skills."),
      jobs: [t("Менеджер з туризму", "Tourism Manager"), t("Гід-перекладач", "Guide-Interpreter")]
    },
    {
      title: t("DATA-маркетинг та аналітика", "DATA Marketing and Analytics"),
      description: t("Підготовка бакалаврів маркетингу, які володіють сучасним економічним мисленням та компетентностями з використанням економіко-математичних методів аналізу та прогнозування.", "Training marketing bachelors with modern economic thinking and competencies in mathematical analysis and forecasting."),
      jobs: [t("Маркетолог-аналітик", "Marketing Analyst"), t("Data-спеціаліст", "Data Specialist")]
    },
    {
      title: t("Програмування роботизованих систем (Робототехніка)", "Robotic Systems Programming (Robotics)"),
      description: t("Програма спрямована на формування глибоких теоретичних знань та передових практичних навичок у сфері розробки, програмування та управління роботизованими системами.", "Deep theoretical knowledge and advanced practical skills in the development, programming, and management of robotic systems."),
      jobs: [t("Інженер-робототехнік", "Robotics Engineer"), t("Програміст мікроконтролерів", "Microcontroller Programmer")]
    },
    {
      title: t("Психологія", "Psychology"),
      description: t("Підготовка фахівців для провадження психологічної діяльності у сфері освіти, охорони здоров’я, управління та психологічної допомоги населенню.", "Training specialists for psychological activities in education, healthcare, management, and public assistance."),
      jobs: [t("Психолог-консультант", "Psychological Consultant"), t("HR-менеджер", "HR Manager")]
    },
    {
      title: t("Реклама та PR", "Advertising and PR"),
      description: t("Тут готують фахівців-практиків у сфері соціальних комунікацій. Студентів навчають створювати та реалізовувати якісний медіапродукт, зокрема рекламні та піар кампанії.", "Practical specialists in social communications, creating high-quality media products, advertising, and PR campaigns."),
      jobs: [t("PR-менеджер", "PR Manager"), t("Копірайтер", "Copywriter"), t("Креативний директор", "Creative Director")]
    },
    {
      title: t("Підприємництво та управління бізнесом", "Entrepreneurship and Business Management"),
      description: t("Підготовка конкурентоспроможного фахівця з базою практичних навичок розробки бізнес-ідей та організації підприємницької діяльності.", "Training competitive specialists with practical skills in business idea development and organization."),
      jobs: [t("Бізнес-аналітик", "Business Analyst"), t("Керівник малого бізнесу", "Small Business Manager")]
    },
    {
      title: t("Українська мова, література, комунікація", "Ukrainian Language, Literature, Communication"),
      description: t("Підготувати компетентісно ерудованих фахівців, здатних розв’язувати складні завдання в галузі української філології.", "Training erudite specialists capable of solving complex tasks in the field of Ukrainian philology."),
      jobs: [t("Філолог", "Philologist"), t("Літературний редактор", "Literary Editor")]
    },
    {
      title: t("Комп'ютерна лінгвістика. Англійська та німецька/французька мови", "Computational Linguistics. English and German/French"),
      description: t("Програма включає навички спілкування іноземними мовами та розв’язання задач у мовознавчій галузі з використанням комп’ютерних технологій.", "Skills in foreign languages and solving linguistic problems using computer technologies."),
      jobs: [t("Розробник мовних моделей", "Language Model Developer"), t("Технічний перекладач", "Technical Translator")]
    },
    {
      title: t("Фінанси та бізнес-аналітика", "Finance and Business Analytics"),
      description: t("Підготовка фахівців, спроможних здійснювати комплексний фінансовий аналіз на основі обробки великих даних за допомогою ІТ-технологій.", "Comprehensive financial analysis based on Big Data processing using IT technologies."),
      jobs: [t("Фінансовий аналітик", "Financial Analyst"), t("Інвестиційний консультант", "Investment Consultant")]
    },
    {
      title: t("Англійська та друга іноземна мови. Переклад", "English and Second Foreign Language. Translation"),
      description: t("Програма передбачає набуття професійних навичок багатоаспектної роботи з різними типами текстів та здійснення міжкультурної комунікації.", "Professional skills in working with various texts and conducting intercultural communication."),
      jobs: [t("Перекладач", "Translator"), t("Міжнародний менеджер", "International Manager")]
    },
    {
      title: t("Громадське здоров'я", "Public Health"),
      description: t("Підготовка фахівця, який спроможний вирішувати складні проблеми у сфері біобезпеки, охорони громадського здоров’я та довкілля.", "Solving complex problems in biosafety, public health protection, and environment."),
      jobs: [t("Фахівець з оздоровлення", "Health Specialist"), t("Еко-аналітик", "Eco-Analyst")]
    },
    {
      title: t("Міжнародні відносини", "International Relations"),
      description: t("Вивчення окремих компонент англійською мовою, стажування у дипломатичних установах та міжнародних організаціях.", "English-language components, internships in diplomatic missions and international organizations."),
      jobs: [t("Дипломат", "Diplomat"), t("Аналітик-міжнародник", "International Analyst")]
    },
    {
      title: t("Національна безпека", "National Security"),
      description: t("Забезпечити публічний сектор фахівцями для безпекової, оборонної, аналітичної діяльності та адміністрування у сфері нацбезпеки.", "Specialists for security, defense, analysis, and administration in national security."),
      jobs: [t("Аналітик безпеки", "Security Analyst"), t("Державний службовець", "Civil Servant")]
    },
    {
      title: t("Політологія", "Political Science"),
      description: t("Підготовка фахівців-політологів, які володіють аналітично-дослідницьким апаратом політичної науки, теорії та практики.", "Training political scientists with analytical and research tools for political theory and practice."),
      jobs: [t("Політтехнолог", "Political Strategist"), t("Політичний оглядач", "Political Commentator")]
    },
    {
      title: t("Право", "Law"),
      description: t("Підготовка висококваліфікованих юристів, що володіють фундаментальними знаннями та навичками і здатні застосовувати їх на практиці.", "Training highly qualified lawyers with fundamental knowledge and practical application skills."),
      jobs: [t("Юрист", "Lawyer"), t("Адвокат", "Attorney"), t("Нотаріус", "Notary")]
    },
    {
      title: t("Комп’ютерні науки", "Computer Science"),
      description: t("Спеціальна освіта в галузі ІТ: проектування, верифікація, тестування ПЗ, інформаційні системи та управління проектами.", "IT education: design, verification, software testing, information systems, and project management."),
      jobs: [t("Software Engineer", "Software Engineer"), t("System Architect", "System Architect")]
    },
    {
      title: t("Кіберкультура", "Cyberculture"),
      description: t("Підготовка фахівців в ІТ-середовищі: інтернет-маркетинг, онлайн навчання, відеоблогінг, створення відеоігор.", "IT-environment specialists: internet marketing, online learning, video blogging, game development."),
      jobs: [t("Game Designer", "Game Designer"), t("Content Creator", "Content Creator")]
    },
    {
      title: t("Історія та археологія", "History and Archaeology"),
      description: t("Спеціальна освіта з фокусом на поглиблене вивчення історії України та формування педагогічних навичок.", "History education with a focus on Ukraine's history and pedagogical skills."),
      jobs: [t("Історик", "Historian"), t("Археолог", "Archaeologist"), t("Гідо-екскурсовод", "Guide")]
    },
    {
      title: t("Міжнародне регіонознавство", "International Regional Studies"),
      description: t("Підготовка компетентних у галузі міжнародних відносин, регіональних студій і міжнародного туризму фахівців.", "Specialists in international relations, regional studies, and international tourism."),
      jobs: [t("Експерт з регіонального розвитку", "Regional Development Expert"), t("Міжнародний консультант", "International Consultant")]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <img 
          src="https://vstup.oa.edu.ua/assets/files/vstup/2024/bakalavrat_2024.jpg" 
          className="w-full h-full object-cover"
          alt="Bachelor 2025"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold text-center px-4 drop-shadow-lg">
            {t("Бакалаврат 2025", "Bachelor's Degree 2025")}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Column: Info & Contacts */}
        <div className="lg:col-span-1 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight text-orange-600">{t("Шановні вступники!", "Dear Applicants!")}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t(
                "Острозька академія – університет реалізації мрій. Зробимо Вашу мрію про успішний Вступ − 2025 реальністю!",
                "Ostroh Academy is the university of dreams. Let's make your dream of a successful Admission 2025 a reality!"
              )}
            </p>
          </section>

          <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="font-bold mb-6 text-gray-800 border-b pb-2">{t("Консультації щодо вступу", "Admissions Consultations")}</h3>
            <div className="space-y-5">
              {contacts.map((c, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-orange-600 shrink-0 mt-1">
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
              <a key={i} href={s.link} target="_blank" rel="noreferrer" className="p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-orange-600 hover:text-white transition-all shadow-sm">
                <s.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Educational Programs (Accordion) */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-orange-600 rounded-full"></span>
            {t("Освітні програми", "Educational Programs")}
          </h2>
          
          <div className="space-y-4">
            {programs.map((program, idx) => (
              <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:border-orange-200 transition-colors">
                <button 
                  onClick={() => setOpenProgram(openProgram === idx ? null : idx)}
                  className={`w-full flex items-center justify-between p-6 transition-colors text-left ${openProgram === idx ? 'bg-orange-50/50' : 'bg-white hover:bg-gray-50'}`}
                >
                  <span className="text-lg font-bold text-gray-800 pr-4">{program.title}</span>
                  <ChevronDown className={`shrink-0 transition-transform duration-300 ${openProgram === idx ? 'rotate-180 text-orange-600' : 'text-gray-400'}`} />
                </button>

                <AnimatePresence>
                  {openProgram === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-white"
                    >
                      <div className="p-8 pt-2 space-y-8">
                        <div className="relative p-4 bg-gray-50 rounded-xl border-l-4 border-orange-600">
                           <p className="text-gray-700 leading-relaxed text-sm md:text-base">{program.description}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Left: General Info Placeholder */}
                          <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                            <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                              <GraduationCap size={18} className="text-orange-600" /> {t("Про навчання", "About Education")}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {t("Денна та заочна форми навчання. Деталі щодо обсягів та вартості уточнюйте у приймальній комісії.", "Full-time and part-time study modes available. Contact admissions for cost details.")}
                            </p>
                          </div>

                          {/* Jobs */}
                          <div className="p-6 bg-orange-50/30 rounded-2xl border border-orange-100">
                            <h4 className="font-bold text-orange-800 mb-4 flex items-center gap-2">
                              <Briefcase size={18} className="text-orange-600" /> {t("Перспективи", "Career Prospects")}
                            </h4>
                            <ul className="space-y-2 text-sm text-orange-900 font-medium">
                              {program.jobs.map((job, j) => <li key={j} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                                {job}
                              </li>)}
                            </ul>
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