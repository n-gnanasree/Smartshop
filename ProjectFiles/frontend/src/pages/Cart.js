import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const location = useLocation();
  const navigate = useNavigate();

  const [cart, setCart] = useState(location.state?.cart || []);

  // ➕ Increase Qty
  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  // ➖ Decrease Qty
  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  // ❌ Remove Item
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // 💰 Total Price
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="cart-container">
      <h2>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <h3>Cart is Empty</h3>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-card" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div>
                <h4>{item.name}</h4>
                <p>₹ {item.price}</p>

                <div className="qty">
                  <button onClick={() => decreaseQty(item.id)}>
                    ➖
                  </button>

                  <span>{item.qty}</span>

                  <button onClick={() => increaseQty(item.id)}>
                    ➕
                  </button>
                </div>

                <button
                  className="remove"
                  onClick={() => removeItem(item.id)}
                >
                  ❌ Remove
                </button>
              </div>
            </div>
          ))}

          <h2>Total: ₹ {total}</h2>

          <button
            className="pay-btn"
            onClick={() =>
              navigate("/payment", { state: { total } })
            }
          >
            Proceed to Payment 💳
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
