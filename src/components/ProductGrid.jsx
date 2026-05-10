import { useState } from "react";
import "./ProductGrid.css";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products, onAddToCart }) => {
  const [visibleCount, setVisibleCount] = useState(3);
  const isExpanded = visibleCount >= products.length;

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  return (
    <section id="products" className="product-section">
      <h2 className="section-title">Fresh from Simba</h2>
      <div className="product-grid">
        {products.slice(0, visibleCount).map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart} 
          />
        ))}
      </div>
      
      {!isExpanded && (
        <div className="show-more-container">
          <button className="btn-show-more glass-panel" onClick={handleShowMore}>
            Show More Products
            <span className="arrow-down">↓</span>
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;
