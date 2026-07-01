import "./Navbar.css";
import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";
function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">
        Shop<span>Easy</span>
      </h2>

      <ul className="nav-links">
        <li>Home</li>
        <li>Products</li>
        <li>Categories</li>
        <li>Contact</li>
      </ul>

      <div className="nav-icons">
        <FiSearch />
        <FiHeart />
        <FiShoppingCart />

        <button className="shop-btn">Shop Now</button>
      </div>
    </nav>
  );
}

export default Navbar;
