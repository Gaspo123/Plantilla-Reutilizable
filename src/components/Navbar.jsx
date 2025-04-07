import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
  Box,
} from "@mui/material";
import { ShoppingCart, Login, ReceiptLong } from "@mui/icons-material"; // ✅ ícono nuevo
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <AppBar position="static" color="primary" elevation={2}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ textDecoration: "none", color: "inherit", fontWeight: "bold" }}
        >
          MiTienda
        </Typography>

        {/* Links de navegación */}
        <Box sx={{ display: "flex", gap: 3, letterSpacing: 1 }}>
          <Button component={Link} to="/" color="inherit">
            INICIO
          </Button>
          <Button component={Link} to="/productos" color="inherit">
            PRODUCTOS
          </Button>
          <Button component={Link} to="/contacto" color="inherit">
            CONTACTO
          </Button>
          <Button
            component={Link}
            to="/historial"
            color="inherit"
            startIcon={<ReceiptLong />} // ✅ ícono agregado
          >
            HISTORIAL
          </Button>
        </Box>

        {/* Login y carrito */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton component={Link} to="/login" color="inherit">
            <Login />
          </IconButton>
          <IconButton component={Link} to="/carrito" color="inherit">
            <Badge badgeContent={cart.length} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
