import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Karibu <span className="gradient-text">Simba Supermarket.</span>
        </h1>
        <p className="hero-subtitle">
          Fresh groceries, snacks, and household essentials delivered across Kigali at lightning speed. 
          Experience the future of shopping.
        </p>
        <div className="hero-actions">
          <button className="btn-primary">Shop Now</button>
          <button className="btn-secondary">View Deals</button>
        </div>
      </div>
      <div className="hero-visual">
        <div className="floating-image-container glass-panel">
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000" 
            alt="Fresh Produce" 
            className="spatial-img"
          />
          <div className="image-overlay">
            <span>FRESH DAILY</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;