import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";
import { 
  GraduationCap, BookOpen, Microscope, 
  CheckCircle, ArrowRight, Phone, Mail,
  Calendar, FileText, Users
} from "lucide-react";

export default function Admissions() {
  const { t } = useLanguage();

  const admissionTypes = [
    {
      titleUk: "Стати бакалавром",
      titleEn: "Become a Bachelor",
      descUk: "Для випускників шкіл та коледжів",
      descEn: "For school and college graduates",
      path: "/admissions/bachelor",
      icon: BookOpen,
      img: "https://www.bluefield.edu/wp-content/uploads/2021/09/GraduateJobsDegree.jpeg",
      color: "from-orange-600/80 to-orange-900/90"
    },
    {
      titleUk: "Стати магістром",
      titleEn: "Become a Master",
      descUk: "Для власників диплома бакалавра",
      descEn: "For bachelor degree holders",
      path: "/admissions/master",
      icon: GraduationCap,
      img: "https://hips.hearstapps.com/hmg-prod/images/graduation-captions-lead-image-6412222f98500.jpg?crop=1xw:0.8423586572438162xh;0,0",
      color: "from-blue-700/80 to-blue-950/90"
    },
    {
      titleUk: "Стати аспірантом",
      titleEn: "Become a PhD",
      descUk: "Для майбутніх науковців та дослідників",
      descEn: "For future scientists and researchers",
      path: "/admissions/phd",
      icon: Microscope,
      img: "https://i.pinimg.com/736x/6a/1b/76/6a1b763618824d43fa3771ea63ab8daf.jpg",
      color: "from-gray-700/80 to-gray-900/90"
    }
  ];

  const admissionSteps = [
    {
      icon: FileText,
      titleUk: 'Реєстрація в ЄДЕБО',
      titleEn: 'Registration in USEDE',
      descUk: 'Зареєструйтеся в Єдиній державній електронній базі з питань освіти',
      descEn: 'Register in the Unified State Electronic Database on Education',
    },
    {
      icon: CheckCircle,
      titleUk: 'Подання документів',
      titleEn: 'Document Submission',
      descUk: 'Подайте необхідні документи та сертифікати НМТ',
      descEn: 'Submit required documents and NMT certificates',
    },
    {
      icon: Users,
      titleUk: 'Участь у конкурсі',
      titleEn: 'Competition Participation',
      descUk: 'Беріть участь у конкурсному відборі на обрану спеціальність',
      descEn: 'Participate in competitive selection for chosen specialty',
    },
    {
      icon: Calendar,
      titleUk: 'Зарахування',
      titleEn: 'Enrollment',
      descUk: 'Дочекайтеся результатів та пройдіть процедуру зарахування',
      descEn: 'Wait for results and complete enrollment procedure',
    },
  ];

  return (
    <div className="bg-white">
      {/* 1. PORTAL SECTION */}
      <section className="flex flex-col lg:flex-row h-auto lg:min-h-[85vh] w-full overflow-hidden">
        {admissionTypes.map((type, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="relative flex-1 group overflow-hidden border-r border-white/10 min-h-[450px]"
          >
            <img 
              src={type.img} 
              alt={type.titleEn} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className={`absolute inset-0 bg-gradient-to-b ${type.color} opacity-80 group-hover:opacity-90 transition-opacity`} />
            
            <div className="relative h-full flex flex-col items-center justify-center p-8 text-center text-white">
              <type.icon size={64} className="mb-6 opacity-80 group-hover:scale-110 transition-transform" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                {t(type.titleUk, type.titleEn)}
              </h2>
              <p className="text-white/80 mb-8 max-w-xs">
                {t(type.descUk, type.descEn)}
              </p>
              
              {/* Back to <a> to avoid the Router error */}
              <a 
                href={type.path}
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all shadow-xl"
              >
                {t('Переглянути програми', 'View Programs')}
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        ))}
      </section>

      {/* 2. ADMISSION STEPS */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('Як вступити до академії', 'How to Apply')}</h2>
          <p className="text-muted-foreground text-lg">{t('Чотири прості кроки до вашого майбутнього', 'Four simple steps to your future')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {admissionSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 border border-border p-8 rounded-2xl text-center hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-orange-600 font-bold mb-2 uppercase tracking-wider text-sm">{t('Крок', 'Step')} {index + 1}</div>
                <h3 className="font-bold text-xl mb-3">{t(step.titleUk, step.titleEn)}</h3>
                <p className="text-muted-foreground leading-relaxed">{t(step.descUk, step.descEn)}</p>
              </motion.div>
            );
          })}
        </div>

        {/* 3. DATES & DOCUMENTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Calendar className="text-orange-600" />
              {t('Важливі дати', 'Important Dates')}
            </h2>
            <div className="space-y-4">
              {[
                { labelUk: 'Початок прийому документів', labelEn: 'Start of Document Submission', dateUk: '15 червня', dateEn: 'June 15' },
                { labelUk: 'Завершення прийому документів', labelEn: 'End of Document Submission', dateUk: '25 липня', dateEn: 'July 25' },
                { labelUk: 'Конкурсний відбір', labelEn: 'Competitive Selection', dateUk: '26-31 липня', dateEn: 'July 26-31' },
                { labelUk: 'Зарахування', labelEn: 'Enrollment', dateUk: '1-10 серпня', dateEn: 'August 1-10' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-6 rounded-xl flex justify-between items-center shadow-sm">
                  <span className="font-medium text-gray-700">{t(item.labelUk, item.labelEn)}</span>
                  <span className="text-orange-600 font-bold bg-orange-50 px-4 py-2 rounded-lg">
                    {t(item.dateUk, item.dateEn)}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <FileText className="text-orange-600" />
              {t('Необхідні документи', 'Required Documents')}
            </h2>
            <div className="bg-gray-900 text-white p-8 rounded-3xl relative overflow-hidden shadow-2xl">
              <ul className="space-y-4 relative z-10">
                {[
                  { uk: 'Заява про вступ', en: 'Application for admission' },
                  { uk: 'Документ про освіту (оригінал або копія)', en: 'Education certificate' },
                  { uk: 'Сертифікат НМТ', en: 'NMT certificate' },
                  { uk: 'Медична довідка форми 086-У', en: 'Medical certificate' },
                  { uk: '6 фотографій 3x4 см', en: '6 photos 3x4 cm' },
                  { uk: 'Копія паспорта та ідентифікаційного коду', en: 'Passport & ID copy' },
                ].map((doc, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="text-orange-500 w-5 h-5 flex-shrink-0" />
                    <span>{t(doc.uk, doc.en)}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-8 border-t border-white/10 relative z-10">
                <h4 className="font-bold mb-2">{t('Потрібна консультація?', 'Need consultation?')}</h4>
                <a href="mailto:priyom@oa.edu.ua" className="text-orange-400 font-bold hover:underline flex items-center gap-2">
                  <Mail size={18} /> priyom@oa.edu.ua
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4. STATS */}
        <div className="bg-orange-50 rounded-[3rem] p-12 text-center border border-orange-100">
          <h2 className="text-3xl font-bold mb-12">
            {t('Переваги навчання в НаУОА', 'Benefits of Studying at Ostroh Academy')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { val: 'TOP 10', uk: 'Серед університетів України', en: 'Among universities in Ukraine' },
              { val: '87+', uk: 'Міжнародних партнерів', en: 'International partners' },
              { val: '94%', uk: 'Працевлаштування випускників', en: 'Graduate employment' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-5xl font-black text-orange-600 mb-4">{stat.val}</div>
                <p className="text-gray-600 font-medium px-4">{t(stat.uk, stat.en)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}