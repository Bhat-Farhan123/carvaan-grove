import { useState } from "react";
import "../styles/checkoutModal.css";

export default function CheckoutModal({
  isOpen,
  onClose,
  cartItems,
  totalItems,
  totalPrice,
}) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const sendWhatsApp = () => {
    if (!name || !phoneNumber || !address || !pincode) {
      alert("Please fill all fields");
      return;
    }

    const message = `
Hello Carvaan Grove,

Customer Details

Name: ${name}
Phone: ${phoneNumber}

Address:
${address}

Pincode:
${pincode}

Order Details

${cartItems
  .map(
    (item) =>
      `• ${item.name} x ${item.quantity} = ₹${item.price * item.quantity}`,
  )
  .join("\n")}

Total Items: ${totalItems}

Total Amount: ₹${totalPrice}
`;

    const phone = "916006995279";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 2500);
    setTimeout(() => {
      window.open(url, "_blank");
      onClose();
    }, 1500);
  };

  return (
    <>
      <div className="checkout-overlay" onClick={onClose}></div>

      <div className="checkout-modal">
        <button className="checkout-close" onClick={onClose}>
          ✕
        </button>

        <h2>Complete Your Order</h2>
        {success && (
          <div className="success-message">
            Order information prepared successfully! Redirecting to WhatsApp...
          </div>
        )}

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />

        <textarea
          placeholder="Delivery Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <div className="order-summary">
          <h3>Order Summary</h3>

          {cartItems.map((item, index) => (
            <div key={index} className="summary-item">
              <span>
                {item.name} × {item.quantity}
              </span>

              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}

          <div className="summary-total">Total: ₹{totalPrice}</div>
        </div>
        <button className="checkout-submit" onClick={sendWhatsApp}>
          Send To WhatsApp
        </button>
      </div>
    </>
  );
}
