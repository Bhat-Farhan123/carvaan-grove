import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer" data-aos="fade-up">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>
            <span>Carvaan</span> Grove
          </h2>

          <p>
            Premium Kashmiri apples and handcrafted apple products sourced
            directly from our orchard in Anantnag.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Products</a>
          <a href="#">Gallery</a>
        </div>

        <div className="footer-links">
          <h3>Products</h3>

          <a href="#">Fresh Apples</a>
          <a href="#">Apple Juice</a>
          <a href="#">Apple Pickle</a>
          <a href="#">Apple Jam</a>
        </div>

        <div className="footer-links">
          <h3>Contact</h3>

          <a href="#">Anantnag, J&K</a>
          <a href="#">+91 XXXXX XXXXX</a>
          <a href="#">WhatsApp</a>
          <a href="#">Instagram</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Carvaan Grove. All Rights Reserved.</p>

        <p>From Kashmir's Orchards To Your Table 🍎</p>
      </div>
    </footer>
  );
}
