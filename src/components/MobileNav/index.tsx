import { Link } from 'react-router-dom';
import './index.scss';

interface MobileNavProps {
  onLinkClick: () => void;
}

const MobileNav = ({ onLinkClick }: MobileNavProps) => {
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
          <div className="kuvia-mobile-nav-item">
            <Link to={`#${section}`} onClick={onLinkClick}>
              {section
                .split('-')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MobileNav;
