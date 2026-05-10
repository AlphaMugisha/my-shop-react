import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer glass-panel">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="logo">iOS 26 Shop</span>
          <p>Defining the digital frontier.</p>
        </div>
        <div className="footer-links">
          <div className="link-group">
            <h4>Shop</h4>
            <a href="#">All Products</a>
            <a href="#">Bundles</a>
          </div>
          <div className="link-group">
            <h4>Support</h4>
            <a href="#">Help Center</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2026 iOS 26 Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
