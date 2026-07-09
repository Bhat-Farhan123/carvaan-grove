import "../styles/about.css";

export default function About() {
  return (
    <section id="about" className="about" data-aos="fade-up">
      <div className="about-left">
        <span className="about-tag">ABOUT US</span>

        <h2>
          Growing Premium
          <br />
          Kashmiri Apples
          <br />
          For 10 Years
        </h2>

        <p>
          Himalayan Harvest is a family-owned orchard located in Anantnag, Jammu
          & Kashmir. For over a decade, we have been cultivating high-quality
          apples and creating delicious apple-based products using traditional
          farming practices and careful harvesting methods.
        </p>

        <p>
          Our mission is simple: deliver the freshness of Kashmir directly from
          our orchards to families across India.
        </p>
      </div>

      <div className="about-right">
        <div className="stat-card">
          <h3>10+</h3>
          <p>Years Experience</p>
        </div>

        <div className="stat-card">
          <h3>100%</h3>
          <p>Fresh Harvest</p>
        </div>

        <div className="stat-card">
          <h3>Premium</h3>
          <p>Kashmiri Quality</p>
        </div>
      </div>
    </section>
  );
}
