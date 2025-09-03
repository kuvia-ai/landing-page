import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import './index.scss';

const NavItem: React.FC<{
  section: string;
  targetSection: string;
  label: string;
  to: string;
}> = ({ section, targetSection, label, to }) => {
  return (
    <div
      className={`kuvia-navbar-link ${section === targetSection ? 'kuvia-navbar-link--active' : ''}`}
    >
      <Link to={to}>{label}</Link>
      <div
        className={`kuvia-navbar-link-underline ${section === targetSection ? 'kuvia-navbar-link-underline--active' : ''}`}
      ></div>
    </div>
  );
};

interface NavbarProps {
  full?: boolean;
}

const Navbar = ({ full = false }: NavbarProps) => {
  const { section } = useContext(AppContext);

  const navSections = [
    'what-we-do',
    'why-kuvia',
    'product',
    'about-us',
    'contact-us',
  ];

  return (
    <nav className="kuvia-navbar">
      {navSections.map((navSection) => {
        if (full === false && navSection === 'contact-us') {
          return null;
        }
        return (
          <NavItem
            key={navSection}
            section={section}
            targetSection={navSection}
            label={navSection
              .split('-')
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')}
            to={`/#${navSection}`}
          />
        );
      })}
    </nav>
  );
};

export default Navbar;
