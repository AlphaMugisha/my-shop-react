function ProductCard({ product }) {
  const { name, price, image } = product;

  const formattedPrice = new Intl.NumberFormat("en-RW", {
    style: "currency",
    currency: "RWF",
  }).format(price);

  return (
    <div className="product-card glass-panel" style={{ width: "300px", padding: "1rem" }}>
      <img src={image} alt={name} style={{ width: "100%", borderRadius: "var(--radius-l)", marginBottom: "1rem" }} />

      <h3>{name}</h3>

      <p style={{ color: "var(--accent-color)", fontWeight: "bold" }}>{formattedPrice}</p>
    </div>
  );
}

export default ProductCard;