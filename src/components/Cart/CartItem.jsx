// src/components/Cart/CartItem.jsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

const CartItem = ({ prod, removeFromCart }) => {
  // Validar datos esenciales
  if (
    !prod ||
    !prod.id ||
    !prod.nombre ||
    typeof prod.precio !== 'number' ||
    typeof prod.cantidad !== 'number'
  ) {
    return (
      <Card sx={{ maxWidth: 345, p: 2 }}>
        <Typography color="error">Producto no válido</Typography>
      </Card>
    );
  }

  // Formato de precios profesional
  const formatoMoneda = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2,
  });

  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: 4,
        boxShadow: 3,
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.02)',
        },
      }}
    >
      {prod.imagen ? (
        <CardMedia component="img" height="180" image={prod.imagen} alt={prod.nombre} />
      ) : (
        <Box
          height="180px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgcolor="#f0f0f0"
        >
          <Typography color="text.secondary">Imagen no disponible</Typography>
        </Box>
      )}

      <CardContent>
        <Typography variant="h6" gutterBottom>
          {prod.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Precio unitario: {formatoMoneda.format(prod.precio)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Cantidad: {prod.cantidad}
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 1 }}>
          Subtotal: {formatoMoneda.format(prod.precio * prod.cantidad || 0)}
        </Typography>

        <Button
          variant="outlined"
          color="error"
          fullWidth
          sx={{ marginTop: '1rem' }}
          onClick={() => removeFromCart(prod.id)}
        >
          Quitar uno
        </Button>
      </CardContent>
    </Card>
  );
};

export default CartItem;
