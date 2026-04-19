import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";
import { Users, BookOpen, Award, TrendingUp } from "lucide-react";

export default function PublicInfo() {
  const { t } = useLanguage();

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            {t('Публічна інформація', 'Public Information')}
          </h1>

          <div className="space-y-12">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <p className="text-lg text-gray-600 leading-relaxed">
                {t(
                  'Національний університет «Острозька академія» забезпечує прозорість своєї діяльності шляхом оприлюднення публічної інформації відповідно до законодавства України.',
                  'Ostroh Academy National University ensures transparency of its activities by publishing public information in accordance with Ukrainian legislation.'
                )}
              </p>
            </div>

            {/* Key Indicators */}
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary rounded-full"></span>
                {t('Ключові показники', 'Key Indicators')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">5,347</div>
                  <p className="text-gray-500 font-medium">{t('Студентів', 'Students')}</p>
                </div>
                <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm text-center">
                  <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">487</div>
                  <p className="text-gray-500 font-medium">{t('Викладачів', 'Faculty Members')}</p>
                </div>
                <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">42</div>
                  <p className="text-gray-500 font-medium">{t('Спеціальності', 'Specialties')}</p>
                </div>
                <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm text-center">
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">94%</div>
                  <p className="text-gray-500 font-medium">{t('Працевлаштування', 'Employment Rate')}</p>
                </div>
              </div>
            </div>

            {/* Financial Info - Currency Translations Fixed Here */}
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary rounded-full"></span>
                {t('Фінансова інформація', 'Financial Information')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    {t('Бюджет 2026', 'Budget 2026')}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">{t('Державне фінансування', 'State Funding')}</span>
                      <span className="font-bold text-gray-800">{t('245 млн грн', '245M UAH')}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">{t('Власні надходження', 'Own Revenue')}</span>
                      <span className="font-bold text-gray-800">{t('78 млн грн', '78M UAH')}</span>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                      <span className="font-bold text-gray-800">{t('Всього', 'Total')}</span>
                      <span className="font-bold text-primary text-xl">{t('323 млн грн', '323M UAH')}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    {t('Використання коштів', 'Use of Funds')}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">{t('Заробітна плата', 'Staff Salaries')}</span>
                      <span className="font-bold text-gray-800">68%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">{t('Матеріальне забезпечення', 'Material Support')}</span>
                      <span className="font-bold text-gray-800">18%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">{t('Розвиток інфраструктури', 'Infrastructure Development')}</span>
                      <span className="font-bold text-gray-800">14%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Educational Activities */}
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary rounded-full"></span>
                {t('Освітня діяльність', 'Educational Activities')}
              </h2>
              <div className="space-y-4">
                <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
                  <h3 className="text-lg font-bold mb-6 text-gray-800 text-center">
                    {t('Рівні освіти', 'Education Levels')}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-1">3,124</div>
                      <p className="text-gray-500 font-medium">{t('Бакалаври', 'Bachelors')}</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-1">1,856</div>
                      <p className="text-gray-500 font-medium">{t('Магістри', 'Masters')}</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-1">367</div>
                      <p className="text-gray-500 font-medium">{t('Аспіранти', 'PhD Students')}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
                  <h3 className="text-lg font-bold mb-6 text-gray-800">
                    {t('Форми навчання', 'Forms of Education')}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-500 font-medium">{t('Денна форма', 'Full-time')}</span>
                        <span className="font-bold text-gray-800">4,123</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-3">
                        <div className="bg-primary h-3 rounded-full" style={{ width: '77%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-500 font-medium">{t('Заочна форма', 'Part-time')}</span>
                        <span className="font-bold text-gray-800">1,224</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-3">
                        <div className="bg-primary h-3 rounded-full" style={{ width: '23%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* International Activities */}
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary rounded-full"></span>
                {t('Міжнародна діяльність', 'International Activities')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm text-center">
                  <div className="text-4xl font-bold text-primary mb-2">87</div>
                  <p className="text-gray-500 font-medium">{t('Партнерів за кордоном', 'International Partners')}</p>
                </div>
                <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm text-center">
                  <div className="text-4xl font-bold text-primary mb-2">245</div>
                  <p className="text-gray-500 font-medium">{t('Студентів на обміні', 'Exchange Students')}</p>
                </div>
                <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm text-center">
                  <div className="text-4xl font-bold text-primary mb-2">32</div>
                  <p className="text-gray-500 font-medium">{t('Міжнародних проєктів', 'International Projects')}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}