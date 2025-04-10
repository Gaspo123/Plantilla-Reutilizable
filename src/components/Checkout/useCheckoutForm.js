import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext"; // ✅ Importamos el contexto de usuario

// ✅ Generador de ID único (tipo UUID corto)
const generateRandomId = () =>
  Math.random().toString(36).substr(2, 8).toUpperCase();

const useCheckoutForm = () => {
  const { cart, clearCart, saveTicket } = useCart();
  const { user } = useAuth(); // ✅ Obtenemos el usuario logueado
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    direccion: "",
  });

  const [error, setError] = useState({
    nombre: "",
    email: "",
    direccion: "",
    usuario: "",
  });

  // ✅ Validación de campos
  const validarCampos = () => {
    const nuevosErrores = {
      nombre: "",
      email: "",
      direccion: "",
      usuario: "",
    };

    if (!form.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio.";
    } else if (form.nombre.length < 3) {
      nuevosErrores.nombre = "Debe tener al menos 3 caracteres.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      nuevosErrores.email = "El email es obligatorio.";
    } else if (!emailRegex.test(form.email)) {
      nuevosErrores.email = "Debe ser un email válido. Ej: ejemplo@gmail.com";
    }

    if (!form.direccion.trim()) {
      nuevosErrores.direccion = "La dirección es obligatoria.";
    } else if (form.direccion.length < 5) {
      nuevosErrores.direccion =
        "La dirección debe tener al menos 5 caracteres.";
    }

    if (!user?.email) {
      nuevosErrores.usuario = "Debes iniciar sesión para finalizar la compra.";
    }

    setError(nuevosErrores);
    return Object.values(nuevosErrores).every((e) => e === "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setError({ ...error, [name]: "" }); // Limpia errores al escribir
  };

  const handleSubmit = (e, soloValidar = false) => {
    e.preventDefault();

    const esValido = validarCampos();
    if (!esValido) return false;

    if (soloValidar) return true; // ✅ Solo validar, sin enviar

    // ✅ Creamos el ticket completo
    const ticket = {
      id: generateRandomId(),
      comprador: form,
      productos: cart,
      total: cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0),
      fecha: new Date().toLocaleString(),
      usuario: user?.email || "", // ✅ Asociamos el ticket al usuario logueado
    };

    saveTicket(ticket); // ✅ Guardamos el ticket
    clearCart(); // ✅ Limpiamos el carrito
    navigate("/gracias", { state: { ticket } }); // ✅ Redirigimos a la página de agradecimiento

    return true;
  };

  return {
    form,
    error,
    handleChange,
    handleSubmit,
  };
};

export default useCheckoutForm;
