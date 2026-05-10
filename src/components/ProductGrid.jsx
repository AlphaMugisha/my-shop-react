import React from "react";
import "./ProductGrid.css";

const products = [
  { id: 1, name: "Spatial UI Kit", category: "Design", price: "$49", icon: "✨" },
  { id: 2, name: "Neural Link SDK", category: "Dev Tools", price: "$199", icon: "🧠" },
  { id: 3, name: "Metaverse Assets", category: "3D Models", price: "$29", icon: "🌐" },
  { id: 4, name: "Holo Icons", category: "Icons", price: "$15", icon: "💎" },
];

const ProductGrid = () => {
  return (
    <section id="products" className="product-section">
      <h2 className="section-title">Digital Collections</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card glass-panel">
            <div className="product-icon">{product.icon}</div>
            <span className="product-category">{product.category}</span>
            <h3 className="product-name">{product.name}</h3>
            <div className="product-footer">
              <span className="product-price">{product.price}</span>
              <button className="btn-secondary small">Add</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
