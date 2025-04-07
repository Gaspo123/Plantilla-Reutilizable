import React from "react";
import { useCart } from "../../context/CartContext";
import "../../styles/cart.css";

const generateTicketCode = () =>
  "TKT-" + Math.random().toString(36).substr(2, 8).toUpperCase();

const CartDrawer = ({ onClose }) => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + (item.onSalePrice ?? item.price) * item.quantity,
    0
  );

  const handleCheckout = () => {
    const ticket = generateTicketCode();
    alert(`¡Compra realizada con éxito!\nTu código de reclamo es: ${ticket}`);
    clearCart();
    onClose();
  };

  return (
    <aside className="cart-drawer">
      <h3>🛒 Tu Carrito</h3>
      <button onClick={onClose} className="close-btn">
        ❌
      </button>

      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>Cantidad: {item.quantity}</p>
                <p>
                  Precio: ${(item.onSalePrice ?? item.price).toLocaleString()}
                </p>
                <button onClick={() => removeFromCart(item.id)}>
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {cartItems.length > 0 && (
        <>
          <h4>Total: ${total.toLocaleString()}</h4>
          <button className="checkout-btn" onClick={handleCheckout}>
            Finalizar Compra
          </button>
        </>
      )}
    </aside>
  );
};

export default CartDrawer;
