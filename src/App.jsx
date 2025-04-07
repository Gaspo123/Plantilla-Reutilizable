import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Products from "./pages/Products.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./pages/Login.jsx";
import Carrito from "./components/Carrito.jsx";
import CheckoutForm from "./pages/CheckoutForm.jsx";
import Gracias from "./pages/Gracias.jsx";
import Historial from "./pages/Historial.jsx";

const App = () => {
  console.log("App cargando...");
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/gracias" element={<Gracias />} />
        <Route path="/historial" element={<Historial />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
