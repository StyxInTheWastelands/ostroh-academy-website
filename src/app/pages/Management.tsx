import { useState } from "react"; // Added useState
import { useLanguage } from "../context/LanguageContext";
import { motion, AnimatePresence } from "motion/react";
import { 
  ShieldCheck, 
  Users, 
  FileText, 
  Scale, 
  ChevronRight,
  GraduationCap,
  Gavel,
  Search,
  X
} from "lucide-react";

export default function Management() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");

  const sections = [
    {
      titleUk: "Вчена рада та Ректорат",
      titleEn: "Academic Council & Rectorate",
      icon: Gavel,
      descriptionUk: "Вищі колегіальні та виконавчі органи управління університетом.",
      descriptionEn: "Top collegial and executive university management bodies.",
      links: [
        { name: t("Положення про ректорат", "Regulations on Rectorate"), path: "/university/documents" },
        { name: t("Склад вченої ради", "Members of Academic Council"), path: "/university/council" },
        { name: t("Плани роботи та звіти", "Work Plans & Reports"), path: "#" },
        { name: t("Витяги із протоколів", "Minutes of Meetings"), path: "#" },
      ]
    },
    {
      titleUk: "Наглядова рада",
      titleEn: "Supervisory Board",
      icon: ShieldCheck,
      descriptionUk: "Здійснює нагляд за управлінням ресурсами та дотриманням мети діяльності.",
      descriptionEn: "Supervises resource management and adherence to university goals.",
      links: [
        { name: t("Голова наглядової ради", "Head of the Board"), path: "#" },
        { name: t("Положення про раду", "Regulations on the Board"), path: "/university/documents" },
      ]
    },
    {
      titleUk: "Якість освіти та доброчесність",
      titleEn: "Education Quality & Integrity",
      icon: Scale,
      descriptionUk: "Система моніторингу та забезпечення високих стандартів навчання.",
      descriptionEn: "System for monitoring and ensuring high educational standards.",
      links: [
        { name: t("Академічна доброчесність", "Academic Integrity"), path: "#" },
        { name: t("Моніторинг якості освіти", "Quality Monitoring"), path: "#" },
        { name: t("Сертифікати якості", "Quality Certificates"), path: "#" },
        { name: t("Документи системи управління", "Management System Docs"), path: "/university/documents" },
      ]
    },
    {
      titleUk: "Братство спудеїв",
      titleEn: "Student Brotherhood",
      icon: Users,
      descriptionUk: "Органи студентського самоврядування та академічна конференція.",
      descriptionEn: "Student self-government bodies and academic conference.",
      links: [
        { name: t("Положення про самоврядування", "Regulations on Self-government"), path: "#" },
        { name: t("Склад Братства", "Brotherhood Structure"), path: "#" },
        { name: t("Академічна конференція", "Academic Conference"), path: "#" },
      ]
    }
  ];

  // SEARCH FILTER LOGIC
  const filteredSections = sections.filter(section => {
    const searchLower = searchQuery.toLowerCase();
    const titleMatch = t(section.titleUk, section.titleEn).toLowerCase().includes(searchLower);
    const linkMatch = section.links.some(link => link.name.toLowerCase().includes(searchLower));
    return titleMatch || linkMatch;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="border-l-8 border-orange-500 pl-8"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-4">
              {t('Органи управління', 'Management Bodies')}
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              {t('Швидкий доступ до структури та нормативної бази.', 'Quick access to structure and regulatory base.')}
            </p>
          </motion.div>

          {/* SEARCH BAR */}
          <div className="relative w-full md:w-96">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text"
                placeholder={t("Пошук підрозділу або документа...", "Search department or document...")}
                className="w-full pl-12 pr-10 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* RESULTS GRID */}
        {filteredSections.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence>
              {filteredSections.map((section, idx) => (
                <motion.div
                  key={section.titleEn}
                  layout // Smoothly re-arranges cards when others disappear
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-orange-100 p-3 rounded-2xl text-orange-600">
                      <section.icon size={28} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {t(section.titleUk, section.titleEn)}
                      </h2>
                      <p className="text-gray-500 text-sm mt-1">
                        {t(section.descriptionUk, section.descriptionEn)}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {section.links.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.path}
                        className={`flex items-center justify-between p-3 rounded-xl transition-colors border ${
                          link.name.toLowerCase().includes(searchQuery.toLowerCase()) && searchQuery !== ""
                          ? "bg-orange-50 border-orange-200" 
                          : "hover:bg-gray-50 border-transparent"
                        }`}
                      >
                        <span className="text-gray-700 font-medium">
                          {link.name}
                        </span>
                        <ChevronRight size={18} className="text-gray-300" />
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          /* NO RESULTS STATE */
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white rounded-[3rem] border-2 border-dashed border-gray-200"
          >
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
              <Search size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">{t('Нічого не знайдено', 'No results found')}</h3>
            <p className="text-gray-500">{t('Спробуйте змінити запит пошуку', 'Try adjusting your search query')}</p>
          </motion.div>
        )}

        {/* ... Keep the Statutory Principles and CTA from the previous version ... */}
      </div>
    </div>
  );
}