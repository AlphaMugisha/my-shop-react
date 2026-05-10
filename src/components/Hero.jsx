import ProductCard from "./ProductCard";
import products from "../data/products";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Karibu Simba Supermarket!</h1>

        <p>
          Fresh groceries, snacks, drinks, and household essentials
          delivered across Kigali at lightning speed.
        </p>

        <button>Shop Now</button>

        <div className="products-preview">
          <ProductCard product={products[0]} />
        </div>
      </div>

      <div className="hero-image-container">
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e"
          alt="Supermarket"
        />
      </div>
    </section>
  );
}

export default Hero;