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

      quantity: "1 KG Box",
      description:
        "Premium Red Delicious apples freshly harvested from our orchard in Anantnag.",

      origin: "Anantnag, Kashmir",
      shelfLife: "15 Days",
      storage: "Store in a cool and dry place",
    },

    {
      name: "Apple Juice",
      price: 199,
      image: juiceImg,
      category: "Beverages",

      quantity: "750ml Bottle",
      description:
        "Freshly pressed apple juice with natural sweetness and no artificial preservatives.",

      origin: "Anantnag, Kashmir",
      shelfLife: "6 Months",
      storage: "Refrigerate after opening",
    },

    {
      name: "Apple Pickle",
      price: 249,
      image: pickleImg,
      category: "Preserves",

      quantity: "500g Glass Jar",
      description:
        "Traditional Kashmiri apple pickle prepared using family recipes and authentic spices.",

      origin: "Anantnag, Kashmir",
      shelfLife: "12 Months",
      storage: "Store in a cool dry place",
    },

    {
      name: "Apple Jam",
      price: 179,
      image: jamImg,
      category: "Preserves",

      quantity: "400g Jar",
      description:
        "Homemade apple jam crafted from fresh orchard apples with a rich fruity taste.",

      origin: "Anantnag, Kashmir",
      shelfLife: "10 Months",
      storage: "Refrigerate after opening",
    },

    {
      name: "Dried Apple Slices",
      price: 149,
      image: driedImg,
      category: "Specialty",

      quantity: "250g Pack",
      description:
        "Naturally dried apple slices with no added sugar, perfect for healthy snacking.",

      origin: "Anantnag, Kashmir",
      shelfLife: "8 Months",
      storage: "Keep sealed in a dry place",
    },

    {
      name: "Apple Vinegar",
      price: 299,
      image: vinegarImg,
      category: "Beverages",

      quantity: "500ml Bottle",
      description:
        "Naturally fermented apple vinegar made from fresh orchard apples.",

      origin: "Anantnag, Kashmir",
      shelfLife: "24 Months",
      storage: "Store away from direct sunlight",
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

                <p className="product-quantity">{product.quantity}</p>

                <p className="product-short-desc">{product.description}</p>

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
