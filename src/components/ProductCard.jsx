function ProductCard({ product, onAddToCart }) {
  const { name, price, image } = product;

  const formattedPrice = new Intl.NumberFormat("en-RW", {
    style: "currency",
    currency: "RWF",
  }).format(price);

  return (
    <div className="product-card glass-panel">
      <img src={image} alt={name} className="product-img" />

      <h3 className="product-name">{name}</h3>

      <p className="product-price">{formattedPrice}</p>
      
      <button 
        className="btn-primary" 
        style={{ width: "100%", marginTop: "auto"}}
        onClick={() => onAddToCart(product)}
      >
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;