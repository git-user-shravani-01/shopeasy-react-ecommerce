import "./ProductCard.css";

function ProductCard({
  product,
  image,
  name,
  price,
  oldPrice,
  rating,
  discount,
  category,
  addToCart,
}) {
  return (
    <div className="product-card">
      <span className="discount">-{discount}</span>

      <span className="heart">♡</span>

      <img src={image} alt={name} className="product-image" />

      <div className="product-info">
        <small>{category}</small>

        <h3>{name}</h3>

        <div className="rating">{"⭐".repeat(rating)}</div>

        <div className="price-box">
          <span className="old-price">₹{oldPrice}</span>

          <span className="price">₹{price}</span>
        </div>

        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
