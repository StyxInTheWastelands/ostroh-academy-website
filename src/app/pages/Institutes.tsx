import { useEffect } from "react";
import { useLocation } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";
import { 
  Users, Globe, Scale, Languages, Laptop, 
  Mail, BookOpen, Facebook, Instagram, Video 
} from "lucide-react";

export default function Institutes() {
  const { t } = useLanguage();
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [hash]);

  const institutes = [
    {
      id: "social-humanitarian",
      icon: Users,
      nameUk: 'Навчально-науковий інститут соціально-гуманітарного менеджменту',
      nameEn: 'Institute of Social and Humanitarian Management',
      descUk: 'Формує сучасних лідерів, які здатні впливати на соціальні та гуманітарні процеси України на засадах патріотизму, креативності й відповідальності.',
      descEn: 'Forms modern leaders capable of influencing social and humanitarian processes in Ukraine based on patriotism, creativity, and responsibility.',
      director: {
        nameUk: "Карповець Максим Вячеславович",
        nameEn: "Maksym Karpovets",
        roleUk: "Директор інституту, к.ф.н., доцент",
        roleEn: "Director of the Institute, PhD, Associate Professor",
        email: "maksym.karpovets@oa.edu.ua"
      },
      socials: [
        { icon: Facebook, url: "https://www.facebook.com/instituteshum/" },
        { icon: Instagram, url: "https://www.instagram.com/institute.shum" }
      ],
      departments: [
        { uk: "Кафедра української мови і літератури", en: "Department of Ukrainian Language and Literature" },
        { uk: "Кафедра філософії та культурного менеджменту", en: "Department of Philosophy and Cultural Management" },
        { uk: "Кафедра педагогіки та методики початкового навчання", en: "Department of Pedagogy and Primary Education Methods" },
        { uk: "Кафедра психології", en: "Department of Psychology" },
        { uk: "Кафедра журналістики та PR менеджменту", en: "Department of Journalism and PR Management" },
        { uk: "Кафедра громадського здоров’я та фізичного виховання", en: "Department of Public Health and Physical Education" }
      ],
      specialties: [
        { uk: 'А3 Початкова освіта', en: 'A3 Primary Education' },
        { uk: 'B12 Культурологія (Кіберкультура)', en: 'B12 Cultural Studies (Cyberculture)' },
        { uk: 'B11.01 Філологія (Укр. мова та література)', en: 'B11.01 Philology (Ukrainian)' },
        { uk: 'C4 Психологія', en: 'C4 Psychology' },
        { uk: 'C7 Журналістика / Реклама та PR', en: 'C7 Journalism / Advertising & PR' },
        { uk: 'I9 Громадське здоров’я', en: 'I9 Public Health' },
      ],
    },
    {
      id: "international-relations",
      icon: Globe,
      nameUk: 'Навчально-науковий інститут міжнародних відносин та національної безпеки',
      nameEn: 'Institute of International Relations and National Security',
      descUk: 'Забезпечує підготовку фахівців у сфері міжнародних відносин, безпеки, історії та стратегічних комунікацій.',
      descEn: 'Provides training for specialists in the field of international relations, security, history, and strategic communications.',
      director: {
        nameUk: "Дем'янчук Ольга Іванівна",
        nameEn: "Olha Demianchuk",
        roleUk: "Директор інституту, д.е.н., професор",
        roleEn: "Director of the Institute, Doctor of Economics, Professor",
        email: "olha.demianchuk@oa.edu.ua"
      },
      socials: [
        { icon: Facebook, url: "https://www.facebook.com/InstituteIRNS" },
        { icon: Instagram, url: "https://www.instagram.com/inst_irns/" },
        { icon: Video, url: "https://www.tiktok.com/@inst_irns" }
      ],
      departments: [
        { uk: "Кафедра історії ім. проф. М.П. Ковальського", en: "M.P. Kovalskyi Department of History" },
        { uk: "Кафедра міжнародних відносин", en: "Department of International Relations" },
        { uk: "Кафедра національної безпеки та політології", en: "Department of National Security and Political Science" },
        { uk: "Кафедра інформаційно-документних комунікацій", en: "Department of Information and Document Communications" }
      ],
      specialties: [
        { uk: 'К3 Національна безпека', en: 'K3 National Security' },
        { uk: 'С3 Міжнародні відносини', en: 'C3 International Relations' },
        { uk: 'С3 Міжнародні регіональні студії', en: 'C3 International Regional Studies' },
        { uk: 'С2 Політологія', en: 'C2 Political Science' },
        { uk: 'В9 Історія та археологія', en: 'B9 History and Archaeology' },
        { uk: 'J3 Міжнародний туризм', en: 'J3 International Tourism' },
      ],
    },
    {
      id: "law",
      icon: Scale,
      nameUk: 'Навчально-науковий інститут права ім. І. Малиновського',
      nameEn: 'I. Malinovskyi Institute of Law',
      descUk: 'Інститут права — це середовище, де формується нове покоління українських юристів на засадах доброчесності та професійної етики.',
      descEn: 'The Institute of Law is an environment where a new generation of Ukrainian lawyers is formed based on integrity and professional ethics.',
      director: {
        nameUk: "Михальчук Богдан Сергійович",
        nameEn: "Bohdan Mykhalchuk",
        roleUk: "Директор інституту, PhD у галузі права",
        roleEn: "Director of the Institute, PhD in Law",
        email: "bohdan.mykhalchuk@oa.edu.ua"
      },
      socials: [
        { icon: Globe, url: "https://law.oa.edu.ua/" },
        { icon: Facebook, url: "https://www.facebook.com/oa.law.school/" },
        { icon: Instagram, url: "https://www.instagram.com/institute_of_law_oa/" }
      ],
      departments: [
        { uk: "Кафедра теорії та історії держави і права", en: "Department of Theory and History of State and Law" },
        { uk: "Кафедра державно-правових дисциплін", en: "Department of State and Legal Disciplines" },
        { uk: "Кафедра цивільно-правових дисциплін", en: "Department of Civil Law Disciplines" },
        { uk: "Кафедра кримінально-правових дисциплін ім. В. Попелюшка", en: "Vasyl Popelyushko Department of Criminal Law Disciplines" }
      ],
      specialties: [
        { uk: 'D8 Право (Бакалаврат)', en: 'D8 Law (Bachelor)' },
        { uk: 'D8 Право (Магістратура)', en: 'D8 Law (Master)' },
        { uk: 'D8 Право (Аспірантура)', en: 'D8 Law (PhD)' },
      ],
    },
    {
      id: "linguistics",
      icon: Languages,
      nameUk: 'Навчально-науковий інститут лінгвістики',
      nameEn: 'Institute of Linguistics',
      descUk: 'Здійснює підготовку філологів, перекладачів та фахівців з комп’ютерної лінгвістики, адаптовану до вимог ринку праці.',
      descEn: 'Trains philologists, translators, and computer linguistics specialists, adapted to labor market requirements.',
      director: {
        nameUk: "Ковальчук Інна В’ячеславівна",
        nameEn: "Inna Kovalchuk",
        roleUk: "Директор інституту, к.психол.н., доцент",
        roleEn: "Director of the Institute, PhD in Psychology, Associate Professor",
        email: "inna.kovalchuk@oa.edu.ua"
      },
      socials: [
        { icon: Facebook, url: "https://www.facebook.com/groups/activecreative/" }
      ],
      departments: [
        { uk: "Кафедра англійської мови та літератури", en: "Department of English Language and Literature" },
        { uk: "Кафедра мовної медіації", en: "Department of Language Mediation" },
        { uk: "Кафедра англійської філології", en: "Department of English Philology" },
        { uk: "Кафедра комп’ютерної лінгвістики", en: "Department of Computational Linguistics" }
      ],
      specialties: [
        { uk: 'В11.041 Германські мови (Переклад)', en: 'B11.041 Germanic Languages (Translation)' },
        { uk: 'В11.10 Прикладна лінгвістика', en: 'B11.10 Applied Linguistics' },
        { uk: 'TESOL (Магістратура)', en: 'TESOL (Master)' },
        { uk: 'Комп’ютерна лінгвістика', en: 'Computer Linguistics' },
      ],
    },
    {
      id: "it-business",
      icon: Laptop,
      nameUk: 'Навчально-науковий інститут ІТ та бізнесу',
      nameEn: 'Institute of IT and Business',
      descUk: 'Інноваційний хаб, де технології, бізнес і креативність переплітаються для підготовки лідерів цифрової ери.',
      descEn: 'An innovative hub where technology, business, and creativity intertwine to train digital era leaders.',
      director: {
        nameUk: "Новоселецький Олександр Миколайович",
        nameEn: "Oleksandr Novoseletskyy",
        roleUk: "Директор інституту, к.е.н., доцент",
        roleEn: "Director of the Institute, PhD in Economics, Associate Professor",
        email: "oleksandr.novoseletskyy@oa.edu.ua"
      },
      socials: [
        { icon: Facebook, url: "https://www.facebook.com/groups/156110371669339/" }
      ],
      departments: [
        { uk: "Кафедра фінансів та бізнесу", en: "Department of Finance and Business" },
        { uk: "Кафедра менеджменту та маркетингу", en: "Department of Management and Marketing" },
        { uk: "Кафедра ІТ та аналітики даних", en: "Department of IT and Data Analytics" },
        { uk: "Кафедра математики та інтелектуальних обчислень", en: "Department of Mathematics and Intelligent Computing" }
      ],
      specialties: [
        { uk: 'F3 Комп’ютерні науки / Робототехніка', en: 'F3 Computer Science / Robotics' },
        { uk: 'D3 Менеджмент (Бізнес-управління)', en: 'D3 Management (Business)' },
        { uk: 'D2 Фінанси та бізнес-аналітика', en: 'D2 Finance and Business Analytics' },
        { uk: 'D5 DATA-маркетинг та аналітика', en: 'D5 DATA-marketing and Analytics' },
        { uk: 'F1 Прикладна математика (Аспірантура)', en: 'F1 Applied Mathematics (PhD)' },
      ],
    },
  ];

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            {t('Інститути', 'Institutes')}
          </h1>

          <div className="mb-12 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-lg text-gray-600">
              {t(
                'В Національному університеті «Острозька академія» діє 5 навчально-наукових інститутів та центр заочного навчання, які забезпечують якісну підготовку фахівців.',
                'Ostroh Academy National University has 5 educational and research institutes and a center for distance learning.'
              )}
            </p>
          </div>

          <div className="space-y-16">
            {institutes.map((institute, index) => {
              const Icon = institute.icon;
              return (
                <motion.div
                  key={index}
                  id={institute.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 scroll-mt-24"
                >
                  <div className="p-8 md:p-12">
                    <div className="flex flex-col lg:flex-row gap-12">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-6">
                           <div className="w-14 h-14 bg-orange-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-200">
                             <Icon size={28} />
                           </div>
                           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                             {t(institute.nameUk, institute.nameEn)}
                           </h2>
                        </div>
                        
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                          {t(institute.descUk, institute.descEn)}
                        </p>

                        {institute.departments.length > 0 && (
                          <div className="mb-8">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-orange-600 mb-4 flex items-center gap-2">
                              <BookOpen size={18} /> {t('Кафедри', 'Departments')}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                              {institute.departments.map((dept, i) => (
                                <div key={i} className="text-gray-700 py-1 flex items-start gap-2">
                                  <span className="text-orange-400 mt-1.5">•</span> {t(dept.uk, dept.en)}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                          <h3 className="font-bold mb-4 text-gray-800">{t('Основні спеціальності:', 'Major Specialties:')}</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {institute.specialties.map((specialty, specIndex) => (
                              <div key={specIndex} className="flex items-center gap-3 text-gray-600 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                                <span className="text-sm font-medium">{t(specialty.uk, specialty.en)}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="lg:w-80">
                        <div className="space-y-6">
                          {institute.director && (
                             <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
                                <h3 className="font-bold text-gray-900 mb-4">{t('Керівництво', 'Leadership')}</h3>
                                <div className="space-y-4">
                                  <div>
                                    <p className="font-bold text-gray-900 leading-tight">
                                      {t(institute.director.nameUk, institute.director.nameEn)}
                                    </p>
                                    <p className="text-xs text-orange-700 mt-1 uppercase tracking-wide font-semibold">
                                      {t(institute.director.roleUk, institute.director.roleEn)}
                                    </p>
                                  </div>
                                  <a href={`mailto:${institute.director.email}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-600 transition-colors bg-white p-2 rounded-lg border border-orange-100">
                                    <Mail size={16} /> {institute.director.email}
                                  </a>
                                </div>
                             </div>
                          )}

                          {institute.socials && (
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">{t('Ми у соцмережах', 'Social Media')}</h3>
                              <div className="flex gap-3">
                                {institute.socials.map((social, sIdx) => (
                                  <a 
                                    key={sIdx} 
                                    href={social.url} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-orange-600 hover:text-white transition-all shadow-sm"
                                  >
                                    <social.icon size={20} />
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Блок ННЦЗДН */}
            <motion.div 
              id="distance-learning" 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm scroll-mt-24"
            >
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">
                    {t('Навчально-науковий центр заочно-дистанційного навчання', 'Center for Distance Learning')}
                  </h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {t(
                      'Забезпечує надання освітніх послуг за заочною (дистанційною) формою на бакалаврському та магістерському рівнях, а також здійснює доуніверситетську підготовку.',
                      'Provides educational services through distance learning at Bachelor and Master levels, as well as pre-university training.'
                    )}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-orange-50 p-6 rounded-2xl text-center border border-orange-100">
                      <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
                      <p className="text-sm font-medium text-gray-600">{t('Спеціальностей', 'Specialties')}</p>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-2xl text-center border border-orange-100">
                      <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                      <p className="text-sm font-medium text-gray-600">{t('Гнучкий графік', 'Flexible Schedule')}</p>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-2xl text-center border border-orange-100">
                      <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                      <p className="text-sm font-medium text-gray-600">{t('Moodle доступ', 'Moodle Access')}</p>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-80">
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-4">{t('Контакти', 'Contacts')}</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-bold text-gray-900 leading-tight">
                          {t("Костів Ольга Мар'янівна", "Olha Kostiv")}
                        </p>
                        <p className="text-xs text-gray-500 mt-1 uppercase">{t('Провідний фахівець', 'Senior Specialist')}</p>
                        <a href="mailto:olha.kostiv@oa.edu.ua" className="flex items-center gap-2 text-sm text-orange-600 mt-2">
                          <Mail size={14} /> olha.kostiv@oa.edu.ua
                        </a>
                      </div>
                      <div className="pt-4 border-t border-gray-200">
                        <a href="https://idzdn.oa.edu.ua" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-600 transition-colors">
                          <Globe size={16} /> idzdn.oa.edu.ua
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}