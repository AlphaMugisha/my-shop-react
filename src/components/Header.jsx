import "./Header.css";

const Header = ({ toggleTheme, theme }) => {
  return (
    <nav className="header-nav glass-panel">
      <div className="logo">Simba Shop</div>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      <div className="header-actions">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
        <button className="btn-primary">Get Started</button>
      </div>
    </nav>
  );
};

export default Header;
