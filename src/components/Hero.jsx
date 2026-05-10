import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Spatial Assets for the <span className="gradient-text">Future.</span></h1>
        <p className="hero-subtitle">
          Experience the next generation of digital products designed for iOS 26.
          High-fidelity assets for developers and creators.
        </p>
        <div className="hero-actions">
          <button className="btn-primary">Browse Collection</button>
          <button className="btn-secondary">View Demo</button>
        </div>
      </div>
      <div className="hero-visual">
        <div className="floating-card glass-panel">
          <div className="card-inner">
            <span>UI KIT</span>
            <h3>v26.0</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
