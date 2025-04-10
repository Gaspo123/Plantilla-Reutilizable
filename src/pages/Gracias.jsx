// src/pages/Gracias.jsx
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Box, Typography, Button, Paper } from "@mui/material";

const Gracias = () => {
  const location = useLocation();
  const { ticket } = location.state || {};

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 8 }}>
      <Paper elevation={4} sx={{ p: 5, textAlign: "center", borderRadius: 4 }}>
        <Typography variant="h4" gutterBottom>
          🎉 ¡Gracias por tu compra!
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Tu código de ticket es: <strong>{ticket?.id}</strong>
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          En breve recibirás un correo a{" "}
          <strong>{ticket?.comprador?.email}</strong> con el resumen de tu
          compra.
        </Typography>

        <Button
          component={Link}
          to="/"
          variant="contained"
          color="primary"
          sx={{ mt: 4 }}
        >
          Volver al inicio
        </Button>
      </Paper>
    </Box>
  );
};

export default Gracias;
