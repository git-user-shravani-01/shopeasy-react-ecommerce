import "./Footer.css";
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h2>
            Shop<span>Easy</span>
          </h2>

          <p>
            Discover premium fashion, accessories and lifestyle products
            designed for modern shoppers. Quality, style and comfort—all in one
            place.
          </p>

          <div className="social-icons">
            <FiFacebook />

            <FiInstagram />

            <FiTwitter />

            <FiLinkedin />
          </div>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">Products</a>
            </li>

            <li>
              <a href="#">Categories</a>
            </li>

            <li>
              <a href="#">About</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Customer Support</h3>

          <ul>
            <li>
              <a href="#">FAQs</a>
            </li>

            <li>
              <a href="#">Shipping</a>
            </li>

            <li>
              <a href="#">Returns</a>
            </li>

            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>

          <p>📍 Pune, Maharashtra</p>

          <p>📞 +91 98765 43210</p>

          <p>✉ support@shopeasy.com</p>
        </div>
      </div>

      <hr />

      <p className="copyright">© 2026 Shopify. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
