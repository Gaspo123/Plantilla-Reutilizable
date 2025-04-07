import React from "react";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cartItems } = useCart();

  return (
    <header>
      <h1>Mini E-Commerce</h1>
      <div>
        🛒 Carrito: {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
      </div>
    </header>
  );
};

export default Header;
