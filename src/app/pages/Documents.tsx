import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";
import { FileText, Download, Search, Info, Mail } from "lucide-react";
import { useState } from "react";

export default function Documents() {
  const { t, language } = useLanguage(); // Added language to access state directly
  const [searchTerm, setSearchTerm] = useState("");

  const documentCategories = [
    {
      id: 'founding',
      titleUk: 'Установчі документи',
      titleEn: 'Founding Documents',
      docs: [
        { nameUk: 'Статут університету', nameEn: 'University Charter', size: '1.2 MB' },
        { nameUk: 'Ліцензія на освітню діяльність', nameEn: 'Educational License', size: '0.8 MB' },
        { nameUk: 'Сертифікат акредитації', nameEn: 'Accreditation Certificate', size: '2.1 MB' },
      ],
    },
    {
      id: 'educational',
      titleUk: 'Освітні документи',
      titleEn: 'Educational Documents',
      docs: [
        { nameUk: 'Правила прийому', nameEn: 'Admission Rules', size: '1.5 MB' },
        { nameUk: 'Положення про організацію освітнього процесу', nameEn: 'Regulations on Educational Process', size: '3.4 MB' },
        { nameUk: 'Освітні програми', nameEn: 'Educational Programs', size: '5.0 MB' },
      ],
    },
    {
      id: 'internal',
      titleUk: 'Внутрішні положення',
      titleEn: 'Internal Regulations',
      docs: [
        { nameUk: 'Положення про Вчену раду', nameEn: 'Academic Council Regulations', size: '0.9 MB' },
        { nameUk: 'Положення про атестацію', nameEn: 'Certification Regulations', size: '1.1 MB' },
        { nameUk: 'Положення про академічну доброчесність', nameEn: 'Academic Integrity Policy', size: '0.5 MB' },
      ],
    },
    {
      id: 'financial',
      titleUk: 'Фінансові документи',
      titleEn: 'Financial Documents',
      docs: [
        { nameUk: 'Кошторис доходів та видатків', nameEn: 'Budget Estimates', size: '1.7 MB' },
        { nameUk: 'Фінансовий звіт', nameEn: 'Financial Report', size: '2.2 MB' },
        { nameUk: 'Положення про оплату навчання', nameEn: 'Tuition Fee Regulations', size: '0.6 MB' },
      ],
    },
  ];

  // Search logic
  const filteredCategories = documentCategories.map(cat => ({
    ...cat,
    docs: cat.docs.filter(doc => 
      doc.nameUk.toLowerCase().includes(searchTerm.toLowerCase()) || 
      doc.nameEn.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(cat => cat.docs.length > 0);

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              {t('Нормативні документи', 'Normative Documents')}
            </h1>
            <p className="text-gray-500 max-w-2xl text-lg">
              {t(
                'Офіційний архів документів, що регулюють діяльність Острозької академії.',
                'Official archive of documents regulating the activities of Ostroh Academy.'
              )}
            </p>

            {/* Search Bar */}
            <div className="mt-8 relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text"
                placeholder={t('Пошук документів...', 'Search documents...')}
                className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="space-y-16">
          {filteredCategories.map((category, idx) => (
            <section key={idx} id={category.id}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-orange-500 rounded-full"></span>
                {t(category.titleUk, category.titleEn)}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.docs.map((doc, docIdx) => (
                  <motion.div
                    key={docIdx}
                    whileHover={{ scale: 1.01 }}
                    className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between group hover:border-orange-200 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors">
                        <FileText size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 leading-tight">
                          {t(doc.nameUk, doc.nameEn)}
                        </h3>
                        <span className="text-xs text-gray-400 mt-1 block uppercase tracking-wider font-medium">
                          PDF • {doc.size}
                        </span>
                      </div>
                    </div>
                    
                    <button 
                      className="p-3 bg-gray-50 text-gray-400 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      title={t('Завантажити', 'Download')}
                    >
                      <Download size={20} />
                    </button>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer Info Box */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-8 bg-gray-900 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-orange-400">
              <Info size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">
                {t('Не знайшли потрібний документ?', 'Didn\'t find what you need?')}
              </h3>
              <p className="text-gray-400 text-sm">
                {t('Надішліть запит до інформаційного відділу.', 'Send a request to the information department.')}
              </p>
            </div>
          </div>
          <a 
            href="mailto:info@oa.edu.ua" 
            className="flex items-center gap-3 bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-2xl font-bold transition-all"
          >
            <Mail size={20} />
            info@oa.edu.ua
          </a>
        </motion.div>
      </div>
    </div>
  );
}