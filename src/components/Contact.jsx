import "../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact" className="cta" data-aos="zoom-in">
      <div className="cta-box">
        <span>READY TO ORDER?</span>

        <h2>
          From Kashmir's Orchards
          <br />
          To Your Table
        </h2>

        <p>
          Fresh apples, apple juice, pickle, jam and handcrafted products
          prepared with care and delivered directly from our orchard in
          Anantnag.
        </p>

        <a
          href="https://wa.me/91YOURNUMBER"
          target="_blank"
          rel="noreferrer"
          className="cta-btn"
        >
          Order On WhatsApp
        </a>

        <div className="cta-location">📍 Anantnag, Jammu & Kashmir</div>
      </div>
    </section>
  );
}
