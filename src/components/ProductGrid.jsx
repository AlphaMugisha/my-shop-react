import { useState } from "react";
import "./ProductGrid.css";
import products from "../data/products";

const ProductGrid = () => {
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
          <div key={product.id} className="product-card glass-panel">
            <div className="product-icon">{product.icon}</div>
            <span className="product-category">{product.category}</span>
            <h3 className="product-name">{product.name}</h3>
            <div className="product-footer">
              <span className="product-price">RWF {product.price.toLocaleString()}</span>
              <button className="btn-secondary small">Add to Cart</button>
            </div>
          </div>
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
