import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-tag">✨ New Collection 2026</p>

        <h1>
          Discover Your
          <br />
          <span>Perfect Style</span>
        </h1>

        <p className="hero-description">
          Upgrade your wardrobe with our latest premium fashion collection.
          Trendy, comfortable and designed for every occasion.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Shop Now</button>
          <button className="secondary-btn">Explore</button>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=700"
          alt="Fashion"
        />
      </div>
    </section>
  );
}

export default Hero;
