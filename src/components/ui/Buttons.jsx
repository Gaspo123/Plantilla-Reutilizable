// src/components/ui/Buttons.jsx
import React from "react";
import { Button } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

export const PrimaryButton = ({ children, ...props }) => (
  <Button
    variant="contained"
    sx={{
      background: "linear-gradient(135deg, #92c7cf, #aad7d9)",
      color: "#fff",
      borderRadius: "12px",
      padding: "0.6rem 1.2rem",
      textTransform: "none",
      fontWeight: "bold",
      transition: "all 0.3s ease",
      "&:hover": {
        background: "linear-gradient(135deg, #79b4b7, #a5dee5)",
      },
    }}
    {...props}
  >
    {children}
  </Button>
);

export const CartButton = ({ onClick }) => (
  <PrimaryButton onClick={onClick} startIcon={<ShoppingCart />}>
    Agregar al carrito
  </PrimaryButton>
);
