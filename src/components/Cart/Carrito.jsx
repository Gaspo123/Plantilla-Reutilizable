// src/components/Cart/Carrito.jsx
import React from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, Box } from "@mui/material";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

const Carrito = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h4" align="center" gutterBottom>
        🛒 Tu carrito de compras
      </Typography>

      {cart.length === 0 ? (
        <Typography variant="h6" align="center">
          El carrito está vacío.
        </Typography>
      ) : (
        <>
          <Grid container spacing={4}>
            {cart.map((prod, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
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
