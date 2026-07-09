import "../styles/cart.css";

export default function Cart({
  cartItems,
  isOpen,
  setIsOpen,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  setIsCheckoutOpen,
}) {
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <>
      <div
        className={`cart-overlay ${isOpen ? "show" : ""}`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>

          <button onClick={() => setIsOpen(false)}>✕</button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <h4>{item.name}</h4>

                <span>₹{item.price}</span>

                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.name)}>−</button>

                  <span>{item.quantity}</span>

                  <button onClick={() => increaseQuantity(item.name)}>+</button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.name)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <div>
            <p>Total Items: {totalItems}</p>

            <p>Total Amount: ₹{totalPrice}</p>
          </div>

          {cartItems.length > 0 && (
            <button
              className="whatsapp-btn"
              onClick={() => setIsCheckoutOpen(true)}
            >
              Order On WhatsApp
            </button>
          )}
        </div>
      </div>
    </>
  );
}
