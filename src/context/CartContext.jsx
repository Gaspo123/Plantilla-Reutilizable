import { createContext, useContext, useState } from "react";
import { toast } from "sonner";

// Creamos el contexto
const CartContext = createContext();

// Custom hook para usar el contexto fácilmente
export const useCart = () => useContext(CartContext);

// Componente proveedor del carrito
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [tickets, setTickets] = useState([]); // Historial de tickets

  // Agrega un producto al carrito
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

  // Elimina una unidad del producto
  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      return prevCart
        .map((p) =>
          p.id === productId ? { ...p, cantidad: p.cantidad - 1 } : p
        )
        .filter((p) => p.cantidad > 0);
    });

    toast.error("🗑️ Producto eliminado del carrito");
  };

  // Limpia todo el carrito
  const clearCart = () => setCart([]);

  // Guarda un ticket al completar el formulario
  const saveTicket = (ticket) => {
    setTickets((prev) => [...prev, ticket]);
    toast.success("🎟️ Ticket guardado correctamente");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        saveTicket,
        tickets, // Podés usarlo para mostrar historial
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
