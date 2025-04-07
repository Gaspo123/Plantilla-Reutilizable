import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { Toaster } from "sonner"; // ✅ Importación

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <App />
      <Toaster richColors position="top-center" /> {/* ✅ Agregado */}
    </CartProvider>
  </React.StrictMode>
);
