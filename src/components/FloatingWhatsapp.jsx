import "../styles/floatingWhatsapp.css";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/916006995279"
      target="_blank"
      rel="noreferrer"
      className="floating-whatsapp"
    >
      <FaWhatsapp />
    </a>
  );
}
