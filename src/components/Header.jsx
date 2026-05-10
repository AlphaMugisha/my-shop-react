import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header-nav glass-panel">
      <div className="logo">iOS 26 Shop</div>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      <button className="btn-primary">Get Started</button>
    </nav>
  );
};

export default Header;
