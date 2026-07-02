import "./Products.css";
import ProductCard from "./ProductCard";
import products from "../data/products";

function Products({ cart, setCart }) {
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );

      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
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
