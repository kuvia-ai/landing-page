import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Navbar: React.FC = () => {
  return (
    <nav className="kuvia-navbar">
      <Link to="/#what-we-do" className="kuvia-navbar-link">What we do</Link>
      <Link to="/#why-kuvia" className="kuvia-navbar-link">Why Kuvia</Link>
      <Link to="/#product" className="kuvia-navbar-link">Product</Link>
      <Link to="/#about-us" className="kuvia-navbar-link">About Us</Link>
    </nav>
  );
};

export default Navbar;