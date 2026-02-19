import React from "react";
import { useNavigate } from "react-router-dom";
import "./OrderSuccess.css";

function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <h1>🎉 Order Placed Successfully!</h1>

      <p>
        Thank you for shopping with ShopSmart 🛒
      </p>

      <button onClick={() => navigate("/home")}>
        Continue Shopping 🛍
      </button>
    </div>
  );
}

export default OrderSuccess;