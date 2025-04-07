import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
} from "@mui/material";

const Contact = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);

    try {
      // 🔁 Reemplaza esta URL con tu endpoint real del backend
      const res = await fetch("http://localhost:3001/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({ nombre: "", email: "", mensaje: "" });
      } else {
        alert("Error al enviar el mensaje.");
      }
    } catch (error) {
      alert("Error de conexión con el servidor.");
      console.error(error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        📬 Contactanos
      </Typography>
      <Typography variant="body1" gutterBottom>
        Si tenés alguna duda, sugerencia o reclamo, completá el siguiente
        formulario.
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <TextField
          fullWidth
          label="Nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          label="Correo electrónico"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          margin="normal"
          type="email"
        />
        <TextField
          fullWidth
          label="Mensaje"
          name="mensaje"
          value={form.mensaje}
          onChange={handleChange}
          required
          margin="normal"
          multiline
          rows={4}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Enviar mensaje
        </Button>

        {success && (
          <Alert severity="success" sx={{ mt: 2 }}>
            ¡Tu mensaje ha sido enviado con éxito!
          </Alert>
        )}
      </Box>
    </Container>
  );
};

export default Contact;
