// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";

// 🧩 Contextos globales
import { CartProvider } from "./context/CartContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

// 🔔 Notificaciones
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {" "}
      {/* 🔐 Contexto de usuario logueado */}
      <CartProvider>
        {" "}
        {/* 🛒 Contexto del carrito */}
        <App />
        <Toaster richColors position="top-center" /> {/* ✅ Alertas visuales */}
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
