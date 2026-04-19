import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";
import { Clock, MapPin } from "lucide-react";

export default function Museum() {
  const { t } = useLanguage();

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            {t('Музей Острозької академії', 'Ostroh Academy Museum')}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <img
                src="https://images.unsplash.com/photo-1508208066504-834bbaae56dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt={t('Музей', 'Museum')}
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                {t(
                  'Музей Острозької академії зберігає унікальні експонати, що розповідають про багату історію навчального закладу. Колекція включає стародруки, рукописи, меморіальні речі видатних випускників та викладачів.',
                  'The Ostroh Academy Museum preserves unique exhibits that tell about the rich history of the educational institution. The collection includes early printed books, manuscripts, memorial items of outstanding graduates and teachers.'
                )}
              </p>

              <div className="bg-secondary p-6 rounded-lg space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">{t('Години роботи', 'Working hours')}</h3>
                    <p className="text-muted-foreground">
                      {t('Понеділок - П\'ятниця: 9:00 - 17:00', 'Monday - Friday: 9:00 AM - 5:00 PM')}
                    </p>
                    <p className="text-muted-foreground">
                      {t('Субота: 10:00 - 15:00', 'Saturday: 10:00 AM - 3:00 PM')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">{t('Адреса', 'Address')}</h3>
                    <p className="text-muted-foreground">
                      {t('вул. Семінарська, 2, м. Острог', '2 Seminarska St, Ostroh')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              {t('Експозиції', 'Exhibitions')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-border rounded-lg p-6 hover:border-primary transition-colors">
                <h3 className="text-xl font-bold mb-3">
                  {t('Історія Острозької академії', 'History of Ostroh Academy')}
                </h3>
                <p className="text-muted-foreground">
                  {t(
                    'Постійна експозиція, присвячена історії академії від її заснування до сьогодення.',
                    'Permanent exhibition dedicated to the history of the academy from its foundation to the present day.'
                  )}
                </p>
              </div>

              <div className="border border-border rounded-lg p-6 hover:border-primary transition-colors">
                <h3 className="text-xl font-bold mb-3">
                  {t('Стародруки та рукописи', 'Early Printed Books and Manuscripts')}
                </h3>
                <p className="text-muted-foreground">
                  {t(
                    'Колекція унікальних книг XVI-XVIII століть, включаючи Острозьку Біблію.',
                    'Collection of unique books from the 16th-18th centuries, including the Ostroh Bible.'
                  )}
                </p>
              </div>

              <div className="border border-border rounded-lg p-6 hover:border-primary transition-colors">
                <h3 className="text-xl font-bold mb-3">
                  {t('Видатні випускники', 'Outstanding Graduates')}
                </h3>
                <p className="text-muted-foreground">
                  {t(
                    'Матеріали про випускників академії, які зробили значний внесок у розвиток науки та культури.',
                    'Materials about academy graduates who made significant contributions to the development of science and culture.'
                  )}
                </p>
              </div>

              <div className="border border-border rounded-lg p-6 hover:border-primary transition-colors">
                <h3 className="text-xl font-bold mb-3">
                  {t('Тимчасові виставки', 'Temporary Exhibitions')}
                </h3>
                <p className="text-muted-foreground">
                  {t(
                    'Регулярно оновлювані експозиції, присвячені різним аспектам історії та культури.',
                    'Regularly updated exhibitions dedicated to various aspects of history and culture.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
