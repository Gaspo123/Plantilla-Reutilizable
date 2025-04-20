import React, { useState } from 'react';
import { TextField, Box, Typography, Paper, Snackbar, Alert, Divider } from '@mui/material';
import useCheckoutForm from './useCheckoutForm';
import { PrimaryButton } from '../ui/Buttons.jsx'; // ✅ Usamos tu botón

const CheckoutForm = () => {
  const { form, error, handleChange, handleSubmit } = useCheckoutForm();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Validación avanzada de Email y Dirección
  const validateEmail = email => /\S+@\S+\.\S+/.test(email);
  const validateDireccion = direccion => direccion.trim().length > 5;

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 5, px: 3 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 4, background: '#f5f5f5' }}>
        <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: 600 }}>
          🧾 Completa tus datos para finalizar la compra
        </Typography>

        {/* Alerta si no hay usuario o error de validación */}
        {error.usuario && (
          <Alert
            severity="warning"
            variant="outlined"
            sx={{
              mt: 2,
              mb: 3,
              borderLeft: '5px solid #ff9800',
              background: '#fff8e1',
              color: '#8d6e63',
              fontWeight: 'bold',
              boxShadow: '0 3px 6px rgba(0,0,0,0.1)',
            }}
          >
            ⚠️ {error.usuario}
          </Alert>
        )}

        <form
          onSubmit={e => {
            e.preventDefault();
            const formIsValid = handleSubmit(e);
            if (formIsValid !== false) {
              setOpenSnackbar(true);
            }
          }}
          noValidate
        >
          {/* Nombre Completo */}
          <TextField
            fullWidth
            margin="normal"
            label="Nombre completo"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            error={!!error.nombre}
            helperText={error.nombre}
            variant="outlined"
            sx={{ mb: 2 }}
          />

          {/* Email */}
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            error={!!error.email}
            helperText={error.email}
            placeholder="ejemplo@gmail.com"
            variant="outlined"
            sx={{ mb: 2 }}
          />

          {/* Dirección */}
          <TextField
            fullWidth
            margin="normal"
            label="Dirección"
            name="direccion"
            value={form.direccion}
            onChange={handleChange}
            error={!!error.direccion}
            helperText={error.direccion}
            placeholder="Calle Falsa 123, Ciudad"
            variant="outlined"
            sx={{ mb: 3 }}
          />

          {/* Botón de Generar Ticket */}
          <PrimaryButton type="submit" fullWidth sx={{ mt: 2, py: 1.5 }}>
            Generar Ticket
          </PrimaryButton>
        </form>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" align="center">
          *Por favor, asegúrate de que todos los campos estén correctamente llenados para completar
          la compra.
        </Typography>
      </Paper>

      {/* Snackbar para notificar al usuario */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          ✅ ¡Ticket generado con éxito!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CheckoutForm;
