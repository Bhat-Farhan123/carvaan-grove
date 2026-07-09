import "../styles/gallery.css";

import orchard1 from "../assets/gallery/orchard-1.jpg";
import orchard2 from "../assets/gallery/orchard-2.jpg";
import orchard3 from "../assets/gallery/orchard-3.jpg";
import harvest1 from "../assets/gallery/harvest-1.jpg";
import harvest2 from "../assets/gallery/harvest-2.jpg";
import apples1 from "../assets/gallery/apples-1.jpg";

export default function Gallery() {
  const images = [orchard1, orchard2, orchard3, harvest1, harvest2, apples1];

  return (
    <section id="gallery" className="gallery" data-aos="fade-up">
      <div className="gallery-header">
        <span>OUR ORCHARD</span>

        <h2>
          A Glimpse Into
          <br />
          Carvaan Grove
        </h2>

        <p>
          From blooming orchards to fresh harvests, every apple tells a story of
          care, tradition, and craftsmanship.
        </p>
      </div>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className={`gallery-item gallery-item-${index + 1}`} key={index}>
            <img src={image} alt="Gallery" />
          </div>
        ))}
      </div>
    </section>
  );
}
