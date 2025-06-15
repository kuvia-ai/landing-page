import { useContext } from 'react';
import kuviaLogo from '../../../../icons/kuvia.png';
import { Link } from 'react-router-dom';
import Navbar from '../../../../components/Navbar';
import Button from '../../../../components/Button';
import { AppContext } from '../../../../context/AppContext';
import './index.scss';

const Header: React.FC = () => {
  const { isMobile } = useContext(AppContext);

  return (
    <div className="kuvia-header">
      <Link to="/" className="kuvia-header-logo">
        <img src={kuviaLogo} alt="kuvia" />
      </Link>
      {!isMobile && <div className="kuvia-header-right-content">
        <Navbar />
        <Link to="/#contact-us" className="kuvia-navbar-link">
          <Button type="primary" text="Contact" bolded />
        </Link>
      </div>}
    </div>
  );
};

export default Header;
