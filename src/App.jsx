import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Páginas
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Products from './pages/Products.jsx';
import Login from './pages/Login.jsx';
import Gracias from './pages/Gracias.jsx';
import Historial from './pages/Historial.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Register from './pages/Register.jsx';

// Componentes
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Carrito from './components/Cart/Carrito.jsx';
import CheckoutForm from './components/Checkout/CheckoutForm.jsx';

// Contexto
import { useAuth } from './context/AuthContext.jsx';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
};

const App = () => {
  const { user } = useAuth();

  return (
    <Router>
      <Navbar />
      {user && (
        <h2 style={{ color: "#4caf50", marginTop: "10px", textAlign: "center" }}>
          Bienvenido, {user.nombre}
        </h2>
      )}
      <Routes>
        {/* Públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/gracias" element={<Gracias />} />
        <Route path="/register" element={<Register />} />

        {/* Protegidas */}
        <Route path="/checkout" element={<ProtectedRoute><CheckoutForm /></ProtectedRoute>} />
        <Route path="/historial" element={<ProtectedRoute><Historial /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
