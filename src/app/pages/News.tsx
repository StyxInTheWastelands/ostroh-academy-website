import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";
import { Calendar, User } from "lucide-react";

export default function News() {
  const { t } = useLanguage();

  const newsItems = [
    {
      image: "https://images.unsplash.com/photo-1689255170275-34db529d1182?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      titleUk: "Урочиста церемонія вручення дипломів випускникам 2026 року",
      titleEn: "Graduation Ceremony for Class of 2026",
      dateUk: "10 квітня 2026",
      dateEn: "April 10, 2026",
      excerptUk: "У Національному університеті «Острозька академія» відбулася урочиста церемонія вручення дипломів випускникам бакалаврату та магістратури.",
      excerptEn: "Ostroh Academy National University held a solemn graduation ceremony for bachelor's and master's degree graduates.",
    },
    {
      image: "https://images.unsplash.com/photo-1761492190275-129cf71ff124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      titleUk: "Оновлення бібліотеки: новий простір для навчання",
      titleEn: "Library Renovation: New Learning Space",
      dateUk: "5 квітня 2026",
      dateEn: "April 5, 2026",
      excerptUk: "Після масштабної реконструкції відкрилася оновлена університетська бібліотека з сучасними читальними залами та комп'ютерними класами.",
      excerptEn: "After major reconstruction, the renovated university library opened with modern reading halls and computer labs.",
    },
    {
      image: "https://images.unsplash.com/photo-1572810833916-e5e44570cb2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      titleUk: "День відкритих дверей: запрошуємо майбутніх студентів",
      titleEn: "Open House Day: Welcoming Future Students",
      dateUk: "1 квітня 2026",
      dateEn: "April 1, 2026",
      excerptUk: "Університет проводить День відкритих дверей для абітурієнтів та їхніх батьків. Презентації спеціальностей, екскурсії та консультації.",
      excerptEn: "The university hosts Open House Day for prospective students and their parents. Presentations, tours, and consultations.",
    },
    {
      image: "https://images.unsplash.com/photo-1523710803692-ca9a8285ecd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      titleUk: "Міжнародна конференція з історії та культури",
      titleEn: "International Conference on History and Culture",
      dateUk: "25 березня 2026",
      dateEn: "March 25, 2026",
      excerptUk: "В університеті відбулася міжнародна наукова конференція, присвячена дослідженням історії та культурної спадщини регіону.",
      excerptEn: "The university hosted an international scientific conference on research into regional history and cultural heritage.",
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            {t('Новини та події', 'News and Events')}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsItems.map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-border rounded-lg overflow-hidden hover:border-primary transition-all hover:shadow-lg group"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={t(item.titleUk, item.titleEn)}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{t(item.dateUk, item.dateEn)}</span>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {t(item.titleUk, item.titleEn)}
                  </h2>
                  <p className="text-muted-foreground">
                    {t(item.excerptUk, item.excerptEn)}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
