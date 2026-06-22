import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import LanguageToggle from '../LanguageToggle';
import './index.scss';

interface MobileNavProps {
  onLinkClick: () => void;
}

const MobileNav = ({ onLinkClick }: MobileNavProps) => {
  const { t } = useLanguage();

  const navSections = [
    'what-we-do',
    'why-kuvia',
    'product',
    'about-us',
    'contact-us',
  ];

  return (
    <div className="kuvia-mobile-nav">
      {navSections.map((section) => {
        return (
          <div className="kuvia-mobile-nav-item" key={section}>
            <Link to={`#${section}`} onClick={onLinkClick}>
              {t(`nav.${section}`)}
            </Link>
          </div>
        );
      })}
      <div className="kuvia-mobile-nav-language">
        <LanguageToggle />
      </div>
    </div>
  );
};

export default MobileNav;
