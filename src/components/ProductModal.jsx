import { useState } from "react";
import "../styles/productModal.css";

export default function ProductModal({ product, isOpen, onClose, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }

    onClose();
    setQuantity(1);
  };

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>

      <div className="product-modal">
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <img src={product.image} alt={product.name} className="modal-image" />

        <div className="modal-content">
          <h2>{product.name}</h2>

          <p className="modal-price">₹{product.price}</p>

          <p className="modal-description">
            Cultivated in the heart of Anantnag and harvested with care, this
            product carries the richness of Kashmir's soil, tradition, and
            craftsmanship.
          </p>
          <div className="product-details">
            <p>
              <strong>Quantity:</strong> {product.quantity}
            </p>

            <p>
              <strong>Origin:</strong> {product.origin}
            </p>

            <p>
              <strong>Shelf Life:</strong> {product.shelfLife}
            </p>

            <p>
              <strong>Storage:</strong> {product.storage}
            </p>
          </div>

          <div className="quantity-selector">
            <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
              −
            </button>

            <span>{quantity}</span>

            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>

          <button className="modal-cart-btn" onClick={handleAddToCart}>
            Add {quantity} To Cart
          </button>
        </div>
      </div>
    </>
  );
}
