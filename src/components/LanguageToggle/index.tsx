import { useLanguage } from '../../context/LanguageContext';
import './index.scss';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="kuvia-language-toggle">
      <button
        className={language === 'en' ? 'active' : ''}
        onClick={() => setLanguage('en')}
        aria-label="English"
      >
        EN
      </button>
      <span className="kuvia-language-toggle-divider">|</span>
      <button
        className={language === 'es' ? 'active' : ''}
        onClick={() => setLanguage('es')}
        aria-label="Español"
      >
        ES
      </button>
    </div>
  );
};

export default LanguageToggle;
