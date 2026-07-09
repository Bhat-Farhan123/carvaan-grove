import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

import "../styles/navbar.css";

export default function Navbar({ cartCount, openCart }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        Carvaan <span>Grove</span>
      </div>

      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#products">Products</a>
        </li>

        <li>
          <a href="#gallery">Gallery</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="navbar-right">
        <div className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </div>

        <button className="contact-btn" onClick={openCart}>
          Cart {cartCount}
        </button>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  );
}
