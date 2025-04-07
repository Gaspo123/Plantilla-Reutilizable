import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Divider,
} from "@mui/material";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import MusicPlayer from "../components/MusicPlayer.jsx"; // 👈 Asegurate que la ruta esté bien

const CheckoutForm = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    direccion: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const err = {};
    if (!formData.nombre.trim()) err.nombre = "Nombre requerido";
    if (!formData.email.includes("@")) err.email = "Email inválido";
    if (!formData.direccion.trim()) err.direccion = "Dirección requerida";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const generarTicket = () => {
    return (
      "TICKET-" + Math.random().toString(36).substring(2, 10).toUpperCase()
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const ticketId = generarTicket();
    toast.success(`✅ Compra realizada con éxito. Tu código es: ${ticketId}`);
    clearCart();
    navigate("/gracias", { state: { ticket: ticketId } });
  };

  return (
    <Paper
      sx={{ maxWidth: 600, margin: "2rem auto", padding: "2rem" }}
      elevation={3}
    >
      <Typography variant="h5" gutterBottom align="center">
        🧾 Finalizar Compra
      </Typography>
      <Divider sx={{ mb: 3 }} />

      {/* 🎵 Reproductor de música */}
      <MusicPlayer />

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Nombre completo"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          error={!!errors.nombre}
          helperText={errors.nombre}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Correo electrónico"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Dirección"
          name="direccion"
          value={formData.direccion}
          onChange={handleChange}
          error={!!errors.direccion}
          helperText={errors.direccion}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Generar ticket y finalizar
        </Button>
      </form>
    </Paper>
  );
};

export default CheckoutForm;
