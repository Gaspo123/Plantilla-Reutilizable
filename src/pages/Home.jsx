import React from "react";
import { useCart } from "../context/CartContext";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import "../styles/global.css";
import { CartButton } from "../components/ui/Buttons.jsx";
import Banner from "../components/ui/Banner.jsx"; // ✅ Importamos el banner

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
    <div className="central-container">
      <Banner /> {/* ✅ Mostramos la imagen/banner superior */}
      <Typography variant="h4" align="center" gutterBottom sx={{ mt: 4 }}>
        🛍️ Bienvenido a nuestra tienda
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
        {productos.map((prod) => (
          <Grid item key={prod.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                maxWidth: 345,
                borderRadius: 4,
                boxShadow: 3,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={prod.imagen}
                alt={prod.nombre}
                sx={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
              />
              <CardContent
                sx={{
                  backgroundColor: "#f9f9f9",
                  textAlign: "center",
                  p: 2,
                }}
              >
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {prod.nombre}
                </Typography>
                <Typography
                  variant="h6"
                  color="primary"
                  sx={{ fontWeight: "bold", mb: 2 }}
                >
                  ${prod.precio}
                </Typography>
                <CartButton onClick={() => addToCart(prod)} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
