import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer glass-panel">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="logo">Simba Shop</span>
          <p>Fresh groceries delivered daily.</p>
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
        &copy; 2026 Simba Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
