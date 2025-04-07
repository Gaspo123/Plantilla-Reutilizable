import { createContext, useContext, useState } from "react";
import { toast } from "sonner";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((p) => p.id === product.id);
      if (existing) {
        return prevCart.map((p) =>
          p.id === product.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      } else {
        return [...prevCart, { ...product, cantidad: 1 }];
      }
    });
    toast.success(`🛒 ${product.nombre || product.name} agregado al carrito`);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      return prevCart
        .map((p) =>
          p.id === productId ? { ...p, cantidad: p.cantidad - 1 } : p
        )
        .filter((p) => p.cantidad > 0);
    });
    toast.error("Producto eliminado del carrito");
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
