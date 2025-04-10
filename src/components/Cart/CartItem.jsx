// src/components/Cart/CartItem.jsx
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const CartItem = ({ prod, removeFromCart }) => {
  return (
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
  );
};

export default CartItem;
