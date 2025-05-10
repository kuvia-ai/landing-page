import kuviaLogo from "../../../../icons/kuvia.png";
import { Link } from "react-router-dom";
import Navbar from "../../../../components/Navbar";
import Button from "../../../../components/Button";
import "./index.scss";

const Header: React.FC = () => {
  return (
    <div className="kuvia-header">
      <Link to="/" className="kuvia-header-logo">
        <img src={kuviaLogo} alt="kuvia" />
      </Link>
      <div className="kuvia-header-right-content">
        <Navbar />
        <Button type="primary" text="Contact" />
      </div>
    </div>
  );
};

export default Header;
