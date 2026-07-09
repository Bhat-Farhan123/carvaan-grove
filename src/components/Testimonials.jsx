import "../styles/testimonials.css";

export default function Testimonials() {
  const reviews = [
    {
      name: "Aamir",
      city: "Srinagar",
      review:
        "The apples arrived fresh and perfectly packed. Best quality we've ordered online.",
    },
    {
      name: "Zoya",
      city: "Delhi",
      review:
        "The juice tastes natural and authentic. Will definitely order again.",
    },
    {
      name: "Khushii",
      city: "Himachal pardesh",
      review: "Excellent packaging and quick delivery. Highly recommended.",
    },
  ];

  return (
    <section className="testimonials">
      <div className="section-header">
        <span>CUSTOMER REVIEWS</span>

        <h2>What Our Customers Say</h2>
      </div>

      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="stars">★★★★★</div>

            <p>{review.review}</p>

            <h4>{review.name}</h4>

            <span>{review.city}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
