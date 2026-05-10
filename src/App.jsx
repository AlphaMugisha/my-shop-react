import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

function App() {
  // Stores the current theme
  const [theme, setTheme] = useState("dark");

  // Controls whether the featured product is visible
  const [showSpecial, setShowSpecial] = useState(false);

  // Runs whenever theme changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Switch between dark and light mode
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Toggle featured product visibility
  const toggleSpecial = () => {
    setShowSpecial(!showSpecial);
  };

  return (
    <div className="app-container">
      {/* Background Aesthetic Orbs */}
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-orb orb-3"></div>

      {/* Navbar */}
      <Header toggleTheme={toggleTheme} theme={theme} />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Today's Special Toggle */}
        <section className="special-section">
          <button className="special-btn" onClick={toggleSpecial}>
            {showSpecial
              ? "Hide Today's Special"
              : "Show Today's Special"}
          </button>
        </section>

        {/* Product Grid */}
        {showSpecial && <ProductGrid />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;