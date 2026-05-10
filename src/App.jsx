import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <h2 className="logo">Simba Supermarket</h2>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Offers</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Karibu Simba Supermarket!</h1>

          <p>
            Fresh groceries, snacks, drinks, and household essentials
            delivered across Kigali at lightning speed.
          </p>

          <button>Shop Now</button>
        </div>

        <div className="hero-image-container">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e"
            alt="Supermarket"
          />
        </div>
      </section>
    </>
  );
}

export default App;