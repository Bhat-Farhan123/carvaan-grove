import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

import "../styles/products.css";

import ProductModal from "./ProductModal";

import appleImg from "../assets/products/apple.jpg";
import juiceImg from "../assets/products/juice.jpg";
import pickleImg from "../assets/products/pickle.jpg";
import jamImg from "../assets/products/jam.jpg";
import driedImg from "../assets/products/dried.jpg";
import vinegarImg from "../assets/products/vinegar.jpg";

export default function Products({ addToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
    {
      name: "Fresh Kashmiri Apples",
      price: 299,
      image: appleImg,
      category: "Fresh",
    },
    {
      name: "Apple Juice",
      price: 199,
      image: juiceImg,
      category: "Beverages",
    },
    {
      name: "Apple Pickle",
      price: 249,
      image: pickleImg,
      category: "Preserves",
    },
    {
      name: "Apple Jam",
      price: 179,
      image: jamImg,
      category: "Preserves",
    },
    {
      name: "Dried Apple Slices",
      price: 149,
      image: driedImg,
      category: "Specialty",
    },
    {
      name: "Apple Vinegar",
      price: 299,
      image: vinegarImg,
      category: "Beverages",
    },
  ];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  const openProduct = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeProduct = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <section id="products" className="products" data-aos="fade-up">
        <div className="products-header">
          <span>OUR PRODUCTS</span>

          <h2>
            Crafted From
            <br />
            Kashmir's Finest Apples
          </h2>

          <p>
            From fresh orchard harvests to handcrafted apple products, every
            item is prepared with quality and care.
          </p>
        </div>

        <div className="category-filters">
          <button onClick={() => setActiveCategory("All")}>All</button>

          <button onClick={() => setActiveCategory("Fresh")}>Fresh</button>

          <button onClick={() => setActiveCategory("Beverages")}>
            Beverages
          </button>

          <button onClick={() => setActiveCategory("Preserves")}>
            Preserves
          </button>

          <button onClick={() => setActiveCategory("Specialty")}>
            Specialty
          </button>
        </div>

        <div className="products-grid">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="product-card"
              onClick={() => openProduct(product)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />

              <div className="product-content">
                <h3>{product.name}</h3>

                <div className="product-footer">
                  <span>₹{product.price}</span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openProduct(product);
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeProduct}
        addToCart={addToCart}
      />
    </>
  );
}
