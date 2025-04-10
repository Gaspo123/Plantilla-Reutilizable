import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Banner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: 200, sm: 300, md: 400 },
        backgroundImage: `url("/images/banner.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: 4,
        boxShadow: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        color: "#fff",
        textAlign: "center",
      }}
    >
      {/* Capa oscura para contraste */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.5)",
          top: 0,
          left: 0,
        }}
      />

      {/* Contenido del banner */}
      <Box sx={{ position: "relative", zIndex: 2, p: 3 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
          Bienvenido a nuestra tienda
        </Typography>
        <Typography variant="h6" sx={{ mb: 3 }}>
          ¡Explorá lo último en moda urbana!
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{ fontWeight: "bold", px: 4, py: 1.5, borderRadius: 8 }}
          href="#productos"
        >
          Ver productos
        </Button>
      </Box>
    </Box>
  );
};

export default Banner;
