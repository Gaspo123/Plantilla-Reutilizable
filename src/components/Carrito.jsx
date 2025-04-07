import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Box,
  Divider,
} from "@mui/material";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Carrito = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

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
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={prod.imagen}
                    alt={prod.nombre}
                  />
                  <CardContent>
                    <Typography variant="h6">{prod.nombre}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Precio unitario: ${prod.precio}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Cantidad: {prod.cantidad}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ mt: 1 }}>
                      Subtotal: ${prod.precio * prod.cantidad}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="error"
                      fullWidth
                      sx={{ marginTop: "1rem" }}
                      onClick={() => removeFromCart(prod.id)}
                    >
                      Quitar uno
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 4 }} />

          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h5">Total: ${total}</Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={() => navigate("/checkout")}
            >
              Finalizar Compra
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Carrito;
