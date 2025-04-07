import React from "react";
import { useCart } from "../context/CartContext";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Box,
} from "@mui/material";

// 🧪 Productos simulados
const productos = [
  {
    id: 1,
    nombre: "Camiseta Básica",
    precio: 25,
    imagen: "/images/camiseta.jpg",
  },
  {
    id: 2,
    nombre: "Gorra Urbana",
    precio: 15,
    imagen: "/images/gorra.jpg",
  },
  {
    id: 3,
    nombre: "Pantalón Deportivo",
    precio: 40,
    imagen: "/images/pantalon.jpg",
  },
];

const Home = () => {
  const { addToCart } = useCart();

  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Bienvenido a nuestra tienda
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {productos.map((prod) => (
          <Grid item key={prod.id} xs={12} sm={6} md={4}>
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
                  ${prod.precio}
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                  onClick={() => addToCart(prod)}
                >
                  Agregar al carrito
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
