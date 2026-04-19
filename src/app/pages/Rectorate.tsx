import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";
import { Mail, Phone, Clock, GraduationCap, MapPin } from "lucide-react";

export default function Rectorate() {
  const { t } = useLanguage();

  const members = [
    {
      name: "Балашов Едуард Михайлович",
      positionUk: "Ректор, доктор психологічних наук, професор",
      positionEn: "Rector, Doctor of Psychological Sciences, Professor",
      phone: "(03654) 2-29-49",
      email: "osa@oa.edu.ua",
      hours: "14.00-17.00",
      image: "https://www.oa.edu.ua/images/f/balashov_F.jpg",
    },
    {
      name: "Пасічник Ігор Демидович",
      positionUk: "Ректор-організатор, голова вченої ради, доктор психологічних наук, професор",
      positionEn: "Founding Rector, Head of Academic Council, Doctor of Psych. Sciences",
      phone: "(03654) 2-29-49",
      email: "oa@oa.edu.ua",
      hours: "14.00-17.00",
      image: "/images/rectorate/pasichnyk_1.jpg",
    },
    {
      name: "Каламаж Руслана Володимирівна",
      positionUk: "Проректор з навчально-виховної роботи, доктор психологічних наук, професор",
      positionEn: "Vice-Rector for Academic and Educational Affairs, Doctor of Psych. Sciences",
      phone: "(03654) 2-29-49",
      email: "ruslana.kalamazh@oa.edu.ua",
      hours: "14.00-17.00",
      image: "/images/rectorate/kalamazh.jpg",
    },
    {
      name: "Шевчук Дмитро Михайлович",
      positionUk: "Проректор з науково-педагогічної роботи, доктор філософських наук, професор",
      positionEn: "Vice-Rector for Research and Pedagogical Work, Doctor of Phil. Sciences",
      phone: "(03654) 2-29-49",
      email: "dmytro.shevchuk@oa.edu.ua",
      hours: "14.00-17.00",
      image: "/images/rectorate/shevchuk_new.jpg",
    },
    {
      name: "Мельничук Наталія Миколаївна",
      positionUk: "Проректор з адміністративно-господарської роботи, магістр архітектури",
      positionEn: "Vice-Rector for Administrative and Economic Work, Master of Architecture",
      phone: "",
      email: "oa@oa.edu.ua",
      hours: "14.00-17.00",
      image: "/images/rectorate/melnuchyk.jpg",
    },
    {
      name: "Якуніна Катерина Ігорівна",
      positionUk: "Помічник ректора зі стратегічного розвитку та забезпечення якості освіти, к.і.н.",
      positionEn: "Assistant to the Rector for Strategic Development and Quality Assurance, PhD",
      phone: "(03654) 2-29-49",
      email: "yakist.osvity@oa.edu.ua",
      hours: "14.00-17.00",
      image: "/images/rectorate/yakunina_k.jpg",
    },
    {
      name: "Карповець Максим Вячеславович",
      positionUk: "Директор ННІ соціально-гуманітарного менеджменту, к.філос.н., доцент",
      positionEn: "Director of Institute of Social and Humanitarian Management, PhD",
      phone: "",
      email: "maksym.karpovets@oa.edu.ua",
      hours: "14.00-17.00",
      image: "/images/rectorate/karpovetc_MV2.jpg",
    },
    {
      name: "Дем'янчук Ольга Іванівна",
      positionUk: "Директор ННІ міжнародних відносин та нац. безпеки, д.е.н., професор",
      positionEn: "Director of Institute of International Relations and Nat. Security, Doctor of Econ.",
      phone: "",
      email: "olha.demianchuk@oa.edu.ua",
      hours: "14.00-17.00",
      image: "/images/rectorate/demyanchuk_oi.jpg",
    },
  ];

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-gray-900 text-white py-20 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <MapPin className="absolute -right-10 -bottom-10 w-96 h-96" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6"
          >
            {t('Ректорат', 'Rectorate')}
          </motion.h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            {t(
              'Команда лідерів Острозької академії, що забезпечує сталий розвиток та якість освіти.',
              'The leadership team of Ostroh Academy, ensuring sustainable development and quality of education.'
            )}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group bg-gray-50 rounded-[2rem] p-8 hover:bg-white hover:shadow-2xl hover:shadow-orange-500/10 transition-all border border-transparent hover:border-orange-100"
            >
              <div className="flex flex-col md:flex-row gap-6">
                
                {/* PHOTO OR INITIALS SECTION */}
                <div className="flex-shrink-0">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-2xl object-cover shadow-lg group-hover:rotate-3 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-2xl bg-orange-600 text-white flex items-center justify-center text-3xl font-bold shadow-lg group-hover:rotate-3 transition-transform">
                      {member.name.split(' ')[0][0]}{member.name.split(' ')[1][0]}
                    </div>
                  )}
                </div>

                <div className="flex-grow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                        {member.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                        <GraduationCap size={16} className="text-orange-500 flex-shrink-0" />
                        <span>{t(member.positionUk, member.positionEn)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    {member.phone && (
                      <div className="flex items-center gap-3 text-gray-600 hover:text-orange-600 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                          <Phone size={14} />
                        </div>
                        <a href={`tel:${member.phone}`} className="text-sm font-medium">{member.phone}</a>
                      </div>
                    )}
                    <div className="flex items-center gap-3 text-gray-600 hover:text-orange-600 transition-colors">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <Mail size={14} />
                      </div>
                      <a href={`mailto:${member.email}`} className="text-sm font-medium truncate">{member.email}</a>
                    </div>
                    <div className="flex items-center gap-3 text-gray-500 sm:col-span-2">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <Clock size={14} />
                      </div>
                      <span className="text-sm">
                        {t('Офісні години: ', 'Office hours: ')}
                        <span className="font-semibold text-gray-700">{member.hours}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 p-12 bg-orange-50 rounded-[3rem] border border-orange-100 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="text-4xl">🎓</div>
          <div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">
              {t('Відкритість до діалогу', 'Open to Dialogue')}
            </h4>
            <p className="text-gray-600 leading-relaxed">
              {t(
                'Адміністрація університету завжди відкрита до пропозицій та звернень студентів і викладачів.',
                'The university administration is always open to suggestions and appeals from students and faculty.'
              )}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}