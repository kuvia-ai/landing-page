import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Navbar: React.FC = () => {
  return (
    <nav className="kuvia-navbar">
      <div className="kuvia-navbar-link">
        <Link to="/#what-we-do">What we do</Link>
        <div className="kuvia-navbar-link-underline"></div>
      </div>
      <div className="kuvia-navbar-link">
        <Link to="/#why-kuvia">Why Kuvia</Link>
        <div className="kuvia-navbar-link-underline"></div>
      </div>
      <div className="kuvia-navbar-link">
        <Link to="/#product">Product</Link>
        <div className="kuvia-navbar-link-underline"></div>
      </div>
      <div className="kuvia-navbar-link">
        <Link to="/#about-us">About Us</Link>
        <div className="kuvia-navbar-link-underline"></div>
      </div>
    </nav>
  );
};

export default Navbar;