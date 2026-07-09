import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Gallery from "../components/Gallery";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import FloatingWhatsapp from "../components/FloatingWhatsapp";
import Testimonials from "../components/Testimonials";

export default function Home() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.name === product.name);

      if (existing) {
        return prev.map((item) =>
          item.name === product.name
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  const increaseQuantity = (productName) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.name === productName
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  const decreaseQuantity = (productName) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.name === productName
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeFromCart = (productName) => {
    setCartItems((prev) => prev.filter((item) => item.name !== productName));
  };

  return (
    <>
      <Navbar
        cartCount={cartItems.reduce((total, item) => total + item.quantity, 0)}
        openCart={() => setIsCartOpen(true)}
      />

      <Hero />

      <About />

      <Products addToCart={addToCart} />

      <Gallery />

      <WhyChooseUs />
      <Testimonials />

      <Contact />

      <Footer />
      <FloatingWhatsapp />

      <Cart
        cartItems={cartItems}
        isOpen={isCartOpen}
        setIsOpen={setIsCartOpen}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeFromCart={removeFromCart}
      />
    </>
  );
}
