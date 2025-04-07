import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const Gracias = () => {
  const { state } = useLocation();
  const ticket = state?.ticket || "N/A";

  return (
    <Box sx={{ textAlign: "center", mt: 10 }}>
      <Typography variant="h4" gutterBottom>
        🎉 ¡Gracias por tu compra!
      </Typography>
      <Typography variant="h6" gutterBottom>
        Tu código de seguimiento es:
      </Typography>
      <Typography
        variant="h5"
        sx={{
          background: "#1976d2",
          color: "#fff",
          display: "inline-block",
          padding: "0.5rem 1rem",
          borderRadius: "8px",
          mb: 4,
        }}
      >
        {ticket}
      </Typography>
      <br />
      <Button variant="contained" component={Link} to="/">
        Volver al inicio
      </Button>
    </Box>
  );
};

export default Gracias;
