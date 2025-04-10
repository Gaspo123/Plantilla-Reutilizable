// src/pages/Dashboard.jsx
import React from "react";
import { Container, Typography, Paper, Box, Divider } from "@mui/material";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom>
          ¡Bienvenido al Dashboard!
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ mt: 2 }}>
          <Typography variant="h6">Información del usuario:</Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            <strong>Email:</strong> {user?.email}
          </Typography>
        </Box>

        {/* Aquí podrías agregar más información, como compras, configuraciones, etc. */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="body2" color="text.secondary">
            Desde aquí podrás gestionar tu perfil, ver tu historial, y más.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Dashboard;
