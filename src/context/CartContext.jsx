// src/context/CartContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';

// Crear el contexto
const CartContext = createContext();

// Custom hook para consumir el contexto fácilmente
export const useCart = () => useContext(CartContext);

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [tickets, setTickets] = useState([]); // Historial de tickets

  // 🔄 Cargar carrito desde localStorage al montar la app
  useEffect(() => {
    try {
      const storedCart = JSON.parse(localStorage.getItem('cart'));
      if (Array.isArray(storedCart)) {
        const validProducts = storedCart.filter(
          p => p && p.id && p.nombre && typeof p.precio === 'number'
        );
        setCart(validProducts);
      }
    } catch (error) {
      console.error('🧨 Error al cargar el carrito desde localStorage:', error);
      setCart([]);
    }
  }, []);

  // 💾 Guardar carrito en localStorage cada vez que cambie
  useEffect(() => {
    const isValidCart =
      Array.isArray(cart) && cart.every(p => p.id && typeof p.precio === 'number');
    if (isValidCart) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  // 🧮 Calcular total del carrito
  const getCartTotal = () => {
    return cart.reduce((total, product) => total + product.precio * product.cantidad, 0);
  };

  // ➕ Agregar producto al carrito
  const addToCart = product => {
    if (!product || !product.id || !product.nombre || typeof product.precio !== 'number') {
      console.warn('❌ Producto no válido al intentar agregar:', product);
      toast.error('❌ Producto no válido');
      return;
    }

    setCart(prevCart => {
      const existingProductIndex = prevCart.findIndex(p => p.id === product.id);
      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].cantidad += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, cantidad: 1 }];
      }
    });

    toast.success(`🛒 ${product.nombre || product.name} agregado al carrito`);
  };

  // ➖ Eliminar una unidad del producto
  const removeFromCart = productId => {
    setCart(prevCart =>
      prevCart
        .map(p => (p.id === productId ? { ...p, cantidad: p.cantidad - 1 } : p))
        .filter(p => p.cantidad > 0)
    );

    toast.error('🗑️ Producto eliminado del carrito');
  };

  // 🧹 Vaciar todo el carrito
  const clearCart = () => {
    setCart([]);
    toast.info('🧹 Carrito limpiado');
  };

  // 🎟️ Guardar ticket de compra
  const saveTicket = ticket => {
    setTickets(prev => [...prev, ticket]);
    toast.success('🎟️ Ticket guardado correctamente');
  };

  // 🔄 Proveer funciones y estado
  return (
    <CartContext.Provider
      value={{
        cart,
        tickets,
        addToCart,
        removeFromCart,
        clearCart,
        saveTicket,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
