import "./Products.css";
import ProductCard from "./ProductCard";
import products from "../data/products";

function Products({ cart, setCart }) {
  // Add product to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <section className="products">
      <h2>Featured Products</h2>

      <p className="subtitle">Discover our latest premium collection</p>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            image={product.image}
            name={product.name}
            price={product.price}
            oldPrice={product.oldPrice}
            rating={product.rating}
            discount={product.discount}
            category={product.category}
            addToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;
