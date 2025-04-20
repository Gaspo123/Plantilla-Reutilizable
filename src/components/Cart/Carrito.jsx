// src/components/Cart/Carrito.jsx
import React from 'react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography, Box } from '@mui/material';
import CartItem from './CartItem';
import CartTotal from './CartTotal';

const Carrito = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Validar productos válidos (evita NaN, vacíos o corruptos)
  const validCartItems = cart.filter(
    item => item && item.id && item.nombre && typeof item.precio === 'number' && item.cantidad > 0
  );

  const total = validCartItems.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h4" align="center" gutterBottom>
        🛒 Tu carrito de compras
      </Typography>

      {validCartItems.length === 0 ? (
        <Typography variant="h6" align="center" sx={{ marginTop: 4 }}>
          El carrito está vacío o contiene productos no válidos.
        </Typography>
      ) : (
        <>
          <Grid container spacing={4}>
            {validCartItems.map(prod => (
              <Grid item xs={12} sm={6} md={4} key={prod.id}>
                <CartItem prod={prod} removeFromCart={removeFromCart} />
              </Grid>
            ))}
          </Grid>

          <CartTotal total={total} handleCheckout={handleCheckout} />
        </>
      )}
    </Box>
  );
};

export default Carrito;
