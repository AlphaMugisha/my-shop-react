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
            src="https://plus.unsplash.com/premium_photo-1663040589382-88caf6b2bc60?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
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