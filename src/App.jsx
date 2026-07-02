import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  // Cart State
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar />

      <Hero />

      <Features />

      <Products cart={cart} setCart={setCart} />

      <Cart cart={cart} setCart={setCart} />
      <Footer />
    </>
  );
}

export default App;
