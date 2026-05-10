import "./ProductGrid.css";
import products from "../data/products";

const ProductGrid = () => {
  return (
    <section id="products" className="product-section">
      <h2 className="section-title">Fresh from Simba</h2>
      <div className="product-grid">
        {products.map((product) => (
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
    </section>
  );
};

export default ProductGrid;
