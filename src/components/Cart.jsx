import "./Cart.css";

function Cart({ cart, setCart }) {
  // Remove product from cart
  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
  };

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <section className="cart">
      <h2>🛒 Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.image} alt={item.name} />

                <div className="cart-details">
                  <h4>{item.name}</h4>

                  <p>₹{item.price}</p>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <h3>Total: ₹{totalPrice}</h3>
          </div>
        </>
      )}
    </section>
  );
}

export default Cart;
