import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.precio * item.quantity,
    0
  );

  const generarCodigo = () => {
    return "TKT-" + Math.random().toString(36).substring(2, 10).toUpperCase();
  };

  return (
    <section>
      <h2>Carrito</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.nombre} x {item.quantity} - ${item.precio * item.quantity}
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <>
          <p>
            <strong>Total: ${total}</strong>
          </p>
          <p>
            <strong>Código de ticket:</strong> {generarCodigo()}
          </p>
          <button onClick={clearCart}>Finalizar Compra</button>
        </>
      )}
    </section>
  );
};

export default Cart;
