import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Payment.css";

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();

  const total = location.state?.total || 0;

  const [method, setMethod] = useState("UPI");

  const handlePayment = () => {
    alert("Payment Successful ✅");
    navigate("/success");
  };

  return (
    <div className="payment-container">
      <h2>💳 Payment Page</h2>

      <h3>Total Amount: ₹ {total}</h3>

      {/* Payment Method */}
      <div className="methods">
        <button onClick={() => setMethod("UPI")}>
          UPI
        </button>

        <button onClick={() => setMethod("Card")}>
          Card
        </button>
      </div>

      {/* UPI FORM */}
      {method === "UPI" && (
        <div className="form">
          <input
            type="text"
            placeholder="Enter UPI ID"
          />
        </div>
      )}

      {/* CARD FORM */}
      {method === "Card" && (
        <div className="form">
          <input
            type="text"
            placeholder="Card Number"
          />

          <input type="text" placeholder="Expiry" />

          <input type="text" placeholder="CVV" />
        </div>
      )}

      <button
        className="pay-btn"
        onClick={handlePayment}
      >
        Pay Now 💰
      </button>
    </div>
  );
}

export default Payment;
