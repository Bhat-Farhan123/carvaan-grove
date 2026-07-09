import "../styles/whyChooseUs.css";

export default function WhyChooseUs() {
  const features = [
    {
      icon: "🍎",
      title: "Fresh Harvest",
      description:
        "Hand-picked apples harvested at peak freshness directly from our orchards.",
    },
    {
      icon: "🌿",
      title: "Naturally Grown",
      description:
        "Cultivated using traditional farming methods with care and sustainability.",
    },
    {
      icon: "🚚",
      title: "Direct From Orchard",
      description:
        "Delivered directly from our orchards without unnecessary middlemen.",
    },
    {
      icon: "⭐",
      title: "Premium Quality",
      description:
        "Every product is carefully selected and prepared to meet the highest standards.",
    },
  ];

  return (
    <section id="why-choose-us" className="why" data-aos="fade-up">
      <div className="why-header">
        <span>WHY CHOOSE US</span>

        <h2>
          The Carvaan Grove
          <br />
          Difference
        </h2>

        <p>
          Bringing the freshness of Kashmir directly to your table through
          quality, tradition, and trust.
        </p>
      </div>

      <div className="why-grid">
        {features.map((feature, index) => (
          <div className="why-card" key={index}>
            <div className="why-icon">{feature.icon}</div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
