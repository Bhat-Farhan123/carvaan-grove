import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero" data-aos="fade-up">
      <div className="hero-content">
        <p className="hero-subtitle">FROM ANANTNAG, JAMMU & KASHMIR</p>

        <h1 className="hero-title">
          Pure Kashmiri,
          <br />
          <span>Freshly Harvested</span>
        </h1>

        <p className="hero-description">
          Cultivated in the heart of Anantnag and harvested with care, our
          apples carry the richness of Kashmir's soil, tradition, and
          craftsmanship.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Shop Products</button>

          <button className="secondary-btn">Our Story</button>
        </div>
      </div>
    </section>
  );
}
