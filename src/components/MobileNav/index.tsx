const MobileNav = () => {
  const navSections = [
    'what-we-do',
    'why-kuvia',
    'product',
    'about-us',
    'contact-us',
  ];

  return <div className="kuvia-mobile-nav">{navSections.map((section) => {return (
    <div className="kuvia-mobile-nav-item">
      {section}
    </div>
  )})}</div>;
};

export default MobileNav;
