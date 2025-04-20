// src/components/Cart/CartTotal.jsx
import React from 'react';
import { Box, Button, Divider, Typography, Paper } from '@mui/material';

const CartTotal = ({ total, handleCheckout }) => {
  const formatoMoneda = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2,
  });

  // Simulación de envío fijo
  const costoEnvio = total > 0 ? 1500 : 0;
  const totalConEnvio = total + costoEnvio;

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 400,
        margin: '2rem auto',
        padding: '2rem',
        borderRadius: '16px',
        textAlign: 'center',
        background: 'linear-gradient(to right, #f9f9f9, #e0f7fa)',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Resumen de tu compra
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ mb: 1 }}>
        <Typography variant="body1">Subtotal: {formatoMoneda.format(total)}</Typography>
        <Typography variant="body1">Envío: {formatoMoneda.format(costoEnvio)}</Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        Total a pagar: {formatoMoneda.format(totalConEnvio)}
      </Typography>

      <Button
        variant="contained"
        color="success"
        size="large"
        sx={{ mt: 3, px: 5, borderRadius: '12px', fontWeight: 'bold' }}
        onClick={handleCheckout}
      >
        Finalizar Compra
      </Button>
    </Paper>
  );
};

export default CartTotal;
