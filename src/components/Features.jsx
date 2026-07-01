import "./Features.css";
import { FaTruck, FaShieldAlt, FaHeadset, FaUndoAlt } from "react-icons/fa";

function Features() {
  return (
    <section className="features">
      <div className="feature-card">
        <FaTruck className="feature-icon" />
        <h3>Free Shipping</h3>
        <p>Free delivery on all orders above ₹999.</p>
      </div>

      <div className="feature-card">
        <FaShieldAlt className="feature-icon" />
        <h3>Secure Payment</h3>
        <p>100% safe and secure online payment.</p>
      </div>

      <div className="feature-card">
        <FaHeadset className="feature-icon" />
        <h3>24/7 Support</h3>
        <p>Friendly customer support anytime.</p>
      </div>

      <div className="feature-card">
        <FaUndoAlt className="feature-icon" />
        <h3>Easy Returns</h3>
        <p>7-day easy return policy.</p>
      </div>
    </section>
  );
}

export default Features;
