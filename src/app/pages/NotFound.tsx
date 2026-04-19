import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[60vh] flex items-center justify-center py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4">
          {t('Сторінку не знайдено', 'Page Not Found')}
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          {t(
            'На жаль, сторінка, яку ви шукаєте, не існує або була переміщена.',
            'Sorry, the page you are looking for does not exist or has been moved.'
          )}
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-white px-6 py-3 rounded-lg transition-colors"
          >
            <Home className="w-5 h-5" />
            {t('На головну', 'Go Home')}
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 border border-border hover:border-primary px-6 py-3 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {t('Назад', 'Go Back')}
          </button>
        </div>
      </div>
    </div>
  );
}
